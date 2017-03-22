import express from 'express';
import bodyParser from 'body-parser';
import { graphql } from 'graphql';
import expressGraph from 'express-graphql';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { PubSub, SubscriptionManager } from 'graphql-subscriptions';
import { startSubscriptionServer } from './subscription';

import redis from 'redis';
import { neoConnection } from './db';
import schema from './graphql';
import { Pi } from './utils';

const pubsub = new PubSub();
const subscriptionManager = new SubscriptionManager({
	schema,
	pubsub,
});

startSubscriptionServer(subscriptionManager);

const router = express.Router(),
	redisClient = redis.createClient();

redisClient.on("error", function (err) {
	console.log("Error " + err);
});

redisClient.on("connect", function () {
	console.log("Redis connection is ready!!");
});

router.get('/ping', function (req, res) {
	const counter = redisClient.get("counter", (err, result) => {
		const responseMarkup = `Hello, this is api ${result}!!`;
		redisClient.set("counter", err ? "0" : parseInt(result) + 1);

		res.send(responseMarkup);
	});
});

router.use('/api', bodyParser.json(), graphqlExpress({
	schema,
	rootValue: {},
}));

router.use('/graphiql', graphiqlExpress({
	endpointURL: '/api',
}));

router.get('*', function (req, res) {
	const payload = {
		id: '1',
		content: 'Hello!',
	};
	pubsub.publish('counterIncrease', payload);

	const session = neoConnection.session()
		.run(`
			START n=NODE(59) 
			MATCH (account:Account)-[r:REGISTER]->(:JobRequest) 
			RETURN account, r`)
		.then(result => {
			res.json(result);
			session.close();
		})
		.catch(error => res.send(error));
});

module.exports = router;

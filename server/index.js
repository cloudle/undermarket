import express from 'express';
import redis from 'redis';
import { graphql } from 'graphql';
import expressGraph from 'express-graphql';

import schema from './graphql';
import { Pi } from './utils';

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

router.use('/api', expressGraph({
	schema,
	rootValue: {},
	graphiql: true,
}));

module.exports = router;
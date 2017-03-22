import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
const WS_PORT = 5000;

export function startSubscriptionServer (subscriptionManager) {
	const websocketServer = createServer((request, response) => {
		response.writeHead(404);
		response.end();
	});

	websocketServer.listen(WS_PORT, () => console.log(
		`Websocket Server is now running on http://localhost:${WS_PORT}`
	));

	return new SubscriptionServer({
		subscriptionManager,
	}, {
		server: websocketServer
	});
}
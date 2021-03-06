import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Button } from 'react-universal-ui';
import 'react-image-gallery/styles/css/image-gallery.css';

import Routes from './routes';
import { colors } from './utils';
import * as appActions from 'store/action/app';

export default function AppContainer ({store}) {
	return <Provider store={store}>
		<App/>
	</Provider>
}

@connect(({app}) => {
	return {
		counter: app.counter,
	}
})

export class App extends Component {
	render() {
		return <View style={styles.container}>
			<Routes/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	counterButton: {
		backgroundColor: '#00bcd4',
		width: 120, marginTop: 10,
	}
});

import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import gql from 'graphql-tag';

const wsClient = new SubscriptionClient('ws://localhost:5000/', {
	reconnect: true,
	connectionParams: {
		// Pass any arguments you want for initialization
	}
});

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:2017/api',
	opts: {
		credentials: 'same-origin',
	},
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
	networkInterface,
	wsClient,
);

const apolloClient = new ApolloClient({
	networkInterface: networkInterfaceWithSubscriptions,
});

apolloClient
	.subscribe({ query: gql`
		subscription onCounterIncrease {
			counterIncrease
		}
	`})
	.subscribe({
		next (data) {
			console.log(data);
		},
		error (err) {
			console.log(err);
		}
	});
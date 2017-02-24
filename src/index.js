import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';

import { Button } from 'react-universal-ui';
import Routes from './routes';
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
		justifyContent: 'center',
		alignItems: 'center',
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
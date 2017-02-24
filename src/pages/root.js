import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Route } from 'react-router';

import Welcome from './welcome';
import About from './about';

export default class RootLayout extends Component {
	render () {
		return <View>
			<Text>I'm layout!</Text>
			<Route path="/about" component={About}/>
			<Route component={Welcome}/>
		</View>
	}
}
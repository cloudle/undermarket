import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Route } from 'react-router';

import Navigator from '../components/navigator';
import ContentContainer from '../components/contentContainer';
import SearchBar from '../sidebars/search';
import Welcome from './welcome';
import About from './about';

export default class RootLayout extends Component {
	render () {
		return <View style={styles.container}>
			<View style={styles.mainArea}>
				<Navigator/>
				<ContentContainer>
					<Route path="/about" component={About}/>
					<Route component={Welcome}/>
				</ContentContainer>
			</View>
			<SearchBar/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'row',
	},
	mainArea: {
		flex: 1,
	}
});
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-universal-ui';

import { sizes} from '../../utils';

export default class SearchBar extends Component {
	render () {
		return <View style={styles.container}>
			<View style={styles.headingArea}>
				<Input floatingLabel="Search for task"/>
			</View>
			<View style={styles.mainArea}>

			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		width: sizes.rightPaneSize,
	},
	headingArea: {
		height: sizes.navigationHeight,
		borderLeftWidth: 1, borderBottomWidth: 1,
		borderColor: '#EAEAEA',
	},
	mainArea: {
		flex: 1,
	}
});
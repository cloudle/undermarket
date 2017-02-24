import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Burger from './burger';
import Menu from './menu';
import { colors, sizes } from '../../utils';

@connect(({app}) => {
	return {
		colors: app.colors,
	}
})

export default class Navigator extends Component {
	render () {
		return <View style={styles.container}>
			<Burger backgroundColor={colors.main}/>
			<Menu underLineColor={colors.main}/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: sizes.navigationHeight,
	}
});
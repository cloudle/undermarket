import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MenuItem from './menuItem';

export default class Menu extends Component {
	render () {
		return <View style={styles.container}>
			{this.renderMenus()}
		</View>
	}

	renderMenus () {
		return menuItems.map((item, i) => {
			return <MenuItem
				key={i} {...item}
				underLineColor={this.props.underLineColor}/>
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, flexDirection: 'row',
		marginLeft: 32,
	}
});

const menuItems = [{
	title: 'All',
}, {
	title: 'Recent',
	active: true,
}, {
	title: 'Assigned to me',
}, {
	title: 'Pending',
}, ];
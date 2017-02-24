import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const activeLineSize = 4;

export default function MenuItem ({title, active, underLineColor}) {
	const activeStyle = active ? {
		marginTop: activeLineSize,
		borderBottomWidth: activeLineSize,
		borderBottomColor: underLineColor,
	} : {};

	return <TouchableOpacity
		style={styles.container}>
		<View style={[styles.inner, activeStyle]}>
			<Text style={styles.title}>{title}</Text>
		</View>
	</TouchableOpacity>
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 18, paddingRight: 18,
	},
	inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: '#666666',
		fontSize: 12,
	}
});
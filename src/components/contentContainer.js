import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ContentContainer extends Component {
  render () {
    return <View style={styles.container}>
      {this.props.children}
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
	  backgroundColor: '#ffffff',
	  shadowColor: '#888888', shadowOpacity: 0.25,
	  shadowOffset: { width: 2, height: -2 },
	  shadowRadius: 12,
  }
});
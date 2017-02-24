import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ResponsibleTouchArea } from 'react-universal-ui';

import Icon from 'react-native-vector-icons/FontAwesome';
import tinyColor from 'tinycolor2';
import { sizes } from '../../utils';

export default class Burger extends Component {
	propTypes = {
		backgroundColor: React.PropTypes.string,
	};

  render () {
  	const { backgroundColor,  } = this.props,
	    containerStyles = { backgroundColor },
	    backgroundCircleStyles = {
  		  backgroundColor: tinyColor(backgroundColor).darken(8).toRgbString(),
	    };

    return <View style={[styles.container, containerStyles]}>
      <View style={styles.burgerWrapper}>
	      <View style={[styles.backgroundCircle, backgroundCircleStyles]}/>
	      <ResponsibleTouchArea
		      staticRipple={true}
		      wrapperStyle={styles.burgerIconWrapper}
	        innerStyle={styles.burgerIconInner}>
		      <Icon name="bars" color="#ffffff" size={18}/>
	      </ResponsibleTouchArea>
      </View>
	    <View style={styles.titleWrapper}>
		    <Text style={styles.title}>Translation in progress</Text>
	    </View>
    </View>
  }
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: sizes.leftPaneSize,
	},
	burgerWrapper: {
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
		// overflow: 'hidden',
	},
	backgroundCircle: {
		width: 120, height: 120,
		borderRadius: 75,
		position: 'absolute',
		top: -30, left: -50,
	},
	burgerIconWrapper: {
		position: 'absolute',
		top: 0, left: 0, right: 15, bottom: 0,
	},
	burgerIconInner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleWrapper: {
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		color: '#ffffff',
		fontSize: 15,
		textAlign: 'center',
	}
});
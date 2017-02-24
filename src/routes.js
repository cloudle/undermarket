import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Router, Route } from 'react-router';
import { history } from './store';

import Root from './pages/root';

@connect(({app}) => {
	return {
		counter: app.counter,
	}
})

export default class Routes extends Component {
	render () {
		return <Router history={history}>
			<Route path="/" component={Root}/>
		</Router>
	}
}

function onRouterChange (location, action) {
	this.props.dispatch({
		type: routerActions.BrowserRouterNavigate,
		action: action === 'SYNC' ? this.props.action : action,
		location,
	});
}
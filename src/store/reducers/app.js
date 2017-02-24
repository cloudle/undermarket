import { createBrowserHistory, createMemoryHistory } from 'history';
import { utils } from 'react-universal-ui';
import { colors } from '../../utils';

import * as Actions from '../actions';
export const history = utils.isBrowser
	? createBrowserHistory()
	: createMemoryHistory();

const initialState = {
	browserHistory: history,
	routeParams: {},
  counter: 0,
	colors,
};

export default utils.appReducer((state = initialState, action) => {
	switch (action.type) {
		case Actions.IncreaseCounter:
			return {...state, counter: state.counter + action.volume};
		case Actions.BrowserNavigate:
			return browserNavigate(state, action);
		default:
			return state;
	}
})

function browserNavigate (state, action) {
	history.push(action.path, action.params);

	return { ...state, params: action.params };
}
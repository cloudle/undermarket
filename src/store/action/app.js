import * as Actions from '../actions';

export function increaseCounter (volume = 1) {
	return { type: Actions.IncreaseCounter, volume };
}

export function browserNavigate (path, params = {}) {
	return { type: Actions.BrowserNavigate, path, params };
}
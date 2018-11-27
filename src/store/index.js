import { applyMiddleware, createStore, compose } from 'redux';

import createHistory from 'history/createBrowserHistory'; // eslint-disable-line
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducer';

export const history = createHistory();

const rMiddleware = routerMiddleware(history);

const middleware = [rMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;

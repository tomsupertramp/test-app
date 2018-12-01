import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory'; // eslint-disable-line
import { routerMiddleware } from 'react-router-redux';

import rootSaga from './sagas';
import reducer from './reducer';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const rMiddleware = routerMiddleware(history);

const middleware = [rMiddleware, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  routing: routerReducer,
  // other reducers here...
});

export default appReducer;

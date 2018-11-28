import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

/* Reducers */
import { reducer as servicesReducer } from 'services/ducks';

const appReducer = combineReducers({
  routing: routerReducer,
  services: servicesReducer,
  // other reducers here...
});

export default appReducer;

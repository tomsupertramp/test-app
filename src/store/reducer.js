import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

/* Reducers */
import { reducer as servicesReducer } from 'services/ducks';
import { reducer as searchReducer } from 'views/Search/ducks';

const appReducer = combineReducers({
  routing: routerReducer,
  services: servicesReducer,
  search: searchReducer,
  // other reducers here...
});

export default appReducer;

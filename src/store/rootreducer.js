import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
});

export default rootReducer;
import { createStore, applyMiddleware } from 'redux';
import { userReducer } from './user/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(userReducer, composeWithDevTools(applyMiddleware()));

export default store;

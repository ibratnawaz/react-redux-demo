import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './user/userReducer';

const reducer = combineReducers({
  form: reduxFormReducer,
  user: userReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';

import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store


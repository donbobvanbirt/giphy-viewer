import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';

import { saveState, loadState } from './localStorage';

let middlewares = [
  logger(),
  thunk,
  promise(),
];

const store = createStore(reducers, loadState(), composeWithDevTools(applyMiddleware(...middlewares)));

store.subscribe(() => {
  saveState(store.getState());
})

export default store;

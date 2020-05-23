import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

export default (reducers, middlewares) => {
  const enhancer = applyMiddleware(...middlewares, logger);

  return createStore(reducers, enhancer);
};

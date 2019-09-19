import todos from './todos';
import Icestore from '@ice/store';
import logger from '@ice/store-logger';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const icestore = new Icestore();
icestore.applyMiddleware(middlewares);
icestore.registerStore('todos', todos);

export default icestore;

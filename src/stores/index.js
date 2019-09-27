import todos from './todos';
import Icestore from '@ice/store';
import logger from '@ice/store-logger';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const icestore = new Icestore();
const stores = {
  todos
};
icestore.applyMiddleware(middlewares);
Object.keys(stores).forEach(key => icestore.registerStore(key, stores[key]));
export default icestore;

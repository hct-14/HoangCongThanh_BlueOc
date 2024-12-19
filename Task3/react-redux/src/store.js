import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Sử dụng named import thay vì default import
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

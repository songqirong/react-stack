import { createStore } from 'redux';
import reduces from './reduces';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { countSaga } from './reduces/home/saga';
const sagaMiddleware = createSagaMiddleware();

export default createStore(reduces, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(countSaga);
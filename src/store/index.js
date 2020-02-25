import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
// 增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(
    reducer,
    enhancers
    // applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(mySaga);

export default store;
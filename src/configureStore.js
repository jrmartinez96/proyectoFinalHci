/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    configureStore.js
==========================================
*/
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers';
import mainSaga from './sagas';

// SAGA
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = compose(
    applyMiddleware(sagaMiddleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// PERSIST REDUCER
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user'],
}

const persistedReducer = persistReducer(persistConfig, reducer)


// CONFIGURE STORE
const configureStore = () => {

    // STORE
    const store = createStore(
        persistedReducer,
        composeEnhancer,
    )

    // Saga
    sagaMiddleware.run(mainSaga)

    // Persist Store
    const persistor = persistStore(store);

    return {store, persistor};
}

export default configureStore;

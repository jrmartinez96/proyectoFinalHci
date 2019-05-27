import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";

import configureStore from './configureStore';
import Root from './views/Root';

const configStore = configureStore();
const { store, persistor } = configStore;
export const persistora = persistor;

ReactDOM.render(
    <Root store={store} persistor={persistor} />, 
    document.getElementById('root')
);


serviceWorker.unregister();

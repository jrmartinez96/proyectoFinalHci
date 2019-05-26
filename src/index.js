import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import configureStore from './configureStore';
import Root from './views/Root';

const configStore = configureStore();
const { store, persistor } = configStore;

ReactDOM.render(
    <Root store={store} persistor={persistor} />, 
    document.getElementById('root')
);


serviceWorker.unregister();

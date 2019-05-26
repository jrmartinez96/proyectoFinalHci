/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    Root.js
==========================================
*/

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

class Root extends React.Component {
    
    render(){
        const { store, persistor } = this.props;
        return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        )
    }
}

export default Root;
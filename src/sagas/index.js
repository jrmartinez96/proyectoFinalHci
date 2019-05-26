/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    sagas/index.js
==========================================
*/

import { all, fork } from 'redux-saga/effects';
import { watchUser } from './user';

function* mainSaga(){
    yield all([
        fork(watchUser),
    ]);
}

export default mainSaga;

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
import { watchRedirect } from './redirect';

function* mainSaga(){
    yield all([
        fork(watchUser),
        fork(watchRedirect),
    ]);
}

export default mainSaga;

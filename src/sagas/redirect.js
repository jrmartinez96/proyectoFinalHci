/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    redirect.js
==========================================
*/

import { put, takeEvery} from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';

function* redirectTo(action){
    const { path } = action.payload;
    yield console.log("Redirecting to: ", path);
    yield put(actions.pathRedirected(path));
}

function* finishRedirecting(action){
    yield put(actions.finishRedirected());
}

/*---------------------------------
            WATCH REDIRECT
-----------------------------------*/
export function* watchRedirect(){
    yield takeEvery(
        types.PATH_REDIRECTING,
        redirectTo
    );

    yield takeEvery(
        types.FINISH_REDIRECTING,
        finishRedirecting
    )
}
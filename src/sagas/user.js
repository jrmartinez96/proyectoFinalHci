/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    sagas/user.js
==========================================
*/

import { put, takeEvery } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';
import { persistora } from '../index'

/*---------------------------------
                LOG IN
-----------------------------------*/
function* logInUser(action){
    const { user } = action.payload;

    yield put(actions.userLoggedIn(user))
    persistora.flush()
}

/*---------------------------------
                LOG IN
-----------------------------------*/
function* logOutUser(action){
    
    yield console.log("User loggin out");

    yield put(actions.userLoggedOut());
    persistora.flush()
}

/*---------------------------------
            WATCH USER
-----------------------------------*/
export function* watchUser(){
    yield takeEvery(
        types.USER_LOGGIN_IN,
        logInUser
    )

    yield takeEvery(
        types.USER_LOGGIN_OUT,
        logOutUser
    )
}
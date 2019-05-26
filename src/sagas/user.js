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
import { func } from 'prop-types';

/*---------------------------------
                LOG IN
-----------------------------------*/
function* logInUser(action){
    const { username, password } = action.payload;

    // TODO: API CALL
    yield console.log("Username: ", username, "\nPassword: ", password)

    yield put(actions.userLoggedIn({username, password}))
}

/*---------------------------------
                LOG IN
-----------------------------------*/
function* logOutUser(action){
    
    yield console.log("User loggin out");

    yield put(actions.userLoggedOut());
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
/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    actions/index.js
==========================================
*/

import * as types from '../types';

/*===========================================================
                        STATE ACTIONS
=============================================================*/

/** 
 * !----------------------------------
 *                USER
 * !----------------------------------
 */
export const userLoggedIn = (user) => (
    {
        type: types.USER_LOGGED_IN,
        payload: {
            user,
        }
    }
)

export const userLoggedOut = () => (
    {
        type: types.USER_LOGGED_OUT,
        payload: {}
    }
)

/*===========================================================
                        SAGA ACTIONS
=============================================================*/

/** 
 * !----------------------------------
 *                USER
 * !----------------------------------
 */
export const userLogginIn = (username, password) => (
    {
        type: types.USER_LOGGIN_IN,
        payload: { 
            username,
            password,
        }
    }
)

export const userLogginOut = () => (
    {
        type: types.USER_LOGGIN_OUT,
        payload: {}
    }
)
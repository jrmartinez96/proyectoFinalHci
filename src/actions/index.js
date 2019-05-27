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
 *                REDIRECTING
 * !----------------------------------
 */

export const pathRedirected = (path) => (
    {
        type: types.PATH_REDIRECTED,
        payload:{
            path,
        }
    }
)

export const finishRedirected = () => (
    {
        type: types.FINISH_REDIRECTED,
        payload: {}
    }
)

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
 *                REDIRECTING
 * !----------------------------------
 */
export const pathRedirecting = ( path ) => (
    {
        type: types.PATH_REDIRECTING,
        payload:{
            path,
        }
    }
)

export const finishRedirecting = () => (
    {
        type: types.FINISH_REDIRECTING,
        payload: {}
    }
)

/** 
 * !----------------------------------
 *                USER
 * !----------------------------------
 */
export const userLogginIn = (user) => (
    {
        type: types.USER_LOGGIN_IN,
        payload: { 
            user
        }
    }
)

export const userLogginOut = () => (
    {
        type: types.USER_LOGGIN_OUT,
        payload: {}
    }
)
/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    reducers/index.js
==========================================
*/

import { combineReducers } from 'redux';

// import reducers
import redirect from './redirect';
import user from './user';

// import seletors 
import * as fromRedirect from './redirect';
import * as fromUser from './user';


/* REDUCERS */
const reducer = combineReducers({
    redirect,
    user,
});

export default reducer;


/* SELECTORS */

// Redirect
    export const getRedirectPath = (state) => fromRedirect.getRedirectPath(state.redirect);
    export const getRedirectState = (state) => fromRedirect.getRedirectState(state.redirect);

    // User
export const getIsLoggedIn = (state) => fromUser.getIsLoggedIn(state.user);
export const getCurrentUser = (state) => fromUser.getCurrentUser(state.user);
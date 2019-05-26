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
import user from './user';

// import seletors 
import * as fromUser from './user';


/* REDUCERS */
const reducer = combineReducers({
    user,
});

export default reducer;


/* SELECTORS */

    // User
export const getIsLoggedIn = (state) => fromUser.getIsLoggedIn(state.user);
export const getCurrentUser = (state) => fromUser.getCurrentUser(state.user);
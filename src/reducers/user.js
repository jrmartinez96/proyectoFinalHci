/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    reducers/user.js
==========================================
*/

import { combineReducers } from 'redux';
import * as types from '../types';

/* REDUCERS */

const currentUser = (state={}, action) => {
    switch (action.type) {
        case types.USER_LOGGED_IN:{
            const { user } = action.payload;
            return user;
        }
    
        default:
            return state;
    }
}

const isLoggedIn = (state=false, action) =>{
    switch (action.type) {
        case types.USER_LOGGED_IN:{
            return true;
        }

        case types.USER_LOGGED_OUT:{
            return false;
        }
    
        default:
            return state;
    }
}

const user = combineReducers({
    currentUser,
    isLoggedIn
});

export default user;


/* SELECTORS */
export const getIsLoggedIn = (state) => state.isLoggedIn;
export const getCurrentUser = (state) => state.currentUser;
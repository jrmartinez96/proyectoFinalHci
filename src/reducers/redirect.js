/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    redirect.js
==========================================
*/

import * as types from '../types';
import { combineReducers } from 'redux';

const path = (state="", action) => {
    switch (action.type) {
        case types.PATH_REDIRECTED:{
            const { path } = action.payload;

            return path;
        }
    
        default:
            return state;
    }
}

const redirectState = (state=false, action) => {
    switch (action.type) {
        case types.PATH_REDIRECTED:
            
            return true;
        
        case types.FINISH_REDIRECTED:
            return false;
    
        default:
            return state;
    }
}

export default combineReducers({
    path,
    redirectState,
});


/* SELECTORS */
export const getRedirectPath = (state) => state.path;
export const getRedirectState = (state) => state.redirectState;
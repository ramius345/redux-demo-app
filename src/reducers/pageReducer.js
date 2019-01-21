import React from 'react';
import MainPage from '../components/MainPage';
import * as ac from '../actions/actionConstants.js';

export const pageReducer = ( state = { currentPage: <MainPage/> }, action ) => {
    switch ( action.type ) {
    case ac.SET_PAGE:
        return Object.assign( {}, state, {currentPage: action.newPage});
    default:
        return state;
    }
}

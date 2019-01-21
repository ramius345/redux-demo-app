import React from 'react';
import * as ac from '../actions/actionConstants.js';

export const listReducer = ( state = { list: [] }, action ) => {
    switch ( action.type ) {
    case ac.ADD_TO_LIST:
	let newList = state.list.slice(0);
	newList.push(action.newEntry);
        return Object.assign( {}, state, {list: newList});
    default:
        return state;
    };
};

import * as ac from '../actions/actionConstants.js';

export const setPage = (pageComponent) => ({ type: ac.SET_PAGE, newPage: pageComponent});

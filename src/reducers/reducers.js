import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { listReducer } from './listReducer';
import { example1 } from './example1';

export default combineReducers({
    pageReducer,
    listReducer,
    example1
});

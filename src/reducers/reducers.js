import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { example1 } from './example1';

export default combineReducers({
    pageReducer,
    example1
});

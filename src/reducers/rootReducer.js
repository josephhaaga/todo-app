import { combineReducers } from 'redux';
import todo from './todoReducer';
import event from './eventReducer';

const rootReducer = combineReducers({
    todo,
    event
});

export default rootReducer;
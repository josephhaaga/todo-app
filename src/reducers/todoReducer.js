import initialState from './initialState';
import { FETCH_TODOS, RECEIVE_TODOS } from '../actions/actionTypes';

export default function todo(state = initialState.todos, action) {
    let newState;
    switch(action.type) {
        case FETCH_TODOS:
            console.log("FETCH_TODOS action")
            return action;
        case RECEIVE_TODOS:
            newState = action.todos;
            console.log("RECEIVE_TODOS action");
            return newState;
        default:
            return state;
    }
}

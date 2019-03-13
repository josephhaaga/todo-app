import initialState from './initialState';
import { FETCH_TODOS, RECEIVE_TODOS, CLEAR_TODOS } from '../actions/actionTypes';

export default function todo(state = initialState.todos, action) {
    let newState;
    switch(action.type) {
        case FETCH_TODOS:
            console.log("FETCH_TODOS action")
            return action;
        case RECEIVE_TODOS:
            console.log("RECEIVE_TODOS action");
            // newState.todos = action.todos
            return action.todos;
        case CLEAR_TODOS:
            newState = []
            console.log("CLEAR_TODOS action");
            return newState;
        default:
            return state;
    }
}

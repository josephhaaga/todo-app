import initialState from './initialState';
import { FETCH_EVENTS, RECEIVE_EVENTS, CLEAR_EVENTS } from '../actions/actionTypes';

export default function event(state = initialState.events, action) {
    let newState;
    switch (action.type) {
        case FETCH_EVENTS:
            console.log("FETCH_EVENTS action")
            return action;
        case RECEIVE_EVENTS:
            // newState = Object.assign({}, state, action.events);
            // console.log("RECEIVE_EVENTS action");
            // return newState;
            return action.events
        case CLEAR_EVENTS:
            newState = []
            console.log("CLEAR_EVENTS action");
            return newState;
        default:
            return state;
    }
}

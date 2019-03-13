import * as types from './actionTypes';

function url() {
    return 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2018/09';
}

export function receiveEvents(json) {
    return { type: types.RECEIVE_EVENTS, events: json };
}

export function fetchEvents() {
    return dispatch => {
        return fetch(url(), {
            method: 'GET',
            mode: 'cors',
        })
            .then(x => x.json())
            .then(x => { console.log(x); return x })
            .then(x => dispatch(receiveEvents(x)))
    }
}

export function clearEvents() {
    return { type: types.CLEAR_EVENTS }
}
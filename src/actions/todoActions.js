import * as types from './actionTypes';

function url() {
    return 'https://jsonplaceholder.typicode.com/todos';
}

export function receiveTodos(json) {
    return { type: types.RECEIVE_TODOS, todos: json };
}

export function fetchTodos() {
    return dispatch => {
        return fetch(url(), {
            method: 'GET',
            mode: 'cors',
        })
        .then(x => x.json())
        .then(x => {console.log(x); return x})
        .then(x => dispatch(receiveTodos(x)))
    }
}

export function clearTodos() {
    return { type: types.CLEAR_TODOS }
}
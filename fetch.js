const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// constants declaration
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

const API_URL = "https://jsonplaceholder.typicode.com/todo";

// state
const initialTodos = {
    todos: [],
    isLoading: false,
    error: null
}

// action
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}

// reducer
const todosReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

// fetch data
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
            .then(res => {
                const todos = res.data;
                const titles = todos.map(todo => todo.title);
                dispatch(getTodosSuccess(titles));
            })
            .catch((error) => {
                const message = error.message;
                dispatch(getTodosFailed(message));
                console.log(message)
            })
    }
}

// store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData());
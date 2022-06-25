// Steps of redux
/**
 * State
 * Dispatch action (type, payload)
 * Reducer
 * Store (getState(), dispatch(), subscribe())
 * */

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// initial state
const initialCouterState = {
    count: 0
}

const initialUserState = [
    { name: "Arif" }
]

// action
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const addUser = () => {
    return {
        type: "ADD_USER",
        payload: { name: "Binu" }
    }
}

// Reducer
const counterReducer = (state = initialCouterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            state;
    }
}

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

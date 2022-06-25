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
const RESET = "RESET";

// initial state
const initialCouterState = {
    count: 0
}

const initialUserState = [
    { name: "Arif" }
]

// action
const incrementCounter = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
const resetCounter = () => {
    return {
        type: RESET
    }
}



// Reducer
const counterReducer = (state = initialCouterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }

        default:
            return state;
    }
}

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));
store.dispatch(resetCounter());
store.dispatch(decrementCounter());

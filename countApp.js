// Steps for redux
/**
 * Initial State
 * Despatch action (type, payload)
 * Reducer
 * Store (getState(), subscribe(), dispatch());
 * */
const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";


const counterInitial = {
    count: 0
}

const incrementCount = () => {
    return {
        type: INCREMENT
    }
}

const decrementCount = () => {
    return {
        type: DECREMENT
    }
}

const resetCount = () => {
    return {
        type: RESET
    }
}

const reducerCount = (state = counterInitial, action) => {
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
        case RESET:
            return {
                ...state,
                count: 0
            }


        default:
            state;
    }
}

const store = createStore(reducerCount);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(resetCount());
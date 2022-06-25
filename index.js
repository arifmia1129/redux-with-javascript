// Steps of redux
/**
 * State
 * Dispatch action
 * Reducer
 * Store
 * */

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

const decrementCouter = () => {
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

const counterReducer = (state, action) => {
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
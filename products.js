const { createStore, combineReducers } = require("redux");

// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// Card constants
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// products state initial
const initialProducts = {
    products: ["laptop", "phone"],
    productCount: 2
}
// cart state initial
const initialCart = {
    products: ["laptop"],
    productCount: 1
}

// action for products
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
// action for cart
const getCart = () => {
    return {
        type: GET_CART
    }
}

const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}

// reducer for products
const productsReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                productCount: state.productCount + 1
            };

        default:
            return state;
    }
}
// reducer for cart
const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            };
        case ADD_CART:
            return {
                products: [...state.products, action.payload],
                productCount: state.productCount + 1
            };

        default:
            return state;
    }
}

// store 
const rootReducer = combineReducers({
    pReducer: productsReducer,
    cReducer: cartReducer
})


const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct("smart-watch"));
store.dispatch(addProduct("television"));
store.dispatch(getCart());
store.dispatch(addCart("smart-watch"));
store.dispatch(addCart("television"));
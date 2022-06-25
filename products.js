const { createStore } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const initialProducts = {
    products: ["laptop", "phone"],
    productCount: 2
}

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
            state;
    }
}

const store = createStore(productsReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct("smart-watch"));
store.dispatch(addProduct("television"));
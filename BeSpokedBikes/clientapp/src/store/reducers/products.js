import {
    REQ_PRODUCTS,
    REC_PRODUCTS,
    ERROR
} from '../actions/products';

export const INITIAL_STATE = {
    products: [],
    error: null
};

export const products = (state = INITIAL_STATE, action) => {
    let error;
    switch(action.type) {
        case REQ_PRODUCTS:
            return {
                ...state,
                loading: true
            };
        case REC_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: true
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};
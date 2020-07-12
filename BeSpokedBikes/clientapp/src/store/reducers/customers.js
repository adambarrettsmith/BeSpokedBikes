import {
    REQ_CUSTOMERS,
    REC_CUSTOMERS,
    ERROR
} from '../actions/customers';

export const INITIAL_STATE = {
    customers: [],
    error: null
};

export const customers = (state = INITIAL_STATE, action) => {
    let error;
    switch(action.type) {
        case REQ_CUSTOMERS:
            return {
                ...state,
                loading: true
            };
        case REC_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
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
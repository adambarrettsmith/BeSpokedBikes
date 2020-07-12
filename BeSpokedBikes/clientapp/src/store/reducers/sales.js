import {
    REQ_SALES,
    REC_SALES,
    ERROR
} from '../actions/sales';

export const INITIAL_STATE = {
    sales: [],
    error: null
};

export const sales = (state = INITIAL_STATE, action) => {
    let error;
    switch(action.type) {
        case REQ_SALES:
            return {
                ...state,
                loading: true
            };
        case REC_SALES:
            return {
                ...state,
                sales: action.payload,
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
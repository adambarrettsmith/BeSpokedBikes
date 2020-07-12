import {
    REQ_SALES_PEOPLE,
    REC_SALES_PEOPLE,
    REQ_SALES_PERSON_UPDATE,
    REC_SALES_PERSON_UPDATE,
    ERROR
} from '../actions/salesPeople';

export const INITIAL_STATE = {
    salesPeople: [],
    salesPerson: {},
    error: null
};

export const salesPeople = (state = INITIAL_STATE, action) => {
    let error;
    switch(action.type) {
        case REQ_SALES_PEOPLE:
            return {
                ...state,
                loading: true
            };
        case REC_SALES_PEOPLE:
            return {
                ...state,
                salesPeople: action.payload,
                loading: false
            };
        case REQ_SALES_PERSON_UPDATE:
            return {
                ...state,
                loading: true
            };
        case REC_SALES_PERSON_UPDATE:
            return {
                ...state,
                salesPerson: action.payload,
                loading: false
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
};
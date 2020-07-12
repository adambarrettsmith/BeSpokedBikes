import { getCustomersAsync } from '../../services/CustomerService';

// Action Types
export const REQ_CUSTOMERS = 'REQ_CUSTOMERS';
export const REC_CUSTOMERS = 'REC_CUSTOMERS';
export const ERROR = 'ERROR';

// Actions
export const getCustomers = () => {
    return async dispatch => {
        try {
            dispatch(reqCustomers);
            let customers = await getCustomersAsync();
            dispatch(recCustomers(customers));
        } catch (ex) {
            dispatch(error(ex));
        }
    }
};

// Action Builders
export const reqCustomers = () => ({
    type: REQ_CUSTOMERS
});

export const recCustomers = customers => ({
    type: REC_CUSTOMERS,
    payload: customers
});

export const error = ex => ({
    type: ERROR,
    payload: ex.message
});
import { getSalesPeopleAsync, updateSalesPersonAsync } from '../../services/SalesPeopleService';

// Action Types
export const REQ_SALES_PEOPLE = 'REQ_SALES_PEOPLE';
export const REC_SALES_PEOPLE = 'REC_SALES_PEOPLE';

export const REQ_SALES_PERSON_UPDATE = 'REQ_SALES_PERSON_UPDATE';
export const REC_SALES_PERSON_UPDATE = 'REC_SALES_PERSON_UPDATE';

export const ERROR = 'ERROR';

// Actions
export const getSalesPeople = () => {
    return async dispatch => {
        try {
            dispatch(reqSalesPeople);
            let salesPeople = await getSalesPeopleAsync();
            dispatch(recSalesPeople(salesPeople));
        } catch (ex) {
            dispatch(error(ex));
        }
    }
};

export const updateSalesPerson = () => {
    return async dispatch => {
        try {
            dispatch(reqSalesPersonUpdate);
            let salesPerson = await updateSalesPersonAsync();
            dispatch(recSalesPersonUpdate(salesPerson));
        } catch (ex) {
            dispatch(error(ex));
        }
    }
};

// Action Builders
export const reqSalesPeople = () => ({
    type: REQ_SALES_PEOPLE
});

export const recSalesPeople = salesPeople => ({
    type: REC_SALES_PEOPLE,
    payload: salesPeople
});

export const reqSalesPersonUpdate = () => ({
    type: REQ_SALES_PERSON_UPDATE
});

export const recSalesPersonUpdate = salesPerson => ({
    type: REC_SALES_PERSON_UPDATE,
    payload: salesPerson
});

export const error = ex => ({
    type: ERROR,
    payload: ex.message
});
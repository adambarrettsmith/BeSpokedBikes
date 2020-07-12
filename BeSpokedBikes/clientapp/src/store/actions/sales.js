import { getSalesAsync } from '../../services/SaleService';

// Action Types
export const REQ_SALES = 'REQ_SALES';
export const REC_SALES = 'REC_SALES';
export const ERROR = 'ERROR';

// Actions
export const getSales = () => {
    return async dispatch => {
        try {
            dispatch(reqSales);
            let sales = await getSalesAsync();
            dispatch(recSales(sales));
        } catch (ex) {
            dispatch(error(ex));
        }
    }
};

// Action Builders
export const reqSales = () => ({
    type: REQ_SALES
});

export const recSales = sales => ({
    type: REC_SALES,
    payload: sales
});

export const error = ex => ({
    type: ERROR,
    payload: ex.message
});
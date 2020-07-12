import { getProductsAsync } from '../../services/ProductService';

// Action Types
export const REQ_PRODUCTS = 'REQ_PRODUCTS';
export const REC_PRODUCTS = 'REC_PRODUCTS';
export const ERROR = 'ERROR';

// Actions
export const getProducts = () => {
    return async dispatch => {
        try {
            dispatch(reqProducts);
            let products = await getProductsAsync();
            dispatch(recProducts(products));
        } catch (ex) {
            dispatch(error(ex));
        }
    }
};

// Action Builders
export const reqProducts = () => ({
    type: REQ_PRODUCTS
});

export const recProducts = products => ({
    type: REC_PRODUCTS,
    payload: products
});

export const error = ex => ({
    type: ERROR,
    payload: ex.message
});
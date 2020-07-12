import { combineReducers } from 'redux';

import { products } from '../reducers/products';
import { sales } from '../reducers/sales';
import { customers } from '../reducers/customers';
import { salesPeople } from '../reducers/salesPeople';

const rootReducer = combineReducers({
    products,
    sales,
    customers,
    salesPeople
});

export default rootReducer;
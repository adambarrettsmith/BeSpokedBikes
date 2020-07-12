import { API_ENDPOINT } from '../helpers/Constant';
import axios from 'axios';

const getProductsUrl = `${API_ENDPOINT}/products`;

export const getProductsAsync = async () => {
    const response = await axios(getProductsUrl);
    return response.data;
};
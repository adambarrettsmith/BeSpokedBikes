import { API_ENDPOINT } from '../helpers/Constant';
import axios from 'axios';

const getCustomersUrl = `${API_ENDPOINT}/customers`;

export const getCustomersAsync = async () => {
    const response = await axios(getCustomersUrl);
    return response.data;
};
import { API_ENDPOINT } from '../helpers/Constant';
import axios from 'axios';

const getSalesUrl = `${API_ENDPOINT}/sales`;

export const getSalesAsync = async () => {
    const response = await axios(getSalesUrl);
    return response.data;
};
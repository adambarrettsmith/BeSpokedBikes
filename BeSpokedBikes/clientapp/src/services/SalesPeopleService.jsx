import { API_ENDPOINT } from '../helpers/Constant';
import axios from 'axios';

const getSalesPeopleUrl = `${API_ENDPOINT}/salesPerson`;
const updateSalesPersonUrl = `${API_ENDPOINT}/salesPerson/`

export const getSalesPeopleAsync = async () => {
    const response = await axios(getSalesPeopleUrl);
    return response.data;
};

export const updateSalesPersonAsync = async salesPerson => {
    const response = await axios(updateSalesPersonUrl + salesPerson.id, salesPerson);
    return response.data;
};
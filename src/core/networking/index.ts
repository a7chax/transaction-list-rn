import { BASE_API_URI } from '@env';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_API_URI,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

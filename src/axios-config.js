import axios from 'axios';
import { baseUrl } from './constants/base-url';

const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;
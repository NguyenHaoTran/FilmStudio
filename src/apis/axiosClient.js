import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    // baseURL: 'https://marshall-products.vercel.app/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;

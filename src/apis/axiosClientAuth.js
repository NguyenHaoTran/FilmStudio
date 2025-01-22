import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClientAuth = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClientAuth;

import axiosClient from './axiosClient';

const register = async (body) => {
    console.log(body);
    return await axiosClient.post('/register', body);
};

export { register };

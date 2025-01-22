import axiosClientAuth from './axiosClientAuth';

const register = async (body) => {
    console.log(body);
    return await axiosClientAuth.post('/register', body);
};

const signIn = async (body) => {
    return await axiosClientAuth.post('/login', body);
};

export { register, signIn };

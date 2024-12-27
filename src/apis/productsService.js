import axiosClient from './axiosClient';

const getProducts = async () => {
    const res = await axiosClient.get('./products');

    return res.data;
};

export { getProducts };

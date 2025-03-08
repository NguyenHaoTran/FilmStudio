import { createContext, useEffect, useState } from 'react';
import { getCart } from '../apis/cartService';
import Cookies from 'js-cookie';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const userId = Cookies.get('userId');

    const handleGetListProductsCart = (userId, type) => {
        if (userId && type === 'cart') {
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                })
                .catch((err) => {
                    setListProductCart([]);
                });
        }
    };

    useEffect(() => {
        handleGetListProductsCart(userId, 'cart');
    });

    return (
        <SideBarContext.Provider
            value={{
                isOpen,
                setIsOpen,
                type,
                setType,
                handleGetListProductsCart,
                listProductCart
            }}
        >
            {children}
        </SideBarContext.Provider>
    );
};

// 4p57

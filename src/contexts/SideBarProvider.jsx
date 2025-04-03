import { createContext, useEffect, useState } from 'react';
import { getCart } from '../apis/cartService';
import Cookies from 'js-cookie';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userId = Cookies.get('userId');

    const handleGetListProductsCart = (userId, type) => {
        if (userId && type === 'cart') {
            setIsLoading(true);
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    };

    // useEffect(() => {
    //     handleGetListProductsCart(userId, 'cart');
    // });

    useEffect(() => {
        if (!userId) return;
        handleGetListProductsCart(userId, 'cart');
    }, [userId]);

    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProductsCart,
        listProductCart,
        isLoading,
        setListProductCart,
        setIsLoading
    };

    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};

// 4p57

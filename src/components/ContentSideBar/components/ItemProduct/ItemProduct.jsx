import { deleteItem } from '../../../../apis/cartService';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import LoadingTextCommon from '../../../LoadingTextCommon/LoadingTextCommon';
import styles from './styles.module.scss';
import { useContext, useState } from 'react';

import { IoCloseOutline } from 'react-icons/io5';

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) {
    const {
        container,
        boxContent,
        title,
        price,
        boxClose,
        size,
        overlayLoading
    } = styles;

    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductsCart } = useContext(SideBarContext);

    const handleRemoveitem = () => {
        setIsDelete(true);
        deleteItem({ productId, userId })
            .then((res) => {
                console.log(res);
                setIsDelete(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                console(err);
                setIsDelete(false);
            });
    };

    return (
        <div className={container}>
            <img src={src} alt='' />
            <div className={boxClose} onClick={handleRemoveitem}>
                <IoCloseOutline />
            </div>
            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>Color: {sizeProduct}</div>
                <div className={price}>
                    {quantity} x {priceProduct}
                </div>
                <div className={price}>SKU: {skuProduct}</div>
            </div>
            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
}

export default ItemProduct;

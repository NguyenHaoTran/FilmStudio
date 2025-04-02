import styles from '../../styles.module.scss';
import CartSummary from './CartSummary';
import CartTable from './CartTable';
import Button from '../../../../components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import { addProductToCart } from '@/apis/cartService';

function Contents() {
    const { containerContents, boxFooter, boxCoupon, boxBtnDelete } = styles;
    const { listProductCart, handleGetListProductsCart } =
        useContext(SideBarContext);

    const handleReplaceQuantity = (data) => {
        addProductToCart(data)
            .then((res) => {
                console.log(res);
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className={containerContents}>
            <div>
                <CartTable
                    listProductCart={listProductCart}
                    getData={handleReplaceQuantity}
                />
                <div className={boxFooter}>
                    <div className={boxCoupon}>
                        <input type='text' />
                        <Button content={'OK'} isPrimary={false} />
                    </div>
                    <div className={boxBtnDelete}>
                        <Button
                            content={<div>&#128465; CLEAR SHOPPING CART</div>}
                            isPrimary={false}
                        />
                    </div>
                </div>
            </div>
            <div>
                <CartSummary />
            </div>
        </div>
    );
}

export default Contents;

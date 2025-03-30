import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import cls from 'classnames';
// icons
import { CiShoppingCart } from 'react-icons/ci';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '../../../contexts/SideBarProvider';
import LoadingTextCommon from '../../LoadingTextCommon/LoadingTextCommon';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {
        container,
        btnWL,
        total,
        containerLisProductCart,
        isEmpty,
        overlayLoading,
        boxEmpty,
        textEmpty,
        boxBtnEmpty,
        containerListItem
    } = styles;

    const { listProductCart, isLoading, setIsOpen } =
        useContext(SideBarContext);

    const navigate = useNavigate();

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    return (
        <div
            className={cls(container, {
                [isEmpty]: !listProductCart.length
            })}
        >
            <HeaderSideBar
                icon={<CiShoppingCart style={{ fontSize: '30px' }} />}
                title='CART'
            />
            {listProductCart.length ? (
                <div className={containerListItem}>
                    <div>
                        <div className={containerLisProductCart}>
                            {listProductCart.map((item, index) => {
                                return (
                                    <ItemProduct
                                        key={index}
                                        src={item.images[0]}
                                        nameProduct={item.name}
                                        priceProduct={item.price}
                                        skuProduct={item.sku}
                                        sizeProduct={item.size}
                                        quantity={item.quantity}
                                        productId={item.productId}
                                        userId={item.userId}
                                    />
                                );
                            })}
                            {/* {isLoading && (
                        <div className={overlayLoading}>
                            <LoadingTextCommon />
                        </div>
                    )} */}
                        </div>
                    </div>
                    <div>
                        <div className={total}>
                            <div>SUBTOTAL:</div>
                            <div>S$199.9</div>
                        </div>
                        <div className={btnWL}>
                            <Button content={'VIEW CART'} />
                            <Button content={'CHECKOUT'} isPrimary={false} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div className={textEmpty}>No products in the cart</div>
                    <div className={boxBtnEmpty}>
                        <Button
                            onClick={handleNavigateToShop}
                            content={'Return to shop'}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;

// video 33_done

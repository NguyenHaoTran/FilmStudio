import styles from '../../styles.module.scss';
import CartSummary from './CartSummary';
import CartTable from './CartTable';
import Button from '../../../../components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '../../../../contexts/SideBarProvider';

function Contents() {
    const { containerContents, boxFooter, boxCoupon, boxBtnDelete } = styles;
    const { listProductCart } = useContext(SideBarContext);

    return (
        <div className={containerContents}>
            <div>
                <CartTable listProductCart={listProductCart} />
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

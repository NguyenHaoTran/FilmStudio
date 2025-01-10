import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
// icons
import { CiShoppingCart } from 'react-icons/ci';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';

function Cart() {
    const { container, btnWL, total } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<CiShoppingCart style={{ fontSize: '30px' }} />}
                    title='CART'
                />
                <ItemProduct />
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
    );
}

export default Cart;

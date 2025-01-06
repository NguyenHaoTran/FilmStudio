import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './styles.module.scss';
import Button from '../../Button/Button';
// icons
import { CiHeart } from 'react-icons/ci';

function wishlist() {
    const { container, boxContent } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<CiHeart style={{ fontSize: '30px' }} />}
                    title={'WISHLIST'}
                />
            </div>

            <ItemProduct />
            <div>
                <Button content={'VIEW WISHLIST'} />
                <Button content={'ADD ALL TO CART'} />
            </div>
        </div>
    );
}

export default wishlist;

// 5p45

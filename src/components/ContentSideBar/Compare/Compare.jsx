import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './styles.module.scss';
import { MdCompare } from 'react-icons/md';

function Compare() {
    const { container } = styles;
    return (
        <div className={container}>
            <HeaderSideBar
                icon={<MdCompare style={{ fontSize: '30px' }} />}
                title='COMPARE'
            />
            <ItemProduct />
        </div>
    );
}

export default Compare;

// 13:34

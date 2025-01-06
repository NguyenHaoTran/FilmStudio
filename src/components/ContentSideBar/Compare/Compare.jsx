import HeaderSideBar from '../components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './styles.module.scss';
import Button from '../../Button/Button';
// icons
import { MdCompare } from 'react-icons/md';

function Compare() {
    const { container, boxContent, btnCompare } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<MdCompare style={{ fontSize: '30px' }} />}
                    title='COMPARE'
                />
                <ItemProduct />
            </div>
            <div className={btnCompare}>
                <Button content={'VIEW COMPARE'} />
            </div>
        </div>
    );
}

export default Compare;

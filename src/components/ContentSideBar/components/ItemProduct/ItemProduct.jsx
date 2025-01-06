import styles from './styles.module.scss';

import { IoCloseOutline } from 'react-icons/io5';

function ItemProduct() {
    const { container, boxContent, title, price, boxClose } = styles;
    return (
        <div className={container}>
            <img src='src/assets/images/Acton2.avif' alt='' />
            <div className={boxClose}>
                <IoCloseOutline />
            </div>
            <div className={boxContent}>
                <div className={title}>Marshall Stanmore II</div>
                <div className={price}>$1111.9</div>
            </div>
        </div>
    );
}

export default ItemProduct;

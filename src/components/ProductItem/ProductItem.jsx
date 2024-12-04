import styles from './styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/igIcon.svg';
import ytIcon from '@icons/svgs/ytIcon.svg';
import heart from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        ShowImgWhenHover,
        showFnWhenHover,
        boxIcon,
        title,
        priceStyle
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt='' />
                <img src={prevSrc} className={ShowImgWhenHover} />
                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heart} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceStyle}>{price}</div>
        </div>
    );
}

export default ProductItem;

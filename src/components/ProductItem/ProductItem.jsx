import styles from './styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/igIcon.svg';
import ytIcon from '@icons/svgs/ytIcon.svg';
import heart from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cls from 'classnames';
import Button from '../Button/Button';
import { useContext, useState, useEffect } from 'react';
import { OurShopContext } from '../../contexts/OurShopProvider';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true,
    boxBtn
}) {
    // const { isShowGrid } = useContext(OurShopContext);

    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);

    const {
        boxImg,
        ShowImgWhenHover,
        showFnWhenHover,
        boxIcon,
        title,
        priceStyle,
        boxColor,
        color,
        text_center,
        content,
        containerItem
    } = styles;

    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? '' : containerItem}>
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
            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={boxColor}>
                        {details.size.map((item, index) => {
                            return (
                                <div className={color} key={index}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className={cls(title, { [text_center]: !isHomepage })}>
                    {name}
                </div>
                <div
                    className={cls(priceStyle, { [text_center]: !isHomepage })}
                    style={{
                        color: '#c1c1c1'
                    }}
                >
                    ${price}
                </div>
                {!isHomepage && (
                    <div className={boxBtn}>
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
// 29

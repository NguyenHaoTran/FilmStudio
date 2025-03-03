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
import Cookies from 'js-cookie';
import { SideBarContext } from '../../contexts/SideBarProvider';
import { ToastContext } from '../../contexts/ToastProvider';
import { addProductToCart } from '../../apis/cartService';
import LoadingTextCommon from '../LoadingTextCommon/LoadingTextCommon';

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
    const [ColorChoose, setColorChoose] = useState('');
    const userId = Cookies.get('userId');
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);

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
        containerItem,
        isActive,
        btnClear
    } = styles;

    const handleChooseColor = (color) => {
        console.log(color);
        setColorChoose(color);
    };

    const handleClear = () => {
        setColorChoose('');
    };

    const handleAddToCart = () => {
        console.log(userId);
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please Login');

            return;
        }

        if (!ColorChoose) {
            toast.warning('pleases choose color!');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: ColorChoose
        };

        setIsLoading(true);

        // console.log(data);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                toast.success('Add Product to cart successfully!');
                setIsLoading(false);
            })
            .catch((err) => {
                toast.error('Add Product to cart successfully!');
                setIsLoading(false);
            });
    };

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
                                <div
                                    className={cls(color, {
                                        [isActive]: ColorChoose === item.name
                                    })}
                                    key={index}
                                    onClick={() => handleChooseColor(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {ColorChoose && (
                    <div className={btnClear} onClick={() => handleClear()}>
                        clear
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
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
// 29

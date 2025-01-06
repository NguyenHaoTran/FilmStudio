import { useState, useEffect, useContext } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/constants';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/LogoMarshall.png';
import { SideBarContext } from '../../contexts/SideBarProvider';
// icons
import { IoReload } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';

function MyHeader() {
    const [isVisible, setIsVisible] = useState(true);
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        hidden
    } = styles;

    const { setIsOpen, setType } = useContext(SideBarContext);
    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScroll =
                window.scrollY || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Cuộn xuống, ẩn header
                setIsVisible(false);
            } else {
                // Cuộn lên, hiện header
                setIsVisible(true);
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        // Dọn dẹp khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${container} ${isVisible ? '' : hidden}`}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => (
                            <BoxIcon type={item.type} href={item.href} />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => (
                            <Menu
                                content={item.content}
                                href={item.href}
                                setIsOpen={setIsOpen}
                            />
                            // -----!
                        ))}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='logo'
                        style={{
                            width: 'auto',
                            height: '73px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, 6).map((item) => (
                            <Menu
                                content={item.content}
                                href={item.href}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </div>
                    <div
                        className={containerBoxIcon}
                        style={{ opacity: '0.8' }}
                    >
                        <IoReload
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <CiHeart
                            style={{ fontSize: '24px' }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <CiShoppingCart
                            style={{ fontSize: '25px' }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;

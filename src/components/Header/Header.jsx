import { useState, useEffect, useContext } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/constants';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/LogoMarshall.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import { SideBarContext } from '../../contexts/SideBarProvider';

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

    const { isOpen, setIsOpen } = useContext(SideBarContext);

    // console.log(isOpen);

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
                            <Menu content={item.content} href={item.href} />
                        ))}
                    </div>
                    <div
                        className={containerBoxIcon}
                        style={{ opacity: '0.8' }}
                    >
                        <img
                            width={22}
                            height={22}
                            src={reloadIcon}
                            alt='reloadIcon'
                        />
                        <img
                            width={22}
                            height={22}
                            src={heartIcon}
                            alt='heartIcon'
                        />
                        <img
                            width={22}
                            height={22}
                            src={cartIcon}
                            alt='cartIcon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;

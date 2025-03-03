import { useState, useEffect, useContext } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/constants';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/LogoMarshall.png';
import { SideBarContext } from '../../contexts/SideBarProvider';
// icons
import { IoReload, IoMenu, IoClose } from 'react-icons/io5';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';

function MyHeader() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { setIsOpen, setType, listProductCart } = useContext(SideBarContext);

    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        hidden,
        mobileMenu,
        mobileNav,
        mobileIcon,
        mobileNavOpen,
        boxCart,
        quantity
    } = styles;

    // Xử lý ẩn/hiện header khi cuộn trang
    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const currentScroll =
                window.scrollY || document.documentElement.scrollTop;
            setIsVisible(currentScroll <= lastScrollTop);
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Kiểm tra kích thước màn hình để xác định chế độ mobile/desktop
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false); // Đóng menu nếu chuyển sang tablet/desktop
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    return (
        <header className={`${container} ${isVisible ? '' : hidden}`}>
            <div className={containerHeader}>
                {/* Box icon trái */}
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => (
                            <BoxIcon
                                key={index}
                                type={item.type}
                                href={item.href}
                            />
                        ))}
                    </div>
                    {!isMobile && (
                        <div className={containerMenu}>
                            {dataMenu.slice(0, 3).map((item, index) => (
                                <Menu
                                    key={index}
                                    content={item.content}
                                    href={item.href}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Logo */}
                <div>
                    <img
                        src={Logo}
                        alt='logo'
                        style={{ width: 'auto', height: '60px' }}
                    />
                </div>

                {/* Box icon phải */}
                <div className={containerBox}>
                    {!isMobile && (
                        <div className={containerMenu}>
                            {dataMenu.slice(3, 6).map((item, index) => (
                                <a>
                                    <Menu
                                        key={index}
                                        content={item.content}
                                        href={item.href}
                                    />
                                </a>
                            ))}
                        </div>
                    )}
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
                        <div className={boxCart}>
                            <CiShoppingCart
                                style={{ fontSize: '25px' }}
                                onClick={() => handleOpenSideBar('cart')}
                            />
                            <div className={quantity}>
                                {listProductCart.length}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                {isMobile && (
                    <div
                        className={mobileIcon}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <IoClose size={30} />
                        ) : (
                            <IoMenu size={30} />
                        )}
                    </div>
                )}
            </div>

            {/* Mobile Menu */}
            {isMobile && (
                <nav
                    className={`${mobileNav} ${
                        isMobileMenuOpen ? mobileNavOpen : ''
                    }`}
                >
                    {dataMenu.map((item, index) => (
                        <Menu
                            key={index}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            content={item.content}
                        />
                    ))}
                </nav>
            )}
        </header>
    );
}

export default MyHeader;

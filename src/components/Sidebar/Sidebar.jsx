import { useContext } from 'react';
import styles from './styles.module.scss';
// import { SideBarContext } from '../../contexts/SidebarProvider';
import { SideBarContext } from '../../contexts/SideBarProvider';
import classNames from 'classnames';
import Login from '../ContentSideBar/Login/Login';
// icons
import { IoMdClose } from 'react-icons/io';
import Compare from '../ContentSideBar/Compare/Compare';
import WishList from '../ContentSideBar/WishList/WishList';
import Cart from '../ContentSideBar/Cart/Cart';

function Sidebar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // console.log(type);

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return <WishList />;
            case 'cart':
                return <Cart />;

            default:
                return <Login />;
        }
    };

    return (
        <div className={container}>
            <div
                className={classNames({ [overlay]: isOpen })}
                onClick={handleToggle}
            />
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <IoMdClose />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default Sidebar;

import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '../../../contexts/SideBarProvider';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../../contexts/storeProvider';

function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const navigate = useNavigate();

    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    const { userInfo, handleLogOut } = useContext(StoreContext);

    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }

        if (content === 'Home') {
            navigate('home');
        }

        if (content === 'Our Shop') {
            navigate('shop');
        }
    };

    const handleRenderText = (content) => {
        if (content === 'sign in' && !userInfo) {
            return `Hello: ${userInfo?.username}`;
        } else {
            return content;
        }
    };

    const handleHover = () => {
        console.log(content);
        if (content === 'sign in' && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    return (
        <div
            className={menu}
            onMouseEnter={handleHover}
            onClick={handleClickShowLogin}
        >
            {handleRenderText(content)}
            {isShowSubMenu && (
                <div
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={subMenu}
                    onClick={handleLogOut}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;

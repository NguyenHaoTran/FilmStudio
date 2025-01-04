import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '../../contexts/SidebarProvider';
import classNames from 'classnames';
// icons
import { IoMdClose } from 'react-icons/io';

function Sidebar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
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
                sideBar
            </div>
        </div>
    );
}

export default Sidebar;

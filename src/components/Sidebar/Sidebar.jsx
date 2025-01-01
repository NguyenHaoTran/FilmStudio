import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '../../contexts/SidebarProvider';
import classNames from 'classnames';

function Sidebar() {
    const { container, overlay, sideBar } = styles;
    const { isOpen } = useContext(SideBarContext);

    return (
        <div className={container}>
            <div className={classNames({ [overlay]: isOpen })} />
            <div className={sideBar}>sideBar</div>
        </div>
    );
}

export default Sidebar;

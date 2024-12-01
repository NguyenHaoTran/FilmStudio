import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/constants';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/LogoMarshall.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
        styles;
    return (
        <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map((item) => {
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0, 3).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
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
                    {dataMenu.slice(3, 6).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
                {/*  */}
                <div className={containerBoxIcon}>
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
                        alt='cartIcon    '
                    />
                </div>
            </div>
        </div>
    );
}
export default MyHeader;

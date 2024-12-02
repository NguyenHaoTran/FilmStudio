import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '../Info/info';
import AdvanceHeading from '../AdvanceHeading/AdvanceHeading';
import HeadingListProducts from '../HeadingListProduct/HeadingListProducts';

function HomePage() {
    const { container } = styles;
    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProducts />
            </div>
        </>
    );
}

export default HomePage;

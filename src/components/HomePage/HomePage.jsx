import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '../Info/info';
import AdvanceHeading from '../AdvanceHeading/AdvanceHeading';
import HeadingListProducts from '../HeadingListProduct/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '../PopularProduct/Popularproducts';
import SaleHomepage from '../SaleHomepage/SaleHomepage';
import MyFooter from '../Footer/Footer';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    const { container } = styles;

    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 10
        };

        getProducts(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProducts data={listProducts.slice(0, 2)} />
                <PopularProduct
                    data={listProducts.slice(2, listProducts.length)}
                />
                <SaleHomepage />
                <MyFooter />
            </div>
        </>
    );
}

export default HomePage;

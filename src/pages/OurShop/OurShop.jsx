import styles from './styles.module.scss';
import MyHeader from '../../components/Header/Header';
import MainLayout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import Banner from '../../pages/OurShop/components/Banner';
import { OurShopProvider, OurShopContext } from '@contexts/OurShopProvider';
import { useContext } from 'react';
import Filter from './components/Filter';
import ListProducts from './components/ListProducts';
import MyFooter from '../../components/Footer/Footer';

function OurShop() {
    const { container, functionBox, specialText, btnback } = styles;
    const navigate = useNavigate();
    const a = useContext(OurShopContext);
    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    console.log(a);

    return (
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt; <span className={specialText}>Shop</span>{' '}
                        </div>
                        <div
                            className={btnback}
                            onClick={handleBackPreviousPage}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>
                </div>
                <Banner />
                <div style={{ paddingBottom: '30px' }}>
                    <Filter />
                    <ListProducts />
                </div>
            </MainLayout>
            <MyFooter />
        </OurShopProvider>
    );
}

export default OurShop;

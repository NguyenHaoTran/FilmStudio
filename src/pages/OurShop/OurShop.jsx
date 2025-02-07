import styles from './styles.module.scss';
import MyHeader from '../../components/Header/Header';
import MainLayout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import Banner from '../../pages/OurShop/components/Banner';

function OurShop() {
    const { container, functionBox, specialText, btnback } = styles;
    const navigate = useNavigate();
    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    return (
        <>
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
            </MainLayout>
        </>
    );
}

export default OurShop;

import MyFooter from '../../components/Footer/Footer';
import MyHeader from '../../components/Header/Header';
import MainLayout from '../../components/Layout/Layout';
import Contents from './components/contents/Contents';
import Steps from './components/steps/Steps';

import styles from './styles.module.scss';

function Cart() {
    const { container } = styles;

    return (
        <>
            <MyHeader />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <Contents />
                </MainLayout>
            </div>
            <MyFooter />
        </>
    );
}

export default Cart;

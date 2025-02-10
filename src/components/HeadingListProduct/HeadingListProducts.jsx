import MainLayout from '../Layout/Layout';
import styles from './styles.module.scss';
import Countdownbanner from '../CountdownBanner/CountdownBanner';
import ProductItem from '../ProductItem/ProductItem';

function HeadingListProducts({ data }) {
    const targetDate = '2025-12-31T00:00:00';
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <Countdownbanner />
                <div className={containerItem}>
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;

// 34:00

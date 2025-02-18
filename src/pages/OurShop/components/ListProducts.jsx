import MainLayout from '../../../components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '../../../contexts/OurShopProvider';
import ProductItem from '../../../components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '../../../components/Button/Button';

function ListProducts() {
    const { products, isShowGrid, isLoading, handleLoadMore, total } =
        useContext(OurShopContext);
    const { containerProduct } = styles;

    return (
        <>
            <MainLayout>
                {isLoading ? (
                    <>Loading...</>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ''}>
                            {products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    src={item.images[0]}
                                    prevSrc={item.images[1]}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHomepage={false}
                                />
                            ))}
                        </div>
                        {products.length < total && (
                            <div
                                style={{ width: '180px', margin: '50px auto' }}
                            >
                                <Button
                                    content={'LOAD MORE PRODUCT'}
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </>
    );
}

export default ListProducts;

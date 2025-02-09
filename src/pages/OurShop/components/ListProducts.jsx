import MainLayout from '../../../components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '../../../contexts/OurShopProvider';
import ProductItem from '../../../components/ProductItem/ProductItem';

function ListProducts() {
    const { products } = useContext(OurShopContext);

    return (
        <>
            <MainLayout>
                <div>
                    {products.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </MainLayout>
        </>
    );
}

export default ListProducts;

// 15:13_ 27

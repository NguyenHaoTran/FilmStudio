import styles from '../../styles.module.scss';
import CartTable from './CartTable';

function Contents() {
    const { containerContents, cartTable } = styles;
    return (
        <div className={containerContents}>
            <div>
                <CartTable />
            </div>
            <div>Thanh toan</div>
        </div>
    );
}

export default Contents;

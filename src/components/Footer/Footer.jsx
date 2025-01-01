import { dataMenu } from '@components/Footer/constants';
import styles from './styles.module.scss';

function MyFooter() {
    const { container, boxNav } = styles;
    return (
        <div className={container}>
            <div>
                <img
                    src='src\assets\icons\images\LogoMarshall.png'
                    alt=''
                    width={160}
                />
            </div>
            <div className={boxNav}>
                {dataMenu.map((item) => (
                    <div key={item.id}>{item.content}</div>
                ))}
            </div>
            <div>
                <p style={{ textAlign: 'center' }}>Guaranteed safe ckeckout</p>
                <img src='src\assets\icons\iconPayment.png' alt='' />
            </div>
            <div>
                <p>Copyright © 2024. Created by Ng.hao.t</p>
            </div>
        </div>
    );
}

export default MyFooter;

import styles from './styles.module.scss';
import Button from '../Button/Button';

function SaleHomepage() {
    const { container, content } = styles;

    return (
        <div className={container}>
            <div className={content}>
                <h2>Sale Of The Year</h2>
                <p>
                    To celebrate the Year of the Snake, we’ve created a
                    one-of-a-kind Emberton III speaker.
                </p>
                <Button content={'Read More'} />
            </div>
        </div>
    );
}

export default SaleHomepage;

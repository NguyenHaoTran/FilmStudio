import Button from '../Button/Button';
import styles from './styles.module.scss';

function Banner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>OFFER UNFORGETTABLE</h1>
                <div className={des}>
                    Give your guests an audio experience to match their
                    surroundings
                </div>
                <Button content={'Go to Shop'} />
            </div>
        </div>
    );
}

export default Banner;

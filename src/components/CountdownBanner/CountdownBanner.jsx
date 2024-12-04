import Button from '../Button/Button';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';

function Countdownbanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The Classic Make A Comback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'} />
            </div>
        </div>
    );
}

export default Countdownbanner;

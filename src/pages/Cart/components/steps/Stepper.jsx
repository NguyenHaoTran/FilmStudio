import styles from '../../styles.module.scss';
import cls from 'classnames';

function Stepper({ number, content, isDisabled }) {
    const { stepper, numberSteps, textSteps, isDisableNumber, isDisableText } =
        styles;

    return (
        <div className={stepper}>
            <div
                className={cls(numberSteps, { [isDisableNumber]: isDisabled })}
            >
                {number}
            </div>
            <div className={cls(textSteps, { [isDisableText]: isDisabled })}>
                {content}
            </div>
        </div>
    );
}

export default Stepper;

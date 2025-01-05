import styles from './styles.module.scss';

function InputCommon() {
    const { container, labelInput, boxInput } = styles;

    return (
        <div className={container}>
            <div className={labelInput}>UserName or email</div>
            <div className={boxInput}>
                <input type='text' />
            </div>
        </div>
    );
}

export default InputCommon;

//  13_ 12:16

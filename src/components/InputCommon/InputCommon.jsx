import { Balance } from '@mui/icons-material';
import styles from './styles.module.scss';
import { useState } from 'react';
// icons
import { IoIosEye } from 'react-icons/io';
import { FaEyeSlash } from 'react-icons/fa';

function InputCommon({ label, type, isRequired = false }) {
    const { container, labelInput, boxInput, boxIcon } = styles;
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const isShowTextPassWord =
        type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassWord} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <IoIosEye />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;

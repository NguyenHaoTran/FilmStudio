import { Balance } from '@mui/icons-material';
import styles from './styles.module.scss';
import { useState } from 'react';
// icons
import { IoIosEye } from 'react-icons/io';
import { FaEyeSlash } from 'react-icons/fa';

function InputCommon({ label, type, isRequired = false, ...props }) {
    const { container, labelInput, boxInput, boxIcon, errMsg } = styles;
    const { formik, id } = props;
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const isShowTextPassWord =
        type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassWord}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <IoIosEye />}
                    </div>
                )}

                {isErr && <div className={errMsg}>{messageErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;

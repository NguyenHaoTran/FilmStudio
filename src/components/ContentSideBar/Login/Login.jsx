import InputCommon from '../../InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '../../Button/Button';
//
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid Email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref('passwod'), null],
                'Passwords must match'
            )
        }),
        //
        onSubmit: (values) => {
            console.log(values);
        }
        //
    });

    // console.log(formik.errors);

    const handleToggle = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequired
                    formik={formik}
                />

                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequired
                    formik={formik}
                />
                {isRegister && (
                    <InputCommon
                        id='confirmPassword'
                        label='confirmPassword'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

                <Button
                    content={isRegister ? 'LOGIN' : 'LOGIN'}
                    type='submit'
                />
            </form>
            <Button
                content={
                    isRegister
                        ? 'Aleady have an account?'
                        : 'Dont have an account?'
                }
                type='submit'
                isPrimary={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!isRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
}

export default Login;

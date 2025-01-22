import InputCommon from '../../InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '../../Button/Button';
//
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '../../../contexts/ToastProvider';
import { register, signIn } from '../../../apis/authService';

function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);

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
        onSubmit: async (values) => {
            // console.log(values);

            if (setIsLoading) return;

            const { email: username, password } = values;
            setIsLoading(true);
            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        // console.log(res);
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        // console.log(err);
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
            if (!isRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        console.log(res);
                    })
                    .catch((err) => {
                        setIsLoading(false);
                    });
                // 20_ 8:02
            }
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
                    content={
                        isLoading
                            ? 'LOADING...'
                            : isRegister
                            ? 'REGISTER'
                            : 'LOGIN'
                    }
                    type='submit'
                    onClick={() => toast.success('Success')}
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

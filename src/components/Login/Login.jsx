import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import styles from './../common/forms/FormControl.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder='Email' component='input' name='email' />
            </div>
            <div>
                <Field
                    placeholder='Password'
                    component='input'
                    type='password'
                    name='password'
                />
            </div>
            <div>
                <Field type='checkbox' component='input' name='rememberMe' />
                Remember me
            </div>
            {error && (
                <div>
                    <span className={styles.groupError}>{error}</span>
                </div>
            )}
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && (
                <Field
                    placeholder='Captcha symbols'
                    component='input'
                    name='captcha'
                />
            )}

            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    );
};

const ReduxLoginForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
    const onSubmit = (loginData) => {
        login(loginData);
    };
    if (isAuth) return <Redirect to='/profile' />;
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    );
};

export default Login;

import React from 'react';
import '../../styles/containers/login/index.scss';
import LoginButton from '../../components/buttons/LoginButton';

function Login() {
    return (
        <div className="login-page">
            <img className="login-page__pipe-image" src="https://source.unsplash.com/960x900/?Medical,Medical Care" alt="pipe-img" />
            {/* <img className="login-page__pipe-image" src="./assets/pipe.svg" alt="pipe-img" /> */}
            <div className="login-page__login-form">
                <form>
                    <div className="login-page__login-form__text-container1" >Welcome to <b>EHR</b></div>
                    <div className="login-page__login-form__text-container2" ><b className="login-page__login-form__text-container2__b" >Sign In </b>as
                        <select className="login-page__login-form__text-container2__dropdown" >
                            <option value="admin">Admin</option>
                            <option value="doctor">Doctor</option>
                            <option value="receptionist">Receptionist</option>
                        </select>
                    </div>
                    <input className="login-page__login-form__input-container" type="text" placeholder="User ID*" required />
                    <input className="login-page__login-form__input-container1" type="password" placeholder="Password*" required />
                    <div className="login-page__login-form__forget-password">Forgot Password?</div>
                    <div className="login-page__login-form__loginbutton"><LoginButton/></div>
                </form>
            </div>
        </div>
    )
}

export default Login
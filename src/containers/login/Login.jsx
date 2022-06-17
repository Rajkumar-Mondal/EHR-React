import React, { useState } from 'react';
import '../../styles/containers/login/index.scss';
import LoginButton from '../../components/buttons/LoginButton';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Rings } from 'react-loader-spinner'
import BASE_URL from "../../config";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [isLoading, setIsLoading] = useState(false);
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [acctype, setAcctype] = useState("");
    const notify = () => toast("Successfully Login!");
    const navigate = useNavigate();
    const payload = {
        id: userid,
        password: password,
        acctype: acctype,
    };

    const handleLogin = async () => {
        if (userid !== "" && password !== "" && acctype !== "") {
            try {
                setIsLoading(true);
                const url = BASE_URL + `/login`;
                const data = await axios.post(url, { payload });
                setIsLoading(false);
                if (data.success) {
                    localStorage.setItem("UserAccountType", JSON.stringify(acctype));
                    localStorage.setItem("UserID", JSON.stringify(userid));
                    setUserid("");
                    setPassword("");
                    setAcctype("");
                    if(JSON.parse(localStorage.getItem("UserAccountType"))==="admin"){
                        navigate('/admin');
                    } else if (JSON.parse(localStorage.getItem("UserAccountType"))==="doctor"){
                        navigate('/doctor');
                    } else {
                        navigate('/receptionist');
                    }
                    notify();
                } else {
                    Swal.fire(
                        'Error!',
                        data.message,
                        'error'
                    ).then((res) => {
                        if (res.isConfirmed) {
                            navigate('/');
                        }
                    })
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            Swal.fire("Alert", "Please provide all the inputs.", "warning");
        }
    }

    if (isLoading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20%",
            }}>
                <Rings
                    height="100"
                    width="100"
                    color='#00ADB5'
                    ariaLabel='loading'
                />
            </div>
        )
    } else {
        return (
            <div className="login-page">
                <ToastContainer />
                <img className="login-page__pipe-image" src="https://source.unsplash.com/960x900/?Medical,Medical Care" alt="pipe-img" />
                {/* <img className="login-page__pipe-image" src="./assets/pipe.svg" alt="pipe-img" /> */}
                <div className="login-page__login-form">
                    <form>
                        <div className="login-page__login-form__text-container1" >Welcome to <b>EHR</b></div>
                        <div className="login-page__login-form__text-container2" ><b className="login-page__login-form__text-container2__b" >Sign In </b>as
                            <select value={acctype} onChange={(e) => setAcctype(e.target.value)} className="login-page__login-form__text-container2__dropdown" required >
                                <option value="" disabled>Select User</option>
                                <option value="admin">Admin</option>
                                <option value="doctor">Doctor</option>
                                <option value="receptionist">Receptionist</option>
                            </select>
                        </div>
                        <input value={userid} onChange={(e) => setUserid(e.target.value)} className="login-page__login-form__input-container" type="text" placeholder="User ID*" required />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="login-page__login-form__input-container1" type="password" placeholder="Password*" required />
                        {/* <div className="login-page__login-form__forget-password">Forgot Password?</div> */}
                        <div className="login-page__login-form__loginbutton" onClick={handleLogin}><LoginButton value={"Login"} /></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
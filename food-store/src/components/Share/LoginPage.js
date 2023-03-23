import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/actions/userActions';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [isShowPass, setIsShowPass] = useState(false);

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [isCorrect, setIsCorrect] = useState(true);

    const notifyAdd = () => toast.success('🦄 Login success!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    const handleShowHidePassword = () => {
        setIsShowPass(!isShowPass)
    }



    const handleLogin = async () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const params = {
            Email: mail,
            MatKhauDangNhap: pass,
        }
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/Login`, params, axiosConfig
        ).catch((e) => {
            console.log(e)
        })

        if (response?.data?.errorCode === 1) {
            console.log("if1", response)
            setIsCorrect(false);
        } else if (response?.data?.errorCode === 0) {
            setIsCorrect(true);
            notifyAdd()
            dispatch(userLogin(response?.data))
            if (response?.data?.user?.Quyen === 0) {
                setTimeout(
                    function () {
                        navigate("/")
                    },
                    2000);
            } else if (response?.data?.user?.Quyen === 1 || response?.data?.user?.Quyen === 2) {
                setTimeout(
                    function () {
                        navigate("/admin")
                    },
                    2000);
            }
        } else {
            console.log("error")
        }
    }



    return (
        <>
            <section className="coming-wrap sec-space text-center">
                <div className="container">
                    <div className='box-login row'>
                        <div className='col-lg-4 col-md-4 col-xs-2 box-login-img'>
                        </div>
                        <div className='col-lg-8 col-md-8 col-xs-10 box-login-content'>
                            <div className='box-login-title'>
                                <h3>Wellcom to <strong>kyAnhStore247</strong></h3>
                                <a href="/"> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/logo/main-logo.png" />  </a>
                            </div>
                            <h1>LOGIN</h1>
                            <div className='box-login-input'>
                                <div className='login-input-name'>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                            onChange={event => setMail(event.target.value)}
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                </div>
                                <div className='login-input-pass'>
                                    <div className="form-floating">
                                        <input type={`${isShowPass ? "text" : "password"}`} className="form-control" id="floatingPassword" placeholder="Password"
                                            onChange={event => setPass(event.target.value)}
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                        <i className={`fa-regular ${isShowPass ? "fa-eye-slash" : "fa-eye"}`} onMouseDown={() => handleShowHidePassword()} onMouseUp={() => handleShowHidePassword()}></i>
                                    </div>
                                </div>
                            </div>
                            {isCorrect ? "" : <p className='text-red'>Email of pass not correct!</p>}
                            <div className='btn-login'>
                                <button className='btn'>Create new</button>
                                <button className="theme-btn-sm-2 btn-block" onClick={() => handleLogin()}>LOGIN <i className="fa fa-long-arrow-right"></i> </button>
                            </div>
                            <div className='login-by-f-g'>
                                <div className='forget-pass'>
                                    <a href='/'>Forget password?</a>
                                </div>
                                <p>Or login by</p>
                                <div className='login-icon'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <i className="fa-brands fa-google-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-logo pb-15">
                        <a href="/"> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/logo/main-logo.png" />  </a>
                    </div>
                    <ToastContainer position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light" />
                </div>
            </section>
        </>
    )
}

export default LoginPage




import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [isShowPass, setIsShowPass] = useState(false);
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [isCorrect, setIsCorrect] = useState(true);

    const notifyAdd = () => toast.success('🦄 Created new account!', {
        position: "top-right",
        autoClose: 4000,
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
   

    const handleRegister = async () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const params = {
            HoTenNguoiDung:name,
            Email: mail,
            MatKhauDangNhap: pass,
            SDT: phone,
        }
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/Login/Register`, params, axiosConfig
        ).catch((e) => {
            console.log(e)
        })

        if (response?.data?.errorCode === 1) {
            console.log("if1", response)
            setIsCorrect(false);
        } else if (response?.data?.errorCode === 0) {
            setIsCorrect(true);
            notifyAdd();
            setTimeout(
                function(){
                    navigate("/login")
                },
            4000);
        } else {
            console.log("error")
        }
    }
    return (
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
                        <h1>REGISTER</h1>
                        <div className='box-login-input'>
                            <div className='login-input-name'>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingName" placeholder="name@example.com"
                                        onChange={event => setName(event.target.value)}
                                    />
                                    <label htmlFor="floatingName">Enter your name</label>
                                </div>
                            </div>
                            <div className='login-input-name'>
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
                                        onChange={event => setMail(event.target.value)}
                                    />
                                    <label htmlFor="floatingEmail">Email address</label>
                                </div>
                            </div>
                            <div className='login-input-name'>
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="floatingPhone" placeholder=""
                                        onChange={event => setPhone(event.target.value)}
                                    />
                                    <label htmlFor="floatingPhone">Phone number</label>
                                </div>
                            </div>
                            <div className='login-input-pass'>
                                <div className="form-floating">
                                    <input type={`${isShowPass ? "text" : "password"}`} className="form-control" id="floatingPassword" placeholder="Password"
                                        onChange={event => setPass(event.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Enter your password</label>
                                    <i className={`fa-regular ${isShowPass ? "fa-eye-slash" : "fa-eye"}`} onMouseDown={() => handleShowHidePassword()} onMouseUp={() => handleShowHidePassword()}></i>
                                </div>
                            </div>
                            <div className='login-input-pass'>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingRePassword" placeholder="Re-Password"
                                    />
                                    <label htmlFor="floatingRePassword">Repass your password</label>
                                </div>
                            </div>
                            {isCorrect ? "":<p className='text-red'>Email has exist!</p>}
                        </div>
                        <div className='btn-login'>
                            <button className='btn'>Login</button>
                            <button className="theme-btn-sm-2 btn-block" onClick={()=>handleRegister()}>CREATE <i className="fa fa-long-arrow-right"></i> </button>
                        </div>
                        <div className='login-by-f-g'>
                            <div className='forget-pass'>

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
    )
}

export default Register
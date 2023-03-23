import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UserInfoPreView = () => {
    const [isShowPopupUserInfo, setIsShowPopupUserInfo] = useState(false);
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const notifyAdd = () => toast.success('🦄 You have been logout!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handlePopupUserInfo = () => {
        setIsShowPopupUserInfo(!isShowPopupUserInfo)
    }
    const handleLogout = () => {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('cartItems')

        setIsShowPopupUserInfo(false)
        notifyAdd();
        setTimeout(
            function () {
                navigate("/login")
            },
            2000);
    }
    return (
        <>
            <div className="user-info">
                <div className='user-logo' >
                    {userInfo?.AnhDaiDien ? <img src={userInfo?.AnhDaiDien} alt='' onClick={() => handlePopupUserInfo()} className='img'/>
                        : <i className="fa fa-user" onClick={() => handlePopupUserInfo()}></i>}
                </div>
                <div className={`pop-up-box user-popup ${isShowPopupUserInfo ? 'active-popup' : 'hidden-popup'}`}>
                    <ul >
                        {userInfo ?
                            <>
                                <li className='user-text-name'>Hello <strong>{userInfo?.Email}</strong></li>
                                <li><NavLink className="user-text-info" to="/your-profile">My account</NavLink></li>
                                <li><hr className="line" /></li>
                                <li><NavLink className="user-text-logout" to="#" onClick={() => handleLogout()}>Logout<i className="fa fa-right-from-bracket "></i></NavLink></li>
                            </> :
                            <>
                                <li className='user-text-name'> Wellcom!</li>
                                <li><NavLink to='/register' className="user-text-register" >Create new<i className="fa fa-user-plus"></i></NavLink></li>
                                <li><hr className="line" /></li>
                                <li><NavLink to='/login' className="user-text-login" >Login<i className="fa fa-right-to-bracket "></i></NavLink></li>
                            </>
                        }
                    </ul>
                </div>

            </div>
        </>
    )
}

export default UserInfoPreView
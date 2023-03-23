import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import UserInfoPreView from '../../Share/UserInfoPreView';
import MessNotify from './MessNotify';
class AdminNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isScrollToTop: false,
            isShowPopupUserInfo: false,
        }
    }
    handlePopupUserInfo = () => {
        this.setState({
            isShowPopupUserInfo: !this.state.isShowPopupUserInfo
        })
    }
    render() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))

        return (
            <>
                <nav className='navbar navbar-expand-lg main-header'>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand main-logo col-lg-2 col-sm-6" to="/admin">
                            <img src='/logo/main-logo.png' />
                            <span className='medium-font'>kyAnhStore247</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-lg-7 col-md-7  col-sm-6 justify-content-end " id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0 primary-navbar ">
                                <li></li>
                                {userInfo.Quyen ===1 ?
                                <li className="nav-item ">
                                    <NavLink className="nav-link" aria-current="page" to="/admin/user-manage"><i className="fa-regular fa-address-book"></i> Users</NavLink>
                                </li>:""}
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/admin/transaction-manage"><i className="fa-solid fa-filter-circle-dollar"></i> Transactions</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admin/product-manage"><i className="fa-solid fa-carrot"></i> Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admin/blog-manage"><i className="fa-solid fa-blog"></i> Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <div className='mess-menu'>
                                        <i className="fa-regular fa-bell "></i>
                                        <span className="mess-notify bell">2</span>
                                        {/* notify */}
                                        {/* <NotifiesBox/> */}
                                    </div>
                                </li>
                                <li className="nav-item">
                                    {/* mess prev */}
                                    <MessNotify />
                                </li>
                                <li className="nav-item">
                                    {/* <div className="admin-info">
                                        <div className='admin-logo' >
                                            <img src='https://res.cloudinary.com/dkto9qg9y/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1663760338/cld-sample.jpg'  onClick={() => this.handlePopupUserInfo()} />
                                        </div>
                                        <div className={`pop-up-box admin-popup ${this.state.isShowPopupUserInfo ? 'active-popup' : 'hidden-popup'}`}>

                                        </div>
                                    </div> */}
                                    <UserInfoPreView />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default AdminNavbar
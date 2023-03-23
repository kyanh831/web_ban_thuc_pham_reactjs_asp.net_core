import React from 'react'

import { NavLink } from 'react-router-dom'
import CartPreView from './CartPreView';
import Chat from './Chat';
import ChatBot from './ChatBot';
import SearchPreView from './SearchPreView';
import UserInfoPreView from './UserInfoPreView';

const Navbar = () => {

    return (
        <>
            <nav className='navbar navbar-expand-lg style-2 main-header '>
                <div className="container-fluid">
                    <NavLink className="navbar-brand main-logo col-lg-3 col-sm-6" to="/">
                        <img src='/logo/main-logo.png' alt='' />
                        <span className='medium-font'>kyAnhStore247</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-lg-7 col-md-7  col-sm-6 justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 primary-navbar ">
                            <li className="nav-item ">
                                {/* search box */}
                                <SearchPreView/>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blogs">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item nav-car">
                                {/* card cart */}
                                <CartPreView />
                                {/* user info */}
                                <UserInfoPreView />
                            </li>
                        </ul>
                    </div>
                </div>
                <ChatBot />
                <Chat/>
            </nav>
        </>
    )

}

export default Navbar

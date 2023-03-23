import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class AdminLeftSideBar extends Component {
    render() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))

        return (
            <>
                <div className='left-sidebar col-2 '>
                    <div className='left-sidebar-img'>
                        <i className="fa-solid fa-arrow-left collapse-l"></i>
                        <h5>Hello! <strong>kyanh123@gmail.com</strong></h5></div>
                    <div className='left-sidebar-content'>
                        <ul className='left-nav-item'>
                            {userInfo.Quyen === 1 ?
                                <li><NavLink to='/admin/user-manage'><i className="fa-regular fa-address-book mr-2"></i> Users</NavLink> </li>
                                : ""}
                            <li>
                                <NavLink to='/admin/chat'><i className="fa-solid fa-message mr-2"><span></span></i> Chat</NavLink>

                            </li>

                        </ul>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <i className="fa-solid fa-carrot me-2"></i> Products
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <ul className='left-nav-item'>
                                            <li><NavLink to='/admin/product-manage'><i className="fa-regular fa-address-book"></i>Overview</NavLink> </li>
                                            <li><NavLink to='/'><i className="fa-regular fa-address-book"></i>Statistics</NavLink> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <i className="fa-solid fa-filter-circle-dollar me-1"></i> Transactions
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-heaadingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <ul className='left-nav-item'>
                                            <li><NavLink to='/'><i className="fa-regular fa-address-book"></i>Overview</NavLink> </li>
                                            <li><NavLink to='/'><i className="fa-regular fa-address-book"></i>Statistics</NavLink> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <i className="fa-solid fa-blog me-2"></i> Blogs
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <ul className='left-nav-item'>
                                            <li><NavLink to='/'><i className="fa-regular fa-address-book"></i>Overview</NavLink> </li>
                                            <li><NavLink to='/'><i className="fa-regular fa-address-book"></i>Statistics</NavLink> </li>
                                            <li><NavLink to='/'><i className="fa-regular fa-address-book"></i> Add new</NavLink> </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
    }
}

export default AdminLeftSideBar
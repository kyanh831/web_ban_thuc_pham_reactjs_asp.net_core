import React from 'react'
import Order from './Order'
import Recommend from './Recommend'
import UserInfo from './UserInfo'
import UserInfoImg from './UserInfoImg'
import UserNewOder from './UserNewOder'

const UserContent = () => {
    return (
        <>
            <section className='banner-profile'>
                <div className='banner'>
                    <h1> Hello kyanh</h1>
                    <p>that your profile</p>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='user-profile'>
                        <div className='user-profile-header'>
                            <div className='row'>
                                <div className='col-lg-5 col-md-12 user-profile-account'>
                                    <UserInfoImg />
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='user-info-group-item'>
                                                <div className='user-info-item'>
                                                    <i className="fa-solid fa-truck-fast"></i>
                                                    <h6>Bought 165</h6>
                                                </div>
                                                <div className='user-info-item'>
                                                    <i className="fa-regular fa-thumbs-up"></i>
                                                    <h6>Like 11.2k</h6>
                                                </div>
                                                <div className='user-info-item'>
                                                    <i className="fa fa-heart"></i>
                                                    <h6>Product liked 165</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <h4>Edit your profile</h4>
                                            <UserInfo />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-7 col-md-12 user-profile-info'>
                                    <UserNewOder />
                                    <h6>May be you like</h6>
                                    <Recommend/>
                                </div>
                            </div>
                            <div className='row user-profile-info' >
                                <div className='col-5'>

                                </div>
                                <div className='col-7'>
                                    <h4>Orders</h4>
                                    <Order />
                                    <p>See More</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='user-order-content'>

                    </div>
                </div>


            </section>
        </>
    )
}

export default UserContent
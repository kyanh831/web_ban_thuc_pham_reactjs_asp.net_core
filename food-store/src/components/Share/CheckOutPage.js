import React from 'react'
import CheckOutContent from './CheckOutContent'
import { Footer } from './Footer'
import Navbar from './Navbar'

const CheckOutPage = () => {
    return (
        <>
            <Navbar />
            <section className="breadcrumb-bg">
                <div className="theme-container container ">
                    <div className="site-breadcumb white-clr">
                        <h2 className="section-title"> <strong className="clr-txt">naturix </strong> <span className="light-font">Check out Cart </span> </h2>
                        <ol className="breadcrumb breadcrumb-menubar">
                            <li><a href="/"> Home </a> <a href="/cart"> Cart </a> Checkout  </li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className="shop-wrap sec-space">
                    <div className="container">
                        <CheckOutContent/>
                        
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default CheckOutPage
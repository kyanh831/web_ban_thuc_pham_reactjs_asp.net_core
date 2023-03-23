import React, { Component } from 'react'
import CartContent from './CartContent'
import { Footer } from '../Share/Footer'
import  Navbar from '../Share/Navbar'

export default class CartPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <section className="breadcrumb-bg">
                    <div className="theme-container container ">
                        <div className="site-breadcumb white-clr">
                            <h2 className="section-title"> <strong className="clr-txt">naturix </strong> <span className="light-font">Cart </span> </h2>
                            <ol className="breadcrumb breadcrumb-menubar">
                                <li> <a href="/"> Home </a> Cart  </li>
                            </ol>
                        </div>
                    </div>
                </section>
                {/* cart content */}

                <section className="shop-wrap sec-space">
                    <div className="container">
                        <div className="cart-table">
                            {/* cart table */}
                            <CartContent/>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        )
    }
}

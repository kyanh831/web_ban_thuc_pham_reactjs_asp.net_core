import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Footer } from './Footer'
import Navbar from './Navbar'

const PaymentSuccessPage = () => {
    const { request } = useParams();
    console.log(request)
    return (
        <>
            <Navbar />
            <div><h1>Payment success</h1> <Link to='/'>Continue to shopping</Link></div>
            <Footer />
        </>
    )
}

export default PaymentSuccessPage
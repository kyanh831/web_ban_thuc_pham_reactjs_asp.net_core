import React, { Component } from 'react'
import { Footer } from '../Share/Footer'
import Navbar from '../Share/Navbar'
import ProductContent from './ProductContent'

class ProductPage extends Component {
    render(){
        return (
            <>
                <Navbar/>
                <ProductContent/>
                <Footer/>
            </>
          )
    }
}

export default ProductPage
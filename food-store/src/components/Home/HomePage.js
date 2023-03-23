import React, { Component } from 'react'
import { Footer } from '../Share/Footer'
import Navbar  from '../Share/Navbar'
import HomeContent from './HomeContent'
class HomePage extends Component {
    render() {
        return (
                <>
                    <Navbar />
                    <HomeContent />
                    <Footer />
                </>
        )
    }
}

export default HomePage
import React, { Component } from 'react'
import AboutContent from './AboutContent'
import { Footer } from '../Share/Footer'
import  Navbar  from '../Share/Navbar'

class AboutPage extends Component {
    render(){
        return (
            <>
                <Navbar/>
                <AboutContent/>
                <Footer/>
            </>
          )
    }
}

export default AboutPage
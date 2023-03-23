import React, { Component } from 'react'
import { Footer } from '../Share/Footer'
import  Navbar  from '../Share/Navbar'

import ContactContent from './ContactContent'

class ContactPage extends Component {
    render(){
        return (
            <>
                <Navbar/>
                <ContactContent/>
                <Footer/>
            </>
          )
    }
}

export default ContactPage
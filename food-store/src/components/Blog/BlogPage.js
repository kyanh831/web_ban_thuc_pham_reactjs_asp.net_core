import React, { Component } from 'react'
import BlogContent from './BlogContent'
import { Footer } from '../Share/Footer'
import  Navbar from '../Share/Navbar'

class BlogPage extends Component {
    render() {
        return (
                <>
                    <Navbar />
                    <BlogContent/>
                    <Footer />
                </>
        )
    }
}

export default BlogPage
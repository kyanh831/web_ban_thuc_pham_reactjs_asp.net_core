import React from 'react'
import { Footer } from '../Share/Footer'
import  Navbar from '../Share/Navbar'
import { BlogDetailContent } from './BlogDetailContent'

export const BlogDetailPage = () => {
    return (
        <>
            <Navbar />
            <BlogDetailContent />
            <Footer />
        </>
    )
}

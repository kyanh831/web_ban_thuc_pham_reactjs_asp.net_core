import React, { Component } from 'react'
import AdminLeftSideBar from '../Share/AdminLeftSideBar'
import AdminNavbar from '../Share/AdminNavbar'
import BlogManageContent from './BlogManageContent'

class AdminBlogPage extends Component {
    render() {
        return (
                <>
                    <AdminNavbar/>
                    <section className='row admin-home bg-gray'>
                    <AdminLeftSideBar/>
                    <BlogManageContent/>
                    </section>
                </>
        )
    }
}

export default AdminBlogPage
import React, { Component } from 'react'
import AdminLeftSideBar from '../Share/AdminLeftSideBar'
import AdminNavbar from '../Share/AdminNavbar'
import AdminHomeContent from './AdminHomeContent'
class AdminHomePage extends Component {
    render() {
        return (
                <>
                    <AdminNavbar/>
                    <section className='row admin-home bg-gray'>
                    <AdminLeftSideBar/>

                    <AdminHomeContent/>
                    </section>
                </>
        )
    }
}

export default AdminHomePage
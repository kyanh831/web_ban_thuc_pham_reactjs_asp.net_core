import React, { Component } from 'react'
import AdminLeftSideBar from '../Share/AdminLeftSideBar'
import AdminNavbar from '../Share/AdminNavbar'
import UserManageContent from './UserManageContent'
class AdminUserPage extends Component {
    render() {
        return (
                <>
                    <AdminNavbar/>
                    <section className='row admin-home bg-gray'>
                    <AdminLeftSideBar/>

                    <UserManageContent/>
                    </section>
                </>
        )
    }
}

export default AdminUserPage
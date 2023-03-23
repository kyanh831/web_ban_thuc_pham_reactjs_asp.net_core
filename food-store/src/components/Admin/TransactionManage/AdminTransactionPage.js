import React, { Component } from 'react'
import AdminLeftSideBar from '../Share/AdminLeftSideBar'
import AdminNavbar from '../Share/AdminNavbar'
import TransactionManageContent from './TransactionManageContent'
class AdminTransactionPage extends Component {
    render() {
        return (
                <>
                    <AdminNavbar/>
                    <section className='row admin-home bg-gray'>
                    <AdminLeftSideBar/>

                    <TransactionManageContent/>
                    </section>
                </>
        )
    }
}

export default AdminTransactionPage
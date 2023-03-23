import React, { Component } from 'react'
import AdminLeftSideBar from '../Share/AdminLeftSideBar'
import AdminNavbar from '../Share/AdminNavbar'
import ProductManageContent from './ProductManageContent'
class AdminProductPage extends Component {
    render() {
        return (
                <>
                    <AdminNavbar/>
                    <section className='row admin-home bg-gray'>
                    <AdminLeftSideBar/>

                    <ProductManageContent/>
                    </section>
                </>
        )
    }
}

export default AdminProductPage
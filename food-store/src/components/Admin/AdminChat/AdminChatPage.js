import React from 'react'
import AdminLeftSideBar from '../Share/AdminLeftSideBar'
import AdminNavbar from '../Share/AdminNavbar'
import { AdminChatContent } from './AdminChatContent'

export const AdminChatPage = () => {
    return (
        <>
            <AdminNavbar />
            <section className='row admin-home bg-gray'>
                <AdminLeftSideBar />

                <AdminChatContent />
            </section>
        </>
    )
}

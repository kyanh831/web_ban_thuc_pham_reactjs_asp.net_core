import React, { Component } from 'react'
import {BlogTable} from './BlogTable'
class BlogManageContent extends Component {
    render() {
        return (
            <>
                <div className='col-10 admin-home-content' style={{ height: "2000px" }}>
                    <div className='admin-user-heard'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin"><i className="fa-solid fa-house ms-2"></i> Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Transaction manage</li>
                            </ol>
                        </nav>
                    </div>
                    <div className='admin-user-content'>
                        <BlogTable/>
                    </div>

                </div>
            </>
        )
    }
}

export default BlogManageContent
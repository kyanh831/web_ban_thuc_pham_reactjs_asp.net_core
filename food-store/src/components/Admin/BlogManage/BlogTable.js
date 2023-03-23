import React from 'react'

export const BlogTable = () => {
    return (
        <>
            <div className='user-table table-responsive'>
                <div className='user-table-header'>
                    <h4>Blogs list</h4>
                    <div className='row'>
                        <div className='col-6'>
                            <input type="text" placeholder='Find blog...' />
                            <lord-icon
                                src="https://cdn.lordicon.com/zniqnylq.json"
                                trigger="hover"
                                style={{ width: "38px", height: "30px" }}>
                            </lord-icon>
                        </div>
                        <div className='col-6 d-flex'>
                            <p>Start:</p>
                            <input type="date" className='m-2'/>
                            <p>End:</p>
                            <input type="date" className='m-2'/>
                        </div>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>Author</th>
                            <th>Topic</th>
                            <th>Blog name</th>
                            <th>Status</th>
                            <th>Time</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>kyanh123@gmail</p></td>
                            <td><p>Health</p></td>
                            <td><p>food healthy</p></td>
                            <td><span className="badge bg-secondary">removed</span></td>
                            <td><p>2022/10/20-8:25am</p></td>
                            <td className='options'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/bxxnzvfm.json"
                                    trigger="hover"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                                <lord-icon
                                    src="https://cdn.lordicon.com/kfzfxczd.json"
                                    trigger="hover"
                                    colors="primary:#e83a30"
                                    scale="40"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                            </td>
                        </tr>
                        <tr>
                            <td><p>kyanh123@gmail</p></td>
                            <td><p>Health</p></td>
                            <td><p>food healthy</p></td>
                            <td><span className="badge bg-success">posted</span></td>
                            <td><p>2022/10/20-8:25am</p></td>
                            <td className='options'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/bxxnzvfm.json"
                                    trigger="hover"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                                <lord-icon
                                    src="https://cdn.lordicon.com/kfzfxczd.json"
                                    trigger="hover"
                                    colors="primary:#e83a30"
                                    scale="40"
                                    style={{ width: "40px", height: "40px" }}>
                                </lord-icon>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="rel-div pt-50">
                    <div className="divider-full-1"></div>
                    <div className="nav-page">
                        <a href="#" className="fa fa-long-arrow-left left"></a>
                        <a href="#" className="fa fa-long-arrow-right right"></a>
                    </div>
                </div>
                <div className="pagination-wrap">
                    <ul className="pagintn">
                        <li><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#">04</a></li>
                        <li><a href="#">05</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">15</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

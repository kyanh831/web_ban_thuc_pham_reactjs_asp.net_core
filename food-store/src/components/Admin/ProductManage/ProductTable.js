import React from 'react'
import { AddProductModal } from './AddProductModal'
import { EditProductModal } from './EditProductModal'

export const ProductTable = () => {
    return (
        <>  
            <AddProductModal/>
            <EditProductModal/>
            <div className='user-table table-responsive'>
                <div className='user-table-header'>
                    <h4>Product list</h4>
                    <div className='row'>
                        <div className='col-6'>
                            <input type="text" placeholder='Find product...' />
                            <lord-icon
                                src="https://cdn.lordicon.com/zniqnylq.json"
                                trigger="hover"
                                style={{ width: "38px", height: "30px" }}>
                            </lord-icon>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <button type="button" className="slide-btn" data-bs-toggle="modal" data-bs-target="#EditProductModal"><i className="fa fa-plus me-1"></i>Create</button>
                        </div>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>Image</th>
                            <th>Product name</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/tao-1.webp" className='table-img img-tooltip' /></td>
                            <td><p>apple</p></td>
                            <td><span className="badge bg-danger">Out of stock</span></td>
                            <td><p>120</p></td>
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
                            <td><img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1664099047/products/nam-1.png" className='table-img img-tooltip' /></td>
                            <td><p>mushroom</p></td>
                            <td><span className="badge bg-info text-dark">stocking</span></td>
                            <td><p>120</p></td>
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

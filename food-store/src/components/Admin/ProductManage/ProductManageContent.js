import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setImgs, setOptions, setProducts } from '../../../redux/actions/productActions';
import { AddProductModal } from './AddProductModal';
import { EditProductModal } from './EditProductModal';
import { OptionsProduct } from './OptionsProduct';
import ProductImgModal from './ProductImgModal';

const ProductManageContent = () => {
    const [state, setState] = useState(false);
    const [stateEdit, setStateEdit] = useState(false);
    const [stateOptions, setStateOptions] = useState(false);
    const [stateImg, setStateImg] = useState(false);


    const [pageNumb, setPageNumb] = useState(1)
    const [numbPage, setNumbPage] = useState(null)
    const [product, setProduct] = useState({})
    const [productId, setProductId] = useState(0)

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const products = useSelector((state) => state.allProducts.products)

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const ls = []
    for (var i = 1; i <= numbPage; i++) {
        ls.push(i)
    }


    const fetchOptions = async (id) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        setLoading(true);
        const response = await axios.get(
            `http://localhost:5000/api/AdminSanPhams/options?id=${id}`, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data.errorCode === 1) {

        } else if (response.data.errorCode === 0) {
            dispatch(setOptions(response.data.options))
        }
        setLoading(false);

    }
    const fetchProducts = async (page) => {
        setLoading(true);
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `http://localhost:5000/api/AdminSanPhams/page?numb=${page}`, config
        ).catch((e) => {
            console.log(e)
        })
        dispatch(setProducts(response.data.product))
        setNumbPage(response.data.numberOfPage)
        setLoading(false);
    }
    const fetchProduct = async (id) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        setLoading(true);
        const response = await axios.get(
            `http://localhost:5000/api/AdminSanPhams/${id}`, config
        ).catch((e) => {
            console.log(e)
        })
        setProduct(response.data?.product)
        setLoading(false);


    }
    const fetchImgs = async (id) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        setLoading(true);
        const response = await axios.get(
            `http://localhost:5000/api/AdminSanPhams/images?id=${id}`, config
        ).catch((e) => {
            console.log(e)
        })
        if(response?.data?.errorCode === 1){
            
        }else if( response?.data?.errorCode === 0 ){
            dispatch(setImgs(response.data?.imgs))
        }
        setLoading(false);


    }

    const handlePage = (page) => {
        setPageNumb(page)
    }

    const handleShowEditProductModal = async (id) => {
        fetchProduct(id)
    }
    const handleShowOptionsProductModal = async (id) => {
        setProductId(id)
        fetchOptions(id)
    }
    const handleShowImgProductModal = async (id) => {
        setProductId(id)
        fetchImgs(id)
    }

    useEffect(() => {
        fetchProducts(pageNumb);
    }, [pageNumb, state, stateEdit,stateOptions,stateImg]) // eslint-disable-line react-hooks/exhaustive-deps


    const renderList = products?.map((product) => {
        //const exists = product.tt.find(item => item.SoLuong === 0)
        return (
            <tr key={product.TenSp}>
                <td>
                    <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/${product.DuongDan}`} className='table-img img-tooltip' />

                </td>
                <td><p>{product.TenSp}</p></td>
                <td className='status-product'>
                    {
                        product.TrangThai ? <span className="badge bg-info text-dark">stocking</span> : <span className="badge bg-danger">Out of stock</span>
                    }
                    <div className='options-tooltip'>
                        <ul>
                            {product.tt.map((t) => {
                                return (
                                    <li className='options-tooltip-item' key={t.MaThongTinSanPham}>
                                        <p>Option: {t.TenThuocTinh} - qty: {t.SoLuong}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </td>

                <td><p>{product.tongsl}</p></td>
                <td className='options'>
                    <i className="fa-regular fa-calendar-plus add-options-product" data-bs-toggle="modal" data-bs-target="#OptionsProduct" onClick={() => handleShowOptionsProductModal(product.MaSp)}></i>
                    <i className="fa-regular fa-images add-img-product" data-bs-toggle="modal" data-bs-target="#ProductImgModal"  onClick={() => handleShowImgProductModal(product.MaSp)}></i>
                    <lord-icon
                        src="https://cdn.lordicon.com/bxxnzvfm.json"
                        trigger="hover"
                        style={{ width: "40px", height: "40px" }}
                        data-bs-toggle="modal" data-bs-target="#EditProductModal"
                        onClick={() => handleShowEditProductModal(product.MaSp)}>
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
        )
    })
    return (
        <>
            <div className='col-10 admin-home-content' style={{ height: "2000px" }}>
                <div className='admin-user-heard'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/admin"><i className="fa-solid fa-house ms-2"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Product manage</li>
                        </ol>
                    </nav>
                </div>
                <div className='admin-user-content'>
                    <div className='statistic'>
                        <div className='item-statistic bg-light-blue'>
                            <i className="fa fa-apple-whole"></i>
                            <h5>Total products</h5>
                            <h3>1655</h3>
                        </div>
                        <div className='item-statistic bg-light-green'>
                            <i className="fa fa-carrot"></i>
                            <h5>Product about to expire</h5>
                            <h3>12</h3>
                        </div>
                        <div className='item-statistic bg-violet'>
                            <i className="fa fa-tomato"></i>
                            <h5>Products sold today</h5>
                            <h3>136</h3>
                        </div>
                        <div className='item-statistic bg-light-yellow'>
                            <i className="fa fa-pumpkin"></i>
                            <h5>Total new</h5>
                            <h3>1</h3>
                        </div>
                    </div>
                    <AddProductModal state={state} stateChanger={setState} />
                    <EditProductModal stateEdit={stateEdit} stateChangerEdit={setStateEdit} product={product} />
                    <OptionsProduct  stateOptions={stateOptions} stateChangerOptions={setStateOptions} productId={productId} />
                    <ProductImgModal stateImg={stateImg} stateChangerImg={setStateImg} productId={productId}/>
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
                                    <button type="button" className="slide-btn" data-bs-toggle="modal" data-bs-target="#AddProductModal"><i className="fa fa-plus me-1"></i>Create</button>
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
                                {renderList}
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
                                {ls.map((p) => {
                                    return (
                                        <li key={p} onClick={() => handlePage(p)}><Link to="#" >{p}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductManageContent
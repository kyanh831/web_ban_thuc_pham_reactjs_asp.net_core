import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../../redux/actions/productActions';
import JoditEditor from 'jodit-react';
import { ToastContainer, toast } from 'react-toastify';

export const AddProductModal = ({stateChanger ,state}) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const category = useSelector((state) => state.allCategory.category)
    const dispatch = useDispatch()
    const [cate, setCate] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isShowAddCate, SetIsShowAddCate] = useState(false);
    const [cateName, setCateName] = useState("");
    const [productName, setProductName] = useState("");
    const [path, setPath] = useState("");
    const [keyWord, setKeyWord] = useState("");
    const [origin, setOrigin] = useState("");
    const [trademark, setTrademark] = useState("");
    const [expiry, setExpiry] = useState("");
    const [content, setContent] = useState("");

    const notifyAdd = () => toast.success('🦄 Added category success!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyAddProduct = () => toast.success('🦄 Added product success!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyAddProductFall = () => toast.error('🦄 Added product FALL!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleShowAddCate = () => {
        SetIsShowAddCate(true)
    }
    const handleHideAddCate = () => {
        SetIsShowAddCate(false)
    }
    const handleAddCate = async () => {
        SetIsShowAddCate(false)
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params = {
            TenLoaiSp: cateName
        }
        setLoading(true);
        const response = await axios.post(
            `http://localhost:5000/api/AdminSanPhams/category`, params, config
        ).catch((e) => {
            console.log(e)
        })
        setCateName("")
        fetchCategory()
        notifyAdd()
    }
    const handleAddProduct = async () => {
        fetchProduct()
    }

    const fetchCategory = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        setLoading(true);
        const response = await axios.get(
            `http://localhost:5000/api/AdminSanPhams/category`, config
        ).catch((e) => {
            console.log(e)
        })
        console.log(response?.data?.category)

        dispatch(setCategory(response?.data?.category))
        setLoading(false);

    }

    const fetchProduct = async () => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params = {
            MaLoaiSp: cate,
            TenSp:productName,
            TieuDe:path,
            MoTa:content,
            HanDung:expiry,
            TuKhoa:keyWord,
            XuatXu:origin,
            ThuongHieu:trademark,
        }
        setLoading(true);
        const response = await axios.post(
            `http://localhost:5000/api/AdminSanPhams/Create`,params, config
        ).catch((e) => {
            console.log(e)
        })
        setLoading(false);
        if(response?.data?.errorCode ===0){
            setCateName("")
            setProductName("")
            setPath("")
            setExpiry("")
            setContent("")
            setKeyWord("")
            setTrademark("")
            setOrigin("")
            notifyAddProduct()
            stateChanger(!state)
        }else{
            notifyAddProductFall()
        }
    }

    useEffect(() => {
        fetchCategory();
    }, [])



    const renderList = category?.map((c) => {
        return (
            <option key={c.MaLoaiSp} value={c.MaLoaiSp}>{c.TenLoaiSp}</option>
        )
    })
    return (
        <>
            <div className="modal fade" id="AddProductModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog  modal-xl modal-fullscreen-xl-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add new product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-lg-6 col-xl-6  col-md-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Product name</label>
                                        <input type="text" value={productName} className="form-control" id="FormControlInputName" placeholder="Enter product name ..." onChange={event => setProductName(event.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Path in browser</label>
                                        <input type="text" value={path} className="form-control" id="FormControlInputPath" placeholder="Ex:/product-name-abc..." onChange={event => setPath(event.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Key work</label>
                                        <input type="text" value={keyWord} className="form-control" id="FormControlInputKey" placeholder="Ex:apple, apple sale, my apple" onChange={event => setKeyWord(event.target.value)}/>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Origin</label>
                                                <input type="text" value={origin} className="form-control" id="FormControlInputKey" placeholder="Ex:vietnam, USA" onChange={event => setOrigin(event.target.value)}/>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Trademark</label>
                                                <input type="text" value={trademark} className="form-control" id="FormControlInputKey" placeholder="Ex:gucci" onChange={event => setTrademark(event.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Expiry</label>
                                                <input type="text" value={expiry} className="form-control" id="FormControlInputKey" placeholder="Ex: 6 month" onChange={event => setExpiry(event.target.value)}/>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                                                <div className='add-cate'>
                                                    <i className="fa fa-circle-plus ms-3 add-cate-icon" onClick={() => handleShowAddCate()}></i>
                                                    <div className={`add-cate-popup ${isShowAddCate ? 'add-cate-popup-active' : ''}`}>
                                                        <input type='text' placeholder='Create new category..' onChange={event => setCateName(event.target.value)} />
                                                        <button onClick={() => handleAddCate()}>Add</button>
                                                        <i className="fa-regular fa-circle-xmark" onClick={() => handleHideAddCate()}></i>
                                                    </div>
                                                    <ToastContainer position="top-right"
                                                        autoClose={4000}
                                                        hideProgressBar={false}
                                                        newestOnTop={false}
                                                        closeOnClick
                                                        rtl={false}
                                                        pauseOnFocusLoss
                                                        draggable
                                                        pauseOnHover
                                                        theme="light" />
                                                </div>
                                                <select id="category" name="cars" onChange={e => setCate(e.target.value)}>
                                                    {renderList}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-xl-6  col-md-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Product describe</label>
                                        {/*  */}
                                        <JoditEditor value={content} onChange={event => setContent(event)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="theme-btn"  onClick={() => handleAddProduct()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

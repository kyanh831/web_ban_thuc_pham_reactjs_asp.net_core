import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { setImgs } from '../../../redux/actions/productActions';

const ProductImgModal = ({ stateChangerImg, stateImg, productId }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const notifyAdd = () => toast.success('🦄 SUCCESS!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyAddFall = () => toast.error('🦄 FALL!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const imgs = useSelector((state) => state.allImgs.imgs)
    const [img, setImg] = useState([]);

    const renderList = imgs?.map((i) => {
        return (
            <div className='img-item' key={i}>
                <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099430/products/${i.DuongDan}`} className='img-xl' />
                <div className='img-item-delete'>
                    <i className="fa fa-trash" onClick={() => handleDeleteImg(i)}></i>
                </div>
            </div>
        )
    })

    const renderPreView = img?.map((i) => {
        return (
            <img key={i.preview} src={URL.createObjectURL(i)} className='img-xs' />
        )
    })
    const handlePreViewImg = (e) => {
        const files = e.target.files
        for (const [key, value] of Object.entries(files)) {
            setImg([...img, value])
        }
    }
    const handleDeleteAll = () => {
        setImg([])
    }

    const fetchImgs = async (id) => {

        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `http://localhost:5000/api/AdminSanPhams/images?id=${id}`, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data?.errorCode === 1) {

        } else if (response.data.errorCode === 0) {
            dispatch(setImgs(response.data?.imgs))
        }
    }

    const fetchImg = async (url) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params = {
            MaSP: productId,
            DuongDan: url
        }
        const response = await axios.post(
            `http://localhost:5000/api/AdminSanPhams/images`, params, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data.errorCode === 0) {
            stateChangerImg(!stateImg)
            fetchImgs(productId)
        }
    }

    const fetchImgDelToCloud = async (public_id) =>{
        const formData = new FormData();
        formData.append("public_id", public_id);
        formData.append("api_key", "715193371798778");
        formData.append("secret_key", "E28-eTktlqsXSBuluVY7StJSGDc");
        return axios.post("https://api.cloudinary.com/v1_1/dkto9qg9y/image/destroy", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
        }).then(response => {
            const data = response.data;
            console.log(data)
        })
    }


    const fetchImgDelete = async (i) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        fetchImgDelToCloud(i.DuongDan.split('.').at(0))
        const response = await axios.delete(
            `http://localhost:5000/api/AdminSanPhams/image?maHinh=${i.MaHinh}`, config
        ).catch((e) => {
            console.log(e)
        })
        stateChangerImg(!stateImg)
        if (response.data.errorCode === 1) {
            notifyAddFall()
            fetchImgs(productId)
        } else if (response.data.errorCode === 0) {
            notifyAdd()
            fetchImgs(productId)
        }
    }
    const fetchImgToCloud = async () => {
        const uploaders = img.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "myUpImg");
            formData.append("api_key", "715193371798778");
            return axios.post("https://api.cloudinary.com/v1_1/dkto9qg9y/image/upload", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url
                fetchImg(fileURL)
            })
        });
    }
    const handleUploadImg = async () => {
        setLoading(true)
        fetchImgToCloud()
        setLoading(false)
        handleDeleteAll()
        notifyAdd()
    }
    const handleDeleteImg = async (id) => {
        fetchImgDelete(id)
    }
    useEffect(() => {
        fetchImgs(productId)
    }, [stateImg])

    return (
        <div className="modal fade" id="ProductImgModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog  modal-xl modal-fullscreen-xl-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Images store</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-lg-6 col-xl-6  col-md-12'>
                                <div className='import-imgs'>
                                    <div className="input-group mb-3">
                                        <input type="file" multiple id="inputGroupFile01" accept="image/*" onChange={handlePreViewImg} />
                                        <Link to="#" className="sm-bnt-wht" onClick={() => handleDeleteAll()}>Delete all</Link>
                                    </div>
                                    {loading ? <p>...</p> : ''}
                                    <div className='img-group'>
                                        {img && renderPreView}
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-xl-6  col-md-12'>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">list images describe</label>
                                    {/*  */}
                                    <div className='img-group'>
                                        {imgs && renderList}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="theme-btn" onClick={() => handleUploadImg()}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductImgModal
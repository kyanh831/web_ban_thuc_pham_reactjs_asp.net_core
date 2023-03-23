import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { setReviewProduct } from '../../redux/actions/commentProductActions';
import { ToastContainer, toast } from 'react-toastify';

const ProductComment = ({ productId }) => {
    const product = useSelector((state) => state.productDetail)
    const [review, setReview] = useState()
    const dispatch = useDispatch()

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [listPayed, setListPayed] = useState([])
    const [rating, setRating] = useState(5)
    const [optionId, setOptionId] = useState()
    const [orderId, setOrderId] = useState()
    let toltalPayed = listPayed ? Object.keys(listPayed).length : 0

    const secondExample = {
        size: 26,
        count: 5,
        color: "gray",
        activeColor: "yellow",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setRating(newValue)
        }
    };
    const notifyAddProduct = () => toast.success('🦄 Added review success!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyAddProductFall = () => toast.error('🦄 You have been review!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyAddFall = () => toast.error('🦄 You have not purchased the product!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const fetchUserProductPayed = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };

        const response = await axios.get(
            `http://localhost:5000/api/NguoiDungs/product-bought?maSp=${productId}&maNg=${userInfo.MaNguoiDung}`, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data?.errorCode === 1) {
            console.log("up error")
        } else if (response?.data?.errorCode === 0) {
            setListPayed(response?.data?.thongtinSanPhams)
            setOrderId(response?.data?.maPhieuDatHang)
        }
    }
    const fetchReview = async () => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };

        const params = {
            MaNguoiDung: userInfo.MaNguoiDung,
            MaPhieuDatHang: orderId,
            MaThongTinSanPham: optionId,
            DiemDanhGia: rating,
            NoiDung: review,
        }
        console.log("parms", params)
        const response = await axios.post(
            `http://localhost:5000/api/NguoiDungs/review/`, params, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data?.errorCode === 1) {
            notifyAddProductFall()
        }else if (response.data?.errorCode === 2) {
            notifyAddFall()
        }
        else if (response?.data?.errorCode === 0) {
            notifyAddProduct()
            fetchReviews()
        }
    }
    const fetchReviews = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/reviews?id=${productId}`
        ).catch((e) => {
            console.log(e)
        })
        dispatch(setReviewProduct(response.data.reviews))
    }

    const renderList = listPayed?.map((l) => {
        return (
            <div className="alert alert-success col-3 me-2" role="alert" key={l.TenThuocTinh}>
                <p className="price" >
                    {product.TenSp} - {l.TenThuocTinh}<input className="form-check-input ms-1 mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultValue={l.MaThongTinSanPham} onClick={() => handleOption(l)}></input>
                </p>
            </div>
        )
    })
   

    const handleOption = (o) => {
        setOptionId(o.MaThongTinSanPham)
    }
    const handleSubmit = () => {
        setReview('')
        fetchReview()
    }

    useEffect(() => {
        fetchUserProductPayed()
        fetchReviews()
    }, [])

    return (
        <>
            <ToastContainer position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <div className="your-review">
                <div className="your-review">
                    <div className="block-inline your-rating">
                        <div className="left">
                            <div className="rating">
                                <span className="fsz-12 gray-color"> Your Rating :  </span>
                                <ReactStars {...secondExample} />
                            </div>
                        </div>
                        <div className="right">
                            <div className="rating">
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="fsz-12 gray-color"> Overall Rating : 5/5  </span>
                            </div>
                        </div>
                    </div>

                    <div className="review-form row">
                        {toltalPayed === 0 ? <h5>Buy it to review</h5>:<h5>You have been bought</h5>  } 
                        {renderList}
                        <div className="form-group col-sm-12">
                            <textarea className="form-control" placeholder="Message" value={review} cols="12" rows="4" onChange={e => setReview(e.target.value)}></textarea>
                        </div>
                        <div className="form-group col-sm-12 text-center ptb-15">
                            <button className="theme-btn" onClick={() => handleSubmit()}> <strong> SUBMIT REVIEW </strong> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductComment
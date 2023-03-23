import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { AddToCart } from '../../redux/actions/cartActions';
import { productDetail } from '../../redux/actions/productActions';
import { Footer } from '../Share/Footer';
import { MenuLeft } from '../Share/MenuLeft'
import Navbar from '../Share/Navbar';
import CommentProduct from './CommentProduct';
import ProductImages from './ProductImages';
import ProductComment from './ProductComment';
import ProductRelate from './ProductRelate';
import ProductReviews from './ProductReviews';


export const ProductDetailContent = () => {
    const dispatch = useDispatch()
    const { productId } = useParams();
    const [isAdd, setIsAdd] = useState(false);
    const product = useSelector((state) => state.productDetail)
    const [loading, setLoading] = useState(false);
    const [option, setOption] = useState("");
    const [qty, setQty] = useState(1);
    const [item, setItem] = useState({})
    const reviews = useSelector((state) => state.allReview.reviews)

    let toltalReview = reviews ? Object.keys(reviews).length : 0

    useEffect(() => {
        setItem({
            ...item,
            TenSp: product.TenSp,
            hinh: product.hinh,
            MaThongTinSanPham: option.MaThongTinSanPham,
            TenThuocTinh: option.TenThuocTinh,
            DonGiaBan: option.DonGiaBan,
            DonGiaKm: option.DonGiaKm,
            qty: qty
        })
        return
    }, [qty, option]);
    function handleAddToCart() {
        dispatch(AddToCart(item))
    }

    const fetchProducts = async () => {
        setLoading(true)
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/${productId.split('_').at(1)}`
        ).catch((e) => {
            console.log(e)
        })
        dispatch(productDetail(response.data.product))
        setLoading(false)
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProducts();
        return () => { setLoading(false) }
    }, [productId])

    function handleOption(tt) {
        setOption(tt);
        setIsAdd(true);
    }

    const countDown = () => {
        qty > 1 ? setQty(qty - 1) : setQty(qty)
    }
    const countUp = () => {
        qty >= option.SoLuong ? setQty(option.SoLuong) : setQty(qty + 1)
    }

    const Loading = () => {
        return (
            <>
                <div className='product-box'>
                    <Skeleton width={250} height={300} />
                </div>

            </>
        )
    };

    const renderDetailOptions = product?.tt?.map((tt) => {
        return (
            <div className=' col-4 ms-1 border border-2 border-light' key={tt.MaThongTinSanPham} >
                <p className="price" >
                    <strong className="clr-txt fsz-20">${tt.DonGiaKm} </strong> <del className="light-font">${tt.DonGiaBan} </del>
                    Amount: {tt.SoLuong} <br />
                    {tt.TenThuocTinh}<input className="form-check-input ms-1 mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={() => handleOption(tt)}></input>
                </p>
                {tt.km[0] ? <span className="badge rounded-pill bg-warning pe-4 ps-4 text-white" key={tt?.km[0]?.PhanTramKm}>sale {tt?.km[0]?.PhanTramKm}%</span> : ""}
            </div>
        )
    })

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <MenuLeft />
                    <div className='col-md-9 pt-15'>

                        <div className="product-single pb-50 clearfix row ms-2 me-2 product-detail-container">
                            {/* img product */}
                            <ProductImages productId={productId.split('_').at(1)} />
                            <div className="col-lg-6 pt-50">
                                <div className="product-content block-inline">

                                    <div className="tag-rate">
                                        <span className="prod-tag tag-1">new</span> <span className="prod-tag tag-2">sale</span>
                                        <div className="rating">
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="fsz-12"> Based on {toltalReview} reviews</span>
                                        </div>
                                    </div>

                                    <div className="single-caption">
                                        <h3 className="section-title">
                                            <a href="#">{product?.TenSp}</a>
                                        </h3>
                                        <span className="divider-2"></span>

                                        <div className='row'>
                                            {loading ? <Loading /> : renderDetailOptions}
                                        </div>
                                        <div className="fsz-16">
                                            <div dangerouslySetInnerHTML={{ __html: product.MoTa }} />
                                        </div>

                                        <div className="prod-btns">
                                            <div className="quantity">
                                                <button className="btn minus"><i className="fa fa-minus-circle" onClick={() => countDown()}></i></button>
                                                <input title="Qty" value={qty} readOnly className="form-control qty" type="number" />
                                                <button className="btn plus"><i className="fa fa-plus-circle" onClick={() => countUp()}></i></button>
                                            </div>
                                        </div>
                                        <ul className="meta">
                                            <li> <strong> Origin </strong> <span>:  {product?.XuatXu}</span> </li>
                                            <li> <strong> Trademark </strong> <span>:  {product?.ThuongHieu}</span> </li>
                                            <li> <strong> Expiry </strong> <span>: {product?.HanDung} month</span> </li>

                                            <li> <strong> Category </strong> <span>:  {product?.TenLoaiSp}</span> </li>
                                            <li className="tags-widget"> <strong> Tags </strong> <span>:  <a href="#">fruits</a> <a href="#">vegetables</a> <a href="#">juices</a></span> </li>
                                        </ul>
                                        <div className="divider-full-1"></div>
                                        <div className="add-cart pt-15">
                                            {isAdd ? <Link to="#" className="theme-btn btn" onClick={() => handleAddToCart()}> <strong> ADD TO CART </strong> </Link> : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="prod-tabs pb-50">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Reviews</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Comments</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <h3 className="fsz-16"><span className="light-font">item </span> <strong>description </strong>  </h3>
                                    <span className="divider-2 crl-bg"></span>

                                    <div className="block-inline pera">
                                        <div dangerouslySetInnerHTML={{ __html: product.MoTa }} />
                                    </div>
                                </div>
                                {/* reviews */}
                                <ProductReviews productId={productId.split('_').at(1)} />
                                {/* comment */}
                                <CommentProduct productId={productId.split('_').at(1)} />
                            </div>
                        </div>

                        {/* product relate */}
                        <ProductRelate productId={productId.split('_').at(1)} />
                        {/* product comment */}
                        <ProductComment productId={productId.split('_').at(1)} />
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

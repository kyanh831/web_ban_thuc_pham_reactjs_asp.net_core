import axios from 'axios';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProductTag = (props) => {
    const { product } = props;
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [isLike, setIsLike] = useState(false);

    const notifyAdd = () => toast.success('🦄 Add to list liked!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyDel = () => toast.info('🦄 Remove to list liked!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const likeProduct = async () => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params = {
            MaSp: product.MaSp,
            MaNguoiDung: userInfo.MaNguoiDung
        }
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/like-product/`, params, config
        ).catch((e) => {
            console.log(e)
        })
        if (response?.data?.state === 1) {
            setIsLike(true)
            notifyAdd()

        }
        if (response?.data?.state === 0) {
            setIsLike(false)
            notifyDel()
        }
    }
    const handleLike = () => {
        likeProduct();
    }

    return (
        <>
            <div className="product-box" >
                <div className="product-media">
                    <img className="prod-img" alt="" src={product.DuongDan ? `${process.env.REACT_APP_CLOUDINARY}products/${product.DuongDan}` : ''} />
                    <img className="shape" alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/shap-small.png" />
                    <div className="prod-icons">
                        <Link to="#" className={`fa fa-heart ${isLike ? 'like-active' : ''}`} onClick={() => handleLike()} > </Link>
                        <Link to="#" className="fa fa-shopping-basket" ></Link>
                        <Link to="#product-preview" className="fa fa-expand" data-bs-toggle="modal" data-bs-target="#product-preview"></Link>
                    </div>
                </div>
                <div className="product-caption">
                    <h3 className="product-title">
                        <NavLink to={`/product-detail/${product.TieuDe + `_` + product.MaSp}`}> {product.TenSp}</NavLink>
                    </h3>
                    <div className="price">
                        <strong className="clr-txt">${product.tt[0].DonGiaKm} </strong> <del className="light-font">${product.tt[0].DonGiaBan} </del>
                    </div>
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

            {/* modal choose options */}
            {/* <div className="modal fade show" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-modal='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">choose your options you want</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                {product?.tt?.map((tt) => {
                                    return (
                                        <p className="price col-4 ms-1 border border-2 border-light" key={tt.SoLuong}>
                                            <strong className="clr-txt fsz-20">${tt.DonGiaKm} </strong> <del className="light-font">${tt.DonGiaBan} </del>
                                            Amount: {tt.SoLuong} <br />
                                            {tt.TenThuocTinh}<input className="form-check-input ms-1 mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                            {tt?.km?.map((k) => {
                                                return (
                                                    <>
                                                        <br />
                                                        <span className="badge rounded-pill bg-warning pe-4 ps-4 text-white" key={k.PhanTramKm}>sale {k.PhanTramKm}%</span>
                                                    </>
                                                )
                                            })}

                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default ProductTag;
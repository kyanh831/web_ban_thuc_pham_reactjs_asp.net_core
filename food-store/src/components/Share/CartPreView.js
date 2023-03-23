import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DeleteToCart } from '../../redux/actions/cartActions';

const CartPreView = () => {
    const dispatch = useDispatch()

    let cartI = JSON.parse(localStorage.getItem("cartItems"))
    let amount = cartI ? cartI.reduce((a, b) => a + b.qty, 0) : 0;

    let total = 0
    cartI?.map((item) => {
        total += (item.DonGiaKm * item.qty)
    })


    const handleDeleteItem = (item) => {
        dispatch(DeleteToCart(item))
    }

    return (
        <>
            <div className='cart-megamenu'>
                <div className="cart-hover">
                    <NavLink to="#"> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/cart-icon-1.png" /> </NavLink>
                    <span className="cnt crl-bg">{amount}</span> <span className="price">

                        ${total}
                    </span>
                    <ul className="pop-up-box cart-popup">
                        {cartI?.map((item) => {
                            total += (item.DonGiaKm * item.qty)

                            return (
                                <li className="cart-list" key={item.MaThongTinSanPham}>
                                    <div className="cart-img"> <img src={`${process.env.REACT_APP_CLOUDINARY}products/${item.hinh['0'].DuongDan}`} alt="" /> </div>
                                    <div className="cart-title">
                                        <div className="fsz-16">
                                            <NavLink to="#"> {item.TenSp}</NavLink>
                                            <h6 className="sub-title-1">Option:{item.TenThuocTinh} Qty:{item.qty}</h6>
                                        </div>
                                        <div className="price">
                                            <strong className="clr-txt">${item.DonGiaKm} </strong> <del className="light-font">${item.DonGiaBan} </del>
                                        </div>
                                    </div>
                                    <div className="close-icon" onClick={() => handleDeleteItem(item)}> <i className="fa fa-close clr-txt"></i> </div>
                                </li>
                            )
                        })}

                        <li className="cart-list sub-total">
                            <div className="pull-left text-black">
                                <strong>Subtotal </strong>
                            </div>
                            <div className="pull-right ps-1">
                                <strong className="clr-txt">${total / 2}</strong>
                            </div>
                        </li>
                        <li className="cart-list buttons">
                            <div className="pull-left">
                                <NavLink to="/cart" className="theme-btn-sm-2 me-2">View Cart</NavLink>
                            </div>
                            <div className="pull-right">
                                <NavLink to="/" className="theme-btn-sm-3"> Checkout </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CartPreView
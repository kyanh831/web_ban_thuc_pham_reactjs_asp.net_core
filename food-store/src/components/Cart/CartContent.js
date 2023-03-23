import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteToCart, MinusQtyProduct, PlusQtyProduct } from '../../redux/actions/cartActions'


const CartContent = () => {
    const dispatch = useDispatch()

    //let cartI = JSON.parse(localStorage.getItem("cartItems"))
    let cartI = useSelector((state) => state.allCart.cartItems)

    let total = 0
    cartI.map((item) => {
        return(
            total += (item.DonGiaKm * item.qty)
            )
    })
    const handleQtyMinus =(item)=> {
        dispatch(MinusQtyProduct(item))
    }

    const handleQtyPlus =(item)=> {
        dispatch(PlusQtyProduct(item))
    }

    const handleDeleteItem =(item)=> {
        dispatch(DeleteToCart(item))
    }

    useEffect(() => {
    }, [total])
    
    return (
        <>
            <form className="cart-form">
                <table className="product-table">
                    <thead className="">
                        <tr>
                            <th>product detail</th>
                            <th></th>
                            <th>Product price</th>
                            <th>quantity</th>
                            <th>total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartI.map((item) => {
                            return (
                                <tr key={item.MaThongTinSanPham}>
                                    <td className="image">
                                        <div className="white-bg">
                                            <Link className="media-link" to="#"><img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/${item?.hinh['0']?.DuongDan}`} alt="" /></Link>
                                        </div>
                                    </td>
                                    <td className="description">
                                        <div className="rating">
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                            <span className="star active"></span>
                                        </div>
                                        <h6 className="fsz-12 gray-color"> Overall Rating : 5/5 </h6>
                                        <div className="divider-2"></div>
                                        <h3 className="product-title no-margin"> <Link to="#"> {item.TenSp} </Link> </h3>
                                        <h6 className="sub-title-1">Option:{item.TenThuocTinh} Qty:{item.qty}</h6>
                                    </td>
                                    <td>
                                        <div className="price fontbold-2">
                                            <strong className="clr-txt">${item.DonGiaKm} </strong> <del className="light-font">${item.DonGiaBan} </del>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="prod-btns fontbold-2">
                                            <div className="quantity">
                                                <button className="btn minus" onClick={()=>handleQtyMinus(item)}><i className="fa fa-minus-circle"></i></button>
                                                <input title="Qty" readOnly value={item.qty} className="form-control qty" type="text" />
                                                <button className="btn plus" onClick={()=>handleQtyPlus(item)}><i className="fa fa-plus-circle"></i></button>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <strong className="clr-txt fsz-20 fontbold-2">${item.qty * item.DonGiaKm}</strong> <Link to="#" className="remove fa fa-close clr-txt" onClick={()=>handleDeleteItem(item)}></Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="continue-shopping">
                    <div className="left">
                        <h6>ENTER VOUCHER CODE IF YOU HAVE ONE. <span className="clr-txt-2"> APPLY HERE </span> </h6>
                        <div className="coupan-form">
                            <input className="form-control" />
                            <button className="btn" type="submit"> APPLY CODE </button>
                        </div>
                    </div>
                    <div className="right"> <strong className="fsz-20 fontbold-2">Subtotal : <span className="clr-txt"> ${total} </span> </strong> </div>
                </div>
                <div className="shp-btn col-sm-12 text-center">
                    <button className="theme-btn-2 btn"> <b> CONTINUE SHOPPING </b> </button>
                    <Link to='/cart/check-out' className="theme-btn-3 btn"> <b> CHECKOUT NOW </b> </Link>
                </div>
            </form>

        </>
    )
}

export default CartContent


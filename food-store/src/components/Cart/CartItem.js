import React from 'react'

const CartItem = (props) => {
    const item = props
    return (
        <>
            <tr>
                <td className="image">
                    <div className="white-bg">
                        <a className="media-link" href="#"><img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/${item?.hinh['0']?.DuongDan}`} alt="" /></a>
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
                    <h3 className="product-title no-margin"> <a href="#"> {item.TenSp} </a> </h3>
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
                            <button className="btn minus"><i className="fa fa-minus-circle"></i></button>
                            <input title="Qty" placeholder="03" className="form-control qty" type="text" />
                            <button className="btn plus"><i className="fa fa-plus-circle"></i></button>
                        </div>

                    </div>
                </td>
                <td>
                    <strong className="clr-txt fsz-20 fontbold-2">${item.qty* item.DonGiaKm}</strong> <a href="#" className="remove fa fa-close clr-txt"></a>
                </td>
            </tr>
        </> 
  )
}

export default CartItem
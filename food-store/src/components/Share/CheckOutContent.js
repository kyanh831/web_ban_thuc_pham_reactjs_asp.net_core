import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteAllCart } from '../../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';

const CheckOutContent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const [transaction, setTransaction] = useState({ HinhThucThanhToan: 0 });

  let cartI = JSON.parse(localStorage.getItem("cartItems"))
  let amount = cartI ? cartI.reduce((a, b) => a + b.qty, 0) : 0;
  let total = 0
  let total2 = 0
  cartI.map((item) => {
    total += (item.DonGiaKm * item.qty)
    total2 += (item.DonGiaBan * item.qty)
  })

  const notifyAdd = () => toast.success('🦄 Success! Please hold your phone, we will call you to confirm your order.', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const submitTransaction = async () => {
    if (!transaction)
      return
    const config = {
      headers: {
        "Authorization": `Bearer ${userInfo?.Token}`,
      }
    };
    const param = {
      "MaNguoiDung": userInfo.MaNguoiDung,
      "TongTien": total,
      "NguoiNhan": transaction.NguoiNhan,
      "SDT": transaction.SDT,
      "GhiChu": transaction.GhiChu,
      "DiaChi": transaction.DiaChi,
      "HinhThucThanhToan": transaction.HinhThucThanhToan,
      "TinhTrangDonHang": "0"
    }
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/GioHangs/phieu-dat-hang`, param, config
    ).catch((e) => {
      console.log(e)
    })

    if (response.data?.errorCode === 1) {
      const requestURL = response.data?.requestURL
      window.location.replace(requestURL)
    } else if (response.data?.errorCode === 0) {
      let MaPhieuDatHang = response.data?.phieuDatHang?.MaPhieuDatHang
      const param2 = []
      cartI.map((item) => {
        param2.push({
          "MaPhieuDatHang": MaPhieuDatHang,
          "MaThongTinSanPham": item.MaThongTinSanPham,
          "SoLuongDat": item.qty,
          "DonGiaBan": item.DonGiaKm,
        })
      })
      const response2 = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/GioHangs/chi-tiet-phieu-dat-hang`, param2, config
      ).catch((e) => {
        console.log(e)
      })
      console.log("response 2", response2.data)
      if (response2.data?.errorCode === 0) {
        dispatch(DeleteAllCart())
        notifyAdd()
        setTimeout(
          function () {
            navigate("/your-profile")
          },
          3000);
      }
    }


  }


  const handleReceiver = e => {
    setTransaction({
      ...transaction,
      NguoiNhan: e.target.value,
    })
  }
  const handleAddress = e => {
    setTransaction({
      ...transaction,
      DiaChi: e.target.value,
    })
  }
  const handlePhone = e => {
    setTransaction({
      ...transaction,
      SDT: e.target.value,
    })
  }
  const handleNote = e => {
    setTransaction({
      ...transaction,
      GhiChu: e.target.value,
    })
  }
  const handleOption = e => {
    setTransaction({
      ...transaction,
      HinhThucThanhToan: e.target.value * 1,
    })
  }
  return (
    <div className=''>
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
      <div className='row'>
        <div className='col-lg-8 col-md-12'>
          <div className=' checkout-left'>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="checkoutName">Receiver name</label>
              <input type="text" id="checkoutName" className="form-control" onChange={(e) => handleReceiver(e)} />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="checkoutAddress">Address</label>
              <input type="text" id="checkoutAddress" className="form-control" onChange={(e) => handleAddress(e)} />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="checkoutPhone">Phone</label>
              <input type="text" id="checkoutPhone" className="form-control" onChange={(e) => handlePhone(e)} />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="checkoutNote">Note</label>
              <textarea className="form-control" id="checkoutNote" rows="2" onChange={(e) => handleNote(e)}></textarea>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-12'>
          <div className='cart-payment'>
            <div className='cart-payment-header'>
              <h4>Other Summary</h4>
              <span> {amount} item</span>
            </div>
            <div className='cart-payment-body'>
              <ul>
                {cartI.map((item) => {
                  return (
                    <li className='payment-item' key={item.MaThongTinSanPham}>
                      <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/${item?.hinh['0']?.DuongDan}`} alt="" />
                      <div className='payment-item-content'>
                        <h5> {item.TenSp}</h5>
                        <div className="price fontbold-2">
                          <strong className="clr-txt">{item.DonGiaKm*23000} Đong </strong> <del className="light-font">${item.DonGiaBan} </del>
                        </div>
                        <h6 className="sub-title-1">Option:{item.TenThuocTinh} Qty:{item.qty}</h6>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='cart-payment-footer'>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='payment-online'>
                        <div className='payment-online-icon'>
                          <i className="fa-brands fa-cc-visa"></i>
                          <i className="fa-sharp fa-solid fa-credit-card"></i>
                          <i className="fa-brands fa-cc-paypal"></i>
                          <i className="fa-brands fa-cc-mastercard"></i>
                        </div>
                        <input className="form-check-input ms-1 mt-1" type="radio" value='1' name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => handleOption(e)}></input>
                      </div>
                    </td>
                    <td>
                      <div className='payment-delivery'>
                        <h6> Payment on delivery</h6>
                        <input className="form-check-input ms-1 mt-1" type="radio" value='0' defaultChecked name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => handleOption(e)}></input>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Subtotal</strong></td>
                    <td><strong className="clr-txt">{total} đong </strong> <del className="light-font">${total2} </del></td>
                  </tr>
                  <tr>
                    <td>Delivery</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td><strong>Total to pay</strong></td>
                    <td><strong className="clr-txt">${total}</strong></td>
                  </tr>
                </tbody>
              </table>
              <button type="button" className="slide-btn" onClick={() => submitTransaction()}>Payment</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CheckOutContent
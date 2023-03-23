import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserNewOder = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [transaction, setTransaction] = useState();
    const [transactionDetail, setTransactionDetail] = useState();


    const fetchUserOder = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };

        const response = await axios.get(
            `http://localhost:5000/api/NguoiDungs/new-order?id=${userInfo.MaNguoiDung}`, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data?.errorCode === 1) {
            console.log("up error")
        } else if (response?.data?.errorCode === 0) {
            setTransaction(response?.data?.phieuDatHang)
            setTransactionDetail(response?.data?.list)

        }
    }
    const ReplaceStatus = (status) => {
        if (status === '0') {
            return (<>
                <div className="track">
                    <div className="step"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                </div>
            </>)
        } else if (status === '1') {
            return (<>
                <div className="track">
                    <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                </div>
            </>)
        } else if (status === '2') {
            return (<>
                <div className="track">
                    <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                    <div className="step active"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                </div>
            </>)
        } else if (status === '3') {
            return (<>
                <div className="track">
                    <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                    <div className="step active"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                    <div className="step active"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                    <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                </div>
            </>)
        } else {
            return (<>
                <div className="track">
                    <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                    <div className="step active"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                    <div className="step active"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                    <div className="step active"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                </div>
            </>)
        }
    }
    const renderList = transactionDetail?.map((t) => {
        return (
            <tr key={t.TenSp}>
                <td><div className="aside"><img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667578469/products/${t.DuongDan}`} className="img-sm border" /></div></td>
                <td><strong>{t.TenSp}</strong>
                <br/>
                    <Link to={`/product-detail/${t.TieuDe + `_` + t.MaSp}`}>Rating now to get back your money</Link>
                </td>
            </tr>
        )
    })
    useEffect(() => {
        fetchUserOder()
    }, [])
    return (
        <>
            <h4>New</h4>
            <article className="card">
                <div className="card-body row">
                    <div className="col"> <strong>Create by day:</strong> <br />{transaction?.NgayLap}</div>
                    <div className="col"> <strong>Your order:</strong> <br /> {transaction?.NguoiNhan}, | <i className="fa fa-phone"></i> {transaction?.Sdt} </div>
                    <div className="col"> <strong>Status:</strong> <br /> Picked by the courier </div>
                    <div className="col"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
                </div>
            </article>

            {transaction ? ReplaceStatus(transaction?.TinhTrangDonHang) : ""}
            <table className="table table-borderless">
                <tbody>
                    {renderList}
                    <tr>
                        <td><h4><strong>Total to pay</strong></h4></td>
                        <td><h4><strong className="clr-txt">${transaction?.TongTien}</strong></h4></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/cart/check-out'>See you Detail <i className="fa fa-arrow-right"></i></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UserNewOder
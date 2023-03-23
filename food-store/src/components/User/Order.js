import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Order = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [orders, setOrders] = useState([]);

    const fetchUserOders = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };

        const response = await axios.get(
            `http://localhost:5000/api/NguoiDungs/orders?id=${userInfo.MaNguoiDung}`, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data?.errorCode === 1) {
            console.log("up error")
        } else if (response?.data?.errorCode === 0) {
            setOrders(response?.data?.phieuDatHangs)
        }
    }
    useEffect(() => {
        fetchUserOders()
    }, [])

    const ReplaceStatus = (status) => {
        if (status === '0') {
            return (<>
                <span className="badge bg-warning text-dark">unpaid</span>
            </>)
        } else if (status === '1') {
            return (<>
                <span className="badge rounded-pill bg-info text-dark">Checked</span>
            </>)
        } else if (status === '2') {
            return (<>
                <span className="badge rounded-pill bg-primary">Primary</span>
            </>)
        } else if (status === '3') {
            return (<>
                <span className="badge rounded-pill bg-primary">Primary</span>
            </>)
        } else {
            return (<>
                <span className="badge rounded-pill bg-primary">Primary</span>
            </>)
        }
    }
    const renderList = orders?.map((o) => {
        return (
            <tr key={o.MaPhieuDatHang}>
                <td>{o.MaPhieuDatHang}</td>
                <td>{o.NgayLap}</td>
                <td>{o.TongTien}</td>
                <td>{ReplaceStatus(o.TinhTrangDonHang)}</td>
            </tr>
        )
    })
    return (
        <>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Day create</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList}
                </tbody>
            </table>
        </>
    )
}

export default Order
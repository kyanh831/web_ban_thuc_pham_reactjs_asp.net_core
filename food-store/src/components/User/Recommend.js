import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsRecommend } from '../../redux/actions/productActions'

const Recommend = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const recommends = useSelector((state) => state.recommends.recommends)
    const dispatch = useDispatch()
    console.log(recommends)
    const fetchUserRecommends = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };

        const response = await axios.get(
            `http://localhost:5000/api/NguoiDungs/NBCF?id=${userInfo.MaNguoiDung}`, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data?.errorCode === 1) {
            console.log("up error")
        } else if (response?.data?.errorCode === 0) {
            dispatch(setProductsRecommend(response?.data?.recommends))
        }
    }

    useEffect(() => {
        fetchUserRecommends()
    }, [])
    return (
        <ul className="row">
            {recommends ? recommends.map((r) => {
                return (
                    <li className="col-md-6" key={r.TenSp}>
                        <figure className="itemside mb-3">
                            <div className="aside"><img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667578469/products/${r.DuongDan}`} className="img-sm border" /></div>
                            <figcaption className="info align-self-center">
                                <p className="title">{r.TenSp}<br /> {r.TenThuocTinh}</p> <span className="text-muted">${r.DonGiaKm} </span>
                            </figcaption>
                        </figure>
                    </li>
                )

            }) : ""}
        </ul>
    )
}

export default Recommend
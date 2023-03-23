import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsSale } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const HomeProductSale = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const products = useSelector((state) => state.allProductsSale.products)
    const options = {
        margin: 6,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1200: {
                items: 5,

            }
        },
    }
    const fetchProductNew = async () => {
        setLoading(true)
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/promotion`
        ).catch((e) => {
            console.log(e)
        })
        setLoading(false)
        dispatch(setProductsSale(response?.data?.product))
    }

    useEffect(() => {
        fetchProductNew();
    }, [])
    const renderList = products?.map((p) => {
        return (
            <div className='item' key={p.TenSp}>
                <div className="random-prod">
                <div class="tag-new"> <span>-10%</span> </div>
                    <div className="random-img">
                        <img alt="" src={p.DuongDan ? `${process.env.REACT_APP_CLOUDINARY}products/${p.DuongDan}` : ''} />
                    </div>
                    <div className="random-text">
                        <span className="divider"></span>
                        <h5 className="fsz-16">  <Link to={`/product-detail/${p.TieuDe + `_` + p.MaSp}`}> {p.TenSp.toLowerCase()}</Link> </h5>
                        <div className="price">
                            <strong className="clr-txt">${p.tt[0].DonGiaKm} </strong> <del className="light-font">${p.tt[0].DonGiaBan} </del>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
        <h4 className="sub-title-sm"> BEST SELLER FROM THE FARM </h4>
        <h2 className="fsz-30 pb-15"> <span className="light-font">organic </span> <strong>Best seller arrivals </strong> </h2>
            <OwlCarousel className='owl-theme' {...options}  >
                {loading ? '' : renderList}
            </OwlCarousel>
        </>
    )
}

export default HomeProductSale
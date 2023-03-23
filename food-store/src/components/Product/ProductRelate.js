import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import ProductTag from './ProductTag';
import { Link } from 'react-router-dom';

const ProductRelate = (props) => {
    const { productId } = props;
    const [loading, setLoading] = useState(false);
    const [listProductRelate, setListProductRelate] = useState([])
    const fetchProductRelate = async () => {
        const params = {
            id: productId
        };
        setLoading(true)
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/relate`, { params }
        ).catch((e) => {
            console.log(e)
        })
        setLoading(false)
        setListProductRelate(response?.data?.listRelate)
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductRelate();
        return () => { setLoading(false) }
    }, [productId])


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

    const renderList = listProductRelate?.map((p) => {
        return (
            <div className='item' key={p.TenSp}>
                <div className="random-prod">
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
            <div className="you-like organic-content pb-50">
                <h3 className="fsz-20 pb-15 text-center"><span className="light-font">Related  </span> <strong>Products </strong>  </h3>
                <div className="divider-full-1"></div>
                <div className='row'>
                    <OwlCarousel className='owl-theme' {...options}  >
                        {loading ? '' : renderList}
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default ProductRelate
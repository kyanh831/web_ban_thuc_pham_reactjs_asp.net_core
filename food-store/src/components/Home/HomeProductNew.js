import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomeProductNew = () => {
    const products = useSelector((state) => state.allProductsNew.products)
    const options = {
        margin: 6,
        nav: false,
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
    

    const renderList = products?.map((p) => {
        return (
            <div className='item' key={p.TenSp}>
                <div className="random-prod">
                    <div className='tag-new'>New</div>
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
        <h4 className="sub-title-sm"> NEW FROM THE FARM </h4>
        <h2 className="fsz-30 pb-15"> <span className="light-font">organic </span> <strong>new arrivals </strong> </h2>
            <OwlCarousel className='owl-theme' {...options}  >
                { renderList}
            </OwlCarousel>
        </>
    )
}

export default HomeProductNew
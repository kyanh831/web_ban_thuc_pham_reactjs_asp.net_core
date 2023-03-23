import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useDebounce} from '../../hooks/index'
const ProductSearchBox = (props) => {
    const { message } = props;
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(message,500);


    useEffect(() => {
        if(!debounce.trim()){
            setProduct([]);
        }

        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/api/SanPhams/search?name=${debounce}`);
                setProduct(await response.json());
                setLoading(false);
                console.log(response);

            } catch (e) {
                console.log(e);
            }
        }
        getProducts();
    }, [debounce]);

    const Loading = () => {
        return (
            <>
                loading
            </>
        )
    };

    return (
        <>
            <div className='search-box-home'>
                <span className='search-title'>Did you find some thing</span>
                <div className='search-box-content'>
                    <p>Product suggest</p>
                    <ul className='product-suggest'>
                    {loading? <Loading/> : product?.product?.map((p) => {
                    return (
                        <>
                            <li className='product-suggest-item' key={p.MaSp}>
                                <NavLink to={`/product-detail/${p.TieuDe + `_` + p.MaSp}`}>
                                    <div className='product-suggest-img'>
                                        <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667578469/products/${p.DuongDan}`} alt='' />
                                    </div>
                                    <div className='product-suggest-info'>
                                        <h5>{p.TenSp}</h5>
                                        <div className="price fontbold-2">
                                            <strong className="clr-txt">${p.DonGiaKm} </strong> <del className="light-font">${p.DonGiaBan} </del>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        </>
                    )
                })}

                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ProductSearchBox
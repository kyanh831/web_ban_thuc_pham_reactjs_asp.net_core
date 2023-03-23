import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProducts } from '../../redux/actions/productActions';
import { MenuLeft } from '../Share/MenuLeft';
import ProductTag from './ProductTag';


const ProductContent = () => {
    const [pageNumb, setPageNumb] = useState(1)
    const [numbPage, setNumbPage] = useState(null)
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const ls = []
    for (var i = 1; i <= numbPage; i++) {
        ls.push(i)
    }

    const fetchProducts = async (page) => {
        setLoading(true);
        const response = await axios.get(
            `http://localhost:5000/api/SanPhams/page?numb=${page}`
        ).catch((e) => {
            console.log(e)
        })
        dispatch(setProducts(response.data.product))
        setNumbPage(response.data.numberOfPage)
        setLoading(false);

    }


    const handlePage = (page) => {
        setPageNumb(page)
    }

    useEffect(() => {
        fetchProducts(pageNumb);
    }, [pageNumb]) // eslint-disable-line react-hooks/exhaustive-deps

    const Loading = () => {
        return (
            <>

                <div className="col-lg-4 col-sm-6">
                    <Skeleton height={360} />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <Skeleton height={360} />
                </div>
                <div className="col-lg-4 col-sm-6">
                    <Skeleton height={360} />
                </div>
            </>
        )
    };

    const renderList = products?.map((product) => {
        return (
            <div className="col-lg-4 col-sm-6" key={product.MaSp}  >
                <ProductTag product={product} />
            </div>
        )
    })

    return (
        <>
            <section className="breadcrumb-bg">
                <div className="theme-container container ">
                    <div className="site-breadcumb white-clr">
                        <h2 className="section-title"> <strong className="clr-txt">naturix </strong> <span className="light-font">Shop </span> </h2>
                        <ol className="breadcrumb breadcrumb-menubar">
                            <li> <Link to="/"> Home </Link> SHOP  </li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className='shop-wrap sec-space-bottom'>
                <div className="pattern">
                    <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/white-pattern.png" />
                </div>
                <div className='container rel-div'>
                    <div className="row sort-bar">
                        <div className="icon"> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/logo/logo-2.png" /> </div>
                        <div className="col-lg-6">
                            <div className="sort-dropdown left">
                                <span>CATEGORY</span>
                                <div className="search-wrap">
                                    <input className="form-control" placeholder="" />
                                    <button className="btn" type="submit"> <i className="fa fa-search"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 right'>
                            <div className='sort-dropdown'>
                                <span>BY PRICE</span>
                                <div className='search-selectpicker selectpicker-wrapper'>
                                    <div className='btn-group bootstrap-select input-price' style={{ width: "100%" }}>
                                        <button
                                            className="btn dropdown-toggle btn-default"
                                            data-bs-toggle="dropdown"
                                            title="Low to hight"
                                            aria-expanded="false"
                                        >
                                            <span className="filter-option pull-left"> Low to High </span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="#">Low to hight</Link></li>
                                            <li><Link className="dropdown-item" to="#">Hight to low</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='sort-dropdown'>
                                <span>SORT BY</span>
                                <div className='search-selectpicker selectpicker-wrapper'>
                                    <div className='btn-group bootstrap-select input-price' style={{ width: "100%" }}>
                                        <button type="button" className="btn dropdown-toggle btn-default" data-bs-toggle="dropdown" aria-expanded="false">
                                            Popular item
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="#">Low to hight</Link></li>
                                            <li><Link className="dropdown-item" to="#">Hight to low</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider-full-1"></div>
                    <div className='row'>
                        <MenuLeft />
                        <div className='col-md-9'>
                            <div className="result-bar block-inline">
                                <h4 className="result-txt">search result <b> 125 </b> </h4>

                            </div>
                            <div className='tab-content shop-content'>
                                <div className="tab-pane active in" role="tabpanel">
                                    <div className='row'>
                                        {loading ? <Loading /> : renderList}
                                    </div>
                                    <div className="rel-div pt-50">
                                        <div className="divider-full-1"></div>
                                        <div className="nav-page">
                                            <Link to="#" className="fa fa-long-arrow-left left"></Link>
                                            <Link to="#" className="fa fa-long-arrow-right right"></Link>
                                        </div>
                                    </div>
                                    <div className="pagination-wrap">
                                        <ul className="pagintn">
                                            {ls.map((p) => {
                                                return (
                                                    <li key={p} onClick={() => handlePage(p)}><Link to="#" >{p}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductContent;
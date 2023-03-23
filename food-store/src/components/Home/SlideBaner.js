import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class SlideBanner extends Component {
    render() {

        return (
            <>
                <section className="main-slide">
                    {/* <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/slider/slide-3.jpg"  alt="..." /> */}

                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item  slide-1 active">
                                <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/slider/slide-3.jpg" className="" alt="..." />
                                <div className="carousel-caption d-none d-md-block slide-cap">
                                    <div className='tbl-wrp slide-3'>
                                        <div className="text-middle">
                                            <div className="tbl-cell">
                                                <div className="slide-caption container text-center">
                                                    <div className="slide-title2">
                                                        <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/slide-txt-3.png" />
                                                        <h4 className=""> WE ARE NATURIX, ORGANIC STORE SINCE 1990,LIVE <strong>ORGANIC.</strong> LIVE<strong> HEALTHY. </strong> </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item  slide-2">
                                <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/slider/slide-2.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="slide-caption container text-center">
                                        <div className="slide-title">
                                            <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/slide-txt-1.png" alt="" />
                                            <span>100% Guarantee</span>
                                        </div>
                                        <div className="slide-title2 pb-50">
                                            <h2 className="section-title"> <span className="light-font">Live </span> <strong>organic </strong> <span className="light-font">for live </span> <strong>healthy </strong> </h2>
                                            <h4 className="sub-title"> ORGANIC FRUITS, VEGETABLES, AND LOT MORE TO YOUR DOOR </h4>
                                        </div>
                                        <div className="slide mb-5">
                                            <Link to="/products" className="slide-btn"> Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>









                    {/* <div className="carousel-caption d-none d-md-block position-absolute top-0 start-0">
                        <div className='tbl-wrp slide-3'>
                            <div className="text-middle">
                                <div className="tbl-cell">
                                    <div className="slide-caption container text-center">
                                        <div className="slide-title2">
                                            <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/slide-txt-3.png" />
                                            <h4 className=""> WE ARE NATURIX, ORGANIC STORE SINCE 1990,LIVE <strong>ORGANIC.</strong> LIVE<strong> HEALTHY. </strong> </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-icon">
                        <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                        <Link to="#" className=""><i className="fa-brands fa-square-twitter"></i></Link>
                        <Link to="#" className=""><i className="fa-brands fa-google-plus"></i></Link>
                        <Link to="#" className=""><i className="fa-brands fa-instagram"></i></Link>
                        <Link to="#" className=""><i className="fa-brands fa-behance"></i></Link>
                    </div> */}
                </section>
            </>
        )
    }
}

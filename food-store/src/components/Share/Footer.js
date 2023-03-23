import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <>
            <footer className="page-footer">
                <section className="sec-space light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 footer-widget">
                                <div className="main-logo">
                                    <Link to="index.html"> <img alt="" src="/logo/main-logo.png" />  </Link>
                                    <span className="medium-font">kyAnhStore247</span>
                                </div>
                                <span className="divider-2"></span>
                                <div className="text-widget">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                                    <ul>
                                        <li> <i className="fa fa-map-marker"></i> <span> <strong>100 highland ave,</strong> california, united state </span> </li>
                                        <li> <i className="fa fa-envelope-square"></i> <span><Link to="#">contact@naturix.com</Link> </span> </li>
                                        <li> <i className="fa fa-phone-square"></i> <span><Link to="#">www.naturix.com</Link> </span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4 footer-widget">
                                <h2 className="title-1">  <span className="light-font">naturix  </span> <strong>information </strong> </h2>
                                <span className="divider-2"></span>
                                <ul className="list">
                                    <li> <Link to="#"> about our shop </Link> </li>
                                    <li> <Link to="#"> top sellers </Link> </li>
                                    <li> <Link to="#"> our blog </Link> </li>
                                    <li> <Link to="#"> new products </Link> </li>
                                    <li> <Link to="#"> secure shopping </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-4 footer-widget">
                                <h2 className="title-1">  <span className="light-font">my  </span> <strong>account </strong> </h2>
                                <span className="divider-2"></span>
                                <ul className="list">
                                    <li> <Link to="/"> my account </Link> </li>
                                    <li><Link to="/"> Account Information </Link></li>
                                    <li><Link to="/"> Address Books</Link></li>
                                    <li><Link to="/"> Order History</Link></li>
                                    <li><Link to="/"> Reviews and Ratings</Link></li>
                                    <li><Link to="/"> Returns Requests</Link></li>
                                    <li><Link to="/"> Newsletter</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-4 footer-widget">
                                <h2 className="title-1">  <span className="light-font">photo  </span> <strong>instagram </strong> </h2>
                                <span className="divider-2"></span>
                                <ul className="instagram-widget">
                                    <li> <Link to="#"> <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/80x80-1.jpg" alt="" /> </Link> </li>
                                    <li> <Link to="#"> <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/80x80-2.jpg" alt="" /> </Link> </li>
                                    <li> <Link to="#"> <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/80x80-3.jpg" alt="" /> </Link> </li>
                                    <li> <Link to="#"> <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/80x80-4.jpg" alt="" /> </Link> </li>
                                    <li> <Link to="#"> <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/80x80-5.jpg" alt="" /> </Link> </li>
                                    <li> <Link to="#"> <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/80x80-6.jpg" alt="" /> </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-bottom">
                    <div className="pattern">
                        <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/white-pattern.png" />
                    </div>
                    <div id="to-top" className="to-top"> <i className="fa fa-arrow-up"></i> </div>
                    <div className="container ptb-50">
                        <div className="row">
                            <div className="col-md-6 col-sm-5">
                                <p>©2022 <Link to="#"> <strong> kyAnhStore247.com</strong> </Link>, made with <i className="fa fa-heart red-clr"></i> by ky anh, all right reserved</p>
                            </div>
                            <div className="col-md-6 col-sm-7">
                                <ul className="primary-navbar footer-menu">
                                    <li> <Link to="#">contact us </Link> </li>
                                    <li> <Link to="#">term of use  </Link> </li>
                                    <li> <Link to="#">site map  </Link> </li>
                                    <li> <Link to="#">privacy policy</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

import React from 'react'
const ProductPreViewModal =()=> {

        let style = {
            transform: "translate3d(-1028px, 0px, 0px)",
            transition: "all 0s ease 0s",
            width: "2056px"
        }
        let style2 = {
            width: "514px",
            marginRight: "0px"
        }
        let style3 = {
            transform: "translate3d(0px, 0px, 0px)",
            transition: "all 0s ease 0s",
            width: "685.332px"
        }
        let style4 = {
            width: "171.333px",
            marginRight: "0px"
        }
        return (
            <>
                <div className="modal fade" id="product-preview" data-bs-keyboard="false" tabIndex="-1" role="dialog" aria-hidden="true" style={{ display: "none" }}>
                    <div className="modal-dialog product-modal " style={{ maxWidth: "80%" }}>
                        <div className="modal-content">
                            <a aria-hidden="true" data-bs-dismiss="modal" className="sb-close-btn close" href="#" aria-label="Close"> <i className=" fa fa-close"></i> </a>

                            <div className="product-single pb-50 clearfix row ms-2 me-2">
                                <div className="col-lg-6 col-sm-8 col-sm-offset-2 col-lg-offset-0 pt-50">

                                    <div className="prod-slider sync1 owl-carousel owl-theme owl-loaded" data-bs-ride="carousel">
                                        <div className="owl-stage-outer">
                                            <div className="owl-stage" style={style}>
                                                <div className="owl-item " style={style2}>
                                                    <div className="item">
                                                        <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/tao-2.webp" alt="" />
                                                        <a href="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/prod-big-1.png" data-gal="prettyPhoto[prettyPhoto]" title="Product" className="caption-link"><i className="arrow_expand"></i></a>
                                                    </div>
                                                </div>
                                                <div className="owl-item" style={style2}>
                                                    <div className="item">
                                                        <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/prod-single-2.png" alt="" />
                                                        <a href="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/prod-big-2.png" data-gal="prettyPhoto[prettyPhoto]" title="Product" className="caption-link"><i className="arrow_expand"></i></a>
                                                    </div>
                                                </div>
                                                <div className="owl-item" style={style2}>
                                                    <div className="item">
                                                        <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/tao-2-bg.png" alt="" />
                                                        <a href="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/prod-big-3.png" data-gal="prettyPhoto[prettyPhoto]" title="Product" className="caption-link"><i className="arrow_expand"></i></a>
                                                    </div>
                                                </div>

                                                <div className="owl-item" style={style2}>
                                                    <div className="item">
                                                        <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/prod-single-1.png" alt="" />
                                                        <a href="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/prod-big-1.png" data-gal="prettyPhoto[prettyPhoto]" title="Product" className="caption-link"><i className="arrow_expand"></i></a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="owl-controls">
                                            <div className="owl-nav">
                                                <div className="owl-prev" style={{ display: "none" }}>prev</div>
                                                <div className="owl-next" style={{ display: "none" }}>next</div>
                                            </div>
                                            <div className="owl-dots" style={{}}>
                                                <div className="owl-dot"><span></span></div>
                                                <div className="owl-dot"><span></span></div>
                                                <div className="owl-dot"><span></span></div>
                                                <div className="owl-dot"><span></span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sync2 owl-carousel owl-theme owl-loaded">
                                        <div className="owl-stage-outer">
                                            <div className="owl-stage" style={style3}>
                                                <div className="owl-item " style={style4}><div className="item"> <a href="#"><img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/tao-1.webp" alt="" /> </a> </div></div>
                                                <div className="owl-item " style={style4}> <div className="item"> <a href="#"> <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/tao-2.webp" alt="" /> </a> </div></div>
                                                <div className="owl-item " style={style4}><div className="item"> <a href="#"> <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/tao-1.webp" alt="" /> </a> </div></div>
                                                <div className="owl-item " style={style4}><div className="item"> <a href="#"> <img src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/tao-2.webp" alt="" /> </a> </div></div>
                                            </div>
                                        </div>
                                        <div className="owl-controls"><div className="owl-nav">
                                            <div className="owl-prev" style={{}}><i className="fa fa-long-arrow-left"></i> PREV</div>
                                            <div className="owl-next" style={{}}>NEXT <i className="fa fa-long-arrow-right"></i></div></div>
                                            <div className="owl-dots" style={{}}><div className="owl-dot"><span></span></div>
                                                <div className="owl-dot"><span></span></div></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 pt-50">
                                    <div className="product-content block-inline">

                                        <div className="tag-rate">
                                            <span className="prod-tag tag-1">new</span> <span className="prod-tag tag-2">sale</span>
                                            <div className="rating">
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="star active"></span>
                                                <span className="fsz-12"> Based on 25 reviews</span>
                                            </div>
                                        </div>

                                        <div className="single-caption">
                                            <h3 className="section-title">
                                                <a href="#"> <span className="light-font"> organic </span>  <strong>pinapple</strong></a>
                                            </h3>
                                            <span className="divider-2"></span>
                                            <p className="price">
                                                <strong className="clr-txt fsz-20">$50.00 </strong> <del className="light-font">$65.00 </del>
                                            </p>

                                            <div className="fsz-16">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adiping elit food sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                            </div>

                                            <div className="prod-btns">
                                                <div className="quantity">
                                                    <button className="btn minus"><i className="fa fa-minus-circle"></i></button>
                                                    <input title="Qty" placeholder="03" className="form-control qty" type="text" />
                                                    <button className="btn plus"><i className="fa fa-plus-circle"></i></button>
                                                </div>

                                               
                                            </div>
                                            <ul className="meta">
                                                <li> <strong> Origin </strong> <span>:  vietnam</span> </li>
                                                <li> <strong> Trademark </strong> <span>:  vinmart</span> </li>
                                                <li> <strong> Expiry </strong> <span>:  6 month</span> </li>

                                                <li> <strong> Category </strong> <span>:  Fruits</span> </li>
                                                <li className="tags-widget"> <strong> Tags </strong> <span>:  <a href="#">fruits</a> <a href="#">vegetables</a> <a href="#">juices</a></span> </li>
                                            </ul>
                                            <div className="divider-full-1"></div>
                                            <div className="add-cart pt-15">
                                                <a href="#" className="theme-btn btn"> <strong> ADD TO CART </strong> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
}
export default ProductPreViewModal;

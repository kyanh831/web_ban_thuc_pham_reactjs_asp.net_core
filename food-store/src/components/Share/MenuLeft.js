import React from 'react'

export const MenuLeft = () => {
    return (
        <>
            <div className="col-md-3 pt-15">
                <div className="widget-wrap">
                    <h2 className="widget-title"> <span className="light-font">Refine by</span> <strong>category</strong> </h2>
                    <div className="divider-full-1"></div>
                    <ul className="cate-widget">
                        <li> <i className="fa fa-circle-arrow-right clr-txt"></i><a href="#">Fruits</a>
                            <ul className="cate-widget">
                                <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Apple</a> </li>
                                <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Cherry</a> </li>
                                <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Pinapple</a> </li>
                            </ul>
                        </li>
                        <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Vegetables</a>
                            <ul className="cate-widget">
                                <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Onion</a> </li>
                                <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Cabbage</a> </li>
                                <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Salad</a> </li>
                            </ul>
                        </li>
                        <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Juices</a> </li>
                        <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Dried Fruits</a> </li>
                        <li> <i className="fa fa-arrow-circle-o-right clr-txt"></i> <a href="#">Breads</a> </li>
                    </ul>
                </div>

                <div className="widget-wrap">
                    <h2 className="widget-title"> <span className="light-font">Natrix</span> <strong>Highlights</strong> </h2>
                    <div className="divider-full-1"></div>
                    <ul className="checkbox-widget">
                        <li className="form-group"><label className="checkbox-inline"><input value="" type="checkbox" defaultChecked="" /> <span>Deals of the day</span></label> </li>
                        <li className="form-group"><label className="checkbox-inline"><input value="" type="checkbox" /> <span>Fresh shipping</span></label> </li>
                        <li className="form-group"><label className="checkbox-inline"><input value="" type="checkbox" defaultChecked="" /> <span>Best sellers</span></label> </li>
                        <li className="form-group"><label className="checkbox-inline"><input value="" type="checkbox" /> <span>Featured products</span></label> </li>
                    </ul>
                </div>

                <div className="widget-wrap">
                    <h2 className="widget-title"> <span className="light-font">Sort by</span> <strong>Price Range</strong> </h2>
                    <div className="divider-full-1"></div>
                    <div className="sort-range pt-15">
                        <span>PRICE</span> <div id="price-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                            <div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "0%", width: "100%" }}>
                                <span className="price-range-both value"><i>$10 - </i>1000</span>
                            </div>
                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "0%" }}>
                                <span className="price-range-min value">$10</span></span>
                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "100%" }}>
                                <span className="price-range-max value">$1000</span></span>
                        </div>
                    </div>
                </div>

                <div className="widget-wrap">
                    <h2 className="widget-title"> <span className="light-font">Best</span> <strong>Sellers</strong> </h2>
                    <div className="divider-full-1"></div>
                    <div className="widget-post pt-15">
                        <div className="random-prod">
                            <div className="random-img">
                                <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/post-xs-1.png" />
                            </div>
                            <div className="random-text">
                                <h3 className="title-1 no-margin"> <a href="#"> <span className="light-font">organic </span> <strong>blackberry </strong> </a> </h3>
                                <span className="divider"></span>
                                <div className="price">
                                    <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                </div>
                            </div>
                        </div>
                        <div className="random-prod">
                            <div className="random-img">
                                <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/post-xs-2.png" />
                            </div>
                            <div className="random-text">
                                <h3 className="title-1 no-margin"> <a href="#"> <span className="light-font">organic </span> <strong>peach </strong> </a> </h3>
                                <span className="divider"></span>
                                <div className="price">
                                    <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                </div>
                            </div>
                        </div>
                        <div className="random-prod">
                            <div className="random-img">
                                <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/post-xs-3.png" />
                            </div>
                            <div className="random-text">
                                <h3 className="title-1 no-margin"> <a href="#"> <span className="light-font">organic </span> <strong>redberry </strong> </a> </h3>
                                <span className="divider"></span>
                                <div className="price">
                                    <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                </div>
                            </div>
                        </div>
                        <div className="random-prod">
                            <div className="random-img">
                                <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/post-xs-4.png" />
                            </div>
                            <div className="random-text">
                                <h3 className="title-1 no-margin"> <a href="#"> <span className="light-font">organic </span> <strong>grapes </strong> </a> </h3>
                                <span className="divider"></span>
                                <div className="price">
                                    <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget-wrap">
                    <h2 className="widget-title"> <span className="light-font">Sort by</span> <strong>Tags</strong> </h2>
                    <div className="divider-full-1"></div>
                    <ul className="tags-widget">
                        <li> <a href="#">fruits</a> </li>
                        <li> <a href="#">vegetables</a> </li>
                        <li> <a href="#">juices</a> </li>
                        <li> <a href="#">natural food</a> </li>
                        <li> <a href="#">food</a> </li>
                        <li> <a href="#">Breads</a> </li>
                        <li> <a href="#">natural</a> </li>
                        <li> <a href="#">healthy</a> </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

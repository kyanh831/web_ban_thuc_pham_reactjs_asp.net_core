import React from 'react'
import { Link } from 'react-router-dom'
import { MenuLeft } from '../Share/MenuLeft'

export const BlogDetailContent = () => {
    return (
        <>
            <section className="breadcrumb-bg bg-2">
                <div className="theme-container container ">
                    <div className="site-breadcumb white-clr">
                        <h2 className="section-title"> <strong className="clr-txt"><font style={{ verticalAlign: "inherit" }}></font></strong> <font style={{ verticalAlign: "inherit" }}><span className="light-font"><font style={{ verticalAlign: "inherit" }}>Blog </font></span><strong className="clr-txt"><font style={{ verticalAlign: "inherit" }}>naturix</font></strong></font><span className="light-font"><font style={{ verticalAlign: "inherit" }}></font></span> </h2>
                        <ol className="breadcrumb breadcrumb-menubar">
                            <li> <Link to="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Home</font></font></Link><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> Blog  </font></font></li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className="sec-space-bottom">
                <div className="container pt-50">
                    <div className="row">
                        <MenuLeft/>
                        <div className="col-md-8 pt-15">
                            <div className="blog-single">       
                                <div className="content">        
                                    <div className="blog-media">
                                        <h4 className="sub-title-1"> Tag: Apartment, Posted: John Doe, Date: 26 June 2016 </h4>
                                        <h2 className="fsz-30"> <span className="light-font">15 Best fruits for your </span> <strong>healthy hair &amp; skin</strong> </h2>
                                        <img alt="" src="assets/img/blog/blog-single-1.jpg"/>
                                    </div>
                                    <div className="caption">                                       
                                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>

                                        <blockquote> <i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...</i> </blockquote>

                                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
                                    </div>   
                                </div>
                                <div className="author crl-bg"> 
                                    <img alt="" src="assets/img/extra/author-1.png"/>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor sit amet consectetuer </p>
                                </div>

                                <div className="pb-50">
                                    <h2 className="title-2 pb-15"> <span className="light-font"> Visitor </span> <strong> Comments </strong> <span className="gray-color fsz-12">(2)</span>  </h2>
                                    <div className="view-comment">
                                        <div className="img-comment">
                                            <img alt="" src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1663760338/users/user-3.jpg" className='img'/>
                                        </div>
                                        <div className="caption-comment">
                                            <h3 className="fsz-16 no-margin">LUISIANA GARCIAS <span className="fsz-12 gray-color">5 Min ago</span> </h3>
                                            <p> Category : <span className="clr-txt">Fruits</span> </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam...</p>
                                        </div>
                                    </div>
                                    <div className="view-comment">
                                        <div className="img-comment">
                                            <img alt="" src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1663760338/users/user-2.jpg" className='img'/>
                                        </div>
                                        <div className="caption-comment">
                                            <h3 className="fsz-16 no-margin">LUISIANA GARCIAS <span className="fsz-12 gray-color">5 Min ago</span> </h3>
                                            <p> Category : <span className="clr-txt">Fruits</span> </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam...</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="divider-full-1"></div>

                                <div className="pt-50">
                                    <h2 className="title-2 pb-15"> <span className="light-font"> Leave a  </span> <strong> Comments </strong>  </h2>
                                    <div className="comment-form pt-15">
                                        <form className="comment-form row">
                                            <div className="form-group col-sm-12">
                                                <textarea className="form-control" placeholder="Message" cols="12" rows="4"></textarea>                                                                                     
                                            </div>
                                            <div className="form-group col-sm-12 text-center pt-15">                                               
                                                <button className="theme-btn" type="submit"> <strong> SEND MESSSAGE </strong> </button>                                            
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>                        
                    </div>
                </div>                
            </section>
        </>
    )
}

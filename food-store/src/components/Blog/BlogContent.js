import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuLeft } from '../Share/MenuLeft'
import { BlogTag } from './BlogTag'

export default class BlogContent extends Component {
    render() {
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
                {/* content */}
                <section className="blog-wrap sec-space-bottom">
                    <div className="container pt-50">

                        <div className="row">
                            <MenuLeft />

                            <div className="col-md-8 pt-15">
                                <div className="blog-wrap">
                                    <div className="blog-heading">
                                        <h2 className="title-2"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Tin mới nhất</font></font></h2>

                                        <ul id="tabs" className="blog-tabs">
                                            <li className="active"><Link to="#blog-tab-1" data-toggle="tab"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>All</font></font></Link></li>
                                            <li className=""><Link to="#blog-tab-2" data-toggle="tab"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> Organic</font></font></Link></li>
                                            <li className=""><Link to="#blog-tab-3" data-toggle="tab"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Fruit</font></font></Link></li>
                                            <li className=""><Link to="#blog-tab-4" data-toggle="tab"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Vegetables</font></font></Link></li>
                                            <li className=""><Link to="#blog-tab-5" data-toggle="tab"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Juices</font></font></Link></li>
                                            <li className=""><Link to="#blog-tab-6" data-toggle="tab"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}> Natural</font></font></Link></li>
                                            <li className=""><Link to="#blog-tab-7" data-toggle="tab"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Other</font></font></Link></li>
                                        </ul>
                                    </div>

                                    <div className="divider-full-1"></div>
                                    <div className="blog-content tab-content">
                                        <div id="blog-tab-1" className="tab-pane active in">
                                            <BlogTag />
                                            <BlogTag />
                                            <BlogTag />
                                            <BlogTag />
                                            <div className="pagination-wrap">
                                                <div className="divider-full-1"></div>
                                                <ul className="pagintn pt-50">
                                                    <li><Link to="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>01</font></font></Link></li>
                                                    <li><Link to="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>02</font></font></Link></li>
                                                    <li><Link to="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>03</font></font></Link></li>
                                                    <li><Link to="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>04</font></font></Link></li>
                                                    <li><Link to="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>05</font></font></Link></li>
                                                    <li><Link to="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>...</font></font></Link></li>
                                                    <li><Link to="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>15</font></font></Link></li>
                                                </ul>
                                            </div>
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
}

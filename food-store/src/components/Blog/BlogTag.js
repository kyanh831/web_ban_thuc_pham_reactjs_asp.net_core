import React from 'react'
import { Link } from 'react-router-dom'

export const BlogTag = () => {
    return (
        <>
            <div className="row ptb-15">
                <div className="col-sm-6">
                    <Link to="#" className=""> <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/blog/blog-1.jpg" /> </Link>
                </div>
                <div className="col-sm-6">
                    <div className="blog-caption">
                        <h4 className="sub-title-1"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>DATE: 26 JUNE 2022</font></font></h4>
                        <h2 className="title-2"> <Link to="/"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>15 Best & cheap foods for your healthy hair and skin</font></font></Link> </h2>
                        <span className="divider-1 crl-bg"></span>
                        <div className="ptb-10">
                            <p><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam Lorem ipsum dolor ...</font></font></p>
                        </div>
                        <Link to="/blog-detail" className="clr-txt"> <strong><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Continue Reading</font></font><i className="fa fa-long-arrow-right"></i> </strong> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

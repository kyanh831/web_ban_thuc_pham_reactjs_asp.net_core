import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ContactContent extends Component {
    render() {
        return (
            <>
                <section className="breadcrumb-bg">
                    <div className="theme-container container ">
                        <div className="site-breadcumb white-clr">
                            <h2 className="section-title"> <strong className="clr-txt">naturix </strong> <span className="light-font">Contact </span> </h2>
                            <ol className="breadcrumb breadcrumb-menubar">
                                <li> <a href="/"> Home </a> Contact  </li>
                            </ol>
                        </div>
                    </div>
                </section>
                {/* content */}
                <section className='contact-wrap sec-space-bottom'>
                    <div className="container rel-div pt-50">
                        <div className="row">
                            <div className="col-md-8">
                                <div className='contact-map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.5338601393205!2d106.78583295447892!3d10.855596722380547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e7ea103df%3A0xb6cf10bb7d719327!2zSHV0ZWNoIEtodSBFIC0gVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBOaMOibiBM4buxYyBDaOG6pXQgTMaw4bujbmcgQ2Fv!5e0!3m2!1svi!2s!4v1667475469136!5m2!1svi!2s" 
                                width="750" height="400" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='osdhdfk'></iframe>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-details">
                                    <h3 className="fsz-25"><span className="light-font">Naturix  </span> <strong>Address </strong>  </h3>
                                    <h6 className="sub-title-1 pb-15">kyanhstore247</h6>

                                    <h5 className="clr-txt fsz-12 pt-15">NATURIX STORE</h5>
                                    <p>142 West newton, NY 19088, United States</p>

                                    <ul>
                                        <li> <strong>Call:  </strong> <i>+7 (100) 2234 999</i> </li>
                                        <li> <strong>Email: </strong> <i> <Link to="#">kyanhstore247@gmail.com</Link> </i> </li>
                                        <li> <strong>Skype: </strong> <i> <Link to="#"> kyanhstore247.Property </Link> </i> </li>
                                        <li> <strong>Facebook: </strong> <i>  <Link to="#"> kyanhstore247.facebook </Link> </i> </li>
                                        <li> <strong>Twitter: </strong> <i>  <Link to="#"> @kyanhstore247.Property </Link> </i> </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="divider-full-1"></div>
                            <div className="pt-50 col-md-8 col-md-offset-2">
                                <h3 className="fsz-25 text-center"><span className="light-font">Contact </span> <strong>naturix </strong>  </h3>
                                <h6 className="sub-title-1 text-center">kyanhstore247</h6>

                                <div className="contact-form pt-50">
                                    <form className="contact-form row" id="contact-form">
                                        <div className="form-group col-sm-4">
                                            <input className="form-control" placeholder="Name" name="Name" id="Name" required="" type="text"/>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <input className="form-control" placeholder="Email" name="Email" id="Email" required="" type="email"/>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <input className="form-control" placeholder="Phone" name="Phone" id="Phone" type="text"/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <textarea className="form-control" placeholder="Message" name="Message" id="Message" cols="12" rows="4"></textarea>
                                        </div>
                                        <div className="form-group col-sm-12 text-center pt-15">
                                            <button className="theme-btn" type="submit"> <strong> SEND EMAIL </strong> </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

export default ContactContent
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { setProductsNew } from '../../redux/actions/productActions'
import ProductSlide from '../Product/ProductSlide'
import HomeProductNew from './HomeProductNew'
import HomeProductSale from './HomeProductSale'
import { SlideBanner } from './SlideBaner'

const HomeContent = () => {

  const dispatch = useDispatch()
  const fetchProductNew = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/SanPhams/new`
    ).catch((e) => {
      console.log(e)
    })
    dispatch(setProductsNew(response?.data?.product))
  }
  useEffect(() => {

    fetchProductNew();
  }, [])
  return (
    <div>
      <SlideBanner />
      {/* content about */}
      <section className="organic-farm-2 sec-space-bottom">

        <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/sec-img-7.png" className="left-bottom-img" />
        <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/sec-img-8.png" className="right-top-img" />

        <div className="pattern">
          <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/white-pattern.png" />
        </div>
        <div className="section-icon">
          <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/icon-1.png" />
          <div className="ptb-15 icon">
            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
            <span className="light-font"> a taste of </span> <strong>real food</strong>
            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
          </div>
        </div>

        <div className="container rel-div">
          <div className="row">
            <div className="col-sm-6 text-right fsz-16 pt-15 xs-text">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  enim ad minim veniam, quis nostrud exerci tation.</p>
            </div>
            <div className="col-sm-6 text-left xs-text">
              <h2 className="section-title"> <span className="light-font">we are </span> <strong>organic farmfood <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/logo-icon.png" alt="" /> </strong> </h2>
              <h4 className="sub-title"> ABOUT NATURIX FARMFOOD </h4>
            </div>
          </div>
          <div className='tab-content organic-content row'>
            {/* product */}
            <HomeProductNew />
            <HomeProductSale />
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center">
              <div className="feature-wrap">
                <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature-1.png" alt="" />
                <h3 className="title-1 ptb-15"> <span className="light-font">fresh from </span> <strong> naturix farm</strong> </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  </p>
                <Link to="#" className="sm-bnt-wht">Read More</Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="feature-wrap">
                <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature-2.png" alt="" />
                <h3 className="title-1 ptb-15"> <span className="light-font"> 100%</span> <strong> organic goods</strong> </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  </p>
                <Link to="#" className="sm-bnt-wht">Read More</Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="feature-wrap">
                <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature-3.png" alt="" />
                <h3 className="title-1 ptb-15"> <span className="light-font">premium </span> <strong> quality</strong> </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  </p>
                <Link to="#" className="sm-bnt-wht">Read More</Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="feature-wrap">
                <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature-4.png" alt="" />
                <h3 className="title-1 ptb-15"> <span className="light-font">100% </span> <strong>natural</strong> </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  </p>
                <Link to="#" className="sm-bnt-wht">Read More</Link>
              </div>
            </div>
          </div>

          <div className="rel-div feature-img">
            <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature.png" alt="" />
          </div>
        </div>
      </section>
      <section className='naturix-goods sec-space light-bg'>
        <div className='container'>
          <div className="title-wrap">
            <h4 className="sub-title"> FRESH FROM OUR FARM </h4>
            <h2 className="section-title"> <span className="light-font">naturix </span> <strong> organic goods
              <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/logo-icon.png" alt="" /></strong> </h2>
          </div>
          <ProductSlide categoryId={0} />
        </div>
      </section>
      <section className="naturix-quality sec-space-bottom">
        <div className="pattern">
          <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/white-pattern.png" />
        </div>
        <div className="section-icon">
          <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/icon-2.png" />
        </div>
        <div className="container">
          <div className="title-wrap pt-15">
            <h2 className="section-title pt-15"> <span className="light-font">we are </span> <strong> organic farmfood <img alt='' src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/logo-icon-1.png" /></strong> </h2>
            <h4 className="sub-title"> FEATURES NATURIX FARMFOOD </h4>
          </div>
          <div className="food-quality block-flex">
            <div className="col-md-4 pt-50">
              <div className="left">
                <div className="quality-img">
                  <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/quality-1.png" />
                </div>
                <div className="quality-caption">
                  <h2 className="title-1">Premium Quality</h2>
                  <span className="divider-2"></span>
                  <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                </div>
              </div>
              <div className="left">
                <div className="quality-img">
                  <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/quality-2.png" />
                </div>
                <div className="quality-caption">
                  <h2 className="title-1">Always Fresh</h2>
                  <span className="divider-2"></span>
                  <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                </div>
              </div>
              <div className="left">
                <div className="quality-img">
                  <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/quality-3.png" />
                </div>
                <div className="quality-caption">
                  <h2 className="title-1">100% Natural</h2>
                  <span className="divider-2"></span>
                  <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/quality-1.png" />
            </div>
            <div className="col-md-4 pt-50">
              <div className="right">
                <div className="quality-img">
                  <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/quality-4.png" />
                </div>
                <div className="quality-caption">
                  <h2 className="title-1">100% Organic Guarantee</h2>
                  <span className="divider-2"></span>
                  <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                </div>
              </div>
              <div className="right">
                <div className="quality-img">
                  <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/quality-5.png" />
                </div>
                <div className="quality-caption">
                  <h2 className="title-1">Super Healthy</h2>
                  <span className="divider-2"></span>
                  <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                </div>
              </div>
              <div className="right">
                <div className="quality-img">
                  <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/icons/quality-6.png" />
                </div>
                <div className="quality-caption">
                  <h2 className="title-1">Best Quality</h2>
                  <span className="divider-2"></span>
                  <p>Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe-wrap sec-space light-bg">
        <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/sec-img-5.png" className="right-bg-img" />
        <img alt="" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/sec-img-6.png" className="left-bg-img" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="sub-title"> JOIN OUR NEWSLETTER </h4>
              <h2 className="fsz-35"> <span className="light-font">subscribe </span> <strong> newsletter</strong> </h2>
            </div>
            <div className="col-md-8">
              <form className="newsletter-form row">
                <div className="form-group col-sm-8">
                  <input className="form-control" placeholder="enter your email address" required="" type="text" />
                </div>
                <div className="form-group col-sm-4">
                  <button className="theme-btn btn-block" type="submit"> subscribe <i className="fa fa-long-arrow-right"></i> </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="sec-space">
        <div class="container">
          <div class="title-wrap">
            <h4 class="sub-title"> NATURIX BLOG </h4>
            <h2 class="section-title"> <span class="light-font">naturix  </span> <strong>latest news </strong> </h2>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="latest-news">
                <div class="news-img">
                  <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/blog/blog-sm-1.jpg" alt="" />
                </div>
                <div class="news-caption">
                  <h4 class="sub-title-sm"> 26 JUNE 2016 </h4>
                  <h2 class="title-2"> <Link to="#"> <span class="light-font">5 best foods to make you </span> <strong>fresh &amp; healthy</strong> </Link> </h2>
                  <span class="divider-1"></span>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
                  <Link to="#" class="fsz-12"> READ ARTICLE <i class="fa fa-long-arrow-right"></i> </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="latest-news">
                <div class="news-img">
                  <img src="https://jthemes.net/themes/f-html/naturix-html/assets/img/blog/blog-sm-2.jpg" alt="" />
                </div>
                <div class="news-caption">
                  <h4 class="sub-title-sm"> 26 JUNE 2016 </h4>
                  <h2 class="title-2"> <Link to="#"> <span class="light-font">5 best foods to make you </span> <strong>fresh &amp; healthy</strong> </Link> </h2>
                  <span class="divider-1"></span>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
                  <Link to="#" class="fsz-12"> READ ARTICLE <i class="fa fa-long-arrow-right"></i> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default HomeContent;
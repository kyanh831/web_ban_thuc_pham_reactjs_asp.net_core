import React from 'react'
import { useSelector } from 'react-redux'

const ProductReviews = () => {
    const reviews = useSelector((state) => state.allReview.reviews)
    let toltalReview = reviews ? Object.keys(reviews).length : 0
    const renderListReview = reviews?.map((r, index) => {
        return (
            <div className="review-wrap" key={index}>
                <div className="review-img">
                    <a href="#"> <img alt="" src={r.AnhDaiDien ? `${r.AnhDaiDien}` : ''} className='img' /> </a>
                </div>
                <div className="review-caption">
                    <h4 className="title fsz-16">
                        <a href="#">{r.HoTenNguoiDung}</a>
                        <span className="fsz-10 gray-color">{r.ThoiGian}</span>
                    </h4>
                    <div className="rating">
                        <span className="star active"></span>
                        <span className="fsz-12 gray-color"> Rating : {r.DiemDanhGia}/5 </span>
                    </div>

                    <div className="block-inline pera">
                        <p>
                            {r.NoiDung}
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <h3 className="fsz-16"><span className="light-font">All </span> <strong>Reviews({toltalReview}) </strong> </h3>
                <span className="divider-2 crl-bg"></span>
                {renderListReview}
                <div className=''>see more</div>
            </div>
        </>
    )
}

export default ProductReviews
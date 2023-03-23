import React, { Component } from 'react'


const ProductTagFill =(props)=> {
    const {p} = props;
    const{MaSp,TenSp} = p;

    console.log(p)
    return (
        <>
            <div className="col-sm-12 mb-2">
                <div className="deal-item list-view">
                    <div className="deal-icons">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-shopping-basket"></a>
                        <a href="#" data-toggle="modal" className="fa fa-expand"></a>
                    </div>
                    <div className="deal-content">
                        <div className="text-right">
                            <span className="prod-tag tag-1">new</span> <span className="prod-tag tag-2">sale</span>
                        </div>
                        <div className="deal-text">
                            <h4 className="sub-title">{TenSp} </h4>
                            <h2 className="fsz-30 pb-15"> <a href="#">{TenSp}</a> </h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
                            <div className="price pt-15">
                                <strong className="clr-txt">$50.00 </strong> <del className="light-font">$65.00 </del>
                            </div>
                        </div>
                        <div className="img"> <img alt="" src="https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/tao-1.webp"/> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductTagFill
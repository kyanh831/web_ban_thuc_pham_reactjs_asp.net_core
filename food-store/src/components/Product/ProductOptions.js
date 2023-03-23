import React from 'react'

const ProductOptions = (props) => {
    const {product} = props
    return (
    <>
     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">choose your options you want</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                {product?.tt?.map((tt) => {
                                    return (
                                        <p className="price col-4 ms-1 border border-2 border-light" key={tt.SoLuong}>
                                            <strong className="clr-txt fsz-20">${tt.DonGiaKm} </strong> <del className="light-font">${tt.DonGiaBan} </del>
                                            Amount: {tt.SoLuong} <br />
                                            {tt.TenThuocTinh}<input className="form-check-input ms-1 mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                            {tt?.km?.map((k) => {
                                                return (
                                                    <>
                                                        <br />
                                                        <span className="badge rounded-pill bg-warning pe-4 ps-4 text-white" key={k.PhanTramKm}>sale {k.PhanTramKm}%</span>
                                                    </>
                                                )
                                            })}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

export default ProductOptions
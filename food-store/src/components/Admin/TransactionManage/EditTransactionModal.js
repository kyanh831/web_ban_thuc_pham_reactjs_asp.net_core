import React from 'react'

export const EditTransactionModal = () => {
    return (
        <>
            <div className="modal fade" id="EditTransactionModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit transaction</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-6 bg-light-blue'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Product name</label>
                                        <input type="text" className="form-control" id="FormControlInputName" placeholder="Enter product name ..." />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Path in browser</label>
                                        <input type="text" className="form-control" id="FormControlInputPath" placeholder="Ex:/product-name-abc..." />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Key work</label>
                                        <input type="text" className="form-control" id="FormControlInputKey" placeholder="Ex:apple, apple sale, my apple" />
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Origin</label>
                                                <input type="text" className="form-control" id="FormControlInputKey" placeholder="Ex:vietnam, USA" />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Trademark</label>
                                                <input type="text" className="form-control" id="FormControlInputKey" placeholder="Ex:gucci" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Expiry</label>
                                                <input type="text" className="form-control" id="FormControlInputKey" placeholder="Ex: 6 month" />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                                                <select id="category" name="cars">
                                                    <option value="volvo">Volvo</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="fiat">Fiat</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 bg-light-green'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Product describe</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="19"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="theme-btn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

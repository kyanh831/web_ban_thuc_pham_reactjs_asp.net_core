import React from 'react'

export const AddUserModal = () => {
    return (
        <>
            <div className="modal fade" id="AddUserModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add new user</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form6Example1">Password</label>
                                            <input type="text" id="form6Example1" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                        <label className="form-label" htmlFor="form6Example2">Confirm</label>
                                            <input type="text" id="form6Example2" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" id="form6Example3" className="form-control" />
                                    <label className="form-label" htmlFor="form6Example3">Company name</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" id="form6Example4" className="form-control" />
                                    <label className="form-label" htmlFor="form6Example4">Address</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form6Example5" className="form-control" />
                                    <label className="form-label" htmlFor="form6Example5">Email</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="number" id="form6Example6" className="form-control" />
                                    <label className="form-label" htmlFor="form6Example6">Phone</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                                    <label className="form-label" htmlFor="form6Example7">Additional information</label>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" defaultChecked />
                                    <label className="form-check-label" htmlFor="form6Example8"> Create an account? </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">Place order</button>
                            </form>


                            {/* <div className='row'>

                                <div className='col-12 d-flex justify-content-end'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" for="flexSwitchCheckDefault">status</label>
                                    </div>
                                </div>
                            </div> */}
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

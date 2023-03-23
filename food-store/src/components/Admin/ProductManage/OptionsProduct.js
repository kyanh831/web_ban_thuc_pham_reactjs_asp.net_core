import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { setOptions } from '../../../redux/actions/productActions';

export const OptionsProduct = ({ stateOptions, stateChangerOptions,productId }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [loading, setLoading] = useState(false);
    const options = useSelector((state) => state.allOptions.options)
    const dispatch = useDispatch()

    const [optionName, setOptionName] = useState("");
    const [unit, setUnit] = useState("");
    const [qty, setQty] = useState("");
    const [promo, setPromo] = useState("");
    const [importPrice, setImportPrice] = useState("");
    const [price, setPrice] = useState("");
    const [salePrice, setSalePrice] = useState("");

    const notifyAdd = () => toast.success('🦄 Added option success!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyAddProductFall = () => toast.error('🦄 Added options FALL!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    
    const handleAddOption = async () => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params = {
            MaSp: productId,
            TenThuocTinh: optionName,
            SoLuong: qty,
            DonGiaKm: promo,
            DonGiaGoc: price,
            DonGiaBan: salePrice,
            DonGiaNhap: importPrice,
            DonViTinh: unit,
        }
        setLoading(true);
        const response = await axios.post(
            `http://localhost:5000/api/AdminSanPhams/options`, params, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data.errorCode === 0) {
            const response = await axios.get(
                `http://localhost:5000/api/AdminSanPhams/options?id=${productId}`, config
            ).catch((e) => {
                console.log(e)
            })
            if (response.data.errorCode === 1) {
    
            } else if (response.data.errorCode === 0) {
                dispatch(setOptions(response.data.options))
            }
            notifyAdd()
            setOptionName("")
            setPrice("")
            setPromo("")
            setQty("")
            setSalePrice("")
            setUnit("")
            setImportPrice("")
            stateChangerOptions(!stateOptions)
        } else if (response.data.errorCode === 1) {
            notifyAddProductFall()
        }
    }

    const renderList = options?.map((o) => {
        return (
            <tr key={o?.TenThuocTinh}>
                <td>{o?.TenThuocTinh}</td>
                <td>{o?.DonViTinh}</td>
                <td>{o?.SoLuong}</td>
                <td> ${o?.DonGiaNhap}</td>
                <td> ${o?.DonGiaGoc}</td>
                <td> ${o?.DonGiaKm}</td>
                <td> ${o?.DonGiaBan}</td>
                <td> edit</td>
            </tr>
        )
    })
    return (
        <>
            <div className="modal fade" id="OptionsProduct" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog  modal-xl modal-fullscreen-xl-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit options product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-lg-6 col-xl-6  col-md-12'>
                                    <div className='row'>
                                        <div className="mb-3 col-6">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Name of options</label>
                                            <input type="text" value={optionName} className="form-control" id="FormControlInputName" placeholder="Enter product name ..." onChange={event => setOptionName(event.target.value)} />
                                        </div>
                                        <div className="mb-3 col-6" >
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Unit</label>
                                            <input type="text" value={unit} className="form-control" id="FormControlInputKey" placeholder="Ex:kg, gram .." onChange={event => setUnit(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="mb-3 col-6">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Quantity</label>
                                            <input type="number" value={qty} className="form-control" id="FormControlInputPath" placeholder="Ex:/10..." onChange={event => setQty(event.target.value)} />
                                        </div>
                                        <div className="mb-3 col-6">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Promotion</label>
                                            <input type="number" value={promo} className="form-control" id="FormControlInputPath" placeholder="Ex:/10..." onChange={event => setPromo(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Import price</label>
                                                <input type="number" value={importPrice} className="form-control" id="FormControlInputKey" placeholder="$" onChange={event => setImportPrice(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                                                <input type="number" value={price} className="form-control" id="FormControlInputKey" placeholder="$" onChange={event => setPrice(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Sale price</label>
                                                <input type="number" value={salePrice} className="form-control" id="FormControlInputKey" placeholder="$" onChange={event => setSalePrice(event.target.value)} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-xl-6  col-md-12'>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Options list</label>
                                        {/*  */}
                                        <table className="table table-bordered">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Options name</th>
                                                    <th>unit</th>
                                                    <th>qty</th>
                                                    <th>import price</th>
                                                    <th>price</th>
                                                    <th>price promotions</th>
                                                    <th>price sale</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {renderList}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="theme-btn" onClick={() => handleAddOption()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </>
    )
}

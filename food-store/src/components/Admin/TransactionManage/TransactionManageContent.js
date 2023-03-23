import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setTransactions } from '../../../redux/actions/transactionAction'

const TransactionManageContent = () => {
    const [pageNumb, setPageNumb] = useState(1)
    const [numbPage, setNumbPage] = useState(null)

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const transactions = useSelector((state) => state.allTransactions.transactions)

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const ls = []
    for (var i = 1; i <= numbPage; i++) {
        ls.push(i)
    }


    const fetchTransactions = async (page) => {
        setLoading(true);
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `http://localhost:5000/api/AdminDonHangs/page?numb=${page}`, config
        ).catch((e) => {
            console.log(e)
        })
        dispatch(setTransactions(response.data.transaction))
        setNumbPage(response.data.numberOfPage)
        setLoading(false);
    }

    const handlePage = (page) => {
        setPageNumb(page)
    }

    useEffect(() => {
        fetchTransactions(pageNumb);
    }, [pageNumb]) // eslint-disable-line react-hooks/exhaustive-deps

    const ReplaceTime =(time)=>{
        if (time / 60 > 24)
            return (<>{Math.floor(time / 60 / 24)} day ago</>)
        else if (time < 60)
            return (<>{time} minute ago</>)
        else
            return (<>{Math.floor(time / 60)} hour ago</>)
    }

    const renderList = transactions?.map((trans) => {
        let time = trans.time
        return (
            <tr key={trans.MaPhieuDatHang}>
                <td><p>{trans.Email}</p></td>
                <td><p>{trans.Sdt}</p></td>
                <td>{trans.TrangThai ? <span className="badge bg-info">confirmed</span> : <span className="badge bg-secondary">unconfirmed</span>}</td>
                <td><p>${trans.TongTien}</p></td>
                <td><p><i className="fa-solid fa-circle"></i> {
                    ReplaceTime(time)
                }</p></td>
                <td className='options'>
                    <lord-icon
                        onClick={() => this.handleShowEditTransactionModal()}
                        src="https://cdn.lordicon.com/bxxnzvfm.json"
                        trigger="hover"
                        style={{ width: "40px", height: "40px" }}>

                    </lord-icon>
                    <lord-icon
                        src="https://cdn.lordicon.com/kfzfxczd.json"
                        trigger="hover"
                        colors="primary:#e83a30"
                        scale="40"
                        style={{ width: "40px", height: "40px" }}>
                    </lord-icon>
                </td>
            </tr>
        )
    })

    return (
        <>
            <div className='col-10 admin-home-content' style={{ height: "2000px" }}>
                <div className='admin-user-heard'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/admin"><i className="fa-solid fa-house ms-2"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Transaction manage</li>
                        </ol>
                    </nav>
                </div>
                <div className='admin-user-content'>
                    <div className='statistic'>
                        <div className='item-statistic bg-light-blue'>
                            <i className="fa fa-file-invoice-dollar"></i>
                            <h5>Total transactions</h5>
                            <h3>1655</h3>
                        </div>
                        <div className='item-statistic bg-light-green'>
                            <i className="fa fa-file-invoice-dollar"></i>
                            <h5>Total transactions today</h5>
                            <h3>162</h3>
                        </div>
                        <div className='item-statistic bg-violet'>

                            <i className="fa fa-file-invoice-dollar"></i>
                            <h5>Total transactions cancel</h5>
                            <h3>136</h3>
                        </div>
                        <div className='item-statistic bg-light-yellow'>
                            <i className="fa fa-file-invoice-dollar"></i>
                            <h5>Total new</h5>
                            <h3>1</h3>
                        </div>
                    </div>
                    {/* transaction */}
                    {/* <EditTransactionModal /> */}
                    <div className='user-table table-responsive'>
                        <div className='user-table-header'>
                            <h4>trans list</h4>
                            <div className='row'>
                                <div className='col-6'>
                                    <input type="text" placeholder='Find trans...' />
                                    <lord-icon
                                        src="https://cdn.lordicon.com/zniqnylq.json"
                                        trigger="hover"
                                        style={{ width: "38px", height: "30px" }}>
                                    </lord-icon>
                                </div>
                                <div className='col-6 d-flex'>
                                    <p>Start:</p>
                                    <input type="date" className='m-2' />
                                    <p>End:</p>
                                    <input type="date" className='m-2' />
                                </div>
                            </div>
                        </div>

                        <table className="table table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th>User email</th>
                                    <th>User Number phone</th>
                                    <th>Status</th>
                                    <th>total money</th>
                                    <th>Time</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderList}
                            </tbody>
                        </table>

                        <div className="rel-div pt-50">
                            <div className="divider-full-1"></div>
                            <div className="nav-page">
                                <a href="#" className="fa fa-long-arrow-left left"></a>
                                <a href="#" className="fa fa-long-arrow-right right"></a>
                            </div>
                        </div>
                        <div className="pagination-wrap">
                            <ul className="pagintn">
                                {ls.map((p) => {
                                    return (
                                        <li key={p} onClick={() => handlePage(p)}><Link to="#" >{p}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TransactionManageContent
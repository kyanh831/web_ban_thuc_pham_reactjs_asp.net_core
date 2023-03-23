import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUsers } from '../../../redux/actions/userActions';
import { AddUserModal } from './AddUserModal';
import { EditUserModal } from './EditUserModal';

export const UserTable = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const users = useSelector((state) => state.allUsers.users)

    const dispatch = useDispatch()

    const [pageNumb, setPageNumb] = useState(1)
    const [numbPage, setNumbPage] = useState(null)

    const ls = []
    for (var i = 1; i <= numbPage; i++) {
        ls.push(i)
    }
    const handlePage = (page) => {
        setPageNumb(page)
    }

    const fetchUsers = async (page) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `http://localhost:5000/api/TaiKhoans/page?numb=${page}`, config
        ).catch((e) => {
            console.log(e)
        })
        dispatch(setUsers(response.data.users))
        setNumbPage(response.data.numberOfPage)
    }
    useEffect(() => {
        fetchUsers(pageNumb);
    }, [pageNumb]) // eslint-disable-line react-hooks/exhaustive-deps

    const ReplaceAuth = (u) => {
        if (u.Quyen === 1)
            return (<span className="badge bg-danger">Admin</span>)
        else if (u.Quyen === 2)
            return (<span className="badge rounded-pill bg-primary">sales agent</span>)
        else
            return (<></>)
    }
    const renderList = users?.map((u) => {
        //const exists = product.tt.find(item => item.SoLuong === 0)
        return (
            <tr key={u.HoTenNguoiDung}>
                <td><img src={u.AnhDaiDien} className='table-img img-tooltip' /></td>
                <td><p>{u.Email}</p></td>
                <td>{u.Sdt}</td>
                <td>{u.HoTenNguoiDung}</td>
                <td>
                    {ReplaceAuth(u)}
                </td>
                {
                    u.Quyen === 1 ? "" : 
                    <td className='options'>
                        <lord-icon
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
                }

            </tr>
        )
    })
    return (
        <>
            <AddUserModal />
            <EditUserModal />
            <div className='user-table table-responsive'>
                <div className='user-table-header'>
                    <h4>User list</h4>
                    <div className='row'>
                        <div className='col-6'>
                            <input type="text" placeholder='Find user...' />
                            <lord-icon
                                src="https://cdn.lordicon.com/zniqnylq.json"
                                trigger="hover"
                                style={{ width: "38px", height: "30px" }}>
                            </lord-icon>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <button type="button" className="slide-btn" data-bs-toggle="modal" data-bs-target="#AddUserModal"><i className="fa fa-user-plus me-1"></i>Create</button>
                        </div>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>img</th>
                            <th>Email</th>
                            <th>Number phone</th>
                            <th>Full name</th>
                            <th>Roll</th>
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

        </>
    )
}

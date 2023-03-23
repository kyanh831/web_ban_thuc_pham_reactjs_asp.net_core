import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions/userActions';

const UserInfo = () => {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const user = useSelector((state) => state.userDetail.user)

    const dispatch = useDispatch()

    const fetchUserInfo = async () => {

        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `http://localhost:5000/api/NguoiDungs/${userInfo.MaNguoiDung}`, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data?.errorCode === 1) {

        } else if (response.data.errorCode === 0) {
            dispatch(setUser(response.data?.user))
        }
    }

    useEffect(() => {
    fetchUserInfo()
    }, [])
    
    return (
        
        <div className=''>
            <form>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" defaultValue={user.HoTenNguoiDung ?  user.HoTenNguoiDung :""} className="form-control" id="FormControlInputName" placeholder="Enter your name ..." />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Number phone</label>
                    <input type="number" defaultValue={user.Sdt ? user.Sdt :""} className="form-control" id="FormControlInputPhone" placeholder="Enter your number ..." />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" defaultValue={user.Email ? user.Email :""} className="form-control" id="FormControlInputEmail" placeholder="Email.." />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                    <input type="text" defaultValue={user.DiaChi ? user.DiaChi :""} className="form-control" id="FormControlInputAddress" placeholder="Address.." />
                </div>
                <button className='theme-btn'>Update</button>
            </form>
        </div>
    )
}

export default UserInfo
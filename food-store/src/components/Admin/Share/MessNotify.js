import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDebounce } from '../../../hooks';

const MessNotify = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const debounce = useDebounce(userInfo, 1000);
    const [listNewMess, setListNewMess] = useState([])
    let totalNew = listNewMess ? Object.keys(listNewMess).length : 0
    const fetchNewChat = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/Chat/count`, config
        ).catch((e) => {
            console.log(e)
        })
        setListNewMess(response?.data?.usersChat)
    }



    useEffect(() => {
        if (!debounce) {
            return
        }
        fetchNewChat()
    }, [debounce])
    return (
        <div className='mess-menu'>
            <i className="fa-brands fa-facebook-messenger "></i>
            {totalNew ===0 ? "" :  <span className="mess-notify mess">{totalNew}</span>}
            {/* <NotifiesBox/> */}
            <div className='mess-notify-popup'>
                <h4> You have {totalNew} new message</h4>
                <ul>
                    {listNewMess ? listNewMess.map((user) => {
                        return (
                            <li  key={user.MaNguoiDung}>
                                <img alt='' src={`${user.AnhDaiDien}`} className='img' />
                                <div className='mess-content'>
                                    <h5>{user.HoTenNguoiDung}</h5>
                                    {user.chatFirts ?
                                        <>
                                            <span>{user?.chatFirts?.NoiDung} </span>
                                            <span>{user.chatFirts?.time > 60 ? `${Math.floor(user.chatFirts?.time / 60)} hour ago` : `${user.chatFirts?.time} minute ago`}</span>
                                        </>
                                        : <p>Star chat ...</p>}
                                </div>
                            </li>
                        )
                    }) : ""}
                </ul>
                <Link to='/admin/chat'>See you Detail <i className="fa fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default MessNotify
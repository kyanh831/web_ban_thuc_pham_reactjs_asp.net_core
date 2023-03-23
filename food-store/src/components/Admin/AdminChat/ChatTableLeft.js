import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../../hooks';

export const ChatTableLeft = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const debounce = useDebounce(userInfo, 10000);
    const [listUsersChat, setListUsersChat] = useState([])

    const fetchUsersChat = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/Chat/users`, config
        ).catch((e) => {
            console.log(e)
        })
        setListUsersChat(response?.data?.usersChat)
    }

    console.log('list user:', listUsersChat)

    useEffect(() => {
        if (!debounce) {
            return
        }
        fetchUsersChat()
    }, [debounce])

    return (
        <>
            <div className='admin-chat-left col-3'>
                <div className='chat-left-header'>
                    <input type="text" placeholder='Find someone...' className="input-name-chat" />
                </div>
                <div className='chat-left-content'>
                    <ul className='nav'>
                        {listUsersChat ? listUsersChat.map((user) => {
                            return (
                                <li className='chat-left-item' key={user.MaNguoiDung}>
                                    <img alt='' src={`${user.AnhDaiDien}`} />
                                    <div className='chat-left-item-name ms-2'>
                                        <h6>{user.HoTenNguoiDung}</h6>
                                        {user.chatFirts ?
                                            <>
                                                <p>{user?.chatFirts?.NoiDung} </p>
                                                <p>{user.chatFirts?.time > 60 ? `${Math.floor(user.chatFirts?.time / 60)} hour ago` : `${user.chatFirts?.time} minute ago`}</p>
                                            </>
                                            : <p>Star chat ...</p>}
                                    </div>
                                </li>
                            )
                        }) : ""}
                    </ul>
                </div>
            </div>
        </>
    )
}

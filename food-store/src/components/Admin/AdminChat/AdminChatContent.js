import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../../hooks'

export const AdminChatContent = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const debounce = useDebounce(userInfo, 1000);
    const [listUsersChat, setListUsersChat] = useState([])
    const [userChatDetail, setUserChatDetail] = useState([])
    const [userI, setUserI] = useState({})
    const [message, setMessage] = useState('');


    const handleChange = event => {
        setMessage(event.target.value);
    };

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

    const getUserDetail = async (userID) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/Chat/user?id=${userID}`, config
        ).catch((e) => {
            console.log(e)
        })
        setUserChatDetail(response?.data?.messages)
        const response2 = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/Chat/status-mess?id=${userID}`, config
        ).catch((e) => {
            console.log(e)
        })
        console.log(response2)
    }

    const handleGetDetailChat = async (user) => {
        setUserI(user)
        getUserDetail(user.MaNguoiDung)
    }

    const SendMessage = async () => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params = {
            "Admin": "admin",
            "MaNguoiDung": `${userI?.MaNguoiDung}`,
            "NoiDung": `${message}`
        }
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/Chat/`, params, config
        ).catch((e) => {
            console.log(e)
        })
        console.log(response)
        setMessage('')
        getUserDetail(userI.MaNguoiDung)
    }

    useEffect(() => {
        if (!debounce) {
            return
        }
        fetchUsersChat()// eslint-disable-next-line react-hooks/exhaustive-deps
        getUserDetail(userI.MaNguoiDung)
    }, [debounce])

    const ReplaceTime =(time)=>{
        if (time / 60 > 24)
            return (<>{Math.floor(time / 60 / 24)} day ago</>)
        else if (time < 60)
            return (<>{time} minute ago</>)
        else
            return (<>{Math.floor(time / 60)} hour ago</>)
    }
    return (
        <>
            <div className='col-10 admin-home-content' style={{ height: "2000px" }}>
                <div className='admin-user-heard'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/admin"><i className="fa-solid fa-house ms-2"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Chat client</li>
                        </ol>
                    </nav>
                </div>
                <div className='admin-user-content container'>
                    <div className='admin-chat row'>
                        {/* chat left */}
                        <div className='admin-chat-left col-3'>
                            <div className='chat-left-header'>
                                <input type="text" placeholder='Find someone...' className="input-name-chat" />
                            </div>
                            <div className='chat-left-content'>
                                <ul className='nav'>
                                    {listUsersChat ? listUsersChat.map((user) => {
                                        return (
                                            <li className='chat-left-item' key={user.MaNguoiDung} onClick={() => handleGetDetailChat(user)}>
                                                <img alt='' src={`${user.AnhDaiDien}`} />
                                                <div className='chat-left-item-name ms-2'>
                                                    <h6>{user.HoTenNguoiDung}</h6>
                                                    {user.chatFirts ?
                                                        <>
                                                            {user.chatFirts.DaDoc ? <p>{user?.chatFirts?.NoiDung}</p>:<p> <strong>{user?.chatFirts?.NoiDung}</strong></p>}
                                                            
                                                            <p>{ReplaceTime(user.chatFirts?.time)}</p>
                                                        </>
                                                        : <p>Star chat ...</p>}
                                                </div>
                                            </li>
                                        )
                                    }) : ""}
                                </ul>
                            </div>
                        </div>
                        {/* chat right */}
                        {/* <ChatTableRight userChatDetail={userChatDetail} userImg={userImg} userName={userName} /> */}
                        <div className='admin-chat-right col-9'>
                            <div className='chat-right-header'>
                                <img src={`${userI.AnhDaiDien}`} alt='' />
                                <div className='chat-header-title'>
                                    <h6>{userI.HoTenNguoiDung}</h6>
                                    <p><i className="fa-solid fa-circle me-1"></i>online</p>
                                </div>
                            </div>
                            <div className='chat-right-content'>
                                <ul>
                                    {userChatDetail ? userChatDetail.map((user) => {
                                        const isAdmin = user?.Admin
                                        return (
                                            <li className={isAdmin ? 'chat-admin-text' : 'chat-client-text'}>
                                                {isAdmin ? "" : <img src={`${userI.AnhDaiDien}`} alt='' className='img' />}
                                                {isAdmin ? <div className='text-admin-content'>
                                                    <p className='text-chat'>{user.NoiDung}</p>
                                                    <span className='text-time'> <i className="fa fa-check-double me-1"></i>{user.ThoiGian}</span>
                                                </div> :
                                                    <>
                                                        <p className='text-chat'>{user.NoiDung}</p>
                                                        <span className='text-time'> <i className="fa fa-check-double me-1"></i>{user.ThoiGian}</span>
                                                    </>}

                                            </li>
                                        )
                                    }) : <h1>Choose someone to start</h1>}
                                </ul>
                            </div>
                            <div className='chat-right-send'>
                                <div className='chat-right-send-input'>
                                    <input type="text" placeholder='Enter...' value={message} onChange={handleChange} />
                                </div>
                                <i className="fa fa-paper-plane" onClick={() => SendMessage()}></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

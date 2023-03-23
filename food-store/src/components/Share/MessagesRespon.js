import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks';

const MessagesRespon = (props) => {
    const userInfo = props.userInfo
    const debounce = useDebounce(userInfo, 1000);
    const [messages, setMessages] = useState([])

    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    };

    const fetchChats = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/Chat/user?id=${userInfo?.MaNguoiDung}`, config
        ).catch((e) => {
            console.log(e)
        })
        setMessages(response?.data?.messages)
    }

    useEffect(() => {
        if (!debounce) {
            return
        }
        fetchChats()
    }, [debounce])


    const SendMessage = async ()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params ={
            "MaNguoiDung": `${userInfo?.MaNguoiDung}`,
            "NoiDung": `${message}`
        }
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/Chat/`,params, config
        ).catch((e) => {
            console.log(e)
        })
        setMessage('')
    }

    return (
        <>
            <div className='user-chat-body-content'>
                <ul>
                    {messages ? messages.map((mess) => {
                        const isAdmin = mess?.Admin
                        return (
                            <li className={isAdmin ? 'user-chat-item-left' : 'user-chat-item-right'} key={mess.MaChat}>
                                {isAdmin ? <img src='https://media.istockphoto.com/id/927406374/es/vector/icono-del-chatbot-dise%C3%B1o-de-la-muestra-de-bot-concepto-de-logo-de-chat-bot-cabeza-de-robot-en.jpg?s=1024x1024&w=is&k=20&c=NwOa7xph_F81TS9_LZeR6z4nRg_UlNjGo5aObyEC5C0=' alt='' className='img' /> : ""}
                                <div className={isAdmin ? 'chat-text' : 'chat-text-right'}>
                                    <p className='text-chat'>{mess.NoiDung}</p>
                                    <span className='text-time'> <i className="fa fa-check-double me-1"></i>{mess.ThoiGian}</span>
                                </div>
                            </li>

                        )
                    }) : ""}
                </ul>
            </div>
            <div className='user-chat-footer'>
            <div className='user-chat-input'>
                <input type='text' placeholder='Send a message...' value={message} onChange={handleChange}/>
            </div>
            <div className='user-chat-send'>
                <i className="fa fa-paper-plane" onClick={()=>SendMessage()}></i>
            </div>
        </div>
        </>

    )
}

export default MessagesRespon
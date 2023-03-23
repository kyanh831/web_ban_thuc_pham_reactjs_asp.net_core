import axios from 'axios';
import React, {  useState } from 'react'

const SendMess = (props) => {
    const userInfo = props.userInfo
    console.log("user:",userInfo)
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    };

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
        <div className='user-chat-footer'>
            <div className='user-chat-input'>
                <input type='text' placeholder='Send a message...' value={message} onChange={handleChange}/>
            </div>
            <div className='user-chat-send'>
                <i className="fa fa-paper-plane" onClick={()=>SendMessage()}></i>
            </div>
        </div>
    )
}

export default SendMess
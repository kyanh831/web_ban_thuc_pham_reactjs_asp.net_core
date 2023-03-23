import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { arr1 } from './TextData';

const ChatBot = () => {
    const [mess, setMess] = useState('')
    const [product, setProduct] = useState([]);
    const [isActiveChat, setIsActiveChat] = useState(false)
    const [isActiveVoice, setIsActiveVoice] = useState(false)
    const [isActiveFindProduct, setIsActiveFindProduct] = useState(false)

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recorder = new SpeechRecognition();
    const speech = new SpeechSynthesisUtterance();

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const findProducts = async (name) => {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/search?name=${name}`
        ).catch((e) => {
            console.log(e)
        })
        setProduct(response?.data)
    }



    recorder.onstart = () => {
        console.log('voice is active');
    }
    function botVoice(message) {
        let flag = false;
        const text = ["mình không hiểu bạn đang nói gì, nhắc lại cho mình nhé", "mình vẫn chưa hiểu ý của bạn, có thể nói lại cho mình nghe được không", "bạn cần gì khác phải không"]

        speech.text = text[getRndInteger(0, 3)]
        for (let botData of arr1) {
            for (let recor of botData.name) {
                if (message == recor.toLowerCase()) {
                    let length = Object.keys(botData.text).length
                    let position = getRndInteger(0, length)
                    console.log(position)
                    speech.text = botData.text[position]
                    flag = true
                    if (botData.tag === 1)
                        findProducts(botData.value)
                    break;
                }
            }
        }
        window.speechSynthesis.speak(speech)

    }

    recorder.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        botVoice(transcript.toLowerCase());
        setMess(transcript)
    }



    const handleActiveChatBot = () => {
        setIsActiveChat(!isActiveChat);
    }
    const handleChatBotOn = () => {
        setIsActiveVoice(true)
        recorder.start();
    }
    const handleChatBotOff = () => {
        setIsActiveVoice(false)
    }

    return (
        <div className='chat-bot-contain'>
            <div className='chat-bot-icon'>
                <img src='logo/chat-bot.png' alt='' onClick={() => handleActiveChatBot()} />
            </div>
            <div className='chat-bot-body'>
                <div className={`chat-bot-content ${isActiveChat ? 'chat-bot-active' : 'chat-bot-hide'}`}>
                    <div id="bars">
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                        <div className={`bar ${isActiveVoice ? 'bar-active' : ''}`}></div>
                    </div>
                    <i className="fa-solid fa-microphone-lines" onMouseDown={() => handleChatBotOn()} onMouseUp={() => handleChatBotOff()}></i>
                    <h1>{mess}...</h1>
                    <div className='chat-bot-options'>
                        <div className='chat-bot-option-item'>
                            <h2>Find product</h2>
                        </div>
                        <div className='chat-bot-option-item'>
                            <h2>Fruit healthy</h2>
                        </div>
                        <div className='chat-bot-option-item'>
                            <h2>News</h2>
                        </div>
                        <div className='chat-bot-option-item'>
                            <h2>See your order</h2>
                        </div>
                        <div className='chat-bot-option-item'>
                            <h2>Products may be you like</h2>
                        </div>
                    </div>
                    {/*  */}
                    <ul className='chat-bot-result'>
                        {product?.product?.map((p) => {
                            return (
                                <li className='chat-bot-result-item ' key={p.TenSp} >
                                    <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667578469/products/${p.DuongDan}`} alt='' />
                                    <Link to={`/product-detail/${p.TieuDe + `_` + p.MaSp}`} onClick={() => handleActiveChatBot()} >
                                        <h3>{p.TenSp}</h3>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ChatBot
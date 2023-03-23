import React from 'react'

export const ChatTableRight = (props) => {
    const { userChatDetail } = props.userChatDetail;
    const { userImg } = props.userImg;
    const { userName } = props.userName;

    console.log(props)
    return (
        <>
            <div className='admin-chat-right col-9'>
                <div className='chat-right-header'>
                    <img src={`${userImg}`} />
                    <div className='chat-header-title'>
                        <h6>{userName}</h6>
                        <p><i className="fa-solid fa-circle me-1"></i>online</p>
                    </div>
                </div>
                <div className='chat-right-content'>
                    <ul>
                        {userChatDetail ? userChatDetail.map((user) => {
                            const isAdmin = user?.Admin
                            return (
                                <li className={isAdmin ? 'chat-admin-text' : 'chat-client-text'}>
                                    {isAdmin ? "" : <img src={`${userImg}`} alt='' className='img' />}
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
                        }) : ""}

                    </ul>
                </div>
                <div className='chat-right-send'>
                    <div className='chat-right-send-input'>
                        <input type="text" placeholder='Enter...' />
                    </div>
                    <i className="fa fa-paper-plane"></i>
                </div>
            </div>
        </>
    )
}

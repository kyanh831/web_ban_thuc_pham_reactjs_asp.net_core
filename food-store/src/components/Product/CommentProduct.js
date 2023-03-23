import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentProduct } from '../../redux/actions/commentProductActions';

const CommentProduct = (props) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const { productId } = props;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.allComment.comments)
    const [message, setMessage] = useState('');

    let toltalComment = comments ? Object.keys(comments).length : 0

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const fetchComments = async () => {
        const params = {
            id: productId
        };
        setLoading(true)
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/comments`, { params }
        ).catch((e) => {
            console.log(e)
        })
        dispatch(setCommentProduct(response.data.comments))
        setLoading(false)
    }
    const sendComment = async () => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params = {
            MaSp: productId,
            MaNguoiDung: userInfo.MaNguoiDung,
            NoiDung:message,
        }
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/comments/`, params, config
        ).catch((e) => {
            console.log(e)
        })
        if(response?.data?.errorCode ===0){
            fetchComments();
        }
        setMessage('')
    }
    const handleSendComment = () => {
        sendComment();
    }

    useEffect(() => {
        if (productId && productId !== "") fetchComments();
        return () => { setLoading(false) }
    }, [productId])


    const Loading = () => {
        return (
            <>
                <div className='product-box'>
                    <Skeleton height={150} />
                </div>

            </>
        )
    };

    const renderList = comments?.map((comment, index) => {
        return (
            <div className="review-wrap" key={index}>
                <div className="review-img">
                    <a href="#"> <img alt="" src={comment.AnhDaiDien ? `${comment.AnhDaiDien}` : ''} className='img' /> </a>
                </div>
                <div className="review-caption">
                    <h4 className="title fsz-16">
                        <a href="#">{comment.HoTenNguoiDung}</a>
                        <span className="fsz-10 gray-color">{comment.ThoiGian}</span>
                    </h4>
                    <div className="rating">
                        {/* <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="star active"></span>
                            <span className="fsz-12 gray-color"> Rating : 5/5 </span> */}
                        Like: {comment.LuotThich}
                    </div>

                    <div className="block-inline pera">
                        <p>
                            {comment.NoiDung}
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <h3 className="fsz-16"><span className="light-font">customers </span> <strong>comment </strong> <span className="clr-txt">({toltalComment})</span> </h3>
                <span className="divider-2 crl-bg"></span>
                {loading ? <Loading /> : renderList}
                <div className=''>see more</div>
                <div className='chat-right-send'>
                    <div className='chat-right-send-input'>
                        <input type="text" placeholder='Enter your comment...' value={message} onChange={handleChange}/>
                    </div>
                    <i className="fa fa-paper-plane" onClick={() => handleSendComment()}></i>
                </div>
            </div>
        </>
    )
}

export default CommentProduct
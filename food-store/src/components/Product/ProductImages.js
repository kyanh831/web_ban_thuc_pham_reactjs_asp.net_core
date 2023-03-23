import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProducImages = (props) => {

    const { productId } = props;

    const [images, setImages] = useState([])
    const [chooseImg, setChooseImg] = useState('')

    const getImages = async () => {
        const params = {
            id: productId
        };
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/SanPhams/images`, { params }
        ).catch((e) => {
            console.log(e)
        })
        setImages(response?.data?.images)
    }

    useEffect(() => {
        if (productId && productId !== "") getImages();
    }, [productId])

    const handleChooseImg = (image) => {
        setChooseImg(image)
    }
    return (
        <>
            <div className="col-lg-6 col-sm-12  slider-img pt-50">
                <div className='img-top-slide'>
                    <div className='img-top-item'>
                        <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/${chooseImg ? chooseImg : images['0']}`} alt='img' />                        
                    </div>
                    <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/${chooseImg ? chooseImg : images['0']}`} alt='img'  className='img-product-tooltip'/>
                </div>
                <div className='img-bottom-slide'>
                    <span className='control-left'><i className="fa fa-circle-chevron-left"></i></span>
                    <ul>
                        {images ? images.map((image) => {
                            return (
                                <li className='img-bottom-item' key={image} onClick={() => handleChooseImg(image)}>
                                    <img src={`https://res.cloudinary.com/dkto9qg9y/image/upload/v1667099526/products/${image}`} alt='img' />
                                </li>
                            )
                        }) : ""}
                    </ul>
                    <span className='control-right'><i className="fa fa-circle-chevron-right"></i></span>
                </div>
            </div>
        </>
    )
}

export default ProducImages
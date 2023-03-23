import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const UserInfoImg = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const inputFile = useRef(null)
    const [img, setImg] = useState();

    const handlePreViewImg = (e) => {
        const files = e.target.files[0]
        setImg(files)
        fetchUserImgToCloud(files)
    }

    const fetchUserInfoImg = async (img) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const params = {
            MaNguoiDung: userInfo.MaNguoiDung,
            AnhDaiDien: img
        }
        const response = await axios.post(
            `http://localhost:5000/api/NguoiDungs/img`, params, config
        ).catch((e) => {
            console.log(e)
        })
        if (response.data?.errorCode === 1) {
            console.log("up error")
        } else if (response.data.errorCode === 0) {
            console.log("up ok")
        }
    }

    const fetchUserImgToCloud = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "userUpload");
        return axios.post("https://api.cloudinary.com/v1_1/dkto9qg9y/image/upload", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
        }).then(response => {
            const data = response.data;
            const fileURL = data.secure_url
            fetchUserInfoImg(fileURL)
        })
    }
    const onButtonClick = () => {
        inputFile.current.click();
    };

    useEffect(() => {

    }, [])
    return (
        <div className='user-profile-img'>
            <img src={`${userInfo.AnhDaiDien}`} alt='' />
            <div className='user-profile-img-hover'>
                <i className="fa fa-upload" onClick={onButtonClick}></i>
            </div>
            <input type='file' id='file' accept="image/*" ref={inputFile} style={{ display: 'none' }} onChange={handlePreViewImg} />
        </div>
    )
}

export default UserInfoImg
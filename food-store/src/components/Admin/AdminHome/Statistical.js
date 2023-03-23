import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDebounce } from '../../../hooks'

const Statistical = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const debounce = useDebounce(userInfo, 10000);
    const [statistical, setStatistical] = useState()

    const fetchStatistical = async () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo?.Token}`,
            }
        };
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/AdminDonHangs/statisticals`, config
        ).catch((e) => {
            console.log(e)
        })
        console.log(response.data)
        setStatistical(response?.data)
    }

    useEffect(() => {
        if (!debounce) {
            return
        }
        fetchStatistical()
    }, [debounce])
    return (
        <div className='statistic'>
            <div className='item-statistic bg-light-blue'>
                <i className="fa fa-apple-whole"></i>
                <h5>Total products</h5>
                <h3>{statistical ? statistical.totalProduct : "0"}</h3>
            </div>
            <div className='item-statistic bg-light-green'>
                <i className="fa fa-carrot"></i>
                <h5>Transaction to day</h5>
                <h3>{statistical ? statistical.totalNewTransactionToDay : "0"}</h3>
            </div>
            <div className='item-statistic bg-violet'>
                <i className="fa fa-tomato"></i>
                <h5>Total money to day</h5>
                <h3> ${statistical ? statistical.totalMoneyToday : "0"}</h3>
            </div>
            <div className='item-statistic bg-light-yellow'>
                <i className="fa fa-pumpkin"></i>
                <h5>Total Money</h5>
                <h3>${statistical ? statistical.totalMoneyPayed : "0"} <small>( ${statistical ? statistical.totalMoney : "0"})</small> </h3>
            </div>
            <div className='item-statistic bg-light-blue'>
                <i className="fa fa-apple-whole"></i>
                <h5>Transaction cancel to day</h5>
                <h3>0</h3>
            </div>
            <div className='item-statistic bg-violet'>
                <i className="fa fa-tomato"></i>
                <h5>Total user</h5>
                <h3>{statistical ? statistical.totalUser : "0"}</h3>
            </div>
            <div className='item-statistic bg-light-yellow'>
                <i className="fa fa-pumpkin"></i>
                <h5>Transaction complete</h5>
                <h3>{statistical ? statistical.totalTransactionToDay : "0"}</h3>
            </div>
        </div>
    )
}

export default Statistical
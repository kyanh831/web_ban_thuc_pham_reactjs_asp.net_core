import React, { Component } from 'react'
class NotifiesBox extends Component {
    render() {
        return (
            <>
                <ul className='notify-box-popup'>
                    <li><p>Notify</p></li>
                    <li className='row'>
                        <div className='col-2 notify-box-img'>
                            <img src='https://res.cloudinary.com/dkto9qg9y/image/upload/v1663760319/users/user-1.jpg' />
                            <i className="fa-solid fa-circle"></i>
                        </div>
                        <div className='notify-content col-9'>
                            <p><strong>kyanh@123gmail.com</strong> is ordered.<a href="#">Detail</a>
                                <br />
                                Total:<span>$1200.00</span>
                                <br />
                                Time: 5 minute
                            </p>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </>
        )
    }
}

export default NotifiesBox
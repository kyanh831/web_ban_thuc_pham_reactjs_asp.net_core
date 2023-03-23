import React, { useState } from 'react'
import ProductSearchBox from '../Product/ProductSearchBox'

const SearchPreView = () => {

    const [isShowProductBox, setIsShowProductBox] = useState(true);
    const [message, setMessage] = useState('');


    const showProductSearchBox = () => {
        setIsShowProductBox(!isShowProductBox)
    }
    const handleChange = event => {
        setMessage(event.target.value);

    };
    return (
        <>
            <div className='search-menu-home'>
                <input type="text" placeholder="Find best sale..." onFocus={() => showProductSearchBox()} onChange={handleChange} />
                <i className="fa fa-magnifying-glass-arrow-right search-home"></i>
                {isShowProductBox ? "" : <ProductSearchBox message={message} />}
            </div>
        </>
    )
}

export default SearchPreView
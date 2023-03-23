import React, { useEffect, useState } from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import ProductTag from './ProductTag';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsByCate } from '../../redux/actions/productActions';

const ProductSlide = (props) => {
  const {categoryId} = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProductsByCate.products)


  const fetchProductByCate = async () => {
    setLoading(true)
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/SanPhams/category?cate=${categoryId}`
    ).catch((e) => {
      console.log(e)
    })
    setLoading(false)
    dispatch(setProductsByCate(response.data.product))
  }

  useEffect(() => {
    fetchProductByCate();
  }, [categoryId])

  const renderList = products?.map((p) => {
    return (
      <div className="col-lg-3 col-md-4  col-sm-6" key={p.MaSp}  >
        <ProductTag product={p} key={p.TenSp} />
      </div>
    )
  })

  return (
    <>
    <div className='row'>
      {renderList}
    </div>
    </>
  )
}

export default ProductSlide
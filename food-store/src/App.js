import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Share/LoginPage';

import AdminHomePage from './components/Admin/AdminHome/AdminHomePage';
import AdminBlogPage from './components/Admin/BlogManage/AdminBlogPage';
import AdminTransactionPage from './components/Admin/TransactionManage/AdminTransactionPage';
import AdminProductPage from './components/Admin/ProductManage/AdminProductPage';
import AdminUserPage from './components/Admin/UserManage/AdminUserPage';
import { AdminChatPage } from './components/Admin/AdminChat/AdminChatPage';
import { ProductDetailContent } from './components/Product/ProductDetailContent';
import BlogPage from './components/Blog/BlogPage';
import { BlogDetailPage } from './components/Blog/BlogDetailPage';
import ContactPage from './components/Contact/ContactPage';
import AboutPage from './components/About/AboutPage';
import CartPage from './components/Cart/CartPage';
import ProductPage from './components/Product/ProductPage';
import CheckOutPage from './components/Share/CheckOutPage';
import PaymentSuccessPage from './components/Share/PaymentSuccessPage';
import Register from './components/Share/Register';
import UserPage from './components/User/UserPage'

const App = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  const renderAuthor = () => {
    if (userInfo?.Quyen === 1) {
      return (
        <>
          <Routes>
            {/* this area admin */}
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/admin/blog-manage" element={<AdminBlogPage />} />
            <Route path="/admin/transaction-manage" element={<AdminTransactionPage />} />
            <Route path="/admin/product-manage" element={<AdminProductPage />} />
            <Route path="/admin/user-manage" element={<AdminUserPage />} />
            <Route path="/admin/chat" element={<AdminChatPage />} />

            {/* this area user */}
            <Route path="/" element={<HomePage />} exact />
            <Route path="/your-profile" element={<UserPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product-detail/:productId" element={<ProductDetailContent />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog-detail" element={<BlogDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/payment-success/ReturnUrl/
          :partnerCode/:accessKey/:requestId/:amount/:orderId/:orderInfo/:orderType/:transId/
          :message/:localMessage/:responseTime/:errorCode/:payType/:extraData/:signature
          " element={<PaymentSuccessPage />} />
            <Route path="/cart/check-out" element={<CheckOutPage />} />
          </Routes>
        </>
      )
    }else if(userInfo?.Quyen ===2){
      return(
        <>
        <Routes>
          {/* this area admin */}
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/blog-manage" element={<AdminBlogPage />} />
          <Route path="/admin/transaction-manage" element={<AdminTransactionPage />} />
          <Route path="/admin/product-manage" element={<AdminProductPage />} />
          <Route path="/admin/chat" element={<AdminChatPage />} />
          
          {/* this area user */}
          <Route path="/" element={<HomePage />} exact />
          <Route path="/your-profile" element={<UserPage />}/>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product-detail/:productId" element={<ProductDetailContent />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/payment-success/ReturnUrl/
          :partnerCode/:accessKey/:requestId/:amount/:orderId/:orderInfo/:orderType/:transId/
          :message/:localMessage/:responseTime/:errorCode/:payType/:extraData/:signature
          " element={<PaymentSuccessPage />} />
          <Route path="/cart/check-out" element={<CheckOutPage />} />
        </Routes>
      </>
      )
    }
    else{
      return(
        <>
        <Routes>          
          {/* this area user */}
          <Route path="/" element={<HomePage />} exact />
          <Route path="/your-profile" element={<UserPage />}/>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product-detail/:productId" element={<ProductDetailContent />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/payment-success/ReturnUrl/
          :partnerCode/:accessKey/:requestId/:amount/:orderId/:orderInfo/:orderType/:transId/
          :message/:localMessage/:responseTime/:errorCode/:payType/:extraData/:signature
          " element={<PaymentSuccessPage />} />
          <Route path="/cart/check-out" element={<CheckOutPage />} />
        </Routes>
      </>
      )
    }
  }
  return (
    <>
    {renderAuthor()}
    </>
  );
}

export default App;


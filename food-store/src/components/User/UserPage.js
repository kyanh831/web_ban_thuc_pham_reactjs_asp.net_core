import React from 'react'
import { Footer } from '../Share/Footer'
import Navbar from '../Share/Navbar'
import UserContent from './UserContent'

const UserPage = () => {
  return (
    <>
      <Navbar />
      <UserContent />
      <Footer />
    </>
  )
}

export default UserPage
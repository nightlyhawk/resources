import React from 'react'
import { Outlet, useLocation } from "react-router-dom"
import NavBar from '../layout/navbar'
import Footer from '../layout/footer'


const Base = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Base
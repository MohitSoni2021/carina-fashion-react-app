import React from 'react'
import HeaderComponent from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import FooterComponent from './components/Footer/Footer'

const Layout = () => {
  return (
    <>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
    </>
  )
}

export default Layout

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../../Layouts/site/Header/Header'
import { Footer } from '../../../Layouts/site/Footer/footer'

export const MainRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

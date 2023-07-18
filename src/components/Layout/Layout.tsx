// import React from "react"
import { Outlet } from 'react-router-dom';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout= () => {
  return (
      <div className='container flex flex-col justify-between border h-screen w-screen max-w-screen-xl mx-auto'>
          <Header/>
          <Outlet />
          <Footer/>
      </div>
  )
}

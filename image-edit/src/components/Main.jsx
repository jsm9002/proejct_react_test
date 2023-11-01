import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Containerg from './Containerg'

const Main = () => {
  return (
    <div>
      <div className='header'><Header/></div>
      <div className='container'><Containerg/></div>
      <div className='footer'><Footer/></div>
    </div>
  )
}

export default Main
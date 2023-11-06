import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Containerg from '../components/Containerg'

const Main = () => {
  return (
    <div style={{width:"100%"}}>
      <div className='header'><Header/></div>
      <div className='container'><Containerg/></div>
    </div>
  )
}

export default Main
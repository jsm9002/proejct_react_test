import React from 'react'
import Test_222 from './Test_222'

const Test_111 = () => {
  return (
    <div style={{display:'flex',width:'100%',height:'100vh',marginTop:'30px'}} >
        <div style={{width:'15%',height:'100vh',minWidth:'170px',backgroundColor:"red"}}></div>
        <div style={{width:'85%'}}>
            <Test_222/>
        </div>
    </div>
  )
}

export default Test_111
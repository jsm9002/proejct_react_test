import React from 'react'
import TestItem from './TestItem'
import '../style/Test_222.css'

const Test_222 = () => {
    return (
        <div className='BoughtScript first-container' >
            <div className='title' >
                <p>구매내역</p>
            </div>

            <div className='title-box' >
                <div className='subtitle-text' style={{ width: "20%"}}>
                주문일자
                </div>
                <div className='subtitle-text' style={{ width: "50%"}}>
                    상품정보
                </div>
                <div className='subtitle-text' style={{ width: "15%"}}>
                    개수 / 금액
                </div>
                <div  className='subtitle-text' style={{ width: "15%"}}>
                    배송상태
                </div>
            </div>
            <div style={{width:"96%", border:"1px solid black",marginLeft:"2%"}}></div>
            <TestItem/>

        </div>
    )
}

export default Test_222
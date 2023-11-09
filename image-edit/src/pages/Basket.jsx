import React from 'react'

const Basket = () => {
  return (
    <div style={{margin: "0% 10%"}}>
        <div className='basket-top-text'>
        <div>
            <h2>장바구니</h2>
        </div>
        <div style={{fontWeight:"bold", display:"flex"}}>
            <h3 >장바구니</h3>
            <h3>-</h3>
            <h3 style={{color:"#bebebe"}}>주문서작성</h3>
            <h3>-</h3>
            <h3 style={{color:"#bebebe"}}>주문완료</h3>
        </div>
        </div>
        <div className='basket-all-check'>
                <input className='basket-top-check' type="checkbox"/>
                <h6 className='basket-top-check' >전체선택</h6> 
                <div style={{borderLeft:"1px solid black",margin:"0px 10px"}}>
                    <h6 className='basket-top-check'>선택삭제</h6>
                </div>      
        </div>
        <div style={{margin:"10px 0px 0px 0px"}}>
            <div style={{display:"flex",textAlign:"center"}}>
                <div style={{width:"20%",margin:"40px 0px",fontSize:"30px", backgroundColor:"lightblue"}}>
                    일자 / 상품번호
                </div>
                <div style={{width:"50%",margin:"40px 0px",fontSize:"30px", backgroundColor:"lightcoral"}}>
                    상품정보
                </div>
                <div style={{width:"20%",margin:"40px 0px",fontSize:"30px", backgroundColor:"lightcyan"}}>
                    사이즈 / 수량
                </div>
                <div style={{width:"20%",margin:"40px 0px",fontSize:"30px", backgroundColor:"lightgray"}}>
                     금액
                </div>
            </div>
            
            <div className='basket-goods-list' style={{display:"flex",textAlign:"center"}}>
                <div style={{width:"20%",margin:"40px 0px",fontSize:"30px", backgroundColor:"lightblue"}}>
                <input type="checkbox"/>
                    일자 / 상품번호
                </div>
                <div style={{width:"50%",margin:"40px 0px",fontSize:"30px", backgroundColor:"lightcoral",display:"flex"}}>
                <div style={{width:"40%",backgroundColor:"gray"}}>상품이미지</div>
                <div style={{width:"60%",backgroundColor:"lime"}}>
                    <div>상품명</div>
                    <div>상품색</div>
                </div>
                </div>
                <div style={{width:"20%",margin:"40px 0px",fontSize:"30px", backgroundColor:"lightcyan"}}>
                    사이즈 / 수량
                </div>
                <div style={{width:"20%",margin:"40px 0px",fontSize:"30px", backgroundColor:"lightgray"}}>
                     금액
                </div>
            </div>
        </div>
    </div>
  )
}

export default Basket
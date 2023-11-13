import React from 'react'
import "../style/GoodsBasket.css"

const Basket = () => {
  return (
    <div style={{margin: "0% 10%"}}>
        <div className='basket-top-text'>
        <div className="title">
            장바구니
        </div>
        <div className="subtitle">
            <p >장바구니</p> &nbsp;&nbsp;
            <p>—</p>&nbsp;&nbsp;
            <p style={{color:"#bebebe"}}>주문서작성</p>&nbsp;&nbsp;
            <p>—</p>&nbsp;&nbsp;
            <p style={{color:"#bebebe"}}>주문완료</p>
        </div>
        </div>
        <div className='basket-all-check' >
            <div className='inner-box'> 
                <input className='basket-top-check' type="checkbox" />
                <p className='basket-top-check' >전체선택</p> 
                <div style={{borderLeft:"1px solid darkgray",margin:"0px 10px"}}>
                    <p className='basket-top-check'>선택삭제</p>
                </div>  
            </div>    
        </div>
        <div style={{padding:"10px 0px"}}>
            <div className='basket-goods-title' style={{display:"flex",textAlign:"center",height:"60px",margin:"10px 0px"}}>
                <div className='inner-times'style={{width:"20%"}}>
                    일자 
                    <br /> 
                    상품번호
                </div>
                <div className='inner-times' style={{width:"50%"}}>
                    상품정보
                </div>
                <div className='inner-times' style={{width:"20%"}}>
                    사이즈
                    <br />
                    수량
                </div>
                <div className='inner-times' style={{width:"20%"}}>
                     금액
                </div>
            </div>
            {/* 장바구니에 넣은 아이템 표시 - 상품정보 / 사이즈/  */}
            <div className='basket-goods-list'>
                <div className='first-list-box'>
                <div className='inner-check-box'>
                <input type="checkbox"/>
                </div>
                <div className='inner-info-box' >
                    <div style={{height:"50%"}}>
                    <h6>2023.11.22</h6>
                    </div>
                    <div style={{height:"50%"}}>
                    <h6>21532245</h6>
                    </div>
                </div>    
                </div>
                {/* 장바구니 정보표시 상품이미지 / 상품명 / 상품 색 */}
                <div className='vtline' ></div>
                <div className='second-box' style={{width:"50%",margin:"5px 0px",fontSize:"20px",display:"flex"}}>
                <div style={{width:"40%"}}>
                    <img className='image-box' style={{height:"200px",width:"150px",objectFit:"cover", margin:"5px"}} src="./images/GM5_누끼.png" alt="" />
                </div>
                <div style={{width:"60%"}}>
                    <div style={{height:"50%"}}>
                        상품명
                    </div>
                    <div style={{height:"50%"}}>
                        빨간색
                    </div>
                </div>
                </div>
                <div  className='vtline' ></div>
                <div className='count-box' style={{width:"20%",margin:"5px 0px",fontSize:"20px"}}>
                    <div style={{height:"50%"}}>
                        사이즈

                    </div>
                    <div style={{height:"50%"}}>수량</div>
                </div>
                <div  className='vtline' ></div>
                <div style={{width:"20%",margin:"5px 0px",fontSize:"20px"}}>
                     20,000원
                </div>
            </div>
        </div>
    </div>
  )
}

export default Basket
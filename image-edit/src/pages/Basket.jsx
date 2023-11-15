import React, { useState } from 'react'
import "../style/GoodsBasket.css"
import BasketItem from '../components/BasketItem'
import BasketSummary from '../components/BasketSummary'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
const Basket = () => {

 
    
  return (
    <div style={{margin: "0% 10%", minWidth:"780px"}}>
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
                <div style={{borderLeft:"1px solid lightgray",margin:"0px 10px"}}>
                    <p className='basket-top-check'>선택삭제</p>
                </div>  
            </div>    
        </div>
        <div style={{padding:"10px 0px"}}>
            <div className='basket-goods-title'>
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
            {/* 장바구니 아이템 정보 노출 */}
            {/* 장바구니에 넣은 아이템 표시 - 상품정보 / 사이즈/  */}
            <BasketItem/>
        </div>
        <BasketSummary/>
        <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Link to={'/buyscript'} style={{textDecoration:"none"}}>
        <Button style={{height:"64px",lineHeight:"64px",display:"block",backgroundColor:"#0028ac",width:"200px",textAlign:"center",borderRadius:"8px",color:"white",fontWeight:"bold",fontSize:"20px"}}>구매하기</Button>
        </Link>
        </div>
    </div>
  )
}

export default Basket
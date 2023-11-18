import useItems from 'antd/es/menu/hooks/useItems'
import React, { useEffect, useState } from 'react'

const BasketSummary = ({items}) => {
  // console.log(items[0].PROD_PRICE,'가격')

  // const Total = (items) => {
  //   return items.reduce((total,item)=>{
  //     return total + (item.PROD_PRICE * item.PROD_COUNT)
  //   })
  // }


  useEffect(()=>{

 
console.log(items)


  },[])


  return (
    <div className="basket-goods-summary" style={{ padding:"15px 0px",fontSize:"20px"}}>
            <div style={{display:"flex",textAlign:"center"}}>
                <div style={{width:"70%"}}>총 상품 가격</div>
                <div style={{width:"20%"}}>배송비</div>
                <div style={{width:"20%"}}>총 결제 금액</div>
            </div>
            <div style={{display:"flex",textAlign:"center",borderTop:"1px solid lightgray",borderBottom:"1px solid lightgray"}}>
                <div style={{width:"70%"}}>0원</div>
                <div className='vtline' ></div>
                <div style={{width:"20%"}}>0원</div>
                <div className='vtline' ></div>
                <div style={{width:"20%"}}>10000원</div>
            </div>
            </div>
  )
}

export default BasketSummary
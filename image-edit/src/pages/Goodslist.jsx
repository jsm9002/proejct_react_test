import React from 'react'
import GoodsCard from '../components/GoodsCard'
import Button from 'react-bootstrap/Button';

const Goodslist = () => {
  return (
    <div style={{margin:"0% 10%"}}>
        <div style={{textAlign:"center"}}>
        <Button variant="outline-dark" type="button" className='goods-btn'>의류</Button> 
        <Button variant="outline-dark" type="button" className='goods-btn'>생활용품</Button>
        <Button variant="outline-dark" type="button" className='goods-btn'>모바일 악세서리</Button>
        </div>
        <div style={{display:"flex",flexFlow:"row wrap"}}>

        <GoodsCard/>
        <GoodsCard/>
        <GoodsCard/>
        <GoodsCard/>
        <GoodsCard/>
        <GoodsCard/>
        <GoodsCard/>
        <GoodsCard/>
        <GoodsCard/>
        <GoodsCard/>

        </div>
    </div>
  )
}

export default Goodslist
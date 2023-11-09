import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
const GoodsDetail = () => {
  const [count,setCount]=useState(0)
  const [sum,setSum]=useState(0)
  const subtract = () => {
    console.log('-')
    if(count > 0){
      setCount(count-1)
    }else{
      setCount(0)
    }
    
  }
  const addtion = () => {
    setCount(count+1)
  }

  let price = 10000;

  useEffect(()=>{
    setSum(price*count)
    console.log("useEffect 실행")
  },[count])
  return (
    <div style={{height:"650px" ,margin: "0% 10%", display: "flex" }}>
      <div style={{ backgroundColor: "green", width: "65%"}}>
        이미지 편집 공간</div>
      <div style={{ backgroundColor: "white", width: "35%" }}>
        <h3 style={{margin:"10px 5px"}}>상품명 </h3>
        <br />

        <hr className='hr-style'/>
        <div style={{margin:"10px"}}>
          <div style={{ float: "left" }}>
            <h5>리뷰</h5>
          </div>
          <div style={{ float: "right" }}>
            <h5>0000개</h5>
          </div>
        </div>
        <br />
        <hr className='hr-style'/>
        <div style={{margin:"10px"}}>
          <div style={{float: "left" }}>
            <h5>별점</h5>
          </div>
          <div style={{ float: "right" }}>
            <h5>0.00점</h5>
          </div>
        </div>
        <br />
        <hr className='hr-style'/>
        <div style={{textAlign:"center", margin:"10px"}}>
          <h5>색상</h5>
          <div style={{ display:"flex",width: "100%", height:"30px", backgroundColor: "white"}}>
            <div>
              <h6 style={{color:"red"}}>Red</h6>
           <input type="radio" name="color" style={{accentColor:"red",margin:"5px 10px", width:"20px",height:"20px",backgroundColor:"red"}}/>
           </div>
           <div>
            <h6 style={{color:"green"}}>Green</h6>
           <input type="radio" name="color" style={{accentColor:"green",margin:"5px 10px" ,width:"20px",height:"20px"}} />
           </div>
           <div>
            <h6 style={{color:"yellow"}}>Yellow</h6>
           <input type="radio" name="color" style={{accentColor:"yellow",margin:"5px 10px", width:"20px",height:"20px"}} />
           </div>
           <div>
            <h6 style={{color:"gray"}}>Gray</h6>
           <input type="radio" name="color" style={{accentColor:"gray",margin:"5px 10px", width:"20px",height:"20px"}} />
           </div>
           <div>
            <h6>Black</h6>
           <input type="radio" name="color" style={{accentColor:"black",margin:"5px 10px", width:"20px",height:"20px"}} />
           </div>
          </div>
          <br />
          <hr className='hr-style'/>
        </div>
        <div style={{textAlign:"center" ,margin:"10px"}}>
            <h5 style={{flocat:"left"}}>
              사이즈
            </h5>
            <div  style={{ width: "100%", height: "30%", backgroundColor: "white", textAlign:"center" }}>
            
            <Button variant="outline-secondary" type="submit" value="S"style={{margin:"5px 10px"}}>
              S
            </Button>
            <Button variant="outline-secondary" type="submit" value="M"style={{margin:"5px 10px"}}>
              M
            </Button>
            <Button variant="outline-secondary" type="submit" value="L"style={{margin:"5px 10px"}}>
              L
            </Button>
            <Button variant="outline-secondary" type="submit" value="XL"style={{margin:"5px 10px"}}>
              XL
            </Button>  
            </div>
          </div>
          <hr className='hr-style'/>
        <div style={{textAlign:"center" ,margin:"10px"}}>
          <h5 style={{float:"left",textAlign:"center"}}>수량</h5>
          <div style={{float:"right", display:"flex"}}>
          <Button variant="outline-secondary" onClick={subtract} style={{margin:"0px 10px 0px 10px"}}>-</Button>
          <h5 >{count}</h5>
          <Button variant="outline-secondary" onClick={addtion} style={{margin:"0px 0px 0px 10px"}}>+</Button>
          </div>
        </div> 
        <br />
        <hr className='hr-style'/>
        <div style={{textAlign:"center" ,margin:"10px"}}>
          <h5 style={{float:"left"}}>가격</h5> 
          <div style={{float:"right"}}>
            <h5>{sum}</h5>
          </div>
        </div> 
        <br />
        <hr  className='hr-style'/>
        <div style={{display:"flex"}}>
        <div >
          <img style={{width:"50px",height:"50px"}} src="./images/basket.png" alt="" />
        </div>
        <div>
          <button>장바구니에 추가</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GoodsDetail
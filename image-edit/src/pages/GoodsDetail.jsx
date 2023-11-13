import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "../style/GoodsDetail.css"
const GoodsDetail = () => {
  // 제품수량 선택을 위하 State
  const [count,setCount]=useState(1)
  // 가격을 나타내기 위하 State
  const [sum,setSum]=useState(0)
  // 사이즈 라디오버튼 state
  const [radioValue, setRadioValue] = useState('1');

  //제품수량 감소 함수
  const subtract = () => {
    console.log('-')
    if(count > 0){
      setCount(count-1)
    }
    else{
      setCount(1)
    }
    
  }

  // 사이즈 라디오 버튼을 위한 임시 데이터
  const radios = [
    { name: 'S', value: 's' },
    { name: 'M', value: 'm' },
    { name: 'L', value: 'l' },
  ];

  //제품수량 증가 함수
  const addtion = () => {
    setCount(count+1)
  }

  // 제품 가격 임시 데이터
  let price = 10000;


  // 제품수량에 따른 가격증감을 위한 useEffect
  useEffect(()=>{
    setSum(price*count)
    console.log("useEffect 실행")
  },[count])

  return (
    <div className="GoodsDetail-imgedit"style={{height:"650px" ,margin: "0% 10%", display: "flex" }}>
      {/* 이미지 편집 공간 filerobot 들어올 공간 로고 이미지의 경우 선택후 편집까지 끝난 이미지 들어옴 */}
      <div style={{ backgroundColor: "green", width: "65%"}}>
        이미지 편집 공간</div>
      <div style={{ backgroundColor: "white", width: "35%" , margin:"20px 0px"}}>
        {/* 상품명은 DB 에서 연동하여 가져옴 - 품목번호기준 */}
        <h3 className="GoodsDetail-title" style={{margin:"10px 5px"}}>상품명 </h3>
        <br />
        <hr className='hr-style'/>
        <div style={{margin:"10px"}}>
          <div style={{ float: "left" }}>
            {/* 리뷰 개수만 가져오기 - 품목번호기준  */}
            <h5 style={{fontWeight:"bold"}}>리뷰</h5>
          </div>
          <div style={{ float: "right" }}>
            <h5>0000개</h5>
          </div>
        </div>
        <br />
        <hr className='hr-style'/>
        <div style={{margin:"10px"}}>
          <div style={{float: "left" }}>
            {/* 평균평점을 가져오기 없을경우 0.0점*/}
            <h5 style={{fontWeight:"bold"}}>별점</h5>
          </div>
          <div style={{ float: "right" }}>
            <h5>0.0점</h5>
          </div>
        </div>
        <br />
        <hr className='hr-style'/>
        <div style={{textAlign:"center", margin:"10px"}}>
          {/* map 함수로 DB에 있는 색상 가져오기 - 품목번호기준 변화할 props 색상이름 / style-accentColor,backgroundColor  */}
          <h5 style={{fontWeight:"bold"}}>색상</h5>
          <div className="GoodsDetail-radio-flex" >
            <div>
              <h6 style={{color:"red"}}>빨강</h6>
           <input className='GoodsDetail-radio-color' type="radio" name="color" style={{accentColor:"red",backgroundColor:"red"}}/>
           </div>
           <div>
            <h6 style={{color:"green"}}>초록</h6>
           <input className='GoodsDetail-radio-color' type="radio" name="color" style={{accentColor:"green",backgroundColor:"green"}} />
           </div>
           <div>
            <h6 style={{color:"gray"}}>그레이</h6>
           <input className='GoodsDetail-radio-color' type="radio" name="color" style={{accentColor:"gray",backgroundColor:"gray"}} />
           </div>
           <div>
            <h6>블랙</h6>
           <input className='GoodsDetail-radio-color' type="radio" name="color" style={{accentColor:"black"}} />
           </div>
          </div>
          <hr className='hr-style'/>
        </div>
        <div style={{textAlign:"center" ,margin:"10px"}}>
            <h5 style={{fontWeight:"bold"}}>
             {/* 나중에 redux나 props 로 DB 에서 map 함수로 불러오기 - 품목번호기준  */}
              사이즈
            </h5>
            <div className='GoodsDetail-size-btn' >
            <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 1 ? 'secondary' : 'outline-secondary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
            {/* <Button className='GoodsDetail-size-btn-margin' variant="outline-secondary" type="submit" value="S">

              S  
            </Button>
            <Button className='GoodsDetail-size-btn-margin' variant="outline-secondary" type="submit" value="M">
              M
            </Button>
            <Button className='GoodsDetail-size-btn-margin' variant="outline-secondary" type="submit" value="L">
              L
            </Button>
            <Button className='GoodsDetail-size-btn-margin' variant="outline-secondary" type="submit" value="XL">
              XL
            </Button>   */}
            </div>
          </div>
          <hr className='hr-style'/>
        <div style={{textAlign:"center" ,margin:"10px"}}>
          <h5 style={{float:"left",fontWeight:"bold"}}>수량</h5>
          <div className="count-felx"style={{float:"right", display:"flex", alignItems:"center"}}>
          <Button className='count-btn' variant="outline-secondary" onClick={subtract} >-</Button>
          <h6 >{count}</h6>
          <Button className='count-btn' variant="outline-secondary" onClick={addtion}>+</Button>
          </div>
        </div> 
        <br />
        <hr className='hr-style'/>
        <div style={{textAlign:"center" ,margin:"10px"}}>
          <h5 style={{float:"left", fontWeight:"bold"}}>가격</h5> 
          <div style={{float:"right"}}>
            <h5>{sum}</h5>
          </div>
        </div> 
        
        <br />
        <hr  className='hr-style'/>
        <div style={{alignItems:"center", textAlign:"center"}}>
          <Button  variant="outline-secondary" style={{width:"90%",height:"50px",fontSize:"25px"}}>장바구니 담기</Button>
        </div>
      </div>
    </div>
  )
}

export default GoodsDetail
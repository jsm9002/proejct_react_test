import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import prd_color from '../data/prd_color.json'
import prd_size from '../data/prd_size.json'
import prd_info from '../data/product_info.json'
import "../style/GoodsDetail.css"
import { useParams } from 'react-router-dom';


const GoodsDetail = () => {
  // 제품수량 선택을 위하 State
  const [count, setCount] = useState(1)
  // 가격을 나타내기 위하 State
  const [sum, setSum] = useState(0)
  /** 제품의 사이즈 정보및 라디오버튼 */
  const [radioValue, setRadioValue] = useState('1');
  /** 제품 색상정보 저장 state */
  const [color, setColor] = useState('')
  // 상품별 상세페이지 로딩을 위한 useParams
  const { PROD_ID } = useParams();
  // 해당페이지의 상품 ID
  let prd_id = PROD_ID
  //  굿즈색상정보 끌어오기
  const goods_color = (e) => {
    console.log(e.currentTarget.value)
    setColor(e.currentTarget.value)
  }



  //제품수량 감소 함수

  const prd_info_filter = prd_info.filter(item => item.PROD_ID === prd_id)
  const prd_color_filter = prd_color.filter(item => item.PROD_ID === prd_id)
  const prd_size_filter = prd_size.filter(item => item.PROD_ID === prd_id)
  console.log(prd_info_filter, "필터링정보")
  console.log(prd_color_filter, "필터링 컬러 정보")
  console.log(prd_size_filter, "필터링 사이즈 정보")

  console.log(radioValue, "라디오스테이트")
  //  해당제품의 가격 데이터 
  let price = prd_info_filter[0].PROD_PRICE


 

  //수량 마이너스 버튼 간단함수
  const subtract = () => {
    console.log('-')
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      setCount(1)
    }

  }
  // 수량 플러스 버튼 간단함수
  const addtion = () => {
    setCount(count + 1)
  }
  // 제품수량에 따른 가격증감을 위한 useEffect
  useEffect(() => {
    if (count === 0) {
      setCount(1)
      setSum(price * count)
    } else {
      setSum(price * count)
    }
    console.log("useEffect 실행")
    console.log(count)
    console.log(price)
  }, [count])
   /** 장바구니 구현을 위한 세션 */
  // function moveItemToCart() {
  //   // 같은 상품의 장바구니 데이터가 있는 경우 기존 sessionStorage데이터 삭제 후 다시 넣기
  //   // sessionStorage 데이터는 json으로 저장되기 때문에, 변환하는 작업이 필요하다. 
  //   let cartItem = {
  //     'PROD_ID': `${prd_info_filter[0].PROD_ID}`, //상품 ID
  //     'PROD_NAME': `${prd_info_filter[0].PROD_NAME}`, //상품명
  //     'PROD_SIZE':`${radioValue}`, // 상품 사이즈
  //     'PROD_COLOR' : `${color}`, // 상품 색상
  //     'PROD_COUNT' : `${count}` // 상품 수량
  //   }
  //   if (!sessionStorage.getItem(prd_info_filter[0].PROD_ID)) {
  //     sessionStorage.setItem(`${prd_info_filter[0].PROD_ID}`, JSON.stringify(cartItem));
  //   }
  //   else {
  //     sessionStorage.removeItem(prd_info_filter[0].PROD_ID); // 같은 상품이 있을 경우, 해당 장바구니 상품 삭제
  //     sessionStorage.setItem(`${prd_info_filter[0].PROD_ID}`, JSON.stringify(cartItem)); // 최신의 데이터로 다시 저장
  //   }
  // }
  function moveItemToCart() {
    let newCartItem = {
        'PROD_ID': `${prd_info_filter[0].PROD_ID}`, // 상품 ID
        'PROD_NAME': `${prd_info_filter[0].PROD_NAME}`, // 상품명
        'PROD_SIZE':`${radioValue}`, // 상품 사이즈
        'PROD_COLOR' : `${color}`, // 상품 색상
        'PROD_COUNT' : `${count}` // 상품 수량
    };

    let cartItems = sessionStorage.getItem('cartItem');
    if (cartItems) {
        // JSON 형태로 변환하고 새 상품 추가
        cartItems = JSON.parse(cartItems);
        cartItems.push(newCartItem);
    } else {
        // 새 배열 생성
        cartItems = [newCartItem];
    }

    // 업데이트된 장바구니 데이터를 다시 JSON 형태로 변환하여 저장
    sessionStorage.setItem('cartItem', JSON.stringify(cartItems));
}



  return (
    <div className="GoodsDetail" style={{ minWidth: "710px", height: "650px", margin: "50px 10% ", display: "flex" }}>
      {/* 이미지 편집 공간 filerobot 들어올 공간 로고 이미지의 경우 선택후 편집까지 끝난 이미지 들어옴 */}
      <div style={{ backgroundColor: "green", width: "65%" }}>
        이미지 편집 공간</div>
      <div style={{ backgroundColor: "white", width: "35%", margin: "50px 0px 0px 0px", padding: "0px 20px" }}>
        {/* 상품명은 DB 에서 연동하여 가져옴 - 품목번호기준 */}
        <h3 className="GoodsDetail-title" style={{ margin: "10px 5px" }}>{prd_info_filter[0].PROD_NAME}</h3>
        <br />
        <hr className='hr-style' />
        <div style={{ margin: "10px" }}>
          <div style={{ float: "left" }}>
            {/* 리뷰 개수만 가져오기 - 품목번호기준  */}
            <h5 style={{ fontWeight: "bold" }}>리뷰</h5>
          </div>
          <div style={{ float: "right" }}>
            <h5>0000개</h5>
          </div>
        </div>
        <br />
        <hr className='hr-style' />
        <div style={{ margin: "10px" }}>
          <div style={{ float: "left" }}>
            {/* 평균평점을 가져오기 없을경우 0.0점*/}
            <h5 style={{ fontWeight: "bold" }}>별점</h5>
          </div>
          <div style={{ float: "right" }}>
            <h5>0.0점</h5>
          </div>
        </div>
        <br />
        <hr className='hr-style' />
        <div style={{ textAlign: "center", margin: "10px" }}>
          {/* map 함수로 DB에 있는 색상 가져오기 - 품목번호기준 변화할 props 색상이름 / style-accentColor,backgroundColor  */}
          <h5 style={{ fontWeight: "bold" }}>색상</h5>
          <div className="GoodsDetail-radio-flex" >
            {prd_color_filter.map((item) => {
              console.log(item.COLOR_CODE)
              return (
                <div style={{ margin: "0px 10px" }}>
                  <h6 style={item.COLOR_CODE === '#FFFFFF' ? { color: 'black' } : { color: `${item.COLOR_CODE}` }}>{item.COLOR_NAME}</h6>
                  {/* <input className='GoodsDetail-radio-color' type="radio" name="color" ref={useColor} value={item.COLOR_CODE}
                style={{ accentColor: `${item.COLOR_CODE}` , backgroundColor: `${item.COLOR_CODE}` ,boxShadow:`${item.COLOR_CODE}`,border:`1px solid ${item.COLOR_CODE}`}}
                onClick={radio_color_btn}/> */}
                  <button value={item.COLOR_CODE}
                    style={{ width: "20px", height: "20px", boxSizing: 'border-box', borderRadius: '50%', backgroundColor: `${item.COLOR_CODE}` }}
                    onClick={(goods_color)}>
                  </button>
                </div>
              )
            })}
          </div>
          <hr className='hr-style' />
        </div>
        <div style={{ textAlign: "center", margin: "10px" }}>
          <h5 style={{ fontWeight: "bold" }}>
            {/* 나중에 redux나 props 로 DB 에서 map 함수로 불러오기 - 품목번호기준  */}
            사이즈
          </h5>
          <div className='GoodsDetail-size-btn' >
            <ButtonGroup>
              {prd_size_filter.map((item, idx) => (
                <ToggleButton
                  key={idx}
                  id={`item-${idx}`}
                  type="radio"
                  variant={idx % 1 ? 'secondary' : 'outline-secondary'}
                  name="radio"
                  value={item.SIZE_NAME}
                  checked={radioValue === item.SIZE_NAME}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {item.SIZE_NAME}
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
        <hr className='hr-style' />
        <div style={{ textAlign: "center", margin: "10px" }}>
          <h5 style={{ float: "left", fontWeight: "bold" }}>수량</h5>
          <div className="count-felx" style={{ float: "right", display: "flex", alignItems: "center" }}>
            <Button className='count-btn' variant="outline-secondary" onClick={subtract} >-</Button>
            <h6 >{count}</h6>
            <Button className='count-btn' variant="outline-secondary" onClick={addtion}>+</Button>
          </div>
        </div>
        <br />
        <hr className='hr-style' />
        <div style={{ textAlign: "center", margin: "10px" }}>
          <h5 style={{ float: "left", fontWeight: "bold" }}>가격</h5>
          <div style={{ float: "right" }}>
            <h5>{sum}</h5>
          </div>
        </div>

        <br />
        <hr className='hr-style' />
        <div style={{ alignItems: "center", textAlign: "center", margin: "10px  0px 0px 0px" }}>
          <Button variant="outline-secondary" onClick={moveItemToCart}
            style={{ width: "90%", height: "50px", fontSize: "25px" }}>장바구니 담기</Button>
        </div>
      </div>
    </div>
  )
}

export default GoodsDetail
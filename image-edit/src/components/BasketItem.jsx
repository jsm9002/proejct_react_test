// 제품 상세페이지에서 넣은 정보 불러와 그에 맞게 조정되는기능까지 구현 2023/11/17 조성민
// 제품 수량 및 사이즈 수정기능 구현 2023/11/21 조성민
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import COLOR from '../data/prd_color.json';
import PRD_SIZE from '../data/prd_size.json';
import PRD_INFO from '../data/product_info.json';

const Basketitems = ({  items, isChecked, onCheck }) => {

    console.log(items)

    // 제품수량 변경을 위한 State
    const [count, setCount] = useState(parseInt(items.PROD_COUNT))
    // 합계가격 State
    const [sum, setSum] = useState(0)

    // 변경되는 사이즈 임시저장을 위한 State
    const[size,setSize] = useState(items.PROD_SIZE)

    // 체크박스 체크 State
    const [checked, setChecked] = useState(isChecked);

    // 개수와 합계가격을 위해 별도로 변수선언
    let price = items.PROD_PRICE;
    console.log(price, "가격")


        // 부모 컴포넌트로부터 받은 isChecked prop이 변경될 때마다 checked 상태를 업데이트합니다.
        // useEffect(() => {
        //     setChecked(!checked);
        // }, [checked]);


        // GPT의견반영
            // 체크박스 변경 핸들러
    // const handleCheckboxChange = () => {
    //     onCheck(items.id, !isChecked);
    // };


     // 체크박스 변경 핸들러
     const handleCheckboxChange = () => {
        setChecked(!checked); // 체크 상태를 토글합니다.
        // 부모 컴포넌트에 변경 사항을 알립니다.
        console.log(checked,'체크상태를 봅시다')
        GoToBuyItems(); // 체크된 경우에만 goToBuyItems 호출
    };



    // 컬러 한글이름을 노출시키기 위한 필터함수()
    const color_filter = COLOR.filter(item => item.COLOR_CODE === items.PROD_COLOR)
    const prd_size_filter = PRD_SIZE.filter(item => item.PROD_ID === items.PROD_ID)
    const prd_info_filter = PRD_INFO.filter(item => item.PROD_ID === items.PROD_ID)
    /** 수량조절버튼 조작을 위한 간단한 함수들 */
    // 빼기
    const subtract = () => {
        console.log('-')
        if (count > 0) {
            setCount(count - 1)
        }
        else {
            setCount(1)
        }
    }
    //더하기
    const addtion = () => {
        setCount(count + 1)
    }
    //버튼을 누를때 useEffect 실행
    useEffect(() => {
        if (count == 0) {
            setCount(1)
            setSum(price * count)
        } else {
            setSum(price * count)
        }
        console.log("useEffect 장바구니 수량조절")
    }, [count])


    /** 굿즈 사이즈 수정 */
    //  select 구문에서 수정될 값을 받아 size State 에 넣어주는 구문
    const sizeChange = (e) =>{
        setSize(e.target.value)
        console.log(size,"sizeChang사이즈변경")
    }



    /**장바구니에 담겨있는 데이터를 변경하기 위한 함수 */
    function correctItemToCart() {
        //세션 로컬스토리지에 넣기 위해 데이터를 모으는 과정
        let correctCartItem = {
            'PROD_ID': `${items.PROD_ID}`, // 상품 ID
            'PROD_NAME': `${items.PROD_NAME}`, // 상품명
            'PROD_SIZE': `${size}`, // 상품 사이즈 State 를 통한 값 수정
            'PROD_COLOR': `${color_filter.COLOR_CODE}`, // 상품 색상
            'PROD_COUNT': `${count}`, // 상품 수량 State 를 통한 값 수정
            'PROD_PRICE': `${items.PROD_PRICE}`, //상품 가격
            'CARTED_AT': `${items.CARTED_AT}`, //굿즈 상세페이지에서 카트에 넣을 당시의 시각
            'PRICE_SUM':`${parseInt(items.PROD_PRICE)*parseInt(count)}`,
            'PROD_UUID' : `${items.PROD_UUID}`
        };

        // 로컬 스토리지에있는 정보를 일단 가져온다.
        let cartItems = sessionStorage.getItem('cartItem');

        if (cartItems) {
            // JSON 형태로 변환하고 새 상품 추가
            cartItems = JSON.parse(cartItems);
            console.log((cartItems.length), "세션기능TEST")
            console.log(correctCartItem,'수정되는아이템');

            // 중복된 물건이 있을경우 물건ID 를 기준으로 검색후 삭제 그리고 다시추가
            for (let i = 0; i < parseInt(cartItems.length); i++) {
                if (cartItems[i].PROD_UUID === correctCartItem.PROD_UUID) {
                    // 중복되는 물건ID를 가진 데이터 삭제
                    cartItems.pop(correctCartItem.PROD_UUID);
                    // 중복되는 물건ID를 가진 새로운 데이터
                    cartItems.push(correctCartItem);
                } else if (cartItems[i].PROD_UUID === cartItems[parseInt(cartItems.length) - 1].PROD_UUID) {
                    console.log("중복되는 아이템이 없습니다.")
                    cartItems.push(correctCartItem);
                }
            }
            // cartItems.push(newCartItem);
        } else {
            // 새 배열 생성
            cartItems = [correctCartItem];
        }
        // 업데이트된 장바구니 데이터를 다시 JSON 형태로 변환하여 저장
        sessionStorage.setItem('cartItem', JSON.stringify(cartItems));
    }

    const GoToBuyItems = () => {
        let buyItems = JSON.parse(sessionStorage.getItem('buyItem')) || [];

        if(!checked){
            buyItems = [...buyItems].filter(item => item.PROD_UUID !== items.PROD_UUID);
            buyItems.push({...items, PROD_SIZE:size, PROD_COUNT:count,PRICE_SUM:items.PRICE_SUM});
        }else{
            buyItems = [...buyItems].filter(item => item.PPROD_UUID !== items.PROD_UUID);
        }

        sessionStorage.setItem('buyItem', JSON.stringify(buyItems));
    };



    useEffect(() => {
        if(count == items.PROD_COUNT && size == items.PROD_SIZE){
            console.log('추가할 값 없음')
        }else{
            correctItemToCart()
        }
       
    }, [count,size])

    return (
        <div className='basket-goods-list'>
            <div className='first-list-box'>
                <div className='inner-check-box'>
                    <input    type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange} />
                </div>
                <div className='inner-info-box' >
                    <div style={{ height: "50%" }}>
                        {/* 장바구니에 넣은날짜 /세션 로컬 스토리지에 저장 */}
                        <h6>{items.CARTED_AT}</h6>
                    </div>
                    <div style={{ height: "50%" }}>
                        {/* DB의 상품번호 첫번째 구문만 노출/ 세션 로컬 스토리지에 저장 */}
                        <h6>{(items.PROD_ID).substring(0, 7)}</h6>
                    </div>
                </div>
            </div>
            {/* 장바구니 정보표시 상품이미지 / 상품명 / 상품 색 */}
            <div className='vtline' ></div>
            <div className='second-box'>
                <div style={{ width: "40%" }}>
                    {/* <img className='img-box' src="./images/GM4_누끼.png" alt="" /> */}
                    <Card.Img variant="top" src={prd_info_filter[0].PROD_THUMB} style={{ width: "auto", height: "auto", maxWidth: "200px", maxHeight: "200px" }} />
                </div>
                <div className='txt-info' style={{ width: "60%" }}>
                    {/* DB에서 상품번호를 기반으로 불러오기 */}
                    <div style={{ height: "50%" }}>
                        {items.PROD_NAME}
                    </div>
                    <div style={{ height: "50%" }}>
                        {color_filter[0]?.COLOR_NAME}
                        <button style={{cursor:"default", borderRadius: "50%", width: "20px", height: "20px", backgroundColor: `${items.PROD_COLOR}` }}></button>
                    </div>
                </div>
            </div>
            <div className='vtline' ></div>
            <div className='count-box' >
                {/* 장바구니의 사이즈 결정 */}
                <div style={{ height: "50%", display: "grid", placeitems: "center" }}>
                    사이즈
                    <div>
                        <select onChange={sizeChange} name="size" id="">
                            {prd_size_filter.map((size) => {
                                return ((size.SIZE_NAME == items.PROD_SIZE ? <option  value={size.SIZE_NAME} selected>{size.SIZE_NAME} </option> : <option value={size.SIZE_NAME} defaultValue={items.PROD_SIZE}>{size.SIZE_NAME} </option>))
                            })}
                        </select>
                    </div>
                </div>
                {/* 제품 수량 결정*/}
                <div style={{ height: "50%", display: "grid", placeitems: "center" }}>
                    <div>개수</div>
                    <div style={{ display: "flex", justifyContent: "center", alignitems: "center" }}>
                        <button className='count-btn' onClick={subtract}>-</button>
                        <h6 style={{ margin: "4px 5px" }}>{count}</h6>
                        <button className='count-btn' onClick={addtion}>+</button>
                    </div>
                </div>
            </div>
            <div className='vtline' ></div>
            {/* 간단한 함수로 각 상품의 총 금액 */}
            <div className='summary-price'>
                {sum}원
            </div>
        </div>
    )
}

export default Basketitems
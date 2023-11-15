import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BasketItem = () => {
    // 제품수량 선택을 위하 State
    const [count, setCount] = useState(1)
    // 가격을 나타내기 위하 State
    const [sum, setSum] = useState(0)

    let price = 10000;

    const subtract = () => {
        console.log('-')
        if (count > 0) {
            setCount(count - 1)
        }
        else {
            setCount(1)
        }

    }
    const addtion = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        if (count == 0) {
            setCount(1)
            setSum(price * count)
        } else {
            setSum(price * count)
        }
        console.log("useEffect 장바구니실행")
    }, [count])

    const sizeSelect = [
        { name: 'S', value: 's' },
        { name: 'M', value: 'm' },
        { name: 'L', value: 'l' },
        { name: 'XL', value: 'xl' }
    ];


    return (
        <div className='basket-goods-list'>
            <div className='first-list-box'>
                <div className='inner-check-box'>
                    <input type="checkbox" />
                </div>
                <div className='inner-info-box' >
                    <div style={{ height: "50%" }}>
                        {/* 장바구니에 넣은날짜 /  */}
                        <h6>2023.11.22</h6>
                    </div>
                    <div style={{ height: "50%" }}>
                        {/* DB의 상품번호 / 세션 로컬 스토리지에 저장 */}
                        <h6>21532245</h6>
                    </div>
                </div>
            </div>
            {/* 장바구니 정보표시 상품이미지 / 상품명 / 상품 색 */}
            <div className='vtline' ></div>
            <div className='second-box'>
                <div style={{ width: "40%" }}>
                    {/* <img className='img-box' src="./images/GM4_누끼.png" alt="" /> */}
                    <Card.Img variant="top" src="./images/GM5_누끼.png" style={{width:"auto",height:"auto",maxWidth:"200px",maxHeight:"200px"}}/>
                </div>
                <div className='txt-info' style={{ width: "60%" }}>
                    {/* DB에서 상품번호를 기반으로 불러오기 */}
                    <div style={{ height: "50%" }}>
                        상품명
                    </div>
                    {/* 세션 스토리지 저장 */}
                    <div style={{ height: "50%" }}>
                        빨간색
                    </div>
                </div>
            </div>
            <div className='vtline' ></div>
            <div className='count-box' >
                {/* 세션스토리지저장 */}
                <div style={{ height: "50%", display: "grid", placeItems: "center" }}>
                    사이즈
                    <div>
                        <select name="size" id="">
                            {sizeSelect.map((size)=>{
                               return <option value={size.value}>{size.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                {/* 세션 스토리지 저장 */}
                <div style={{ height: "50%", display: "grid", placeItems: "center" }}>
                    <div>수량</div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Button className='count-btn' variant="outline-secondary" onClick={subtract} >-</Button>
                        <h6 >{count}</h6>
                        <Button className='count-btn' variant="outline-secondary" onClick={addtion}>+</Button>
                    </div>
                </div>
            </div>
            <div className='vtline' ></div>
            <div className='summary-price'>
                {sum}
            </div>
        </div>
    )
}

export default BasketItem
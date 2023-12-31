// 장바구니 기능 구현 불러오는것까지만 기능구현됨 2023/11/17 - 조성민

import React, { useEffect, useState } from 'react'
import "../style/GoodsBasket.css"
import BasketItem from '../components/BasketItem'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
const Basket = () => {

    // 세션스토리지에 있던 데이터를 불러와 저장할 State 
    const [cartItem, setCartItem] = useState([]);
    const [selectedItem, setSelectItem] = useState({});
    const [sum, setSum] = useState(0)

    // GPT의 의견반영
    const [cartItems, setCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState({});

    //GPT의 의견반영
    useEffect(() => {
        // 세션 스토리지에서 장바구니 데이터 로드
        const storedCartItems = sessionStorage.getItem('cartItem');
        if (storedCartItems) {
            const loadedCartItems = JSON.parse(storedCartItems);
            setCartItems(loadedCartItems);

            // 초기 선택 상태 설정
            const initialSelectedItems = {};
            loadedCartItems.forEach(item => {
                initialSelectedItems[item.id] = false;
            });
            setSelectedItems(initialSelectedItems);
        }
    }, []);

 //GPT의 의견반영
    const handleItemCheck = (id, isChecked) => {
        setSelectedItems(prev => ({ ...prev, [id]: isChecked }));
        updateBuyItems();
    };
    const handleSelectAll = () => {
        const allChecked = !isAllChecked();
        const newSelectedItems = {};
        cartItems.forEach(item => {
            newSelectedItems[item.id] = allChecked;
        });
        setSelectedItems(newSelectedItems);
        updateBuyItems(allChecked);
    };
    const isAllChecked = () => {
        return cartItems.every(item => selectedItems[item.id]);
    };
    const updateBuyItems = (id, isChecked) => {
        const buyItems = JSON.parse(sessionStorage.getItem('buyItem') || '[]');
        if (isChecked) {
            // 체크된 아이템 추가
            const selectedItem = cartItems.find(item => item.PROD_UUID === id);
            if (!buyItems.some(item => item.PROD_UUID === id)) {
                buyItems.push(selectedItem);
            }
        } else {
            // 체크 해제된 아이템 제거
            const updatedBuyItems = buyItems.filter(item => item.PROD_UUID !== id);
            sessionStorage.setItem('buyItem', JSON.stringify(updatedBuyItems));
        }
    };
    //여기까쥐



    // 세션스토리지에서 장바구니 데이터 불러오기
    useEffect(() => {
        // 세션 스토리지에서 아이템 로드
        const storedCartItems = sessionStorage.getItem('cartItem');
        if (storedCartItems) {
            const loadedCartItems = JSON.parse(storedCartItems);
            setCartItem(loadedCartItems);
        }
    }, []);

    useEffect(() => {
        // 선택된 아이템들의 총 금액 계산
        calculateTotal();
        console.log(sum, '총합계')
    }, [selectedItem, cartItem]);

    // 개별 아이템 선택 처리
    // const handleItemCheck = (id, isChecked) => {
    //     // setSelectItem(prev => ({ ...prev, [id]: isChecked }));
    //     setSelectItem(prev => ({ ...prev, [id]: isChecked }));
    //     updateBuyItems(id, isChecked);
    // };

    const handleDeleteItem = () => {

    }


    // 전체 선택 처리
    // const handleSelectAll = () => {
    //     const newSelectedItems = {};
    //     if (!isAllChecked()) {
    //         cartItem.forEach(item => {
    //             newSelectedItems[item.id] = true;
    //         });
    //     }
        // setSelectItem(newSelectedItems);

        // let selectAll = !isAllChecked();

        // cartItem.forEach(item => {
        //     newSelected[item.id] = selectAll;
        //     updateBuyItems(item.id, selectAll);
        //     setSelectItem(newSelected);
        // });
        //전체 선택 상태 확인
    // }

    // const isAllChecked = () => {
    //     return cartItem.every(item => selectedItem[item.id]);
    // };
    const calculateTotal = () => {
        let total = 0;
        cartItem.forEach(item => {
            if (selectedItem[item.id]) {
                total += parseInt(item.PRICE_SUM); // 가정: 각 아이템 객체에 'price' 속성이 있다고 가정합니다.
            }
        });
        setSum(total);
    };


    //체크박스 선택시 butItems 에 세션을 넣기위함
    // const updateBuyItems = (PROD_UUID, isChecked) => {
    //     let buyItems = JSON.parse(sessionStorage.getItem('buyItem')) || [];
    //     if (isChecked) {
    //         // 선택된 경우, buyItem에 추가
    //         const selectedItem = cartItem.find(item => item.PROD_UUID === PROD_UUID);
    //         buyItems = [...buyItems, selectedItem];
    //     } else {
    //         // 선택 해제된 경우, buyItem에서 제거
    //         buyItems = buyItems.filter(item => item.PROD_UUID !== PROD_UUID);
    //     }
    //     sessionStorage.setItem('buyItem', JSON.stringify(buyItems));
    // };

    /** 세션 로컬스토리지에 있는 데이터를 불러와 State에 저장 그리고 확인할 console */
    useEffect(() => {
        const cartItems = sessionStorage.getItem('cartItem');
        if (cartItems) {
            setCartItem(JSON.parse(cartItems))
        }
        console.log(cartItem, "장바구니페이지 처음 랜더링")
    }, [])



    return (
        <div style={{ margin: "0% 20%", minWidth: "780px" }}>
            <div className='basket-top-text'>
                <div className="title">
                    장바구니
                </div>
                <div className="subtitle">
                    <p >장바구니</p> &nbsp;&nbsp;
                    <p>—</p>&nbsp;&nbsp;
                    <p style={{ color: "#bebebe" }}>주문서작성</p>&nbsp;&nbsp;
                    <p>—</p>&nbsp;&nbsp;
                    <p style={{ color: "#bebebe" }}>주문완료</p>
                </div>
            </div>
            {/* 장바구니의 전체선택님 하나하나 선택되는 기능 구현 예정 */}
            <div className='basket-all-check' >
                <div className='inner-box'>
                    <input className='basket-top-check' type="checkbox"
                        checked={isAllChecked()}
                        onChange={handleSelectAll} />
                    <p className='basket-top-check' >전체선택</p>
                    <button style={{ border: "none", backgroundColor: "whitesmoke" }} onClick={handleDeleteItem()}>
                        <div style={{ borderLeft: "1px solid lightgray", margin: "0px 10px" }}>
                            <p className='basket-top-check'>선택삭제</p>
                        </div>
                    </button>
                </div>
            </div>
            <div style={{ padding: "10px 0px" }}>
                <div className='basket-goods-title'>
                    <div className='inner-times' style={{ width: "20%" }}>
                        일자
                        <br />
                        상품번호
                    </div>
                    <div className='inner-times' style={{ width: "50%" }}>
                        상품정보
                    </div>
                    <div className='inner-times' style={{ width: "20%" }}>
                        사이즈
                        <br />
                        수량
                    </div>
                    <div className='inner-times' style={{ width: "20%" }}>
                        금액
                    </div>
                </div>
                {/* 세션에 들어있는 장바구니에 들어가 있는 제품들의 정보를 컴포넌트를 통해 map 으로 뿌려줌 */}
                {cartItem.map((item) => {
                    return (
                        <BasketItem
                            key={item.id}
                            items={item}
                            isChecked={selectedItem[item.PROD_UUID] || false}
                            onCheck={handleItemCheck} />
                    );
                })}

            </div>
            {/* 모든 상품의 가격 총 금액 기능 - 구현예정 (아직 구현 안됨) */}
            <div className="basket-goods-summary" style={{ padding: "15px 0px", fontSize: "20px" }}>
                <div style={{ display: "flex", textAlign: "center" }}>
                    <div style={{ width: "70%" }}>총 상품 가격</div>
                    <div style={{ width: "20%" }}>배송비</div>
                    <div style={{ width: "20%" }}>총 결제 금액</div>
                </div>
                <div style={{ display: "flex", textAlign: "center", borderTop: "1px solid lightgray", borderBottom: "1px solid lightgray" }}>
                    <div style={{ width: "70%" }}>{sum}원</div>
                    <div className='vtline' ></div>
                    <div style={{ width: "20%" }}>0원</div>
                    <div className='vtline' ></div>
                    <div style={{ width: "20%" }}>10000원</div>
                </div>
            </div>


            {/* 주문하기 버튼을 누를 시 주문서 작성 페이지로 체크된 제품만 정보가 넘어감*/}
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link to={'/buyscript'} style={{ textDecoration: "none",width:"25%" }}>
                    <Button variant="outline-dark"  className='basket-submit-btn' >주문하기</Button>
                </Link>
            </div>
        </div>
    )
}

export default Basket
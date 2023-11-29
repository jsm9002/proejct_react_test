import React, { useState } from 'react'
import ReviewWrite from './ReviewWrite.jsx'
import '../style/Test.css'

const TestItem = () => {
    const [isOpen, setIsOpen] = useState(false); // 모달 상태 State
    const [deliverState, setDeliverState] = useState(true)

    /**모달 열고 닫는 상태 함수*/
    const openModalHandler = (index) => {
        // isOpen의 상태를 변경하는 메소드를 구현
        // !false -> !true -> !false
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    return (
        <div className='BoughtItem item-first-container'>
            <div className='item-second-container'>
                <div className='first-box' >
                    <div>
                        2023/11/28 17:04:10
                    </div>
                </div>
                <div className='second-box' >
                    <div className='inner-first-box' >
                        <img className='img-box' style={{ widows: "100%" }} src="./images/GM2_누끼.png" alt="" />
                    </div>
                    <div className='inner-first-box' >
                        <div className='inner-first-box-2' >
                            <div className='inner-text-box' >
                                맨투맨
                            </div>
                        </div>
                        <div className='inner-second-box' >
                            <div className='inner-text-box' >
                                XL / 블루
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner-third-box' >
                    <div className='inner-text-box-1' >1개</div>
                    <div className='inner-text-box-1' >10,000원</div>
                </div>
                {deliverState == true ?
                    <div className='inner-forth-box' style={{flexWrap:"wrap"}}>
                        <div style={{width:"100%",height:"50%"}}>
                        배송완료
                        </div>
                        <div  style={{width:"100%",height:"50%"}}>
                        <button onClick={() => { openModalHandler(); }}>
                            리뷰쓰기
                            {isOpen && (
                                <ReviewWrite
                                    isOpen={isOpen}
                                    openModalHandler={openModalHandler}
                                />
                            )}
                        </button>
                        </div>
                    </div>

                    :
                    <div className='inner-forth-box' >
                        물품제작중
                    </div>
                }
            </div>
        </div>
    )
}

export default TestItem
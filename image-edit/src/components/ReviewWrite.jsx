import React from 'react'
import '../style/ImgModal.css'

const ReviewWrite = ({
    isOpen, // 이미지 상세 모달 state
    index,
    openModalHandler, // 이미지 상세 모달 함수

}) => {
    return (
        <div >
            ReviewWrite
            {isOpen ? (
                <div className="modal-backdrop" onClick={openModalHandler}>
                    <div  style={{backgroundColor:"white",minWidth:"300px",width:"500px",height:"75%",padding:"20px",borderRadius:"5px"}} onClick={(e) => e.stopPropagation()}>
                        <div style={{ width: '100%', backgroundColor: 'red',overflowBlock:'scroll' }}>
                            <div style={{height:"200px",overflowBlock:'scroll'}}><textarea name="" id="" cols="30" rows="16" onResize={{height:'100px'}}></textarea></div>
                        </div>
                        <div style={{ backgroundColor: "orange" }}>
                            <button
                                className="SM-btn"
                                onClick={() => {
                                    openModalHandler();
                                }}
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </div>) : null}
        </div>
    )
}

export default ReviewWrite
import React, { useRef, useState } from "react";
import "../style/ImgModal.css";
import "../style/ReviewWrite.css";
import AvgStarRating from "./AvgStarRating";

const ReviewWrite = ({
  isOpen, // 이미지 상세 모달 state
  index,
  openModalHandler, // 이미지 상세 모달 함수
}) => {
    const [rating, setRating] = useState('')
    const ratingRef = useRef(null)
    const handleRatingValue  = () => {
        const selectRating = ratingRef.current.querySelector('input[type=radio]:checked').value;
        setRating(selectRating)
        console.log('별점:',selectRating)
    }

    

    
    const refTest = () => {
        console.log(rating)
    }
  return (
    <div>
      ReviewWrite
      {isOpen ? (
        <div className="modal-backdrop">
          {/* 모달창 전체 크기 div */}
          <div
            style={{
              backgroundColor: "white",
              minWidth: "300px",
              width: "800px",
              height: "75%",
              padding: "20px",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달창 제목 */}
            <div
              style={{
                width: "100%",
                height: "5%",
                margin: "10px 0px 15px 0px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              리뷰작성
            </div>
            {/* 모달창 - 간단하게 지금리뷰쓰러 들어온 제품정보 */}
            <div
              style={{
                width: "100%",
                height: "18%",
                // backgroundColor: "lightgoldenrodyellow",
                display: "flex",
                borderTop:"1px solid lightgray",
                fontSize:"20px",
                fontWeight:"bold"
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "18%",
                //   backgroundColor: "lightsalmon",
                }}
              >
                <div style={{ widows: "100%", height: "100%", margin: "10px" }}>
                  <img
                    style={{
                      widows: "100%",
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src="./images/GM2_누끼.png"
                    alt=""
                  />
                </div>
              </div>
              <div style={{ height: "100%", width: "82%"}}>
                <div
                  style={{
                    height: "50%",
                    width: "100%",
                    // backgroundColor: "plum",
                    textAlign: "left",
                    marginLeft:"15px",
                  }}
                >
                  맨투맨
                </div>
                <div
                  style={{
                    height: "50%",
                    width: "100%",
                    // backgroundColor: "palegreen",
                    textAlign: "left",
                    marginLeft:"15px",
                  }}
                >
                  XL/네이비
                </div>
              </div>
            </div>
            {/* 상품만족도(별점 주기) */}
            <div
              style={{
                width: "100%",
                height: "18%",
                backgroundColor: "lightgreen",
                
              }}
            >
                <div style={{margin:"20px 0px 0px 0px"}}>받으신 상품은 어땠나요?</div>
              <form className="input-rating-container" ref={ratingRef} onChange={handleRatingValue} >
                <input type="radio" name="reviewStar" value="5" id="rate1" />
                <label for="rate1">★</label>
                <input type="radio" name="reviewStar" value="4" id="rate2" />
                <label for="rate2">★</label>
                <input type="radio" name="reviewStar" value="3" id="rate3" />
                <label for="rate3">★</label>
                <input type="radio" name="reviewStar" value="2" id="rate4" />
                <label for="rate4">★</label>
                <input type="radio" name="reviewStar" value="1" id="rate5" />
                <label for="rate5">★</label>
              </form>

            

            </div>
            <div
              style={{
                width: "100%",
                height: "38%",
                backgroundColor: "red",
                overflowBlock: "scroll",
              }}
            >
              {/* 리뷰 텍스트 입력창 */}
              <div
                style={{
                  height: "95%",
                  overflowBlock: "scroll",
                  margin: "5px 5px",
                }}
              >
                <textarea
                  name="reviewText"
                  id="review"
                  cols="90"
                  rows="10"
                  style={{ resize: "none", margin: "5px 5px" }}
                />
                <div style={{ height: "20%", backgroundColor: "lightpink" }}>
                  글자수 / 900자 제한
                </div>
              </div>
            </div>
            {/* 리뷰저장 과 닫기 버튼 */}
            <div
              style={{
                // backgroundColor: "orange",
                width: "92%",
                margin: "5% 5%",
                display: "flex",
                height: "10%",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <button
                className="SM-btn"
                style={{
                  height: "70%",
                  width: "15%",
                  margin: "0px 10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                onClick={refTest}
              >
                리뷰저장
              </button>
              <button
                className="SM-btn"
                onClick={() => {
                  openModalHandler();
                }}
                style={{
                  height: "70%",
                  width: "10%",
                  margin: "0px 10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReviewWrite;

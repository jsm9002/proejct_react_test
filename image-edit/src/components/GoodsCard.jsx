import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const GoodsCard = () => {
  return (
    <div style={{margin:"5px 5px"}}>
    <Card style={{ width: '18rem'}}>
        {/* 제품 이미지 */}
    <div style={{textAlign:"center"}}>
    <Card.Img variant="top" src="./images/GM1_누끼.png" style={{width:"auto",height:"auto",maxWidth:"250px",maxHeight:"350px"}}/>
    </div>
    <Card.Body>
        {/* 제품명 */}
      <Card.Title>
        <h4>베이직 맨투맨</h4>
        </Card.Title> 
    </Card.Body>
    <ListGroup className="list-group-flush">
        {/* 제품 가격 */}
      <ListGroup.Item>20,000원</ListGroup.Item>
      <div style={{display:"flex"}}>
      <ListGroup.Item>리뷰 000개</ListGroup.Item>
      <ListGroup.Item>별점 0.00점</ListGroup.Item>
      </div>
    </ListGroup>
  </Card>
  </div>
  )
}

export default GoodsCard
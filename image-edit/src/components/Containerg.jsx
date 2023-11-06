import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Containerg = () => {
  return (  
    <div style={{width:"80%",padding:"5px"}}>
      <div style={{width:"100%",height:"30px"}}>
      <h3 style={{float:"left"}}>AI 생성 이미지</h3>
      <Link to={'/imageall'}>
      <Button variant="outline-dark" style={{float:"right"}}>더보기</Button>
      </Link>
      </div>
      <br />
       <Container className='img-row-control'>
        {/* 메인페이지 AI로 생성된 이미지 */}
      <Row>
        <Col className='product-cover'>
          <div className='product-img-div'>
            <img className='product-img' src="/images/1.png" alt="이미지" />
          </div>
        </Col>
        <Col className='product-cover'>
          <div className='product-img-div'>
            <img className='product-img' src="/images/2.png" alt="이미지" />
          </div>
        </Col>
        <Col className='product-cover'>
          <div className='product-img-div'>
            <img className='product-img' src="/images/3.png" alt="이미지" />
          </div>
        </Col>
        <Col className='product-cover'>
          <div className='product-img-div'>
            <img className='product-img' src="/images/4.png" alt="이미지" />
          </div>
        </Col>
      </Row>
    </Container>
    <Container className='img-row-control'>
    <div style={{width:"100%",height:"30px"}}>
      <h3 style={{float:"left"}}>굿즈 제작 이미지</h3>
      <Link to={'/'}>
      <Button variant="outline-dark" style={{float:"right"}}>더보기</Button>
      </Link>
      </div>
      <br />
      {/* 메인페이지 굿즈 노출 */}
      <Row className='img-row-control'>
        <Col className='product-cover'>
          <div className='product-img-div'>
            <img className='product-img' src="/images/GM1_누끼.png" alt="굿즈" />
          </div>
        </Col>
        <Col className='product-cover'>
          <div className='product-img-div'>
            <img className='product-img' src="/images/GM2_누끼.png" alt="굿즈" />
          </div>
        </Col>
        <Col className='product-cover'>
          <div className='product-img-div'>
            <img className='product-img' src="/images/GM3_누끼.png"alt="굿즈" />
          </div>
        </Col>
        <Col className='product-cover'>
          <div className='product-img-div'>
            <img className='product-img' src="/images/GM4_누끼.png" alt="굿즈" />
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Containerg;
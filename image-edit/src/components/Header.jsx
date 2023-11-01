import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';


const Header = () => {
  return (
    <Stack direction="horizontal" gap={5}>
      <div className="p-2" style={{width:"25%"}}>
      <img className='main_logo'style={{width:"50px",height:"50px",alignItems:"left"}} src="https://blog.kakaocdn.net/dn/cadAZd/btqwUCGSDXw/sw1BupJqV7jZWvTj1jNdk1/img.jpg" alt="" />
      </div>
      <div className="p-2 ms-auto"style={{width:"50%"}}>
      <InputGroup className="mb-3" >
        <Form.Control
          placeholder="이미지를 검색해보세요!"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
         검색
        </Button>
      </InputGroup>
      </div>
      <div className="vr" />
      <div className="p-2" style={{width:"25%"}}>
      <img src="mycircle.png" alt="" style={{width:"50px",height:"50px",alignItems:"right"}}/>
      </div>
    </Stack>
  )
}

export default Header
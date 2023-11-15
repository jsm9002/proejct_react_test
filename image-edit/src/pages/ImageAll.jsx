import React from 'react'
import ImageAllCard from '../components/ImageAllCard'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ImageAll = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div style={{ margin: "20px 10%", display: "flex", flexFlow: "row wrap", justifyContent: "center", minWidth: "751px" }}>
      <div style={{ width: "100%", justifyContent: "center", display: "flex", padding:"20px" }}>
        <div style={{ width: "30%", height:"60px", display: "flex", border:'1px solid gray', borderRadius:"30px", boxSizing:"border-box", padding:"15px 5px" }}>
        <input type="text" style={{border:'none', width:'80%',outline:"none"}}/>
        <button type="submit" style={{width:'20%', border:'none', backgroundColor:'white'}}><img style={{wdith:"20px",height:"20px"}} src="./images/search_img.png" alt="" /></button>
        </div>
      </div>
      {number.map((number) => {
        return <ImageAllCard num={number} />
      })}

    </div>
  )
}

export default ImageAll
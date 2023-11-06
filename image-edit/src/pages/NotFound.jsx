import React from 'react'
import '../style/NotFound.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const NotFound = () => {
  return (
    <body className='error-body'>
    <div class="container bootstrap snippets bootdey">
    <div class="row">
        <div class="col-md-12">
            <div class="pull-right" style={{marginTop:"10px"}}>
                <div class="col-md-10 col-md-offset-1 pull-right">
                    <img class="img-error" src="https://bootdey.com/img/Content/fdfadfadsfadoh.png"/>
                    <h2>404 Not Found</h2>
                    <p>페이지를 찾을수가 없네용</p>
                    <div class="error-actions">
                        <Button variant='dark'>
                            <Link style={{textDecoration:"none",color:"white"}}to={"/"}>메인 페이지로~ </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
  )
}

export default NotFound
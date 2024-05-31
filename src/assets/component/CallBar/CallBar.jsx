import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './CallBar.css'
import Call from "../../images/call/call.webp"
function CallBar() {
  return (
    
        <div style={{ margin:"0",width:"100%",   background:"rgb(28, 49, 47)"}} className='py-3'>
            <Container className='d-flex justify-content-center for_media text-white' >
<div className='d-flex '>
    <img src={Call} style={{width:"40px", height:"35px"}} />
<p className='fs-5 fs-md-4 custom-font-size'  style={{marginRight:"5px" }}>Got A Question Call Us: </p>
<a  className='fs-5 fs-md-4 custom-font-size ' style={{ cursor:"pointer" , marginRight:"20px"}}>  +91 9876543210  </a>
</div>
<Button className='fs-5 fs-md-4 custom-font-size'>Request a Call-Back</Button>
    </Container>
        </div>
    
  )
}

export default CallBar
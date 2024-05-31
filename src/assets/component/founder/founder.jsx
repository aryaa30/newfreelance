import React from 'react'
import FounderImg from "../../images/features-icons/founder.webp"
import { Row, Container, Col } from 'react-bootstrap';
import Glogo from "../../images/googlelogo.webp";
import { StarIcon } from '@heroicons/react/16/solid';
function Founder() {
  return (
   <Container  fluid style={{background:"rgb(28, 49, 47)"}}>
    <Row className='px-md-5 pt-4 align-items-center ' >

<Col md={6}  ><img className='img-fluid pb-5' src={FounderImg} alt="Founder of Incapp" /></Col>
<Col  md={6} >  

<p style={{border:"1px solid white"}} className='p-3 mx-4  text-white text-center '> We foster innovation and empower aspiring coders. As the founder, We are excited to have you join us. Whether you're new to coding or 
 experienced, our hands-on curriculum and expert instructors will guide you. Coding is about more than lines; it's creativity and 
 problem-solving. Embrace challenges and celebrate successes, knowing that coding is a journey of growth. Let’s get started! </p> 
 
 </Col>

    </Row>
    
    <Row  className='mx-md-5 mx-sm-4  text-center cols-row-md-2 align-items-center gap-2' >
        <Col md={6} style={{ background:"white"}} >
<h3 className='p-3 m-0'>
    <span className='bg-success text-white px-2 rounded '>12800+</span> <br/>
    Students Trained Successfully
</h3>
        </Col>
        <Col    style={{ background:"white"}} >
<h3 className='p-3  m-0'>
   <img className='img-fluid' style={{width:"14vh"}} src={Glogo} alt='GOOGLE RATING'/> <br/>
<StarIcon  style={{color:"ffc107", width:"25px"}}/>
<StarIcon  style={{color:"ffc107", width:"25px"}}/>
<StarIcon  style={{color:"ffc107", width:"25px"}}/>
<StarIcon  style={{color:"ffc107", width:"25px"}}/>
<StarIcon  style={{color:"ffc107", width:"25px"}}/>
 <span >4.9</span>
</h3>
        </Col>
    </Row>
   </Container>
  )
}

export default Founder;



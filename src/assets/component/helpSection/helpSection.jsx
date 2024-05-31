import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Image, Carousel } from 'react-bootstrap'
import "./helpsection.css"
import Img2 from "../../images/CodingHelp/incapp-1.webp"
import Img1 from "../../images/CodingHelp/incapp-2.webp" 
function HelpSection() {
  return (
    <Container>
      <Row >
<Col md={5}  className=' py-4  align-content-center' >
<div  className='mx-auto my-auto py-4 fluid '>
<Carousel   controls={false} indicators={false} pause >
  <Carousel.Item interval={15000}>
<img className='img-fluid' src={Img1}/>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
  <img className='img-fluid' src={Img2}/>
  </Carousel.Item>

</Carousel>
</div>
</Col>
        <Col md={7} className=' py-4 text-left '>
          <Card    style={{border:'none'}} >  
       

            <CardBody className='p-0 px-1'>
              <div className='d-flex align-items-start gap-3 w-100 mt-2'>
                <div style={{width: "30px",height: "30px"}}>
                  <div className='round'>1</div>
                </div>
                <div >
                  <h5 className='hs-heading'>Expert Instructors</h5>
                  <p className='square' >
                    Top-class instructors, experts in their fields, teach through practical training.
                  </p>
                </div>
              </div>
            </CardBody>
            <CardBody className='p-0 px-1'>
              <div className='d-flex align-items-start gap-3  w-100 '>
                <div>
                  <div className='round'>2</div>
                </div>
                <div>
                  <h5 className='hs-heading'>Assignments</h5>
                  <p className='square'>
                    Understand all concepts through well-structured assignments.
                  </p>
                </div>
              </div>
            </CardBody>
         
            <CardBody  className='p-0 px-1'>
              <div className='d-flex align-items-start gap-3   w-100 '>
                <div>
                  <div className='round'>3</div>
                </div>
                <div>
                  <h5 className='hs-heading'>Doubt Resolution</h5>
                  <p className='square'>
                    Dedicated assistance provided to clarify doubts, featuring two types of instructors: Class Instructor and Lab Instructor.
                  </p>
                </div>
              </div>
            </CardBody>
            <CardBody  className='p-0 px-1'>
              <div className='d-flex align-items-start gap-3  w-100 '>
                <div>
                  <div className='round'>4</div>
                </div>
                <div>
                  <h5 className='hs-heading'>Projects</h5>
                  <p className='square'>
                    Gain a comprehensive understanding of the technology through project work, guided by your instructor.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default  HelpSection;
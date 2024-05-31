import React from 'react'
import { Col, Container, Row  } from 'react-bootstrap'
import Feature1 from "../../images/features-icons/feature-1.webp"
import Feature2 from "../../images/features-icons/feature-2.webp"
import Feature3 from "../../images/features-icons/feature-3.webp"
import Feature4 from "../../images/features-icons/feature-4.webp"
import Feature5 from "../../images/features-icons/feature-5.webp"
import Feature6 from "../../images/features-icons/feature-6.webp"
import Feature7 from "../../images/features-icons/feature-7.webp"
import Feature8 from "../../images/features-icons/feature-8.webp"
import Feature9 from "../../images/features-icons/feature-9.webp"
import Feature10 from "../../images/features-icons/feature-10.webp"

function WhyIncapp() {
  return (
    <Container  fluid style={{background:"#E2E2E2"}}>
        <div className='p-3 pr-0'>
            <Row  >
            <Col className='p-2 align-content-center' md={6} >
                <h2  className="text-center">WHY INCAPP ?</h2>
                <hr/>
<p>Outstanding students deserve the finest learning environment. At INCAPP, we guarantee a superior learning experience and personalized support to ensure your success.
                </p>
                 </Col>

            <Col  md={6} > 
            
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/RGz_kjWp5Xc?si=aaEpIzyCM7EPyDlJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
            </Col>
            </Row>
           
        </div>
        <div className='img-fluid  d-flex  flex-wrap gap-5 p-4 justify-content-center  text-center'>
          
<div  style={{width:"30vh"}}>  <img src={Feature1} style={{height:"100px", width:"100px"  }}/> <p >Top-Notch Classroom with Expert Instructor</p> </div>
<div style={{width:"30vh"}}>  <img src={Feature2} style={{height:"100px", width:"100px"  }}/> <p>Comprehensive Study Materials</p> </div> 
<div style={{width:"30vh"}}>  <img src={Feature3} style={{height:"100px", width:"100px"  }}/> <p>Continuous Feedback and Monitoring</p> </div>
<div style={{width:"30vh"}}>  <img src={Feature4} style={{height:"100px", width:"100px"  }}/> <p>Guaranteed Course Completion</p> </div>
<div style={{width:"30vh"}}>  <img src={Feature5} style={{height:"100px", width:"100px"  }}/> <p>Project-Based Learning</p> </div>


<div style={{width:"30vh"}}>  <img src={Feature6} style={{height:"100px", width:"100px"  }}/> <p>Course Completion Certification</p> </div>
<div style={{width:"30vh"}}>  <img src={Feature7} style={{height:"100px", width:"100px"  }}/> <p>Dedicated Support for Doubt Resolution</p> </div>
<div style={{width:"30vh"}}>  <img src={Feature8} style={{height:"100px", width:"100px"  }}/> <p>Placement Assistance</p> </div>
<div style={{width:"30vh"}}>  <img src={Feature9} style={{height:"100px", width:"100px"  }}/> <p>Individual Attention to Each Student</p> </div>
<div style={{width:"30vh"}}>  <img src={Feature10} style={{height:"100px", width:"100px"}}/> <p>In-Class Assignment Sessions</p></div>    
        </div>
         </Container>
  )
}

export default WhyIncapp
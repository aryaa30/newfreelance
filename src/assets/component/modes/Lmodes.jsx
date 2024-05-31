import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offline from '../../images/LearningModes/offline.webp';
import { Button } from 'react-bootstrap';
import CallBar from '../CallBar/CallBar';
function Lmodes() {
  return (
   <div className='py-5' style={{background:"rgb(226, 226, 226)"}}>
    <div className='text-center pb-4'>
      <h1 style={{fontWeight:"700"}}>3 Modes Of Learning</h1>
    </div>
    <Container >
      <Row  className=" text-center mx-3 gap-4">
        <Col md>
<div className='py-3' style={{ height:"132px", background:"rgb(255, 193, 7)" }} >
  <img  src={Offline} alt="offline" style={{ height:"100px"}}/>
</div>

<div className='py-3' style={{background:"white"}}>
  <h5  className='py-3'>Classroom Learning</h5>


<hr/>
<p className='px-5'>Offline training with certified instructor in distraction free classroom at our center.</p>
<Button>Get Started</Button>
</div>

        </Col>
        <Col  md>
<div  className='py-3' style={{ height:"132px", background:"rgb(255, 193, 7)" }}>
  <img  src={Offline} alt="offline" style={{ height:"100px"}}/>
</div>

<div  className='py-3' style={{background:"white"}}>
  <h5  className='py-3'>Classroom Learning</h5>


<hr/>
<p className='px-5'>Offline training with certified instructor in distraction free classroom at our center.</p>
<Button >Get Started</Button>
</div>

        </Col>      
      
      
      
      
        <Col md>
<div  className='py-3' style={{ height:"132px", background:"rgb(255, 193, 7)" }}>
  <img  src={Offline} alt="offline" style={{ height:"100px"}}/>
</div>

<div className='py-3' style={{background:"white"}}>
  <h5  className='py-3'>Classroom Learning</h5>


<hr/>
<p className='px-5'>Offline training with certified instructor in distraction free classroom at our center.</p>
<Button >Get Started</Button>
</div>

        </Col>   
   
   
   
   
   
      </Row>
    </Container>
    
   </div>
   
  )
}

export default Lmodes
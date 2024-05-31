import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { HomeIcon } from "@heroicons/react/24/solid"
import { HomeIcon } from '@heroicons/react/24/solid';
import "./navigation.css"
import { Button } from 'react-bootstrap';
// import { HomeIcon } from '@heroicons/react/24/solid';
function NaviGate() {
  return (
    <div style={{margin:'0px 30px 0px 30px' }} className='navi-css'>
     
    <Navbar expand="lg" className="bg-own">
      <Container fluid>
        <Navbar.Brand href="#home">InCapp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white fs-5 fw-bold p-0 border-0">
        Menu
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="bi bi-list pb-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 fw-bold" >
            <Nav.Link href="#home" className="text-white for-hover" style={{width:"35px", height:"30px", padding:"4px 8px 0 8px"}}> <HomeIcon className="h-6 w-6 text-blue-500" /></Nav.Link>
            <Nav.Link href="#link" className="text-white for-hover" >About</Nav.Link>
            <Nav.Link href="#link" className="text-white for-hover">Courses</Nav.Link>
            <Nav.Link href="#link" className="text-white for-hover">Internship</Nav.Link>
            <Nav.Link href="#link" className="text-white for-hover">Interview Q&A</Nav.Link>
            <Nav.Link href="#link" className="text-white for-hover">Upcoming Batches</Nav.Link>
            <Button variant="success" className='whats-app ' > Drop a WhatsApp</Button>{' '}
        <Button variant="warning" className='Request_call'>Request a Call-Back</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NaviGate;

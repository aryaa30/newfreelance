import React from 'react';
import Navi from "../nav/navigate";
import "./header.css";
import { Years, Certified, Students, Rating } from '../../images/logo/logo';
import { Button } from 'react-bootstrap';
// import Background from "../../images/bg.webp";
function Header() {
   return (
      <div className='background'>
         <div className='header_sec'>
            <div><Navi /></div>
            <div className='back_sec d-flex  gap-4'>
               <div className='right_section' style={{ width: "65%" }}>


                  <p className='wel_text'>Welcome to INCAPP</p>
                  <div className='text_area'>

                     <p><span className='high_light'>#1 Choice </span>when it comes to become
                        <span className='high_light'> master in Coding</span>
                     </p>
                  </div>

                  <p className='pad_mar'>Get the skills to get ahead, stay relevant and earn more.</p>
                  <div className='images_main'>
                     <img src={Years} />
                     <img src={Certified} />
                     <img src={Students} />
                     <img className='rating' src={Rating} />
                  </div>
                  <div className='f_note'>
                     <p>We have helped over 12800+ students in last 13 years to find interest in coding, achieving their goals and join their dream companies. All our students recommend us to their friends and family.</p>
                  </div>
               </div>

               <div className='left_section container d-flex align-items-center pt-4 ' style={{ width: "60%" }}>
                  <img className="img-fluid " src='src\assets\images\img.webp' style={{ width: "90%" }} />

               </div>

            </div>
            <div className='container text-center'style={{ width: "100%" }}>
            <Button className='book_button' variant="warning" size="lg" active >
            BOOK YOUR PERSONALIZED COUNSELLING SESSION
            </Button>
            </div>
         </div>
      </div>

   )
}

export default Header;
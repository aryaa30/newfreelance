import React from 'react'
import './App.css';
import CallBar from './assets/component/CallBar/CallBar';
import Header from "./assets/component/header/header"
// import Swipers from "./assets/component/Carousel_Students/Swipers"
import PopularCourses from './assets/component/PopularCourses/PopularCourses'

import Lmodes from './assets/component/modes/Lmodes';
import HelpSection from './assets/component/helpSection/helpSection';
import WhyIncapp from './assets/component/WhyIncapp/WhyIncapp';
import Founder from './assets/component/founder/founder';




function App() {
  return (
    <>
<Header/>
{/* <Swipers/> */}
<PopularCourses/> 
<Lmodes/>
<CallBar/>
<HelpSection/> 
<WhyIncapp/>



<Founder/>



    </>
  )
}
export default App

import { Card,Button } from 'react-bootstrap';
import React from 'react'
import {cpp, dsa, java, node, python, react, wd } from "../../images/PopularCourses/PopularCourses"
import "./PopularCourses.css"
function PopularCourses() {

  const course = [

    {
      img:java,
      title:"Java Language"

    },
    {
      img:dsa,
      title:"DSA using Java"

    },
    {
      img:python,
      title:"Python Language"

    },
    {
      img:wd,
      title:"Website Development"

    },
    {
      img:react,
      title:"React JS"

    },
    {
      img:node,
      title:"Node JS"

    },
   
    {
      img:cpp,
      title:"C++ Language"

    },
    
  ];
 
  return (
    <div  className="py-4" style={{background:"rgb(33, 37, 41)", height:"max-content"}}>
      <div className='d-flex justify-content-center  gap-4 pb-4'><h2  style={{ color:"white"}}> Most Popular Courses</h2> 
      <Button variant="primary"> View All Courses</Button>
      </div>
      <div className='d-flex gap-2 flex-wrap justify-content-center'>
      {course.map((data)=>(

<Card style={{ width: '15rem',cursor:"pointer" }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>

    ))}
    <Card style={{ width: '15rem', background:"rgb(8, 159, 147)", color:"white", cursor:"pointer" }} className="hoverStyle">
    <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent:"center" }}>
        <Card.Title > View All Courses </Card.Title>
      </Card.Body>    </Card>
      </div>
    </div>
  )
}





export default PopularCourses;
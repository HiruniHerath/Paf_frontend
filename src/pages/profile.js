import React from 'react';
import Nav from '../components/nav'
import { Form, FormControl, InputGroup, Col, Row, Button, Card, Image } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';



export default function Profile() {
    return (

        <><Nav></Nav>
        <section>
            <div style={{ backgroundImage: `url(${"https://c8.alamy.com/comp/2J5CAP0/beautiful-hand-drawn-delicious-fast-food-seamless-pattern-tasty-background-great-for-textiles-wrapping-packaging-wallpapers-vector-design-2J5CAP0.jpg"})`, width: "100%", objectFit: "cover", height: "150px" }}>
    </div>
    <Row style={{paddingLeft:"40px",paddingRight:"20px" , paddingTop:"20px"}}>
        <Col><Card style={{width:"500px"}}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1625585675064-7b8cdcd0ca49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80"  style={{height:"350px",objectFit:"cover" }}/>
            <Card.Body>
              <Card.Title>User Name</Card.Title>
              <Card.Text>
                <p>details.....</p>
              <Button variant="outline-dark" href="/editprofile">EDIT</Button>{' '}
              <Button variant="outline-dark">DELETE</Button>
              </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col xs={7}><h5>View All Uploads</h5> <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title> </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row></Col>
       
      </Row>
       
   

   
  



        </section></>






    

   


    
);
};


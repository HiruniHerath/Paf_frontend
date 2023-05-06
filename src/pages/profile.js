import React from 'react';
import Nav from '../components/nav'
import { Form, FormControl, InputGroup, Col, Row, Button, Card, Image } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';



export default function Profile() {
    return (

        <><Nav></Nav><section>




            <div style={{ backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbtpVKA4u4U9aFXDqhxWJdFUD9nMG7gjIGQ&usqp=CAU"})`, width: "100%", objectFit: "cover", height: "200px" }}>
           
          


 



            </div>

            
 
    <CardGroup>
        
      <Card>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/06/FINAL-Blog-Images-7-1024x683.jpg" />
        <Card.Body>
          <Card.Title>Jamie Oliver</Card.Title>
          <Card.Text>
          Hi people, I want to share my experiences with food with you! Follow me!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
        </Card>
      </Card>

      <Card>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src="https://www.devry.edu/content/dam/devry_edu/images/blog/pic-networking-on-linkedin.jpg.dvu.opt-image.500.jpg" />
        <Card.Body>
          <Card.Title>Nolan Rossi</Card.Title>
          <Card.Text>
          Donut worry, be happy.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
        </Card>
      </Card>

      <Card>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" />
        <Card.Body>
          <Card.Title>Emily Adams</Card.Title>
          <Card.Text>
          Hey! Let us talk about food all day!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      </Card>
    </CardGroup>
  



        </section></>






    

   


    
);
};


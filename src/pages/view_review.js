import React from "react";
import Nav from '../components/nav'

import { Button, Row, Col, Form, Card, Alert, Container } from 'react-bootstrap';

export default function ViewReview() {


    return (
        <>
            <Nav></Nav>
            <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover", height: "250px" , opacity:"0.9"}}>
            <h2 style={{ fontSize: "30px" ,color:"#ffffff" ,textAlign:"center" ,paddingTop:"20px"}}>Reviews</h2>
            <div><Card border="light" style={{ width: '40rem', opacity: "0.78"  }}>
                <Card.Body>
                <p style={{ fontSize: "20px" ,color:"#353535" ,textAlign:"center" ,paddingTop:"20px"}}>What our customers says..</p>
                </Card.Body>
              </Card></div>
      </div>
            <br></br>
            <div >
                   
                <br>
                </br>
                <div className='text-center p-3' style={{ backgroundColor: "#353535" }}>
                </div>
            </div>
        </>
    );
};



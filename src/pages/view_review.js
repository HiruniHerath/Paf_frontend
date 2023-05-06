import React from "react";
import Nav from '../components/nav'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { Button, Row, Col, Form, Card, Alert, Container, InputGroup, FormLabel } from 'react-bootstrap';

export default function ViewReview() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav></Nav>
      <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover", height: "240px", opacity: "0.9" }}>
        <h2 style={{ fontSize: "34px", color: "#ffffff", textAlign: "center", paddingTop: "20px" }}>--Reviews--</h2>
        <div style={{ paddingLeft: "440px" }}><Card border="light" style={{ width: '40rem', opacity: "0.78" }}>
          <Card.Body style={{ textAlign: "center" }}>
            <p style={{ fontSize: "20px", color: "#353535", textAlign: "center", paddingTop: "20px" }}>Unveiling the Voice of Our Customers with their Own experience!</p>
            <Button variant="outline-dark" onClick={handleShow} >ADD YOURS</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Your Own Review</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="Location" placeholder="#location" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                  Save Changes
                </Button>
                <Button variant="dark" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Button variant="outline-dark" href="/view_own_review">VIEW YOURS</Button>

          </Card.Body>
        </Card></div>
      </div>
      <br></br>
      <div >
        <h2 style={{ fontSize: "28px", color: "#353535", textAlign: "center", paddingTop: "20px" }}>What our Customers Says</h2>

        <Row style={{ paddingTop: "20px", paddingBottom: "20px", paddingLeft: "20px" }}>
          <Col md={2}> <h2 style={{ fontSize: "24px" }} >Filter by </h2></Col>
          <Col md={4}>
            <Row style={{ width: "400px", paddingLeft: "10px", paddingRight: "10px" }}>
              Stars :
              <Col > <Button variant="outline-dark" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
              </Button></Col>
              <Col > <Button variant="outline-dark" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
              </Button></Col>
              <Col > <Button variant="outline-dark" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
              </Button></Col>
              <Col > <Button variant="outline-dark" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
              </Button></Col>
              <Col > <Button variant="outline-dark" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
              </Button></Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={2}>location :</Col>
              <Col>  <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup></Col>


            </Row>

          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Header style={{ backgroundColor: "#494940", height: "30px" }}></Card.Header>
                <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" style={{ borderRadius: "50%", width: "100px", height: "100px", marginLeft: "130px" }} />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>Name</Card.Title>
                  <Row style={{ width: "350px", paddingLeft: "10px", paddingRight: "10px" }}>
                    <Col > <Button variant="outline-dark" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                    </Button></Col>
                    <Col > <Button variant="outline-dark" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                    </Button></Col>
                    <Col > <Button variant="outline-dark" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                    </Button></Col>
                    <Col > <Button variant="outline-dark" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                    </Button></Col>
                    <Col > <Button variant="outline-dark" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9e8d68" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                    </Button></Col>
                  </Row>
                  <hr></hr>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Row><Col style={{ paddingRight: "190px" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /> </svg></Col>
                    <Col>#location</Col></Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br>
        </br>
        <div className='text-center p-3' style={{ backgroundColor: "#353535" }}>
        </div>
      </div>
    </>
  );
};



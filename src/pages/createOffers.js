import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'


export default function CreateOffer() {
    return (
        <div>
             
            <Nav></Nav>
            <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover", height: "250px" }}>
             </div>
            <Row>
                <h2 style={{ paddingLeft: "10vh", paddingTop: "2vh" }}>Add offers</h2>
                <Col span={14}>

                    <div style={{ paddingBottom: '4vh', paddingTop: "6vh", paddingLeft: "7vh" }}>
                        <Card border="dark" style={{ width: '45rem' }}>
                            <Card.Body>
                                <Form >
                                    <span className="error-message" style={{ color: "blue" }}></span>

                                    <br />
                                    <div >

                                        <Row >


                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Enter offer title: </Form.Label>
                                                <Form.Control type="text"


                                                    placeholder=" Enter Title .." />
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Description : </Form.Label>
                                                <Form.Control type="text"

                                                    placeholder=" Enter your description .." />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Date from  : </Form.Label>
                                                <Form.Control type="text"

                                                    placeholder=" Enter your description .." />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >Date to  : </Form.Label>
                                                <Form.Control type="text"

                                                    placeholder=" Enter your description .." />
                                            </Form.Group>


                                        </Row>
                                        <Row>

                                            <Form.Group controlId="fileupload">
                                                <Form.Label>Post offer image</Form.Label>
                                                <Form.Control type="file" multiple />
                                                <h6>**Please do not exceed the amount of file size 25MB </h6>

                                            </Form.Group>
                                        </Row>


                                    </div>

                                    <div style={{ paddingLeft: "40%" }}>
                                        <Button type="submit" variant="outline-dark" style={{ width: "120px" }}> Save </Button>{' '} {' '}<Button variant="outline-dark" style={{ width: "120px" }} > Clear </Button>

                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>



                </Col>


               
                


            </Row>
        </div>
    );
};
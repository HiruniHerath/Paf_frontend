import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'


export default function createpost() {
    return (
        <div>
            <Nav></Nav>
            <Row>
                <h2 style={{ paddingLeft: "10vh", paddingTop: "2vh" }}>Create your Own post </h2>
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
                                                <Form.Label >Post Tittle: </Form.Label>
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
                                                <Form.Label >Additional  : </Form.Label>
                                                <Form.Control type="text"

                                                    placeholder=" Enter your description .." />
                                            </Form.Group>


                                        </Row>
                                        <Row>

                                            <Form.Group controlId="fileupload">
                                                <Form.Label>Post image</Form.Label>
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


                <Col><div style={{ paddingTop: '1vh', paddingBottom: '1vh', paddingRight: "2vh" }}>

                    <div>
                        <Card style={{ width: '20rem', float: "right", height: "26rem", border: "none" }}>


                            <img style={{ width: '18rem', height: "26rem" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbymQS26EOEGupvmC1ieq5dYNZ6LhrRfn3w&usqp=CAU'></img>

                        </Card>
                    </div>
                    <br></br>
                    <div>
                        <Card style={{ width: '20rem', height: "26rem" }}>


                            <img style={{ width: '20rem', height: "26rem" }} src='https://foodphotographyacademy.co/wp-content/uploads/2019/10/Chocolate-Cake-Example-2-660x990.jpg'></img>

                        </Card>
                    </div>

                </div></Col>


            </Row>
        </div>
    );
};

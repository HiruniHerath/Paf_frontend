import React from "react";
import Nav from '../components/nav'

import { Button, Row, Col, Form, Card, Alert, Container } from 'react-bootstrap';





export default function ViewPost() {


    return (
        <>
            <Nav></Nav>
            <br></br>
            <div >
                <div>

                    <Container fluid className=" text-light py-4" style={{ backgroundColor: '#353535' }}>
                        <Container>
                            <Row>
                                <Col>
                                    <h2 style={{ fontSize: "24px" }} className="display-4">Latest Uploads</h2>

                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <br></br>
                    <Container>
                        <Row xs={1} sm={2} md={3}>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_800,q_65,w_640,x_1107,y_728/v1/clients/indy/Indy_Outdoor_Dining_35502e90-f114-4a38-a11f-d3e239dd6fd7.jpg" />
                                    <Card.Body>
                                        <Card.Title>Post title by Hiru</Card.Title>
                                        <Card.Text>
                                            post description
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>

                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/09/21/0/lindens.jpg.rend.hgtvcom.441.353.suffix/1663790316300.jpeg" />
                                    <Card.Body>
                                        <Card.Title>Post title by shamilka</Card.Title>
                                        <Card.Text>
                                            post description
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://www.exploregeorgia.org/sites/default/files/styles/list_component/public/2021-01/forza-storico-patio-atlanta.jpg?itok=aWjvTAyb" />
                                    <Card.Body>
                                        <Card.Title>Post title by adithya</Card.Title>
                                        <Card.Text>
                                            post description
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </div>
                <br>
                </br>
                <div className='text-center p-3' style={{ backgroundColor: "#353535" }}>


                </div>
            </div>



        </>
    );
};



import React from "react";

import { Form, Col, Row, Button, Card, Image } from "react-bootstrap";


export default function Login() {
  return (
    <section>
      <Row>
        <Col sm={7}>
          <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"})`, width: "100%", objectFit: "cover" }}>
            <div style={{ paddingTop: "20vh", paddingBottom: "19vh", paddingLeft: "15vh" }}>
              <Card border="light" style={{ width: '40rem', opacity: "0.9" }}>
                <Card.Body>
                  <Form >
                    <span className="error-message" style={{ color: "red" }}></span>
                    <div style={{ paddingLeft: "35%" }}>
                      <Image style={{ width: "30vh" }}
                        src=
                        "https://cdn.dribbble.com/users/1561522/screenshots/3929068/food-icon-gif-revised2.gif"
                        roundedCircle
                      />
                    </div>
                    <br />
                    <Form.Group as={Col} md={12} controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="email"
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        minLength={6}
                      />
                    </Form.Group>
                    <div style={{ paddingTop: "3vh" }}>
                      <Form.Group as={Col} md={12} className="login-btn">
                        <div className="d-grid gap-2">
                          <Button style={{ backgroundColor: "#353535", borderColor: "#353535" }} type="submit" >
                            Login
                          </Button>
                          <div style={{ float: "left" }}>
                            Do not have an account  <a href="/register" style={{ color: "#353535" }}>Register Here</a>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
              <br />
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div style={{ paddingTop: "45vh", paddingRight: "10vh" }} >
            <h1 style={{ color: "#353535" }}>TableTalks</h1>
          </div>
        </Col>
      </Row>
     

    </section>


  );


}







import React from 'react';
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap';

const OffersView = () => {
  const offerData = [
    {
      title: '50% off on all clothing',
      description: 'Get 50% off on all clothing items',
      image: 'https://picsum.photos/id/1019/300/200',
      expiryDate: '31 Dec 2023'
    },
    {
      title: 'Free shipping on orders over $50',
      description: 'Get free shipping on orders over $50',
      image: 'https://picsum.photos/id/1023/300/200',
      expiryDate: '31 Dec 2023'
    },
    {
      title: '$10 off on your first purchase',
      description: 'Get $10 off on your first purchase',
      image: 'https://picsum.photos/id/1031/300/200',
      expiryDate: '31 Dec 2023'
    }
  ];
  const storyData = [
    {
      name: 'John',
      image: 'https://picsum.photos/id/1018/100/100'
    },
    {
      name: 'Mary',
      image: 'https://picsum.photos/id/1025/100/100'
    },
    {
      name: 'Adam',
      image: 'https://picsum.photos/id/1037/100/100'
    },
    {
      name: 'Sarah',
      image: 'https://picsum.photos/id/1043/100/100'
    },
    {
      name: 'Mike',
      image: 'https://picsum.photos/id/1040/100/100'
    },
    {
      name: 'Kate',
      image: 'https://picsum.photos/id/1026/100/100'
    }
  ];











  return (


    <Container fluid className="bg-light">
      <Navbar style={{ backgroundColor: '#008f7e', backgroundImage: 'linear-gradient(to bottom, #008f7e, #006c5d)' }} variant="light">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-left">
            <Nav.Link href="#home">Reviws</Nav.Link>
            <Nav.Link href="#features">Offers</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br></br>
      <Container fluid className="bg-light">
        <Row className="justify-content-center py-4">
          {storyData.map((story, idx) => (
            <Col xs={2} key={idx} className="px-2">
              <div className="d-flex flex-column align-items-center">
                <div className="story-image">
                  <img src={story.image} alt={story.name} className="rounded-circle" />
                </div>
                <div className="story-name">{story.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <br></br>

      <Row className="justify-content-center pb-5">
        {offerData.map((offer, idx) => (
          <Col xs={12} md={6} lg={4} key={idx} className="pb-4">
            <Card>
              <Card.Img variant="top" src="https://th.bing.com/th/id/R.e6322984b2b04fd4d2689cecc060439a?rik=%2fg65%2bDmWLh9%2bNQ&pid=ImgRaw&r=0" />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Card.Text className="text-muted">Expiry: {offer.expiryDate}</Card.Text>
                <Button variant="success" style={{ backgroundColor: '#00a895', borderColor: '#00a895' }}>Claim Offer</Button>
              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OffersView;

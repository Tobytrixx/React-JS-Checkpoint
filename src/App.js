/*importing react modules*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

/*Creating fragment*/
function App() {
  return (
    <>
      <div className="app">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <h1>Just a heading</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>This is card 1</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>This is card 2</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>card 3</Card.Title>
            <Card.Text>
            This is card 3
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
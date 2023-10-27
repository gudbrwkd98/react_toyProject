import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function header() {
    return ( 
        <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Main</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/graph">Grape</Nav.Link>
              <Nav.Link href="/barGraph">BarGrape</Nav.Link>
              <Nav.Link href="/pieChart">PieChart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br /> 
      </>
     );
}

export default header;
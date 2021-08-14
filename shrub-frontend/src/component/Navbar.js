import React from 'react';
import '../App.css';
import * as ReactBootStrap from "react-bootstrap";
import{
  NrowserRouter as Router,
  Link
} from 'react-router-dom';


const Navbar = () => {
    return (
    <div className="App">
      <ReactBootStrap.Navbar bg="dark" expand="md" variant="dark">
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="/home">Shrub.org</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto" className="mx-auto">
        
        <Link to="/Home">
        <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/cover">
        <ReactBootStrap.Nav.Link href="#link">Buy Cover</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/stake">
        <ReactBootStrap.Nav.Link href="#link">Stake</ReactBootStrap.Nav.Link>
        </Link>
        
        <ReactBootStrap.NavDropdown title="Other" id="basic-nav-dropdown">
          <Link to="/swap">
          <ReactBootStrap.NavDropdown.Item href="#action/3.1">Swap</ReactBootStrap.NavDropdown.Item>
          </Link>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav>
        <ReactBootStrap.Nav.Link href='#amount'>0.02 ETH</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link eventKey={2} href='#address'>0x00...2</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;

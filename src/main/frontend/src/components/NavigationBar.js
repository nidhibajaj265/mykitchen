import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './MasalaKitchenLogo.png';


class NavigationBar extends React.Component{
    render(){
        return(
        <Navbar  className="bg-danger text-white" variant="bg-danger text-white">
           <Navbar.Brand href="/">
                <img src={logo} alt="logo" / >
          </Navbar.Brand>
                <Nav className="navigationBar">
                    <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-white" href="#menu">Menu</Nav.Link>
                    <Nav.Link className="text-white" href="#login">Login</Nav.Link>
                    <Nav.Link className="text-white" href="#signup">Signup</Nav.Link>
                  </Nav>
        </Navbar>
        )

    }
}

export default NavigationBar;  //allow other classes to import this class
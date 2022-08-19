import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './MasalaKitchenLogo.png';
import {Link, Router} from 'react-router-dom';


export default class NavigationBar extends Component{
    render(){
        return(
        <Navbar className="bg-danger text-white" variant="bg-danger text-white">    
            <Link to={""} className="navbar-brand">
                 <img src={logo} alt="logo" / >
            </Link>
                <Nav className="navigationBar">
                    <Link to={"menu"} className="nav-link text-white">Menu</Link>
                    <Link to={"additem"} className="nav-link text-white">Add Item</Link>
                  </Nav>
        </Navbar>
        )

    }
}
import React, {Component} from 'react';
import {Navbar, Container, Col} from 'react-bootstrap';

export default class Footer extends Component{
    render(){
       // let year = new Date().getFullYear();
        return(
                <Navbar fixed="bottom" className="bg-danger text-white" >
                <Container>
                <Col lg={12} className="text-center text-white">
                   <div> © 2022-2023, All right reserved by Masala Kitchen</div>
                 </Col>
                 </Container>
                </Navbar>
        )
    }
}

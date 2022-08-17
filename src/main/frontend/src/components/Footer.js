import React from 'react';
import {Navbar, Container, Col} from 'react-bootstrap';

class Footer extends React.Component{
    render(){
        let year = new Date().getFullYear();
        return(
                <Navbar fixed="bottom" className="bg-danger text-white" >
                <Container>
                <Col lg={12} className="text-center text-white">
                   <div> © {year}-{year + 1}, All right reserved by Masala Kitchen</div>
                 </Col>
                 </Container>
                </Navbar>
        )
    }
}

export default Footer;
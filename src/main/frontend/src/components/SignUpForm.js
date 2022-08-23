import React, {Component} from 'react'
import {Card, Form, Button} from 'react-bootstrap'

export default class SignUpform extends React.Component{

    initialState = {
        name:'', email:'', password:''
      }
    
     constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.show=false;
        this.submitMenuItem = this.submitMenuItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
     }

    resetAddUser = () =>{
        this,this.setState(()=>this.initialState);
    }
    render(){
        return(
            <Card className="mt-4 xs={6} bg-light font-weight-bold text-center text-danger">
                <CardHeader className="fs-4 text-center">
                        SignUp
                </CardHeader>
                <Card.Body>
                <Form onReset={this.resetAddUser} onSubmit={this.addNewUser} id="addUserFormId">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button size="sm" variant="danger" type="submit">
                        Submit
                    </Button>{' '}
                    <Button size="sm" variant="info" type="reset">
                        Reset
                    </Button>
               </Form>
                </Card.Body>
            </Card>

        );
    }

}
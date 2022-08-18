import React, {Component} from 'react';
import {Card, Form, Button,Col} from 'react-bootstrap'

export default class AddMenuItem extends Component{

 constructor(props){
    super(props);
    this.state = {name:'', price:'', type:''};
    this.submitBook = this.submitBook.bind(this);
    this.handleChange = this.handleChange.bind(this);
 }

 submitBook(event){
    this.state.type = document.getElementById("menuItemType").value;
    alert( 'Name: ' + this.state.name + ' Price: ' + this.state.price + ' Type: ' + this.state.type);
    event.preventDefault();
 }

 handleChange(event){
    var newState = {};
    newState[event.target.name] = event.target.value;
    newState[event.target.price] = event.target.value;
    newState[event.target.type] = event.target.value;
    this.setState(newState);
 }

 render(){
        return(
        <Card className="mt-4 xs={6} bg-light font-weight-bold text-center text-danger">
                        <Card.Header className="fs-4 text-center">Add Item</Card.Header>
                        <Form onSubmit={this.submitBook} id="addItemFormId">
                            <Card.Body>
                              <Form.Group controlId="formGridName" className="mb-3" >
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control
                                required
                                type="text"
                                name="name"
                                defaultValue="Item Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="Item Name" />
                              </Form.Group>

                              <Form.Group controlId="formGridPrice" className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                required
                                type="number"
                                name="price"
                                value={this.state.price}
                                onChange={this.handleChange}
                                placeholder="Price" />
                              </Form.Group>

                                  <Form.Group controlId="formGridType" className="mb-3">
                              <Form.Label>Item Type</Form.Label>
                                <Form.Select
                                id="menuItemType"
                                required
                                value={this.state.type}
                                onChange={this.handleChange}
                                name="type">
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                </Form.Select>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                               <Button variant="danger" type="submit">
                                    Submit
                               </Button>
                             </Card.Footer>
                        </Form>
        </Card>
        )
    }
}

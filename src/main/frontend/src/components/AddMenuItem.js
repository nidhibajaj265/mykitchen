import React, {Component} from 'react';
import {Card, Form, Button,Col} from 'react-bootstrap'

export default class AddMenuItem extends Component{

  initialState = {
    name:'', price:'', type:''
  }

 constructor(props){
    super(props);
    this.state = this.initialState;
    this.submitMenuItem = this.submitMenuItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
 }

 submitMenuItem(event){
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

 resetAddItem = ()=>{
  this.setState(()=> this.initialState);
 }

 render(){
   const {name,price,type} = this.state;
        return(
        <Card className="mt-4 xs={6} bg-light font-weight-bold text-center text-danger">
                        <Card.Header className="fs-4 text-center">Add Item</Card.Header>
                        <Form onReset={this.resetAddItem} onSubmit={this.submitMenuItem} id="addItemFormId">
                            <Card.Body>
                              <Form.Group controlId="formGridName" className="mb-3" >
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control required type="text" name="name"
                                defaultValue="Item Name" value={name} placeholder="Item Name"
                                onChange={this.handleChange}  />
                              </Form.Group>

                              <Form.Group controlId="formGridPrice" className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control required type="number"
                                name="price" value={price}
                                onChange={this.handleChange} placeholder="Price"   />                          
                              </Form.Group>

                                  <Form.Group controlId="formGridType" className="mb-3">
                              <Form.Label>Item Type</Form.Label>
                                <Form.Select  id="menuItemType" required
                                  value={type} onChange={this.handleChange} name="type">
                                    <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                </Form.Select>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                               <Button size="sm" variant="danger" type="submit">
                                    Submit
                               </Button>{'     '}
                               <Button size="sm" variant="info" type="reset">
                                    Reset 
                               </Button>
                             </Card.Footer>
                        </Form>
        </Card>
        )
    }
}
                                
                                
                                
                                

import React, {Component} from 'react';
import {Card, Form, Button,Col} from 'react-bootstrap'
import axios from 'axios';
import ItemSavedToast from './ItemSavedToast';

export default class AddMenuItem extends Component{

  initialState = {
    name:'', price:'', type:''
  }

 constructor(props){
    super(props);
    this.state = this.initialState;
    this.state.show=false;
    this.submitMenuItem = this.submitMenuItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
 }

 submitMenuItem = event => {
  event.preventDefault();

    this.state.type = document.getElementById("menuItemType").value;
    const menuItem = JSON.stringify({
      name:this.state.name,
      price:this.state.price,
      type:this.state.type
    });

//    axios.post('api/additem?name=' + this.state.name
//    + '&price=' + this.state.price
//    + '&type=' + this.state.type )
//                .then(response => {
//                 if(response.data != null){
//                 this.setState({"show":true});
//                 setTimeout(()=>this.setState({"show":false}),3000);
//                 }else{
//                  this.setState({"show":false});
//                 }
//            });

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch("api/additem", {
            method: 'POST',
            body: JSON.stringify(menuItem),
            headers
        }).then(response => response.json())
                            .then(menuItem => {
                             if(menuItem != null){
                             this.setState({"show":true, "method":"post"});
                             setTimeout(()=>this.setState({"show":false}),3000);
                             }else{
                              this.setState({"show":false});
                             }
                        });

        this.setState(this.initialState);
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
          <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
              <ItemSavedToast children = {{show:this.state.show, message:"Menu Item Saved successfully."}}/>
            </div>
            <Card className="mt-4 xs={6} bg-light font-weight-bold text-center text-danger">
              <Card.Header className="fs-4 text-center">Add Item</Card.Header>
              <Form onReset={this.resetAddItem} onSubmit={this.submitMenuItem} id="addItemFormId">
                <Card.Body>
                  <Form.Group controlId="formGridName" className="mb-3">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control required type="text" name="name"
                      defaultValue="Item Name" value={name} placeholder="Item Name"
                      onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group controlId="formGridPrice" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control required type="number"
                      name="price" value={price}
                      onChange={this.handleChange} placeholder="Price" />
                  </Form.Group>

                  <Form.Group controlId="formGridType" className="mb-3">
                    <Form.Label>Item Type</Form.Label>
                    <Form.Select id="menuItemType" required
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
          </div>
        );
    }
}
                                
                                
                                
                                

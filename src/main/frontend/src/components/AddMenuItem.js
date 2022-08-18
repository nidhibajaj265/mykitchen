import React, {Component} from 'react';
import {Card, Form, Button,Col} from 'react-bootstrap'

export default class AddMenuItem extends Component{
 render(){
        return(
        <Card className="mt-4 xs={6} bg-light font-weight-bold text-center text-danger">
                        <Card.Header className="fs-4 text-center">Add Item</Card.Header>
                        <Form id="addItemFormId">
                            <Card.Body>
                              <Form.Group className="mb-3" >
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control
                                type="text"
                                name="name"
                                placeholder="Item Name" />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                type="text"
                                name="price"
                                placeholder="Price" />
                              </Form.Group>

                              <Form.Group className="mb-3">
                              <Form.Label>Item Type</Form.Label>
                                <Form.Select
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

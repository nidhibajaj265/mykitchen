import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap'

export default class ListMenuItems extends Component{
    render(){
        return(
            <Card className="mt-4 fs-6 bg-light font-weight-bold text-center text-danger">
                <Card.Header className="fs-4 text-center">Menu</Card.Header>
                <Card.Body>
                    <Table hover variant="light">
                          <tbody className="text-danger">
                            <tr>
                              <td>Poori Bhaji </td>
                              <td>130 Rs</td>
                              <td>Add to Cart</td>
                            </tr>
                            <tr>
                              <td>Dosa Sambhar</td>
                              <td>130 Rs</td>
                              <td>Add to Cart</td>
                            </tr>
                            <tr>
                              <td>Aloo Parantha</td>
                              <td>110 Rs</td>
                              <td>Add to Cart</td>
                            </tr>
                          </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}

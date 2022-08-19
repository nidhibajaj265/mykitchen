import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap'

export default class ListMenuItems extends Component{

    constructor(props){
        super(props);
        this.state = {
            menuItems : []
        }
    }
   async componentDidMount() {
       const response = await fetch('/api/menu');
       const body = await response.json();
       this.setState({menuItems: body});
     }

    render(){
    const {menuItems} = this.state;
        return(
            <Card className="mt-4 fs-6 bg-light font-weight-bold text-center text-danger">
                <Card.Header className="fs-4 text-center">Menu</Card.Header>
                <Card.Body>
                    <Table hover variant="light">
                        <thead>
                                <tr>
                                  <th>Item Name</th>
                                  <th>Price</th>
                                  <th>Type</th>
                                </tr>
                              </thead>
                          <tbody className="text-danger">
                            {

                                 menuItems.map(menuItem =>
                                                       <tr key={menuItem.id}>
                                                        <td> {menuItem.name} </td>
                                                         <td> {menuItem.price} </td>
                                                         <td> {menuItem.type} </td>
                                                        </tr>
                                                        )

                            }
                          </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}

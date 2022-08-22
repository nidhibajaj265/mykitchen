import React, {Component} from 'react';
import { Toast, ToastBody, ToastHeader } from 'react-bootstrap';

export default class ItemSavedToast extends Component{

    render(){

        const toastCSS = {
            position: 'fixed',
            top: '100px',
            
            zIndex: '1'
        }

        return(
            <div style={this.props.children.show ? toastCSS: null}>
                <Toast>
                    <ToastHeader className={" border border-success bg-success text-white "} show={this.props.children.show} closeButton={false}>
                        <strong className="mr-auto">Great!</strong>
                    </ToastHeader>
                    <ToastBody className={" border border-success  text-success"}>
                            {this.props.children.message}
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}

import React from 'react';
import {Modal, Button} from 'react-bootstrap';



class DeleteTag extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>

                <Button bsSize="small" className="btn btn-default btn-sm btn-group pull-right" onClick={this.handleShow}>
                        <i className="fa fa-2x fa-trash"></i>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Retire Tag</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Are you sure you want to delete this item?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.handleClose}>Delete tag</Button>
                        <Button onClick={this.handleClose}>Close</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default DeleteTag;

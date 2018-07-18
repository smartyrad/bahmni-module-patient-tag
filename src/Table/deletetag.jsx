
import React from 'react';
import {Modal, Button} from 'react-bootstrap';





class DeleteTag extends React.Component {
    render() {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Retire Tag</Modal.Title>
                    </Modal.Header>

                    <Modal.Body><h2>Are you sure you want to retire this item?</h2></Modal.Body>

                    <Modal.Footer>
                        <Button>Cancel</Button>
                        <Button bsStyle="primary">Delete item</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

        ) }
}

export default DeleteTag;

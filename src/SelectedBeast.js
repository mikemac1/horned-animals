import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header>
                        <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description}/>
                        <p>{this.props.selectedBeast.description}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.onHide} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}

export default SelectedBeast;

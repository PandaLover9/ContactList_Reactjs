import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

class ModalPopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal demo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">Content is here.</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalPopUp;

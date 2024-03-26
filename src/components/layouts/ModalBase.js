import React from 'react'
import Modal from 'react-bootstrap/Modal'

function ModalBase({children, show, handleShowModal, title, size}){
	const handleCloseModal = () => {
		handleShowModal()
	}
	return(
		 <Modal
        show={show}
        onHide={handleCloseModal}
        size = {size}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           	{title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          	{children}
        </Modal.Body>
      </Modal>

		)
}

export default ModalBase;
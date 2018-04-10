import React from 'react';
import Modal from 'react-modal';


const PortfolioModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">Selected Option</h3>
    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default PortfolioModal;

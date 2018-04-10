import React from 'react';
import Modal from 'react-modal';
// import PortfolioModal from './components/PortfolioModal';

export default class PortfolioItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick= (e) =>{
    e.preventDefault();
    console.log('The link was clicked.');
    this.setState(()=>({isOpen:true}));
  }
  handleCloseModal = () => {
    this.setState(()=>({isOpen:false}));
  }
  handleOpenSite = () => {
    window.open(this.props.link);
  }
  render(){
    return (
      <div className="box">
        <a href="#" onClick={this.handleClick}><img src={this.props.image} width="100%"/></a>
          <Modal
            isOpen={!!this.state.isOpen}
            onRequestClose={this.handleCloseModal}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
            >
            <div className="modal-box">

              <img src={this.props.image} width="100%"/>
              <h3 className="modal__title">{this.props.title}</h3>
              <div className="modal__body">
                <p>{this.props.body}</p>
              </div>
              <button className="modal__button" onClick={this.handleOpenSite}>Visit Site</button>
              <button className="modal__button" onClick={this.handleCloseModal}>Close Window</button>
            </div>

          </Modal>
      </div>
    );
}
}

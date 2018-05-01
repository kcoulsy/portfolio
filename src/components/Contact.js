import React from 'react';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import nodemailer from 'nodemailer';
// import axios from 'axios';
// import validator from 'validator';
// import Recaptcha from 'react-recaptcha';

class Contact extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     message: '',
  //     recaptcha: false,
  //     error: ''
  //   };
  //   this.onNameChange = this.onNameChange.bind(this);
  //   this.onEmailChange = this.onEmailChange.bind(this);
  //   this.onMessageChange = this.onMessageChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // onNameChange = (e) => {
  //    const name = e.target.value;
  //    this.setState(()=> ({ name }));
  // };
  // onEmailChange = (e) => {
  //    const email = e.target.value;
  //    this.setState(()=> ({ email }));
  // };
  // onMessageChange = (e) => {
  //    const message = e.target.value;
  //    this.setState(()=> ({ message }));
  // };
  // handleSubmit(event) {
  //   event.preventDefault();
  //
  //   if(!validator.isEmail(this.state.email)){
  //     this.state.error = 'Please enter a valid email address!';
  //     alert(this.state.error);
  //   } else if(!this.state.recaptcha){
  //     this.state.error = 'Please verify you are not a bot!';
  //     alert(this.state.error);
  //   } else {
  //     const { name, email , message } = this.state;
  //     axios.post('/send', { name, email, message });
  //     alert('Contact form submitted!');
  //   }
  // }
  // onVerify = (response) =>{
  //   if(response){
  //     this.setState(()=> ({recaptcha:true}))
  //   }
  // }
  // callback = () => {
  // console.log('Done!!!!');
  // };
  render() {
    return (
      <div>

        <div className="contact-content">

        <div className="direct">
            <div className="direct-row">
              <div className="page-title">
                <h2>Contact Me</h2>
              </div>
            </div>

          <div className="direct-row">
            <h3>If you would like to reach me</h3>
          </div>
          <div className="direct-row">
          <p>You can contact me through on this email</p>
          </div>
        <div className="direct-row">
          <a href="mailto:kristian@coulsy.co.uk">kristian@coulsy.co.uk</a>
          </div>
        <div className="direct-row">
          <p>Or on social media</p>
          </div>
        <div className="direct-row">
          <ul>
            <a href="https://www.facebook.com/kristiancoulson"><li>Facebook</li></a>
            <a href="https://www.linkedin.com/in/kristiancoulson/"><li>LinkedIn</li></a>
          </ul>
          </div>
        </div>
        </div>
      </div>
    )
  }
}


export default Contact;


//OLD CONTACT FORM - BROKEN
// <form onSubmit={this.handleSubmit}>
// <div className="form">
//   <div className="form-input">
//     <input
//       className="form-input__input"
//       type="text"
//       name="name"
//       placeholder="Name"
//       value={this.state.name}
//       onChange={this.onNameChange}
//       />
//   </div>
//   <div>
//     <input
//       className="form-input__input"
//       type="text"
//       name="Email"
//       placeholder="Email"
//       value={this.state.email}
//       onChange={this.onEmailChange}
//     />
//   </div>
//   <div>
//     <textarea
//       className="form-input__textarea"
//       type="text"
//       name="message"
//       placeholder="Type your message here.."
//       value={this.state.message}
//       onChange={this.onMessageChange}
//       />
//   </div>
//   <div className="form-submit">
//     <Recaptcha
//       sitekey="6Lcg2lEUAAAAAOyJokFFJDnpqbIomUZfQaImXzMa"
//       render="explicit"
//       verifyCallback={this.onVerify}
//       onloadCallback={this.callback}
//       theme="dark"
//       size="normal"
//     />
//   <div>
//     <button
//       className="form-button"
//       type="submit">Send</button>
//   </div>
//     </div>
//         </div>
// </form>

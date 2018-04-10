import React from 'react';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import nodemailer from 'nodemailer';
import axios from 'axios';
import validator from 'validator';
import Recaptcha from 'react-recaptcha';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      recaptcha: false,
      error: ''
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onNameChange = (e) => {
     const name = e.target.value;
     this.setState(()=> ({ name }));
  };
  onEmailChange = (e) => {
     const email = e.target.value;
     this.setState(()=> ({ email }));
  };
  onMessageChange = (e) => {
     const message = e.target.value;
     this.setState(()=> ({ message }));
  };
  handleSubmit(event) {
    event.preventDefault();

    if(!validator.isEmail(this.state.email)){
      this.state.error = 'Please enter a valid email address!';
      alert(this.state.error);
    } else if(!this.state.recaptcha){
      this.state.error = 'Please verify you are not a bot!';
      alert(this.state.error);
    } else {
      const { name, email , message } = this.state;
      axios.post('/send', { name, email, message });
      alert('Contact form submitted!');
    }
  }
  onVerify = (response) =>{
    if(response){
      this.setState(()=> ({recaptcha:true}))
    }
  }
  callback = () => {
  console.log('Done!!!!');
  };
  render() {
    return (
      <div>
        <div className="page-title">
          <h2>Contact Me</h2>
        </div>
        <div className="content">
        <form onSubmit={this.handleSubmit}>
        <div className="form">
          <div className="form-input">
            <input
              className="form-input__input"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onNameChange}
              />
          </div>
          <div>
            <input
              className="form-input__input"
              type="text"
              name="Email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div>
            <textarea
              className="form-input__textarea"
              type="text"
              name="message"
              placeholder="Type your message here.."
              value={this.state.message}
              onChange={this.onMessageChange}
              />
          </div>
          <div className="form-submit">
            <Recaptcha
              sitekey="6Lcg2lEUAAAAAOyJokFFJDnpqbIomUZfQaImXzMa"
              render="explicit"
              verifyCallback={this.onVerify}
              onloadCallback={this.callback}
              theme="dark"
              size="normal"
            />
          <div>
            <button
              className="form-button"
              type="submit">Send</button>
          </div>
            </div>
                </div>
        </form>
        <div className="direct">
          <h3>If you would like to reach me</h3>
          <p>Use the contact form on the left. Alternatively, you can contact me through on this email</p>
          <p>contact@kristiancoulson.co.uk</p>
          <p>Or on social media</p>
          <ul>
            <a href="https://www.facebook.com/kristiancoulson"><li>Facebook</li></a>
            <a href="https://www.linkedin.com/in/kristiancoulson/"><li>LinkedIn</li></a>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}


export default Contact;

// <div className="page">
// <div class="container projects">
//   <div class="projects-title">
//     <h1 class="text-center">Projects</h1>
//     <p class="text-center"></p>
//   </div>
//   <div class="row projects-row">
//     <div class="col-sm-6 col-lg-4 project">
//       <a href="http://lottery.kristiancoulson.co.uk/"><img src="img/lotterywebsite.png" alt="" width="100%" /></a>
//       <h3>Lottery Online Game</h3>
//       <p>This web app project was for a module at University. It required us to create a website that functions similar to a normal lottery. I built this in ASP.net as was required, however we had to use Visual Basic and so the backend isnt very clean. Using ASP.net was not a great experience, everything felt outdated and there were a lack of resources for every problem I came accross. I did however get 81% mark for this work.</p>
//     </div>
//     <div class="col-sm-6 col-lg-4 project">
//       <a href="http://expensify.kristiancoulson.co.uk/"><img src="img/lotterywebsite.png" alt="" width="100%" /></a>
//       <h3>Expense Manager</h3>
//       <p>This project follows Andrew Meads course on Udemy. It features React with Redux, and integration with Firebase. This gave me a good grounding to start working on my own projects.</p>
//     </div>
//     <div class="col-sm-6 col-lg-4 project">
//       <a href="http://indecision.kristiancoulson.co.uk/"><img src="img/indecision.png" alt="" width="100%" /></a>
//       <h3>Indecision</h3>
//       <p>This is my first App created in React. For this I followed Andrew Meads React course on Udemy. I really enjoyed this one, and learnt more about styling including a bit of SCSS. While I mearly followed along the tutorials, for this I feel I got a good grouding in React.</p>
//     </div>
//   </div>
//   <div class="row projects-row">
//     <div class="col-sm-6 col-lg-4 project">
//       <a href="https://codepen.io/kcoulsy/pen/LQPmgq"><img src="img/twitch.png" alt="" width="100%" /></a>
//       <h3>Twitch API</h3>
//       <p>A challenge from the Front End section on FreeCodeCamp. First time checking out APIs and learnt a lot from it. Throwing in some simple Javascript to add a bit of interaction for the user. The design looks horrible, but I was going for functionality in this project.</p>
//     </div>
//     <div class="col-sm-6 col-lg-4 project">
//       <a href="https://codepen.io/kcoulsy/pen/wpLOpw"><img src="img/wiki.png" alt="" width="100%" /></a>
//       <h3>Wikipedia Search</h3>
//       <p>Another Challenge from FreeCodeCamps Front End section. This one was to take a search and show the resulting Wikipedia pages. I did even less design on this project as I wanted to move onto more interesting things.</p>
//     </div>
//     <div class="col-sm-6 col-lg-4 project">
//       <a href="https://codepen.io/kcoulsy/pen/vdNyGV"><img src="img/bookmarking.png" alt="" width="100%" /></a>
//       <h3>Bookmarking App</h3>
//       <p>A simple app: add a website the bookmarrk list. It stores it in localstorage, and validates the URL is valid. Not much to this one, just improving Javascript skills.</p>
//     </div>
//   </div>
// </div>
// </div>

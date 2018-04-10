import React from 'react';
// import { TransitionGroup, CSSTransition } from "react-transition-group";

class Education extends React.Component {
  render() {
    return (
      <div>
      <div className="page-title">
        <h2>Education</h2>
      </div>

      <div className="edu-container">


        <div className="edu-row">
          <div>
            <img className="edu-logo" src="/images/education/warwick.png"/>
          </div>
          <div className="edu-desc-left">
            <div className="war-desc">
            <h3>University of Warwick</h3>
            <p><i>Bsc Management - Upper Second Class</i></p>
            <p>Some key modules include:</p>
              <div className="lists">
                <div>
                  <ul>
                    <li>Web App Development</li>
                    <li>Operations Research</li>
                    <li>Multivariate Analysis</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Simulation</li>
                    <li>Strategic games</li>
                  </ul>
                </div>
              </div>
              </div>
          </div>
        </div>


        <div className="edu-row">
          <div className="edu-desc-right">
            <h3>Greenhead College</h3>
            <div className="gc-desc">
              <div>
                <p><i>As-Level</i></p>
                <ul>
                  <li>Physics <strong>B</strong></li>
                </ul>
              </div>
              <div>
                <p><i>A-Level</i></p>
                <ul>
                  <li>Mathematics <strong>A</strong></li>
                  <li>Further Mathematics <strong>A</strong></li>
                  <li>Economics <strong>C</strong></li>
                  <li>General Studies <strong>B</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img className="edu-logo" src="/images/education/Greenhead.jpg"/>
          </div>
        </div>


        <div className="edu-row">
          <div>
            <img className="edu-logo" src="/images/education/nhgs.png"/>
          </div>
          <div className="edu-desc-left">
            <h3>North Halifax Grammar School</h3>
              <div className="nhgs-desc">
                <div>
                  <p><i>GCSE</i></p>
                  <div className="lists">
                    <div>
                      <ul>
                        <li><strong>A*</strong> Mathematics</li>
                        <li><strong>A</strong> ICT</li>
                        <li><strong>A</strong> History</li>
                        <li><strong>A</strong> Core Science</li>
                        <li><strong>A</strong> Additional Science</li>
                        <li><strong>B</strong> Product Design</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li><strong>B</strong> English Literature</li>
                        <li><strong>B</strong> English Language</li>
                        <li><strong>B</strong> Religious Studies</li>
                        <li><strong>B</strong> French</li>
                        <li><strong>C</strong> Art</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}


export default Education;

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

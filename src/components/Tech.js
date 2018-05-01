import React from 'react';
// import { TransitionGroup, CSSTransition } from "react-transition-group";

class Tech extends React.Component {
  render() {
    return (
      <div>
      <div className="page-title">
        <h2>Technologies</h2>
      </div>

      <div className="tech-container">
        <div className="tech-desc">
        <div>
          <ul>
            <li>HTML5/CSS</li>
            <li>Bootstrap</li>
            <li>Javascript/jQuery</li>
          </ul>
        </div>

          <div>
            <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>Version Control (GIT)</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Photoshop</li>
              <li>Premiere Pro</li>
              <li>Unity</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Heroku</li>
              <li>Firebase</li>
              <li>Wordpress</li>
              <li>Shopify/Woocommerce</li><li>Amazon FBA</li>
            </ul>
          </div>

      </div>
      </div>
      </div>
    )
  }
}


export default Tech;

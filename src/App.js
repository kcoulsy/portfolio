import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from './components/Header'
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import CV from './components/CV';
import Education from './components/Education';
import Contact from './components/Contact';

import './App.css';

const PageFade = (props) => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={500}
    mountOnEnter={true}
    unmountOnExit={true}
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div>
            <Route
               exact
               path="/"
               render={() => <Redirect to="/profile" />}
            />
            <Header />
            <div className="container">

            <TransitionGroup>
              <PageFade key={location.key}>
                <div className="">
                  <Switch location={location}>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/cv" component={CV} />
                    <Route exact path="/education" component={Education} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </div>
              </PageFade>
            </TransitionGroup>
            </div>
          </div>
        )} />
      </Router>
    );
  }
}

export default App;


//
// <div className="App">
//   <header className="App-header">
//     <div className="top-bar">
//       <Link to="/">Home</Link>
//       <Link to="/portfolio">Portfolio</Link>
//     </div>
//   </header>
//   <Switch location={location}>
//     <Route exact path="/" component={Home} />
//     <Route exact path="/portfolio" component={Portfolio} />
//   </Switch>
// </div>
//

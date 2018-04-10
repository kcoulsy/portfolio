import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="profile-photo">
          <img class="circle-image" src="/images/Me.jpg" alt="" width="150px" height="150px" />
        </div>
        <div className="profile-title">
          <h2>Kristian Coulson</h2>
        </div>
        <div className="profile-desc">
          <p>Welcome to my website, here you can find my portfolio alongside links to my social pages.
I am a young web developer with various experience over the years. </p><p>Recently I have decided to pursue development as a career.
My primary experience is with front end, however my eventual goal is to become a full stack developer.</p>
        </div>
        <div className="profile-icons">
          <ul>
            <li>
              <a href="https://www.facebook.com/kristiancoulson"><img src="/images/social/Facebook.png"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kristiancoulson/"><img src="/images/social/Linkedin.png"/></a>
            </li>
            <li>
              <a href="https://github.com/kcoulsy"><img src="/images/social/Github.png"/></a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Profile;

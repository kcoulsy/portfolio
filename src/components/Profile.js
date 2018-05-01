import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="profile-photo">
          <img class="circle-image" src="/images/me.jpg" alt="" width="200px" height="200px" />
        </div>
        <div className="profile-title">
          <h2>Kristian Coulson</h2>
        </div>
        <div className="profile-desc">
          <div className="profile-desc__row">
          <p className="profile-desc__row-container">Welcome to my website, here you can find my portfolio alongside links to my social pages.
I am a young web developer with various experience over the years. </p>
</div>
<div className="profile-desc__row">
  <p className="profile-desc__row-container">
    Recently I have decided to pursue development as a career.
My primary experience is with front end, however my eventual goal is to become a full stack developer.
</p></div>
        </div>
        <div className="profile-icons">
          <ul>
            <li>
              <a href="https://www.facebook.com/kristiancoulson"><img src="/images/social/Facebook.png" alt="Facebook link"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kristiancoulson/"><img src="/images/social/Linkedin.png" alt="LinkedIn link"/></a>
            </li>
            <li>
              <a href="https://github.com/kcoulsy"><img src="/images/social/Github.png" alt="Github link"/></a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Profile;

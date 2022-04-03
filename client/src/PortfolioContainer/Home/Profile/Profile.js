import React from 'react';
import Typical from 'react-typical';
import "./Profile.css"

import ScrollService from '../../../utility/ScrollService'


export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100019467976389">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/marian-m-379780177/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/0marcheg0/">
                <i className="fa fa-instagram"></i>
              </a>
{/*               <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a> */}
              <a href="https://twitter.com/marian_mychko">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>


          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I'M <span className="highlighted-text">Marian</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Front '+'end Dev ',
                    1000,
                    'React Dev ',
                    1000,
                    'Responsible ',
                    1000,
                    'Team-friendly ',
                    1000,
                    'Creative ',
                    1000,
                  ]}
                  //😀 🤙 👊 v🖐 👌
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of bulding applications with front end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {''}
              Hire me{' '}
            </button>
            <a href="MarianMychko.pdf" download="Marian Mychko.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

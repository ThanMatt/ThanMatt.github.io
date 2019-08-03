import React from 'react'

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Hero.css';

const Hero = props => {
  return (
    <div className="hero is-medium">
      {props.children}
      <div className="hero-body animated fadeIn">
        <label className="label has-text-weight-light has-text-centered is-size-4">Welcome to my site</label>
        <div className="icon-container">
          <span className="icon is-large">
            <a href="https://www.instagram.com/8tanilagan" title="Instagram" className="button is-white icon-social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </span>
          <span className="icon is-large">
            <a href="https://github.com/ThanMatt" className="button is-white icon-social" title="Github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </span>
          <span className="icon is-large">
            <a href="mailto: aethanilagan@gmail.com" className="button is-white icon-social" title="Contact me" target="_blank" rel="noopener noreferrer">
              <i className="far fa-envelope fa-2x"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
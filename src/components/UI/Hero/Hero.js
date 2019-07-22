import React from 'react'

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Hero.css';
import cat from '../../../assets/img/cat.gif';

const Hero = props => {
  return (
    <div className="hero is-medium">
      {props.children}
      <div className="hero-body animated fadeIn">
        <label className="label has-text-weight-light has-text-centered is-size-4">Welcome to my site</label>
        <div className="icon-container">
          <span className="icon is-large">
            <a href="https://www.instagram.com/8tanilagan" title="Instagram" className="button is-white hvr-grow" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </span>
          <span className="icon is-large">
            <a href="https://github.com/ThanMatt" className="button is-white hvr-grow" title="Github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </span>
        </div>
        <figure className="image is-128x128" id="cat">
          <img src={cat} alt="cat gif"></img>
        </figure>
      </div>
    </div>
  )
}

export default Hero
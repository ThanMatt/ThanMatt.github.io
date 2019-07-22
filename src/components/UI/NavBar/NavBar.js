import React from 'react';
import { Link } from 'gatsby';
import ScrollTop from 'react-scrolltop-button';

import 'bulma/css/bulma.css';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <ScrollTop
        distance={500}
        className="has-text-weight-bold is-6"
      />

      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <label className="title navbar-item has-text-weight-light">
            AethanIlagan
        </label>
        </div>
      </nav>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link to="/" activeStyle={{ color: 'blue' }} className="subtitle navbar-item is-right has-text-weight-light">
            Home
          </Link>
          <Link to="/blog" activeStyle={{ color: 'blue' }} partiallyActive={true} className="subtitle navbar-item is-right has-text-weight-light">
            Blog
          </Link>
          <Link to="/photos" activeStyle={{ color: 'blue' }} className="subtitle navbar-item is-right has-text-weight-light">
            Photos
          </Link>
          <Link to="/404" className="subtitle navbar-item is-right has-text-weight-light">
            Archive
            </Link>
        </div>

      </nav>

    </>

  )
}

export default NavBar;
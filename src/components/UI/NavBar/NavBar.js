import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'gatsby';

import 'bulma/css/bulma.css';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <label className="title navbar-item has-text-weight-light">
            AethanIlagan
        </label>
        </div>
      </nav>
      <Headroom>
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

      </Headroom>
    </>

  )
}

export default NavBar;
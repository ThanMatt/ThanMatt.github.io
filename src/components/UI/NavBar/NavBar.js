import React from 'react';
import { Link } from 'gatsby';
import ScrollTop from 'react-scrolltop-button';
import styled from 'styled-components';

import 'bulma/css/bulma.css';
import './NavBar.css';

const NavBar = () => {
  const StyledScrollTop = styled(ScrollTop)`
    border-color: #707070;
    border-radius: 15px;
    border-width: 1px;
    :hover {
      background: #dbdbdb;
      color: black;
    } 
  `
  return (
    <>
      <StyledScrollTop
        distance={500}
        className="has-text-weight-light is-5"
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
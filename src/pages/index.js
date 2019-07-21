import React from "react"
import NavBar from '../components/UI/NavBar/NavBar';
import Hero from '../components/UI/Hero/Hero';
import SEO from "../components/seo"

import '../assets/css/styles.css';
import 'animate.css';
export default () => (
  <>
    <SEO title="Home" />
    <Hero>
      <NavBar />
    </Hero>
  </>
)

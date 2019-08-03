/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 110, height: 110, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      className="has-text-centered"
      style={{
        marginBottom: rhythm(1.0),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p
        style={{
          fontSize: `20px`
        }} 
      >
        <strong>{author}</strong>
        {` `}
        <div>
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
      </p>
    </div>
  )
}

export default Bio

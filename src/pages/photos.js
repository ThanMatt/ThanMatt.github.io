import React from 'react';
import { graphql } from "gatsby"
import ImageCards from '../components/ImageCards/ImageCards';
import NavBar from "../components/UI/NavBar/NavBar";
import Layout from "../components/layout"
import SEO from '../components/seo';


class Photos extends React.Component {
  render() {
    const { data } = this.props
    const blogTitle = data.site.siteMetadata.blogTitle
    const photos = data.allInstaNode.edges;
    return (
      <>
        <NavBar />
        <Layout location={this.props.location} title={blogTitle}>
          <SEO title="Photos" description="Thanmatt's instagram photos!" />
          <div className="columns is-centered is-multiline">
            {
              photos.map(({ node }, index) => {
                return (
                  <div className="column is-6" key={index}>
                    <ImageCards photo={node} />
                  </div>
                )
              })
            }
          </div>
        </Layout>
      </>
    )
  }
}

export default Photos

export const photosQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allInstaNode(sort: {order: DESC, fields: timestamp}) {
      edges {
        node {
          id
          original
          caption
          username
        }
      }
    }
  }
`

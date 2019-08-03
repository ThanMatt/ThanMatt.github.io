import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import NavBar from "../components/UI/NavBar/NavBar";
import BlogCard from '../components/BlogCard/BlogCard';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const blogTitle = data.site.siteMetadata.blogTitle
    const posts = data.allMarkdownRemark.edges

    return (
      <>

        <NavBar />
        <Layout location={this.props.location} title={blogTitle}>
          <SEO title="Blog" />
          <Bio />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}
                style={{
                  marginBottom: rhythm(0.6)
                }}>
                <Link to={node.fields.slug}>
                  <BlogCard node={node} title={title} />
                </Link>
              </div>
            )
          })}
        </Layout>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
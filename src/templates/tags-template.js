import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import NavBar from "../components/UI/NavBar/NavBar";
import BlogCard from '../components/BlogCard/BlogCard';

class TagsTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const blogTitle = data.site.siteMetadata.blogTitle
    const posts = data.allMarkdownRemark.edges
    return (
      <>
        <NavBar />
        <Layout location={this.props.location} title={blogTitle}>
          <SEO
            title={pageContext.tag}
            description={'Anything related to ' + pageContext.tag}
          />
          <p className="title has-text-weight-normal has-text-centered is-5">Tagged in</p>
          <p className="title is-3 has-text-centered" style={{ marginBottom: rhythm(1) }}>{pageContext.tag}</p>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}
                style={{
                  marginBottom: rhythm(0.6)
                }}
              >

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
export default TagsTemplate

export const pageQuery = graphql`
  query($tag: String!){
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {tags: {in: [$tag]}}}, sort: {fields: frontmatter___date, order: DESC})
    {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tags
            title
          }
        }
      }
    }
  }
`
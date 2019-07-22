import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import NavBar from "../components/UI/NavBar/NavBar";

class Tags extends React.Component {
  render() {
    const { data } = this.props
    const blogTitle = data.site.siteMetadata.blogTitle
    const posts = data.allMarkdownRemark.edges

    return (
      <>
        <NavBar />
        <Layout location={this.props.location} title={blogTitle}>
          <SEO title="Tags" />
          <Bio />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <p
                  className="subtitle is-5"
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </p>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <div className="tags" style={{ marginTop: rhythm(0.5), marginBottom: rhythm(0.5) }}>
                  {
                    node.frontmatter.tags.map((tag, index) => <span className="tag" key={index}>{tag}</span>)
                  }
                </div>
              </div>
            )
          })}
        </Layout>
      </>
    )
  }
}
export default Tags

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
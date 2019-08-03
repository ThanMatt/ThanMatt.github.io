import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import NavBar from "../components/UI/NavBar/NavBar";
import Tags from "../components/Tag/Tag";

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
                  <div className="post-container">
                    <div className="card" id="blog-card">
                      <div className="card-content">
                        <p
                          id="title"
                          style={{
                            marginBottom: rhythm(1 / 4),
                          }}
                        >
                          {title}
                        </p>

                        <small>{node.frontmatter.date}</small>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                        <div className="tags" style={{ marginTop: rhythm(0.5) }}>
                          {
                            node.frontmatter.tags.map((tag, index) => <Tags tag={tag} key={index} />)
                          }
                        </div>

                      </div>
                    </div>
                  </div>
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
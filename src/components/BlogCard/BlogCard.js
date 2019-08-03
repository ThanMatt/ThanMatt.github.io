import React from 'react';
import { rhythm } from "../../utils/typography"
import Tags from '../Tag/Tag';

const BlogCard = (props) => {
  const { frontmatter, excerpt } = props.node;
  return (
    <div className="card" id="blog-card">
      <div className="card-content">
        <p
          className="has-text-weight-medium"
          id="title"
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          {props.title}
        </p>

        <small>{frontmatter.date}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt,
          }}
        />
        <div className="tags" style={{ marginTop: rhythm(0.5) }}>
          {
            frontmatter.tags.map((tag, index) => <Tags tag={tag} key={index} />)
          }
        </div>

      </div>
    </div>


  )
}

export default BlogCard
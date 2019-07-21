import React from "react"
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    let header

    //if (location.pathname !== rootPath) {
    //  header = (
    //    <h1
    //      style={{
    //        ...scale(0.5),
    //        marginBottom: rhythm(1.5),
    //        marginTop: 0,
    //      }}
    //    >
    //      <Link
    //        style={{
    //          boxShadow: `none`,
    //          textDecoration: `none`,
    //          color: `inherit`,
    //        }}
    //        to={`/blog`}
    //      >
    //        {title}
    //      </Link>
    //    </h1>
    //  )
    //} else {
    //  header = (
    //    <h3
    //      style={{
    //        fontFamily: `Montserrat, sans-serif`,
    //        marginTop: 0,
    //      }}
    //    >
    //      <Link
    //        style={{
    //          boxShadow: `none`,
    //          textDecoration: `none`,
    //          color: `inherit`,
    //        }}
    //        to={`/`}
    //      >
    //        {title}
    //      </Link>
    //    </h3>
    //  )
    //}
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header className="animated fadeIn faster">{header}</header>
        <main className="animated fadeIn faster">{children}</main>
      </div>
    )
  }
}

export default Layout

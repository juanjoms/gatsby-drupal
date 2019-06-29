import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./layout.css"
import Header from "./header";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      {
      site {
        siteMetadata {
          title
          titleHelper
        }
      }
    }
  `)
  return (
    <div className="layout">
      <Header
        title={data.site.siteMetadata.title}
        titleHelper={data.site.siteMetadata.titleHelper} >
      </Header>
      <ul className="nav">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/contact">Contact</Link> </li>
        <li> <Link to="/about">About</Link> </li>
      </ul>
      {children}
    </div>
  )
}

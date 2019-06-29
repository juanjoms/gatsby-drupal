import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./layout.css"
import Header from "./header";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query {
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
        title="Dummy title"
        titleHelper="Dummy helper title" >
      </Header>
      <ul className="nav">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
      </ul>
      {children}
    </div>
  )
}

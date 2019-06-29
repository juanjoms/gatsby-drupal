import React from "react"
import {graphql, useStaticQuery } from "gatsby"
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
      {children}
    </div>
  )
}

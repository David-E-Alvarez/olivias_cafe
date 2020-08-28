/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({children}) => {


  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout

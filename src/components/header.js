import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <nav>
      <Link id="Link" to="/">Olivias Cafe</Link> 
      <Link style={{textDecoration: "none"}} to="/about/">About</Link>
      <Link style={{textDecoration: "none"}} to="/contact/">Contact</Link>
    </nav>
  </header>
)

export default Header

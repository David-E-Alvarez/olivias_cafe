import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <nav>
      <h1>Olivias Cafe</h1> 
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
    </nav>
  </header>
)

export default Header

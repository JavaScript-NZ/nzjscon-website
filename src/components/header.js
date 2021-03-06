import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Link to="/" className="navbar-brand">
          {siteTitle}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/schedule" className="nav-link">
              Schedule
            </Link>
            <Link to="/#attending" className="nav-link">
              Attending
            </Link>
            <Link to="/#sponsors" className="nav-link">
              Sponsors
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

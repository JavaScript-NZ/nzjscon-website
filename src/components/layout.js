/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "~/components/header"
import Container from 'react-bootstrap/Container'
import "~/components/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="d-flex flex-column site-wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main role="main" className="flex-shrink-0">
        <Container>
          {children}
        </Container>
      </main>

      <footer className="footer mt-auto py-3">
        <Container>
          <p>© {new Date().getFullYear()} <a href="mailto:conference@javascript.org.nz">nz.js(con);</a></p>
          <p>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></p>
          <p className="text-muted"><span className="conf-name">nz.js(con);</span> is run by <a href="http://javascript.org.nz/">JavaScript NZ Incorporated</a>. Want to get involved? Join the <a href="https://javascriptnewzealand.slack.com/messages/nzjscon/">#nzjscon</a> channel on our <a href="http://slack.javascript.org.nz/">public slack channel</a>.</p>
        </Container>
      </footer>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

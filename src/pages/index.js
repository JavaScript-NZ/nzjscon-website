import React from "react"
import { Link } from "gatsby"

import Layout from "~/components/layout"
import Image from "~/components/image"
import SEO from "~/components/seo"
import Container from 'react-bootstrap/Container'

import styles from "~/pages/index.module.scss"

const IndexPage = () => (
  <>
    <div className={styles.hero}>
      <Container>
        <h1>
          nz.js(con);<br />
          wlg 2020
        </h1>
      </Container>
    </div>
    <Layout homepage>
      <SEO />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Image filename="2017-logo.png" alt="2017 conference logo" />
      <p><Link to="/news/">Go to blog</Link></p>
      <p><Link to="/my-first-markdown-page/">Markdown page</Link></p>
    </Layout>
  </>
)

export default IndexPage

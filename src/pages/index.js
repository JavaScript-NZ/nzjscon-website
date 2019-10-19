import React from "react"
import { Link } from "gatsby"

import Layout from "~/components/layout"
import Image from "~/components/image"
import SEO from "~/components/seo"

import styles from "~/pages/index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO />

    <div className={styles.hero}>
      <h1>
        nz.js(con);<br />
        wlg 2020
      </h1>
    </div>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p><Link to="/news/">Go to blog</Link></p>
    <p><Link to="/my-first-markdown-page/">Markdown page</Link></p>
  </Layout>
)

export default IndexPage

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"

export default function PageTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="page">
        <h1>{frontmatter.title}</h1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Link to="/">Go back</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title,
      }
    }
  }
`

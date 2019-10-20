import React from "react"
import { graphql, Link } from "gatsby"

import humanDate from "~/utils/human-date"
import Layout from "~/components/layout"
import SEO from "~/components/seo"

export default function PostTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h3>{humanDate(frontmatter.date)}</h3>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Link to="/news" className="btn btn-primary">
        Go back
      </Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($title: String!, $date: Date!) {
    markdownRemark(
      frontmatter: { title: { eq: $title }, date: { eq: $date } }
    ) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`

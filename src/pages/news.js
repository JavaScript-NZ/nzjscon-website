import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import PostLink from "~/components/post-link"

const NewsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="News" />
      <h1>News</h1>
      <p>Welcome to the news</p>
      <div>{Posts}</div>
      <Link to="/">Go back</Link>
    </Layout>
  )
}
export default NewsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\\/posts/"}}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date,
            title
          }
        }
      }
    }
  }
`

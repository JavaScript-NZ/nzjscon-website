/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const postSlug = require(`./src/utils/post-slug`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const posts = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        edges {
          node {
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)
  const pages = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (posts.errors) {
    console.error(posts.errors)
  }
  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = postSlug(node.frontmatter.title, node.frontmatter.date)
    actions.createPage({
      path: slug,
      component: path.resolve(`src/templates/post.js`),
      context: {
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        slug,
      },
    })
  })
  if (pages.errors) {
    console.error(pages.errors)
  }
  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/page.js`),
    })
  })
}

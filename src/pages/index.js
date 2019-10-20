import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "~/components/layout"
import Image from "~/components/image"
import MailchimpSubscribeForm from "~/components/mailchimp-subscribe"
import SEO from "~/components/seo"
import PostLink from "~/components/post-link"

import styles from "~/pages/index.module.scss"

const IndexPage = () => {
  const newsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        limit: 2
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 85)
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)
  const Posts = newsData.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <>
      <div className={styles.hero}>
        <Container>
          <h1>
            nz.js(con);
            <br />
            wlg 2020
          </h1>
        </Container>
      </div>
      <Layout homepage>
        <SEO />

        <Row>
          <Col xs={12} md={7}>
            <h2>sign up for updates</h2>
            <p>
              Sign up for our low-volume announcement mailing list to find out
              when we have a venue and date finalised, when tickets go on sale
              and when the CFP is announced. We promise to not spam you, and to
              not pass your email address onwards.
            </p>
            <MailchimpSubscribe
              url="//gmail.us4.list-manage.com/subscribe/post?u=abbe98fd5ccc3eecd8807a2d0&id=4bc06dd189"
              render={({ subscribe, status, message }) => (
                <MailchimpSubscribeForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </Col>

          <Col md={1}></Col>

          <Col>
            <h2 id="news">news</h2>
            <div>{Posts}</div>
            <p>
              <Link to="/news" className="btn btn-secondary">
                News archive
              </Link>
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>past events</h2>
            <Image filename="2017-logo.png" alt="2017 conference logo" />
          </Col>

          <Col md={1}></Col>

          <Col xs={12} md={7}>
            <h2 id="sponsors">sponsors</h2>
            <p>
              <span className="conf-name">nz.js(con);</span> is a low cost event
              and relies on sponsorship to make that possible. Interested in
              becoming a sponsor for 2020? Reach out to us{" "}
              <a href="mailto:conference@javascript.org.nz">via email</a>.
            </p>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default IndexPage

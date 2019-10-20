import React from "react"
import { Link } from "gatsby"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import Layout from "~/components/layout"
import Image from "~/components/image"
import MailchimpSubscribeForm from "~/components/mailchimp-subscribe"
import SEO from "~/components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "~/pages/index.module.scss"

const IndexPage = () => (
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
          <p>Sign up for our low-volume announcement mailing list to find out when we have a venue and date finalised, when tickets go on sale and when the CFP is announced. We promise to not spam you, and to not pass your email address onwards.</p>
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

        <Col md={1}>
        </Col>

        <Col>
          <h2>news</h2>
          <p>
            <Link to="/news/">Go to blog</Link>
          </p>
          <p>
            <Link to="/my-first-markdown-page/">Markdown page</Link>
          </p>
        </Col>

      </Row>

      <Row>

        <Col>
          <h2>past events</h2>
          <Image filename="2017-logo.png" alt="2017 conference logo" />
        </Col>

        <Col md={1}>
        </Col>

        <Col xs={12} md={7}>
          <h2>sponsors</h2>
          <p><span className="conf-name">nz.js(con);</span> is a low cost event and relies on sponsorship to make that possible. Interested in becoming a sponsor for 2020? Reach out to us <a href="mailto:conference@javascript.org.nz">via email</a>.</p>
        </Col>

      </Row>

    </Layout>
  </>
)

export default IndexPage

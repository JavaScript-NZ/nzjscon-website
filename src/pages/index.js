import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import MailchimpSubscribe from "react-mailchimp-subscribe"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "~/components/layout"
import Image from "~/components/image"
// import MailchimpSubscribeForm from "~/components/mailchimp-subscribe"
import SEO from "~/components/seo"
import PostLink from "~/components/post-link"
import SponsorList from "~/content/sponsors.json"

import styles from "~/pages/index.module.scss"

const IndexPage = () => {
  const newsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        limit: 3
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
            wlg 2021
          </h1>
        </Container>
      </div>
      <Layout homepage>
        <SEO />

        <Row>
          <Col>
            <h3 className={styles.lead}>
              <strong>21st &amp; 22nd June 2021</strong> <br />
              <strong>Shed 6, Wellington, New Zealand</strong>
            </h3>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={7}>
            <p className="lead">
              <span className="conf-name">nz.js(con);</span> is New Zealand’s
              dedicated national JavaScript conference. It has an open CFP, a
              low cost of entry, and broad variety of JavaScript related topics.
              It will be held in person on the 21st &amp; 22nd June 2021 at Shed
              6 in Wellington, New Zealand.
            </p>

            <p>
              Learn more about <Link to="/schedule">the schedule</Link>,{" "}
              <Link to="/#attending">attending the conference</Link>, or
              becoming a <Link to="/#sponsors">conference sponsor</Link>.
            </p>

            <h2>
              tickets now <s>on sale</s> sold out
            </h2>
            <p>
              We've hit max capacity, and our waitlist for cancellations is full
              <span role="img" aria-label="screaming face emoji">
                😱
              </span>
              .
            </p>
            <p>
              If you didn't manage to get a ticket, you can rest assured that
              all talks will be recorded so you won't miss out.
            </p>

            {/* <h2>sign up for updates</h2>
            <p>
              Sign up for our low-volume announcement mailing list to get news annoucements as they happen. We promise to not spam you, and to
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
            /> */}
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
            <h2 id="schedule">schedule</h2>
            <p>
              Follow along with the conference schedule. We hosted an exciting
              lineup of speakers on a huge variety of topics.
            </p>
            <Link to="/schedule" className="btn btn-primary mb-5">
              View schedule
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 id="attending">attending</h2>
            <p>
              <strong>nz.js(con);</strong> is dedicated to a harassment-free
              conference experience for everyone. Our anti-harassment policy can
              be found at our <Link to="/code-of-conduct">Code of Conduct</Link>{" "}
              page.
            </p>

            <p>Find out more about:</p>
            <ul>
              <li>
                <Link to="/lunch">Nearby food options for lunch</Link>
              </li>
              <li>
                <Link to="/diversity-and-financial-aid-fund">
                  Diversity and financial aid fund
                </Link>
              </li>
              <li>
                <Link to="/venue-and-directions">Venue and directions</Link>
              </li>
              <li>
                <Link to="/code-of-conduct">Code of Conduct</Link>
              </li>
              <li>
                <a href="https://forms.gle/ArBdJcdd1QN8FhWq8">
                  Become a volunteer
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 id="sponsors">sponsors</h2>
            <p>
              <span className="conf-name">nz.js(con);</span> is a low cost event
              and relies on sponsorship to make the event happen.
              <br />
              Interested in becoming a sponsor? Reach out to us{" "}
              <a href="mailto:conference@javascript.org.nz">via email</a>.
            </p>
            <p>
              We’re massively thankful to all our sponsors for making{" "}
              <span className="conf-name">nz.js(con);</span> possible!
            </p>
            {SponsorList.map(tier => {
              return (
                <div className={styles.sponsorTier} key={tier.name}>
                  <h4>{tier.name}</h4>
                  <Row key={`${tier.name}`} className="align-items-center">
                    {tier.sponsors.map((sponsor, index) => {
                      return (
                        <Col xs={12} md={4}>
                          <a href={sponsor.website}>
                            <Image
                              key={`sponsor-index-${index}`}
                              filename={`sponsors/${sponsor.logo}`}
                              alt={`${sponsor.name} logo`}
                            />
                          </a>
                        </Col>
                      )
                    })}
                  </Row>
                </div>
              )
            })}
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <h2>past events</h2>
            <a href="/2017">
              <Image filename="2017-logo.png" alt="2017 conference logo" />
            </a>
          </Col>

          <Col md={1}></Col>
        </Row>
      </Layout>
    </>
  )
}

export default IndexPage

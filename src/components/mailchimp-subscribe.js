import React from "react"
import Alert from "react-bootstrap/Alert"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const MailchimpSubscribeForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <Form>
      <Form.Group controlId="mailchimp.email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={node => (email = node)} placeholder="Your email" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={e => {
          e.preventDefault()
          submit()
        }}
      >
        Submit
      </Button>

      <Form.Group className="mt-3">
        {status === "sending" &&
          <Alert variant="info">
            sending...
          </Alert>
        }
        {status === "error" && (
          <Alert variant="danger">
            {message}
          </Alert>
        )}
        {status === "success" && (
          <Alert variant="success">
            {message}
          </Alert>
        )}
      </Form.Group>
    </Form>
  )
}

export default MailchimpSubscribeForm

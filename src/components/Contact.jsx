
import { useState } from "react"
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap"
import { Mail, Linkedin, Github } from "lucide-react"
import emailjs from "@emailjs/browser"
import "./Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  emailjs
  .send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    setShowAlert(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setShowAlert(false), 5000)
  })
  .catch((error) => {
    console.error("EmailJS error:", error)
    alert("Email failed")
  })
}


  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="section-title mb-3">
            Get In Touch
            </h2>
            <p className="contact-intro">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or
              just want to say hi, I'll try my best to get back to you!
            </p>
          </Col>
        </Row>

        {/* Two-column layout */}
        <Row className="g-4">
          {/* Form - left */}
          <Col lg={7} md={12}>
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Thank you for your message! I'll get back to you soon.
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="contact-form">
            
              <Form.Group className="mb-3">
                <h3 className="contact-heading">Send a Message</h3>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="form-input"
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="btn-primary-custom btn-lg">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>

          {/* Right column - stacked cards */}
          <Col lg={5} md={12}>
            <Card className="contact-card mb-4">
              <Card.Body>
                <h3 style={{paddingBottom:"0.5rem"}}>Contact Me</h3>
                <div className="contact-links">
                  <a href="mailto:ravneet1107@gmail.com" className="contact-link">
                    <Mail size={20} />
                    <span>ravneet1107@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ravneet-kaur07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/ravneetkaur-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </Card.Body>
            </Card>

            <Card className="open-work-card">
              <Card.Body>
                <h3>Open to Work</h3>
                <p>
                  I am actively looking for new opportunities in web development and full-stack projects.
                  Feel free to connect with me for collaborations or job openings!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Contact

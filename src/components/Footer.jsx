// Footer.jsx
import { Container, Row, Col } from "react-bootstrap"
import { Mail, Linkedin, Github } from "lucide-react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left: Contact */}
          <Col md={4} lg={4}>
            <h3 style={{color:"var(--color-primary)"}}>Ravneet Kaur</h3>
          </Col>
          <Col md={4} lg={4} className="mb-3 mb-md-0">
            <h5>Get in Touch</h5>
            <div className="footer-links">
              <a href="mailto:ravneet1107@gmail.com" className="footer-link">
                <Mail size={18} /> ravneet1107@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ravneet-kaur07/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/ravneetkaur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </Col>

          <Col md={4} lg={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <div className="footer-links">
              <a
                href="#about"
                className="footer-link"
              >
                About
              </a>
              <a
                href="#skills"
                className="footer-link"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="footer-link"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="footer-link"
              >
                Contact
              </a>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer

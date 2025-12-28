import { Container, Row, Col, Button } from "react-bootstrap"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import "./Hero.css"

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8} className="text-center">
            <div className="hero-content">
              <p className="hello-text font-mono animate-fade-in-up">Hello, I'm</p>
              <h1 className="hero-title animate-fade-in-up">Ravneet Kaur</h1>
              <h2 className="hero-subtitle animate-fade-in-up">Full Stack Web Developer</h2>

              <p className="hero-description animate-fade-in-up animation-delay-200">
                I design and develop modern web applications using the MERN stack, focusing on accessibility, performance, and pixel-perfect interfaces that deliver meaningful user experiences.
              </p>

              <div className="hero-buttons animate-fade-in-up animation-delay-400">
                <Button href="#projects" className="btn-primary-custom me-3">
                  View My Work
                </Button>
                <Button href="#contact" className="btn-outline-custom">
                  Get In Touch
                </Button>
              </div>

              <div className="social-links animate-fade-in-up animation-delay-600">
                <a
                  href="https://github.com/ravneetkaur-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravneet-kaur07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a href="mailto:ravneet1107@gmail.com" className="social-icon" aria-label="Email">
                  <Mail size={24} />
                </a>
              </div>

              <div className="scroll-indicator animate-bounce">
                <a href="#about" className="scroll-link">
                  <ChevronDown size={32} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

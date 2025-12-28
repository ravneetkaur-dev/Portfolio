import { Container, Row, Col } from "react-bootstrap"
import "./About.css"

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="section-title text-center mb-5">
             About Me
            </h2>

            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <div className="about-text">
                  <p>
                    Hello! I'm a passionate Full Stack Web Developer specializing in the MERN stack (MongoDB,
                    Express.js, React, Node.js). I love building things for the web and turning ideas into reality
                    through code.
                  </p>
                  <p>
                    My journey in web development started with curiosity about how websites work, and has grown into a
                    deep passion for creating seamless, user-friendly applications. I focus on writing clean,
                    maintainable code while ensuring excellent user experiences.
                  </p>
                  <p>
                    I've successfully delivered projects ranging from digital libraries to interactive platforms, always
                    aiming to exceed expectations and deliver robust solutions.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="about-image-wrapper">
                  <div className="about-image-border"></div>
                  <div className="about-image">
                    <img src="/me.jpg" alt="Developer" className="img-fluid" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About

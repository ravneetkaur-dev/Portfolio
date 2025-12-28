import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { ExternalLink, Github } from "lucide-react"
import "./Projects.css"

function Projects() {
  const projects = [
    {
      title: "Feedback Wall",
      description:
        "An interactive platform for collecting and displaying user feedback in real-time. Includes features like anonymous posting, upvoting, categorization, and admin moderation dashboard.",
      technologies: ["EJS", "Node.js", "Express.js", "MongoDB"],
      image: "/Feedback_Wall.png",
      github: "https://github.com/ravneetkaur-dev/Feedback-Wall",
    //   demo: "#",
    },
    {
      title: "Digital Library",
      description:
        "A comprehensive digital library management system where users can browse, search, and manage book collections. Features include user authentication, advanced search filters, and book recommendations.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/Digital_Library.png",
      github: "https://github.com/ravneetkaur-dev/Digital-Library",
      demo: "https://digital-library-phi-mauve.vercel.app/",
    },
    {
      title: "QuickCart",
      description:
        "A mini e-commerce site built with React, featuring seamless multi-page navigation with React Router, efficient cart management using React redux, and dynamic product loading through infinite scroll for a smooth shopping experience.",
      technologies: ["React", "React-Redux", "React-Router", "React-Bootstrap"],
      image: "/QuickCart.png",
      github: "https://github.com/ravneetkaur-dev/QuickCart",
    //   demo: "#",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title text-center mb-5">
        Featured Projects
        </h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="project-card h-100">
                <div className="project-image-wrapper">
                  <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" />
                </div>

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description flex-grow-1">{project.description}</Card.Text>

                  <div className="tech-tags mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <Button
                      variant="outline-light"
                      size="sm"
                      href={project.github}
                      target="_blank"
                      className="me-2 project-link-btn"
                    >
                      <Github size={16} className="me-1" />
                      Code
                    </Button>
                    {project.demo && (
                        <Button
                            size="sm"
                            href={project.demo}
                            target="_blank"
                            className="btn-primary-custom project-link-btn"
                        >
                            <ExternalLink size={16} className="me-1" />
                            Live Demo
                        </Button>
                        )}

                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects

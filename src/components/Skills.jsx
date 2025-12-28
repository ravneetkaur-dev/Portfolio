import { Container, Row, Col, Card } from "react-bootstrap"
import "./Skills.css"

function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["C", "C++", "Java", "HTML", "CSS", "JavaScript", "MySQL"],
        },
        {
            title: "Frameworks/Libraries",
            skills: ["React.js", "Node.js", "Express.js", "Bootstrap", "React-Redux"],
        },
        {
            title: "Databases and Tools",
            skills: ["MongoDB", "MySQL", "Git & GitHub", "Postman", "VS Code",],
        },
        {
            title: "Others",
            skills: [
            "Data Structures & Algorithms",
            "OOPs",
            "DBMS",
            "Operating Systems",
            ],
        },
        ]


  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title text-center mb-5">
        Skills & Technologies
        </h2>

        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="skill-card h-100">
                <Card.Body>
                  <h3 className="skill-category-title">{category.title}</h3>
                  <ul className="skill-list">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-item">
                        <span className="skill-bullet">▹</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills

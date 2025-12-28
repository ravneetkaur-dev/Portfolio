import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import "./Navbar.css"

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <Navbar expand="md" fixed="top" expanded={expanded} className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#" className="brand font-mono">
          Ravneet Kaur
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item) => (
              <Nav.Link key={item.name} href={item.href} onClick={() => setExpanded(false)} className="nav-link-custom">
                {item.name}
              </Nav.Link>
            ))}
            <a
              href="/resume.pdf"
              className="btn btn-primary-custom btn-sm ms-md-3 mt-3 mt-md-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

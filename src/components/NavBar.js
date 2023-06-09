import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/websiteLogo.png";
import linkedInIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github.svg";
import instaIcon from "../assets/img/nav-icon3.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  // handle scrolling behaviour => without scrolling, navbar is transparent. with scrolling, navbar turns black
  useEffect(() => {
    const onScroll = () => {
      // If user scrolls down by 50
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", onScroll);

    // Since we added event listener via useEffect, we need a clean up function to remove it each time the component unmounts
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLinkHandler = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#about">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLinkHandler("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLinkHandler("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              id = "expLink"
              className={
                activeLink === "experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => updateActiveLinkHandler("experience")}
            >
              Experience
            </Nav.Link>
          </Nav>
          {/* For social icons */}
          <span className="navbar-socials">
            <div className="social-icon">
              {/* Add social links on href */}
              <a href="https://www.linkedin.com/in/joshuachng/" target="_blank">
                <img src={linkedInIcon} alt="linkedin" />
              </a>
              <a href="https://github.com/Cocoteax" target="_blank">
                <img src={githubIcon} alt="github" />
              </a>
              <a href="https://www.instagram.com/joshhhuuaa/" target="_blank">
                <img src={instaIcon} alt="insta" />
              </a>
            </div>
            {/* <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button> */}
          </span>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;

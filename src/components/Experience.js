import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import experienceBackground from "../assets/img/color-sharp2.png";

function Experience() {
  const projects = [
    {
      title: "Expense Tracker Application",
      description: "Personal Project",
      imgUrl: projImg1,
    },
    {
      title: "MindFull",
      description: "CZ3002: Advanced Software Engineering",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="experience">
      <Container>
        <Row>
          <Col>
            <h2>EXPERIENCE</h2>
            <p>Lorem ipsum text is a standard template for printing.</p>
            <Tab.Container defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Extra</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {/* {projects.map((project, index) => {
                      return (
                        <div>{project.title}</div>
                      );
                    })} */}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum second</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum third</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={experienceBackground} />
    </section>
  );
}

export default Experience;

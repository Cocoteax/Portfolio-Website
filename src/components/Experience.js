import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import expenseTracker from "../assets/img/expense-tracker.svg";
import javascript from "../assets/img/javascript.svg"
import experienceBackground from "../assets/img/color-sharp2.png";
import react from "../assets/img/react.svg";
import Timeline from "./Timeline";

function Experience() {
  const projects = [
    {
      title: "Expense Tracker",
      source: "Personal Project",
      description: [
        "This is a responsive web application that I built while learning the fundamentals of React",
      ],
      imgUrl: expenseTracker,
      techStacks: [[react, "React.js"], [javascript, "Javascript"]],
    },
    {
      title: "MindFull",
      source: "CZ3002: Advanced Software Engineering",
      description: [
        "This is a project I built while learning ReactJS,This is a project I built while learning ReactJSThis is a project I built while learning ReactJSThis is a project I built while learning ReactJSThis is a project I built while learning ReactJSThis is a project I built while learning ReactJSThis is a project I built while learning ReactJS teaching me about the fundamentals of React and its applicationThis is a project I built while learning ReactJS, teaching me about the fundamentals of React and its applicationThis is a project I built while learning ReactJS, teaching me about the fundamentals of React and its application",
      ],
      imgUrl: expenseTracker,

    },
    {
      title: "Expense Tracker Application",
      source: "Personal Project",
      description: [
        "This is a project I built while learning ReactJS, teaching me about the fundamentals of React and its application",
      ],
      imgUrl: expenseTracker,
      techStacks: [[react, "React.js"], [javascript, "Javascript"]],
    },
  ];

  return (
    <section className="experience">
      <Container>
        <Row>
          <Col>
            <h2>EXPERIENCE</h2>
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
                <Tab.Pane eventKey="first"></Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Timeline timelineElements={projects} />
                </Tab.Pane>
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

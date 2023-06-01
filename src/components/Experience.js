import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import expenseTracker from "../assets/img/expense-tracker.svg";
import mindfull from "../assets/img/Mindfull.svg";
import ocbc from "../assets/img/OCBC.png";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import python from "../assets/img/python.svg";
import django from "../assets/img/django.svg";
import jira from "../assets/img/jira.svg";
import figma from "../assets/img/figma.svg";
import pega from "../assets/img/pega.jpg";
import github from "../assets/img/github.svg";
import psa from "../assets/img/psa.svg";
import Timeline from "./Timeline";
import experienceBackground from "../assets/img/color-sharp2.png";

function Experience() {
  // work timeline elements
  const work = [
    {
      title: "OCBC",
      source:
        "Product Owner / Software Engineer Intern\nGlobal Wholesale Banking",
      description: [
        "Responsible for delivering an internal digital CRM platform for relationship managers to manage their customers portfolios.",
        "Implemented an automated utility to shorten access management processing cycle for the CRM using Python.",
        "Developed user stories and designed wireframes for regional rollout of existing modules.",
      ],
      imgUrl: ocbc,
      techStacks: [
        [python, "Python"],
        [jira, "Jira"],
        [figma, "Figma"],
        [pega, "Pega"],
      ],
      link: "https://www.ocbc.com/group/gateway",
      date: "Jan 2023 - May 2023",
      iconChange: false, // Set to true if icon is black and needs to be changed to white
    },
    {
      title: "Port of Singapore Authority (PSA)",
      source: "Product Management Intern\nGroup Cargo Solutions",
      description: [
        "Collaborated with product management team to develop an end-to-end visibility product used during transhipment.",
        "Defined product requirements and translated them into functional user stories.",
        "Designed initial wireframe using Figma.",
      ],
      imgUrl: psa,
      techStacks: [
        [jira, "Jira"],
        [figma, "Figma"],
      ],
      link: "https://www.singaporepsa.com/",
      date: "May 2022 - Aug 2022",
      iconChange: true,
    },
  ];

  // projects timeline elements
  const projects = [
    {
      title: "Expense Tracker",
      source: "Personal Project",
      description: [
        "Expense Tracker is a responsive web-application that I built to practice the fundamentals of React.",
      ],
      imgUrl: expenseTracker,
      techStacks: [
        [react, "React.js"],
        [javascript, "Javascript"],
      ],
      link: "https://github.com/Cocoteax/Expense-Tracker-App",
      date: "Nov 2022",
    },
    {
      title: "MindFull",
      source: "CZ3002: Advanced Software Engineering",
      description: [
        "Mindfull is a web community that aims to promote mental health awareness.",
        "Implemented a RESTful system consisting of a forum platform and a Counsellor-User appointment system for users to interact and connect.",
      ],
      imgUrl: mindfull,
      techStacks: [
        [react, "React.js"],
        [javascript, "Javascript"],
        [python, "Python"],
        [django, "Django"],
      ],
      link: "https://github.com/Cocoteax/CZ3002-MindFull-Application",
      date: "Aug 2022 - Nov 2022",
    },
    {
      title: "~ More projects on my Github ~",
      source: "@Cocoteax",
      description: [],
      imgUrl: github,
      link: "https://github.com/Cocoteax",
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
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Timeline timelineElements={work} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Timeline timelineElements={projects} />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={experienceBackground} alt="background"/>
    </section>
  );
}

export default Experience;

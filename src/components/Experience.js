import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import devcamper from "../assets/img/Devcamper.png";
import onlineShop from "../assets/img/online-shop.svg";
import expenseTracker from "../assets/img/expense-tracker.svg";
import mindfull from "../assets/img/Mindfull.svg";
import ocbc from "../assets/img/OCBC.png";
import psa from "../assets/img/psa.svg";
import byteDance from "../assets/img/bytedance.svg";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import nodeJS from "../assets/img/nodejs.svg";
import expressJS from "../assets/img/express.svg";
import EJS from "../assets/img/EJS.svg";
import mongoDB from "../assets/img/mongodb.svg";
import python from "../assets/img/python.svg";
import django from "../assets/img/django.svg";
import jira from "../assets/img/jira.svg";
import figma from "../assets/img/figma.svg";
import pega from "../assets/img/pega.jpg";
import hiveQL from "../assets/img/hiveQL.webp";
import mailtrap from "../assets/img/mailtrap.png";
import github from "../assets/img/github.svg";
import postman from "../assets/img/postman.svg";
import vercel from "../assets/img/vercel.svg";
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
        "Responsible for delivering an internal digital CRM platform for relationship managers to manage their customers' portfolios.",
        "Implemented an automated utility to shorten access management processing cycle for the CRM using Python.",
        "Developed user stories and designed wireframes for regional rollout of existing modules.",
        "Created sandbox environment for the CRM in Hadoop using HiveQL, providing UAT data to the data analytics team.",
      ],
      imgUrl: ocbc,
      techStacks: [
        [python, "Python"],
        [jira, "Jira"],
        [figma, "Figma"],
        [pega, "Pega"],
        [hiveQL, "HiveQL"],
      ],
      link: "https://www.ocbc.com/group/gateway",
      date: "Jan 2023 - May 2023",
    },
    // {
    //   title: "Bytedance",
    //   source: "Software Engineer Intern\nGlobal Payments",
    //   description: [
    //     "Full-stack development to support business requirements for ByteDance's internal payments processes.",
    //     "Implemented a schema builder to keep track of payment channels' capabilities and configure capability schemas and elements.",
    //   ],
    //   imgUrl: byteDance,
    //   techStacks: [
    //     [react, "React"],
    //     [javascript, "Javascript"],
    //     [nodeJS, "NodeJS"],
    //     [mongoDB, "mongoDB"],
    //   ],
    //   link: "https://www.bytedance.com/en/",
    //   date: "May 2022 - Aug 2022",
    // },
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
        [postman, "Postman"],
      ],
      link: "https://www.singaporepsa.com/",
      date: "May 2021 - Aug 2021",
      iconChange: true, // Set to true if icon is black and needs to be changed to white
    },
  ];

  // projects timeline elements
  const projects = [
    {
      title: "Devcamper REST API",
      source: "Personal Project",
      description: [
        "Devcamper is a RESTful API for users to create, manage, and search for coding bootcamps around the world.",
        "Includes JWT Authentication and Roles Authorization for security purposes.",
      ],
      imgUrl: devcamper,
      techStacks: [
        [expressJS, "Express.js"],
        [nodeJS, "Node.js"],
        [mongoDB, "MongoDB"],
        [mailtrap, "Mailtrap.io"],
        [vercel, "Vercel"],
      ],
      link: "https://devcamper-rest-api.vercel.app/",
      date: "Jul 2023 - Aug 2023",
    },
    {
      title: "Online Store",
      source: "Personal Project",
      description: [
        "Built a full-stack mini online shop application with CRUD functionalities whilst learning nodeJS / expressJS.",
        "Frontend is built using EJS templating engine and backend is built using ExpressJS and MongoDB Atlas.",
      ],
      imgUrl: onlineShop,
      techStacks: [
        [expressJS, "Express.js"],
        [nodeJS, "Node.js"],
        [mongoDB, "MongoDB"],
        [EJS, "EJS"],
      ],
      link: "https://github.com/Cocoteax/Mini-Online-Shop-Project",
      date: "May 2023 - Jul 2023",
    },
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
        "MindFull is a web community that aims to promote mental health awareness.",
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
    <section className="experience" id="experience">
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
        <div className="footer">Designed and developed using ReactJS</div>
      </Container>
      <img
        className="background-image-right"
        src={experienceBackground}
        alt="background"
      />
    </section>
  );
}

export default Experience;

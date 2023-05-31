import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import reactJS from "../assets/img/react.svg";
import css from "../assets/img/css.svg";
import expressJS from "../assets/img/express.svg";
import figma from "../assets/img/figma.svg";
import firebase from "../assets/img/firebase.svg";
import git from "../assets/img/git.svg";
import html from "../assets/img/html.svg";
import java from "../assets/img/java.svg";
import javascript from "../assets/img/javascript.svg";
import mongoDB from "../assets/img/mongodb.svg";
import mySQL from "../assets/img/mysql.svg";
import nodeJS from "../assets/img/nodejs.svg";
import postgres from "../assets/img/postgresql.svg";
import python from "../assets/img/python.svg";
import spring from "../assets/img/spring-boot.svg";
import django from "../assets/img/django.svg";
import jira from "../assets/img/jira.svg";
import skillsBackground from "../assets/img/color-sharp.png";

function Skillsets() {
  const skillsAr = [
    [reactJS, "React.js"],
    [nodeJS, "Node.js"],
    [expressJS, "Express.js"],
    [javascript, "Javascript"],
    [html, "HTML"],
    [css, "CSS"],
    [django, "Django"],
    [python, "Python"],
    [java, "Java"],
    [mongoDB, "MongoDB"],
    [mySQL, "MySQL"],
    [postgres, "PostgreSQL"],
    [git, "Git"],
    [figma, "Figma"],
    [spring, "Spring Boot"],
    [firebase, "Firebase"],
    [jira, "Jira"],
  ];
  return (
    <section className="skillsets">
      <Container>
        <Row>
          <Col>
            <div className="skillsets-container">
              <h2>SKILLS</h2>
              <div className="custom-grid gap-x-6 gap-y-4 md:gap-x-6 md:gap-y-6 break:gap-x-10 break:gap-y-8 mb-10">
                {/* Use .map() to iterate over each icon to create a pop up effect on hover */}
                {skillsAr.map((skill) => {
                  return (
                    <OverlayTrigger
                      key={skill[0]}
                      placement="bottom"
                      overlay={<Tooltip>{skill[1]}</Tooltip>}
                    >
                      <img src={skill[0]}></img>
                    </OverlayTrigger>
                  );
                })}
                {/* 
                  <img src={expressJS} alt="expressJS"></img>
                  <img src={javascript} alt="JS"></img>
                  <img src={html} alt="html"></img>
                  <img src={css} alt="css"></img>
                  <img src={django} alt="Django"></img>
                  <img src={python} alt="Python"></img>
                  <img src={java} alt="Java"></img>
                  <img src={mongoDB} alt="mongoDB"></img>
                  <img src={mySQL} alt="mySQL"></img>
                  <img src={postgres} alt="postgres"></img>
                  <img src={git} alt="git"></img>
                  <img src={figma} alt="figma"></img>
                  <img src={jira} alt="jira"></img>
                  <img src={spring} alt="springboot"></img>
                  <img src={firebase} alt="firebase"></img> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={skillsBackground} className="background-image-left" />
    </section>
  );
}

export default Skillsets;

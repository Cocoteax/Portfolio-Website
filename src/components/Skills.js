import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/meter1.svg";
import skill2 from "../assets/img/meter2.svg";
import skill3 from "../assets/img/meter3.svg";
import skillsBackground from "../assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-container">
              <h2>Skills</h2>
              <p>
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={skill1}></img>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={skill2}></img>
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={skill3}></img>
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={skill1}></img>
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={skillsBackground} className="background-image-left" />
    </section>
  );
}

export default Skills;

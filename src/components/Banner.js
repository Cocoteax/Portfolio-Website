import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import bannerImg from "../assets/img/header-img.svg";
import bannerImg from "../assets/img/astroLaptop.png";
import ScrollAnimation from "react-animate-on-scroll";

function Banner() {
  const wordsToRotate = [
    "Aspiring Software Engineer",
    "Computer Science Student",
    "Detail-Oriented Learner",
  ];
  const [loopNum, setLoopNum] = useState(0); // Used to determine which word we are rotating from the array
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [period, setPeriod] = useState(100);

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      rotateWords();
      return clearTimeout(timer);
    }, period);

    return () => clearInterval(timer);
  }, [displayedText, isDeleting, period]);

  const rotateWords = async () => {
    let i = loopNum % wordsToRotate.length;
    let fullText = wordsToRotate[i];
    if (!isDeleting && displayedText !== fullText) {
      setDisplayedText(fullText.slice(0, displayedText.length + 1));
    } else if (!isDeleting && displayedText === fullText) {
      setPeriod(50);
      await delay(1500);
      setIsDeleting(true);
    } else if (isDeleting && displayedText !== "") {
      setDisplayedText(fullText.slice(0, displayedText.length - 1));
    } else {
      await delay(1000);
      setPeriod(100);
      setLoopNum((prev) => prev + 1);
      setIsDeleting(false);
    }
  };

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my Portfolio!</span> */}
              <h1>
                {`Joshua Chng`}
                <span className="dynamic-text">{displayedText}_</span>
              </h1>
              <p>
                Hi! I am a penultimate year Computer Science student at Nanyang
                Technological University. Equipped with a positive attitude and
                a passion for the IT industry, I constantly strive to expand my
                horizons and take on new challenges! I love meeting new people
                so feel free to connect with me :D
                <button onClick={() => console.log("connect")}>
                  Let's connect!
                  <ArrowRightCircle size={25} />
                </button>
              </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImg} alt="Banner img" className="bannerImg"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;

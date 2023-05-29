import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from "../assets/img/header-img.svg";

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

  //   useEffect(() => {
  //     let timer = setInterval(() => {
  //       console.log("hello");
  //     }, period);

  //     return () => clearInterval(timer);
  //   }, []);

  useEffect(() => {
    // let timer = setInterval(() => {
    //   rotateWords();
    // }, 100);

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
      console.log(fullText);
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
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my Portfolio!</span> */}
            <h1>
              {`Joshua Chng`}
              <span className="dynamic-text">{displayedText}_</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
              <button onClick={() => console.log("connect")}>
                Let's connect!
                <ArrowRightCircle size={25} />
              </button>
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImg} alt="Banner img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;

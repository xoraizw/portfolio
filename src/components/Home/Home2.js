import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am currently pursuing a{" "}
              <b className="purple">BS in Computer Science</b> at{" "}
              <b className="purple">
                Lahore University of Management Sciences
              </b>
              , with a strong passion for{" "}
              <b className="purple">Machine Learning</b> and{" "}
              <b className="purple">Software Engineering</b>.
              <br />
              <br />
              I enjoy working on projects involving{" "}
              <i>
                <b className="purple">
                  AI, deep learning, large-scale data processing, and
                  full-stack web applications.
                </b>
              </i>
              <br />
              <br />
              My portfolio includes{" "}
              <b className="purple">ML models for real-world problems</b>, such
              as <i>computer vision, NLP, and federated learning</i>, along with{" "}
              <b className="purple">
                AI-powered recommendation systems and web-based interactive
                tools.
              </b>
              <br />
              <br />
              I thrive on building{" "}
              <i>
                <b className="purple">
                  efficient, scalable solutions
                </b>
              </i>{" "}
              that bridge the gap between{" "}
              <b className="purple">cutting-edge research and practical applications.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/xoraizw"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/xoraiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

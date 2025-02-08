import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmad Xoraiz Waheed</span> 
            &nbsp;from <span className="purple"> Pakistan.</span>
            <br />
            I am currently pursuing a <b className="purple">BS in Computer Science</b> 
            &nbsp;at <b className="purple">Lahore University of Management Sciences</b>.
            <br />
            My interests lie in <b className="purple">Machine Learning</b> and 
            <b className="purple"> Software Engineering</b>, and I enjoy working on 
            projects that involve <i>AI, deep learning, large-scale data processing, 
            and full-stack web applications.</i>
            <br />
            I have built projects ranging from <b className="purple">ML models 
            for real-world problems</b> such as computer vision and NLP, to 
            <b className="purple"> AI-powered recommendation systems</b> and 
            <b className="purple"> web-based interactive tools</b>.
            <br />
            I am passionate about creating <b className="purple">efficient, 
            scalable solutions</b> that bridge the gap between cutting-edge 
            research and practical applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and Deep Learning Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Webapps
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmad Xoraiz Waheed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

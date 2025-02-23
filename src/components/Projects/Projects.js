import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import road from "../../Assets/road.png";
import bookar from "../../Assets/bookar-logo.png";
import sugarrush from "../../Assets/sugar-rush.png";
import movieSniper from "../../Assets/movieSniper.png"
import ml from "../../Assets/ml.png"
import police from "../../Assets/police.png"
import quant from "../../Assets/quant.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieSniper}
              isBlog={false}
              title="MovieSniper"
              description="Find movies worth watching. 
              MovieSniper is designed to provide highly personalized recommendations using advanced AI technology.
              Start by searching a movie you love, so we can understand your preferences. Then adjust Your Preferences, by using sliders to control the intensity of each genre based on your liking.
              Receive a curated list of movies that align with your preferences and match your search."
              ghLink="https://github.com/xoraizw/movieSniper"
              demoLink="https://movie-sniper.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookar}
              isBlog={false}
              title="Bookar"
              description="Our software engineering project. A mobile application for booking sports fields."
              ghLink="https://github.com/xoraizw/BooKar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sugarrush}
              isBlog={false}
              title="Sugar Rush - Online Bakery Website"
              description="An online e-commerce React-based web application for Sugar Rush by Shanzeh, a home-based bakery with over 900 followers."
              ghLink="https://github.com/xoraizw/sugar"
              demoLink="https://xoraizw.github.io/sugar/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={road}
              isBlog={false}
              title="PointNet for Road Damage Classification."
              description="Implementation of PointNet for segmenting damaged and un-damaged point clouds of Road-LIDAR data."
              ghLink="https://github.com/xoraizw/Point-cloud-segmentation-for-road-damage-detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quant}
              isBlog={false}
              title="Optimizing Deep Learning Models with Quantization"
              description="Explore Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT) to reduce memory and computational demand without sacrificing performance. Dive into precision trade-offs, bit-width evaluations, and scaling law analysis, all using PyTorch and CIFAR-100 for edge-ready AI models."
              ghLink="https://github.com/xoraizw/Optimizing-Deep-Learning-with-Quantization"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Sentiment Prediction Model for Wikipedia Comments"
              description="Built a toxic comment classification model using LSTM, Naïve Bayes, and Sentence Transformers, achieving up to 98% accuracy for enhanced content moderation."
              ghLink="https://github.com/ahsanjahangirmir/toxicity-classification-challenge"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={police}
              isBlog={true}
              title="Predicting Police Violence Trends Using Machine Learning"
              description="Developed a ML model by cleaning, processing and analyzing 10+ years of U.S. police violence data, predicting cause of death & racial disparities with 80%+ accuracy. Used Logistic Regression, Random Forest, and SMOTE to handle imbalance, improving fairness insights for policy discussions."
              ghLink="https://medium.com/@abdulhaseeb494/modelling-the-mapping-police-violence-dataset-3f8754e5045b"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

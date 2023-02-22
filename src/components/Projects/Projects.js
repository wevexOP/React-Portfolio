import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherapp from "../../Assets/Projects/weatherapp-sc.png";
import emotion from "../../Assets/Projects/emotion.png";
import teambuilder from "../../Assets/Projects/teambuilder-sc.png";
import ecommerce from "../../Assets/Projects/e-commerce-sc2.png";
import suicide from "../../Assets/Projects/suicide.png";
import miniBlog from "../../Assets/Projects/mvc-sc1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My working  <strong className="purple">Porfolio </strong>
        </h1>
        <p style={{ color: "white" }}>
          Samples of some projects I have created and collaborated on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="API Routing"
              description="Showcasing the backend routing of a simple API of a generic retail website. This program uses JavaScript, MySQL, Express, and Node.js to simulate a online store or marketplace. Categories of items, products, inventory ID's and all within this compact and lightweight application."
              ghLink="https://github.com/wevexOP/E-Commerce"
              demoLink="https://www.youtube.com/watch?v=A60SmP33ZgY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miniBlog}
              isBlog={false}
              title="Mini Blog!"
              description="A simple blog that users from all over the world can access and post to the main page as they please. This project was designed using the 'Model View Controler'(MVC) via handlebars. With multiple view port pages as well a s login functionaility and a simple user interface this app is seemless in its use and purpose."
              ghLink="https://github.com/wevexOP/MVC-Tech-Blog"
              demoLink="https://mini-blog-dominic.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teambuilder}
              isBlog={false}
              title="Team Profile Generator"
              description="The purpose and functionality of this app is to create an easy and useful tool for categorizing all of the employees and their roles in the workspace. This tool not only allows you to build teams but also stay connected with them by getting all of the contact information bundled with their identification card of the web page."
              ghLink="https://github.com/wevexOP/Team-Profile-Generator"
              demoLink="https://www.youtube.com/watch?v=k_HjWnLx2H0"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="This browser application is made easy and free to all users! With live data updates and current tracking of specific global areas, this weather app is perfect for on the go use! This app was fun to make because it uses Openweather Ai and there free API to feed live data of weather dependiong your location."
              ghLink="https://github.com/wevexOP/Weather-App"
              demoLink="https://wevexop.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

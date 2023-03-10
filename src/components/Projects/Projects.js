import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherapp from "../../Assets/Projects/weatherapp-sc.png";
import notetaker from "../../Assets/Projects/notetaker-sc.png";
import CHEAT_LEAF from "../../Assets/Projects/CHEAT_LEAF.png";
import ecommerce from "../../Assets/Projects/e-commerce-sc2.png";
import cinder from "../../Assets/Projects/cinder-sc.png";
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
              imgPath={CHEAT_LEAF}
              isBlog={false}
              title="Cheat Leaf"
              description="Cheat Leaf is a cool website that I worked with a team of developers to create. Utilizing React, graphQL, apollo client, and various other technologies this appliactions was desgined to be a hub for data and information that users can post to. Making and account and try it out!"
              ghLink="https://github.com/areas-boot-camp-projects/cheat-leaf"
              demoLink="https://cheat-leaf.herokuapp.com/"              
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
              imgPath={cinder}
              isBlog={false}
              title="Cinder.io"
              description="Cinder is a small applications and attempt for my friends and I to make a dating website for developers. This appliactions uses handlebars as view ports and was the first time working websockets to create chat rooms."
              ghLink="https://github.com/wevexOP/Cinder"
              demoLink="https://dev-loveio.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notetaker}
              isBlog={false}
              title="Note Taking App"
              description="This simple note taking application allows you to save notes with a title and plain text. Powered by ExpressJS, the Note Taker app makes creating, viewing, and deleting notes a cinch!"
              ghLink="https://github.com/wevexOP/Note-Taker"
              demoLink="https://note-taker-wevexop.herokuapp.com/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

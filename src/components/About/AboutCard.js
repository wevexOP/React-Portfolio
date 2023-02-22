import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dominic Paulazzo </span>
            from the <span className="purple"> San Francisco, Bay Area.</span>
            <br />I am a junior developer pursuing a career in software developemnt. 
            <br />
            <br />
            Other than coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Talking Cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is a succession of lessons which must be lived to be understood."{" "}
          </p>
          <footer className="blockquote-footer">Ralph Waldo Emerson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

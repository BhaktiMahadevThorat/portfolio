import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhakti Mahadev Thorat </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as a Flutter developer at Techverce World.
            <br />
            I have completed BE in Computer Engineering at SCSMCOE, Ahmednagar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to develop things that will make us stronger.!"{" "}
          </p>
          <footer className="blockquote-footer">Bhakti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

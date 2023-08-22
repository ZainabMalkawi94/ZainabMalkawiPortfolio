import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I'm     <span className="purple">Zainab Malkawi </span>
          , hailing from the beautiful country of <span className="purple"> Jordan.</span>
            <br /> My academic journey led me to earn a master's degree in Electrical Engineering with a specialization in power from the esteemed University of Jordan.
            <br />
            On top of that, I successfully completed an immersive Full Stack development training program, focusing on JavaScript, at ASAC-LTUC.
            <br />
            <br />
            Although coding is a significant part of my life, I'm also deeply passionate about various other activities, including:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> The art of cooking

            </li>
            <li className="about-activity">
              <ImPointRight /> Writing scientific articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new destinations through travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging in the world of games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe you can and you're halfway there."{" "}
          </p>
          <footer className="blockquote-footer">Theodore Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

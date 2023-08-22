import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              isBlog={false}
              title="EV Charger Rental"
              description="EV Rental is an innovative platform connecting electric vehicle charger owners and renters. Owners list chargers for passive income and sustainable growth, while drivers find nearby chargers, easing range anxiety and boosting electric vehicle adoption. The secure platform emphasizes transparency through integrated payments and user reviews, contributing to a greener transportation future."
              ghLink="https://github.com/EV-Charger-Rental/EV-Charger-Rental-Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ticket Ease"
              description="Is a customer service ticketing system aimed to improve the handling of customer inquiries and support requests and 
              ensuring overall customer satisfaction, programmed by JavaScript."
              ghLink="https://github.com/orgs/TicketEase/repositories"
            />
          </Col>

 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Reading Notes"
              description="This repository compiles reading notes, assigned resources, and videos for the course. Each module's page contains topic relevance, answered prompts, and potential questions, fostering understanding. It serves as an organized resource for comprehensive learning and engagement."
              ghLink="https://github.com/ZainabMalkawi94/reading-notes"
              demoLink="https://zainabmalkawi94.github.io/reading-notes/"
            />
          </Col>

   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillWindows } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import { TbBrandZoom } from "react-icons/tb";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMiro,
  SiMicrosoftoffice,
} from "react-icons/si";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandZoom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMiro />
      </Col>
      
    </Row>
  );
}

export default Toolstack;

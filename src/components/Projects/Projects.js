import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Netflix from "../../Assets/Projects/Netflix.png";
import Simon from "../../Assets/Projects/Simon Game.png";
import QR_Generator from "../../Assets/Projects/QR_Generator.png";

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
              imgPath={Simon}
              isBlog={false}
              title="Simon Game"
              description="Simon game is the exciting electronic game of lights and sounds in which players must repeat 
              random sequences of lights by pressing the colored pads in the correct order. It's fast-paced play, with lights 
              and sounds that can challenge you. Experience the fun as you repeat the patterns and advance to higher levels."
              ghLink="https://github.com/jatinchandra07/Simon_Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QR_Generator}
              isBlog={false}
              title="QR Generator"
              description="By the help of Node.js I made QR generator. It take the input as a website url and convert into QR code.
              A QR code is a type of two dimensional bar code that is used to provide easy access to online 
              information through the digital camera on a smartphone or tablet."
              ghLink="https://github.com/jatinchandra07/QR_Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix_Clone"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/jatinchandra07/Netflix_Clone"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

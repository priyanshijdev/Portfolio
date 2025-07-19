import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import todo from "../../Assets/Projects/todo.png";
import blogapp from "../../Assets/Projects/blogapp.png";
import healthmetric from "../../Assets/Projects/healthmetric.png";


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
              imgPath={healthmetric}
              isBlog={false}
              title="Health Metric"
              description="A modern, responsive health metrics dashboard built using React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. 
              This application allows users to input daily health-related metrics, visualize them through tables and charts.
              📊 Data Visualization Health data is shown in a table. 
              User can also have an option to export the data 
             Toggle views for Today, Last 7 Days, and Last 30 Days.
              "
              ghLink="https://github.com/priyanshijdev/Health-Metric"
              demoLink="https://health-metric.vercel.app/"
            />
          </Col>
              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogapp}
              isBlog={false}
              title="Blog App"
              description="A blog application using Next. Implemented features for Adding ,viewing blog lists, 
              reading full posts, and navigating through content with clean UI."
              ghLink="https://github.com/priyanshijdev/Blog-Application"
              demoLink="https://blog-application-nextjs.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
               <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="Organize your day, the Next.js way . 
              A sleek and efficient ToDo application built with Next.js to help you organize tasks, set priorities, and boost productivity—all in one place."
              ghLink="https://github.com/priyanshijdev/Todo_Application"
              demoLink="https://todo-application-beta-woad.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             // imgPath={bitsOfCode}
              //isBlog={false}
              title="Api Authenticator"
              description="A Node.js API that is going to handle Authentication in any application we want to use it in using JWT and to hash passwords and JWT to check for private routes."              
              ghLink="https://github.com/priyanshij16/Api_Authentication_JWT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student CRUD"
              description="A Create Read Update Delete(CRUD) application which contains 2 model for student and their respective address"
              ghLink="https://github.com/priyanshij16/final_crud_student"
            />
          </Col>

          <Col md={4} className="project-card">
              <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hospital Management"
              description="A Medical Platform where patient can book appointment from their place. Availability of specialist doctors, Bed Facility.
              Moreover 24/7 Ambulance "              
              ghLink="https://github.com/priyanshij16/hospital-manangement"
              demoLink="https://hospital-manangement.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

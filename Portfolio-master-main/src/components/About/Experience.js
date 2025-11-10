import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

function Experience() {
  const experiences = [
    {
      date: "September 2023 - Present",
      company: "Moneymul",
      position: "Software Developer",
      description: "Contributing to building efficient and scalable digital solutions.",
      location: "Remote",
      current: true,
    },
    {
      date: "October 2023 - August 2025",
      company: "Innobit System",
      position: "Software Developer",
      description: "Developed and maintained web applications using modern technologies.",
      location: "Remote",
      current: false,
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Professional <strong className="purple">Experience</strong>
        </h1>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(138, 43, 226, 0.1)",
                color: "#fff",
                border: "2px solid #8a2be2",
                borderRadius: "10px",
                boxShadow: "0 3px 10px rgba(138, 43, 226, 0.3)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #8a2be2" }}
              date={exp.date}
              dateClassName="timeline-date"
              iconStyle={{
                background: exp.current ? "#8a2be2" : "rgba(138, 43, 226, 0.6)",
                color: "#fff",
              }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: "#8a2be2" }}>
                {exp.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ color: "#c770f0" }}>
                {exp.company} {exp.current && <span style={{ color: "#8a2be2" }}>(Current)</span>}
              </h4>
              <p style={{ color: "#fff", marginTop: "10px" }}>{exp.description}</p>
              <p style={{ color: "#c770f0", fontSize: "0.9em", marginTop: "5px" }}>
                📍 {exp.location}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;

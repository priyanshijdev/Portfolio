import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
              Hi, I am <span className="purple">Priyanshi Jain</span> from{" "}
              <span className="purple">New Delhi, India.</span>
              <br />
              I completed my high school education from{" "}
              <span className="purple">Queen Mary's School</span><br/> and later pursued my{" "}
              <span className="purple">B.Tech at IPEC, Sahibabad</span>.
              <br />
              Currently, I am working as a{" "}
              <span className="purple">Software Developer at Innobit Systems</span>, where I contribute to building efficient and scalable digital solutions.
              <br />
              <br />
              Apart from coding, some activities I genuinely enjoy include:
              <br />🧘‍♀️ Practicing <span className="purple">Yoga</span> for mental clarity and focus,
              <br />📚 Reading <span className="purple">technical articles</span> to stay updated with industry trends,
              <br />✈️ And <span className="purple">traveling</span> to explore new places and cultures.
            </p>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Technical Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}
          <footer className="blockquote-footer">PriyanshiJain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

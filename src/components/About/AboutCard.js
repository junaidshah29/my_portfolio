import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pratiksha Anarase </span>
            from <span className="purple"> Pune ,Maharashtra, India.</span>
            <br /> I'm graduated from MIT adt University, Pune with First Class.
            <br />
            Additionally, I am currently doing course as Junior Full Stack Developer in Amber Project whose trainer is Vinsys IT services. 
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>


          {/* <footer className="blockquote-footer">Junaid</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

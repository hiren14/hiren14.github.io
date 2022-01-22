import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tflearn from "../../Assets/Projects/tflearn.png";
import who from "../../Assets/Projects/who.jpeg";
import chatbot from "../../Assets/Projects/chatbot.jpeg";
import app from "../../Assets/Projects/app.jpg";
import fire from "../../Assets/Projects/fire.png";

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
              imgPath={tflearn}
              isBlog={false}
              title="tflearn"
              description="This project solves the problem of farmers when they didn't get to known which pesticides they have to used to ensure the best results"
              link="https://github.com/hiren14/Pestiside-chatbot-using-tflearn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot"
              description="This chatbox can be used when an animal is injured or in a bad condition, the owner can use this chatbot to get an instant solution if available or will get nearby available doctors contact info.
This chat bot is built on rasa framework "



              link="https://github.com/kevalCoder9106/ChatBot/tree/main/ChatBot%20using%20rasa"
              />
                        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={who}
              isBlog={false}
              title="World-health-organization-WHO-GUIDELINES-SYSTEM"
              description="THIS PROJECT IS built on pytorch farmworker in which the model will dect a group of people not maintaining a distance a send that to telegram channels which motoring under police and who all the model and stuff has train on colab"
              link="https://github.com/hiren14/World-health-organization-WHO-GUIDELINES-SYSTEM"
/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fire}
              isBlog={false}
              title="fire dection"
              description="fire dection  is a ml project in which the model is train on yolov5 custom and it dect fire the main upgrade was made by interlink the model with  Gradio is the fastest way to demo your machine learning model with a friendly web interface so that anyone can use it, anywhere!. So this web app takes image and then model dect the image and send to the web app results"
              link="https://github.com/hiren14/fire-dection"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Ai farm "
              description="AI FARM is a special desgin project form farmer in which a no of sensor send data to a app and with that data and auto watering system and smoke dection for devting smoke "
              link="https://github.com/hiren14/AI-FARM"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

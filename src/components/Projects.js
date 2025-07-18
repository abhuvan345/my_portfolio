import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bmsel.png";
import projImg2 from "../assets/img/eduBuddy.png";
import projImg3 from "../assets/img/sms.png";
import projImg4 from "../assets/img/crypto_proj.png";
import projImg5 from "../assets/img/usp.png";
import trinetraImg from "../assets/img/trinetra-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const webprojects = [
    {
      title: "BMS-EL",
      description:
        "BMS-EL is an e-learning platform for BMS students, offering courses for seamless learning.",
      imgUrl: projImg1,
      link: "https://bmsel.pythonanywhere.com/", // Replace with actual URL
    },
    {
      title: "eduBuddy",
      description:
        "EduBuddy is an AI-powered learning assistant that provides personalized study materials, and quizzes to enhance student learning.",
      imgUrl: projImg2,
      link: "http://alpha345.pythonanywhere.com/", // Replace with actual URL
    },
    {
      title: "Student Management System",
      description:
        "Student Management System is a web application for efficiently managing student records, and staff details with seamless CRUD operations.",
      imgUrl: projImg3,
      link: "https://github.com/abhuvan345/Student-Management-System", // Replace with actual URL
    },
    {
      title: "Image Encryption System",
      description:
        "Crypto Image Encryption tool in React JS using Blowfish to securely encrypt and decrypt image files. A simple yet powerful step into cybersecurity and data privacy!",
      imgUrl: projImg4,
      link: "https://cryptoblowfish.netlify.app/", // Replace with actual URL
    },
    {
      title: "Student Enrollment System",
      description:
        "A terminal-based Student Enrollment System on Ubuntu using Bash and Python. It handles student data, generates QR-coded ID cards, and sends confirmation emails",
      imgUrl: projImg5,
      link: "https://github.com/abhuvan345/USP_Project", // Replace with actual URL
    },
  ];

  const activeprojects = [
    {
      title: "Trinetra",
      description:
        "Trinetra is an AI health app that diagnoses symptoms, suggests remedies, and helps book doctor appointments.",
      imgUrl: trinetraImg,
      link: "https://trinetra2.netlify.app/", // Replace with actual URL
    },
  ];

  const appprojects = [
    {
      title: "FoodGo",
      description:
        "Trinetra is an AI health app that diagnoses symptoms, suggests remedies, and helps book doctor appointments.",
      imgUrl: trinetraImg,
      link: "https://trinetra2.netlify.app/", // Replace with actual URL
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    "Bringing ideas to life through code! Dive into my projects,
                    where innovation meets functionality—crafted with passion,
                    precision, and a touch of creativity. Let's build the
                    future, one project at a time!"
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">App Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Active project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>"Coming Soon !!!"</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {activeprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const toRotate = ["Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Bhuvan A`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    A passionate{" "}
                    <strong>Computer Science and Engineering</strong> student at
                    <strong> BMS College of Engineering</strong>. With a strong
                    foundation in
                    <strong> software development</strong>, I specialize in
                    building scalable
                    <strong> web and mobile applications</strong>.
                  </p>

                  {showMore && (
                    <>
                      <p>
                        I have hands-on experience in{" "}
                        <strong>Web Technologies</strong>. I’ve developed
                        projects like{" "}
                        <strong>
                          EduBuddy (AI-powered learning assistant), BMS-EL
                          (e-learning platform for BMS students),
                        </strong>{" "}
                        and a<strong> Student Management System</strong>.
                      </p>

                      <p>
                        I love solving complex problems and bringing innovative
                        ideas to life through code. I'm always eager to learn
                        new technologies and collaborate on exciting projects.
                        <strong>
                          {" "}
                          Let’s connect and build something amazing! 🚀
                        </strong>
                      </p>
                    </>
                  )}

                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="more-btn"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/bhuvan-a-50739a23b",
                        "_blank"
                      )
                    }
                    className="connect-btn"
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

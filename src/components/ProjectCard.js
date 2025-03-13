import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt={title}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
        <div className="proj-txtx">
          <h4>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {title}
            </a>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

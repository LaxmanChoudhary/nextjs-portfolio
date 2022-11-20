import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stats() {
  const bio = "Hi, thanks for passing by my portfolio.\nDeveloped using next js,  work is in progress...";
  const timelineData = [
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      type: "professional",
      durationStart: "Aug 2021",
      durationEnd: "Present",
      description:
        "Working as Python lead. Developing analytics solution for the client.\nHands-on migrating old Java infra to Node-js cloud infra.",
    },
    {
      role: "Python Intern",
      company: "Necessario Innovations Pvt. Ltd.",
      type: "professional",
      durationStart: "Mar 2021",
      durationEnd: "Jun 2021",
      description:
        "Worked at the startup building products. R&D, tinkering raspberry pi",
    },
    {
      role: "BE (IT)",
      company: "Aditya Silver Oak Institute Of Technology",
      type: "academic",
      durationStart: "2016",
      durationEnd: "2020",
      description: "Grade: 8.16 / 10",
    },
  ];
  return (
    <section id="stats">
      <div className="content">
        <div className="about">
          <div className="main-title">about me</div>
          <div className="shadow-card">
            <p>{bio}</p>
            <div className="btn-con">
              <a href="/cvLaxman.pdf" className="cv-btn">
                <span className="btn-text">Download CV</span>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="main-title">timeline</div>
          <div className="t-container">
            {timelineData.map((data) => (
              <div className="tl-item" key={data.role + data.company}>
                <div className="tl-icon">
                  {data.type == "academic" ? (
                    <FontAwesomeIcon icon={faGraduationCap} />
                  ) : (
                    <FontAwesomeIcon icon={faBriefcase} />
                  )}
                </div>
                <p className="tl-duration">
                  {data.durationStart} - {data.durationEnd}
                </p>
                <h5>
                  {data.role} <span>- {data.company}</span>
                </h5>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

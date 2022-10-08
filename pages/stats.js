import {
  faBriefcase,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStatsData } from "../lib/mongoatlasApi";

export default function Stats({data}) {
  const bio = data.documents[0].bio;
  const timelineData = data.documents[0].timelineData;
  return (
    <section id="stats">
      <div className="content">
        <div className="about">
          <div className="main-title">about me</div>
          <div className="shadow-card">
            <p>
              {bio}
            </p>
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

export async function getStaticProps() {
  const data = await getStatsData();

  return {
    props: {
      data,
    },
  }
}
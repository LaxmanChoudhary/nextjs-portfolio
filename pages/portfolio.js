import ChipSet from "../components/ChipSet";
import { colors } from "../utils";
import Card from "../components/Card";
import {getPortfolioData} from '../lib/mongoatlasApi';

export default function Portfolio({ data }) {
  const myProjects = data.documents[0].projects;
  const skillsData = data.documents[0].skillsData;

  return (
    <section id="portfolio">
      <div className="content">
        <div className="skill-con">
          <div className="main-title skill-title">Skills</div>
          <div className="skills">
            <div className="color-scheme">
              <p style={{ background: colors["beginner"] }}>beginner</p>
              <p style={{ background: colors["intermediate"] }}>intermediate</p>
              <p style={{ background: colors["experienced"] }}>experienced</p>
            </div>
            <ChipSet chips={skillsData} />
          </div>
        </div>
        <div className="pfolio">
          <div className="main-title">
            <h1>Portfolio</h1>
          </div>
          <div className="projects">
            {myProjects.map((myProject) => (
              <Card project={myProject} key={myProject.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const data = await getPortfolioData();

  return {
    props: {
      data,
    },
  }
}
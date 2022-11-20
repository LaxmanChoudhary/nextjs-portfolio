import ChipSet from "../components/ChipSet";
import Card from "../components/Card";

export default function Portfolio() {
  const myProjects = [
    {
      id: "1",
      title: "first project",
      description: "Dummy text, need to update data yet!",
      stack: [
        "html",
        "javascript",
        "css",
        "python",
        "raspberry pi",
        "google cloud platform",
      ],
      projectUrls: { websiteUrl: "https://www.abc.xyz" },
      imageUrl: "https://i.imgur.com/tC8nFKH.jpg",
    },
    {
      id: "2",
      title: "first project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis fuga deserunt eius cum! Similique voluptatum expedita dolorem at corrupti voluptatibus tenetur numquam, eos temporibus eligendi sunt et! Culpa, soluta.",
      stack: [
        "html",
        "javascript",
        "css",
        "python",
        "raspberry pi",
        "java",
        "ruby",
        "google cloud platform",
      ],
      projectUrls: { githubUrl: "https://www.github.com" },
      imageUrl: "/images/react_hero.png",
    },
    {
      id: "3",
      title: "first project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis fuga deserunt eius cum! Similique voluptatum expedita dolorem at corrupti voluptatibus tenetur numquam, eos temporibus eligendi sunt et! Culpa, soluta.",
      stack: [
        "html",
        "javascript",
        "css",
        "python",
        "raspberry pi",
        "java",
        "ruby",
        "google cloud platform",
      ],
      projectUrls: {
        githubUrl: "https://www.github.com",
        websiteUrl: "https://www.abc.xyz",
      },
      imageUrl: "/images/auto.webp",
    },
  ];
  const skillsData = [
    {
      id: 0,
      name: "html",
      type: "lang",
      icon: "faHtml5",
      xp: "intermediate",
    },
    {
      id: 1,
      name: "css",
      type: "lang",
      icon: "faCss3",
      xp: "intermediate",
    },
    {
      id: 2,
      name: "js",
      type: "lang",
      icon: "faSquareJs",
      xp: "intermediate",
    },
    {
      id: 3,
      name: "python",
      type: "lang",
      icon: "faPython",
      xp: "experienced",
    },
    {
      id: 4,
      name: "react",
      type: "framework",
      icon: "faReact",
      xp: "beginner",
    },
    {
      id: 5,
      name: "google cloud platform",
      type: "lang",
      icon: "faGoogle",
      xp: "beginner",
    },
    {
      id: 6,
      name: "linux",
      type: "lang",
      icon: "faLinux",
      xp: "intermediate",
    },
    {
      id: 22,
      name: "r-pi",
      type: "lang",
      icon: "faRaspberryPi",
      xp: "beginner",
    },
    {
      id: "23",
      name: "sql",
      type: "lang",
      icon: "",
      xp: "beginner",
    },
    {
      id: "24",
      name: "nextjs",
      type: "framework",
      icon: "",
      xp: "beginner",
    },
  ];

  return (
    <section id="portfolio">
      <div className="content">
        <div className="skill-con">
          <div className="main-title skill-title">Skills</div>
          <div className="skills">
            <ChipSet chips={skillsData} />
          </div>
        </div>
        <div className="pfolio">
          <div className="main-title">Portfolio</div>
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

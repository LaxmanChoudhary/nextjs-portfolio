import PLink from "@/components/shared/link";
import Image from "next/image";
import React from "react";
import EduUni from "../../public/edu-uni.png";
import Container from "@/components/shared/container";
import { FlaskConicalIcon, FolderKanbanIcon, User2Icon } from "lucide-react";

function HomePage() {
  return (
    <div>
      <Header />
      <PreviousExperience />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;

const Header = () => {
  return (
    <header id="head">
      <Container className="mt-16 sm:mt-24 mb-6">
        <h1 className="text-3xl sm:text-4xl font-medium mb-2">
          Hello! {"I'm"} Laxman.
        </h1>
        <h3 className="text-lg mt-2">
          {"I'm"} a full stack developer at{" "}
          <PLink href={"https://www.tcs.com/"}>
            Tata Consultancy Services.
          </PLink>
        </h3>
        <p className="text-sm">
          <PLink href={"/blogs/work-at-tcs"}>
            Read about my work there {">"}
          </PLink>
        </p>
      </Container>
    </header>
  );
};

const PreviousExperience = () => {
  return (
    <div id="previous">
      <Container className="bg-purple-50 dark:bg-purple-900">
        <p className="text-sm italic opacity-75 font-light">Previously,</p>
        <div className="flex items-center pt-5">
          <Image
            src={EduUni}
            alt="university education"
            style={{
              height: "45px",
              width: "auto",
            }}
          />
          <p className="text-sm pl-3 text-balance">
            I got a{" "}
            <span className="font-bold">
              Bachelor{"'s"} in Engineering, Information Technology
            </span>{" "}
            from the{" "}
            <span className="font-bold">
              Aditya Silver Oak institute Of Technology
            </span>{" "}
            at Gujarat Technological University.
          </p>
        </div>
        <p className="text-sm mt-8">
          More details are in my{" "}
          <PLink
            href="https://drive.google.com/file/d/1-KBWPf95WFaOfQSeWl8vb6cetlXpXN5C/view?usp=sharing"
            target="_blank"
          >
            resume.
          </PLink>
        </p>
      </Container>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skill">
      <Container className="pt-10">
        <p className="uppercase opacity-75">
          <FlaskConicalIcon className="inline align-text-bottom" /> Technologies
          that i have worked with and familiar to
        </p>
        <div className="pt-5 text-sm space-y-2">
          <Skill
            title="frontend"
            items={["Javascript", "React", "NextJs", "Angular"]}
          />
          <Skill title="Backend" items={["Python", "Django", "Flask"]} />
          <Skill
            title="Concepts"
            items={[
              "Git",
              "SQL",
              "NoSQL",
              "Dockerization (Docker)",
              "k8s (Kubernetes)",
              "Functional Programming",
              "Object Oriented Programming",
            ]}
          />
        </div>
      </Container>
    </div>
  );
};

const Skill = ({ title, items }: { title: string; items: Array<string> }) => {
  const _id = title.toLocaleLowerCase().split(" ").join("-");
  return (
    <div className="text-xs">
      <label htmlFor={_id} className="opacity-75 uppercase">
        {title}
      </label>
      <ul className="flex flex-wrap gap-1" id={_id}>
        {items.map((itm, _idx) => (
          <li
            className="bg-purple-50 dark:bg-purple-900 border border-purple-200 p-1 rounded"
            key={itm}
          >
            {itm}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <Container className="">
        <p className="uppercase opacity-75">
          <FolderKanbanIcon className="inline align-text-bottom" /> Here are my
          projects
        </p>
        <div className="divide-y">
          <ProjectSnapshot
            title="Latex to PDF conversion APi"
            tags={["personal", "docker", "k8s"]}
            excerpt="An app capable of converting latext docs to pdf. Uses tectonic engine (rust based latex processor) at core. Provides endpoint to work with."
            // link="/blogs/latex-to-pdf"
            link="https://github.com/LaxmanChoudhary/latext-to-pdf-api-conversion"
          />
          <ProjectSnapshot
            title="snipeteer"
            tags={["personal"]}
            excerpt="A snippet storing service using nextjs and pSQL serverless."
            link="https://github.com/LaxmanChoudhary/snippo-nextjs"
            // link="/blogs/snipeteer"
          />
        </div>
        <p className="text-sm">
          <span className="opacity-75">Check out my </span>
          <PLink
            className="font-bold"
            href={"https://github.com/LaxmanChoudhary"}
            target="_blank"
          >
            GitHub
          </PLink>{" "}
          <span className="opacity-75">for more.</span>
        </p>
      </Container>
    </div>
  );
};

const ProjectSnapshot = ({
  title,
  image,
  tags,
  excerpt,
  link,
}: {
  title: string;
  image?: string;
  tags: string[];
  excerpt: string;
  link: string;
}) => {
  return (
    <div className="py-5 text-sm space-y-2">
      {image && (
        <Image
          src={image}
          alt={title}
          width={300}
          height={150}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      )}
      <h2 className="text-lg capitalize font-medium">{title}</h2>
      <ul className="flex gap-2 text-xs">
        {tags.map((tag) => (
          <li className="rounded border border-purple-300 px-1" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <p>{excerpt}</p>
      <PLink href={link}>View project {">"}</PLink>
    </div>
  );
};

const About = () => {
  return (
    <div id="about">
      <Container className="bg-purple-50 dark:bg-purple-900 text-sm">
        <p className="uppercase opacity-75 pt-10 sm:pt-4">
          <User2Icon className="inline align-text-bottom" /> A bit about me
        </p>
        <div className="mt-4">
          <p className="opacity-75">What kind of work i do?</p>
          <p className="italic">
            I love tackling complex problems and building seamless, scalable
            solutions. As a full-stack developer, I focus on creating efficient,
            maintainable systems—whether it{"’"}s optimizing backend logic,
            crafting engaging frontend experiences, or streamlining development
            workflows. My work isn{"’"}t just about writing code; it{"’"}s about
            ensuring every piece fits together smoothly to deliver the best
            possible experience for users and teams alike.
          </p>
        </div>
        <div className="mt-7">
          <p className="opacity-75">
            What do I do other than my full-time job?
          </p>
          <p className="italic">
            I{"’"}m always exploring and experimenting with new technologies and
            frameworks. I study how different technologies and tech companies
            approach user adoption, learning from their successes and
            challenges. Currently, I{"’"}m diving into Next.js, Kubernetes,
            Docker, and AWS, expanding my expertise in modern web development
            and cloud infrastructure.
          </p>
        </div>
        <div className="mt-7">
          <p className="opacity-75">
            What am I doing when I am not in front of a screen?
          </p>
          <p className="italic">
            If I{"'"}m not coding, you{"'"}ll probably find me deep into an
            anime binge, strategizing my next move in a game, or catching a
            cricket match. I also love diving down internet rabbit holes,
            constantly exploring new technologies, concepts, or just random fun
            facts. Learning never really stops for me—it just takes different
            forms.
          </p>
        </div>
      </Container>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <Container className="">
        <p className="uppercase opacity-75">Thanks for stopping by!</p>
      </Container>
    </footer>
  );
};

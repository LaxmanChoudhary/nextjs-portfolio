import ComingSoon from "@/components/coming-soon";
import SkillWrapper from "@/components/skill-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, InfoIcon } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <AlertBar title="Hi, visitor" msg="This page is under construction, so it might not contain the complete information." />
      <PortfolioHeroSection />
      <EmploymentHistory />
      <Skills />
      <Education />
      {/* <Certifications /> */}
      <ShowCase />
      {/* <div className="m-12"></div> */}
      {/* <PortfolioNav /> */}
    </div>
  );
}

const PortfolioHeroSection = () => (
  <div id="hero-section" className="prose dark:prose-invert mx-auto mb-8 pt-8">
    <p>
      Hello! I{"'"}m <strong>Laxman Choudhary</strong>, a passionate{" "}
      <strong>27-year-old</strong> software developer hailing from the vibrant
      tech scene of India. With <strong>three years</strong> of invaluable
      professional experience under my belt, I{"'"}ve delved into the intricate
      realms of software development with an insatiable curiosity and a drive
      for excellence.
    </p>
    <p>
      I thrive in collaborative environments where ideas flow freely, and
      innovation is encouraged. I believe in continuous learning and staying
      updated with the latest advancements in technology, always seeking
      opportunities to broaden my horizons and tackle new challenges head-on.
    </p>
    <p>
      I{"'"}m not just a software developer; I{"'"}m a problem solver, a
      creative thinker, and a dedicated professional committed to pushing
      boundaries and delivering excellence in everything I do. If you{"'"}re
      seeking a versatile, driven developer to elevate your projects to new
      heights, look no further. Let{"'"}s connect and embark on a journey of
      innovation together.
    </p>
  </div>
);

const EmploymentHistory = () => {
  return (
    <div id="employment-history" className="pt-12">
      <p className="text-lg text-center font-semibold">Employment History</p>
      <div className="border p-4 mt-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="job1">
            <AccordionTrigger>
              <div className="text-left">
                <p>Systems Engineer</p>
                <div className="flex divide-x text-xs text-muted-foreground">
                  <p className="pr-2">Tata Consultancy Services</p>
                  <p className="pl-2">Aug 2021 - Present</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="divide-y">
                <div className="flex gap-2 mb-2">
                  {["Python", "JavaScript", "Angular", "Linux RHEL"].map(
                    (i) => (
                      <p
                        key={i}
                        className="text-xs tracking-tighter border rounded-full px-2"
                      >
                        {i}
                      </p>
                    )
                  )}
                </div>
                <p className="pt-2">
                  {`Designing & developing Analytical enterprise solutions. Stack
                  used: Python, NodeJs.\nDeveloped analytic functions using
                  python for the client to create meaningful insights.\nSupported
                  ongoing server maintenance and created automation to support
                  the operations.\nContributed to migrating existing Java app
                  functionalities to a newer framework based on Node Js.`}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="intern1">
            <AccordionTrigger>
              <div className="text-left">
                <p>Python Developer Intern</p>
                <div className="flex divide-x text-xs text-muted-foreground">
                  <p className="pr-2">Necessario innovations pvt ltd</p>
                  <p className="pl-2">Mar 2021 - Jun 2021</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="divide-y">
                <div className="flex gap-2 mb-2">
                  {["Python", "Raspberry Pi", "Linux"].map((i) => (
                    <p
                      key={i}
                      className="text-xs tracking-tighter border rounded-full px-2"
                    >
                      {i}
                    </p>
                  ))}
                </div>
                <p className="pt-2">
                  {`Worked at the startup building products. R&D, tinkering raspberry pi.\n
                Worked on Python backend (micro-framework) and frontend.\n
                Managing and documenting the overall development.\n
                Testing and Managing SoM like Jetson nano, raspberry pi, image sensors, and lenses.\n
                Contributed to the initial development phase of the product.\n
                Worked on flask server built upon Raspberry pi SoM.\n
                Successfully deployed flask on Apache server.`}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

type SkillLevel =
  | "Familiar"
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert";
const SkillLevelOptions: SkillLevel[] = [
  "Familiar",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
];

type SkillTags = "Frontend" | "Backend" | "DevOps" | "DevTools" | "Scripting";
const SkillTagsOptions: SkillTags[] = [
  "Frontend",
  "Backend",
  "DevOps",
  "DevTools",
  "Scripting",
];

export interface Skill {
  name: string;
  description: string;
  skillLevel: SkillLevel;
  tags: SkillTags[];
}

const Skills = () => {
  const skills: Skill[] = [
    {
      name: "HTML",
      description:
        "Able to write descriptive layout, familiar with accessibility attributes",
      skillLevel: "Advanced",
      tags: ["Frontend"],
    },
    {
      name: "Next.js",
      description:
        "Experience in building server-side rendered React applications",
      skillLevel: "Intermediate",
      tags: ["Frontend", "Backend", "DevTools"],
    },
    {
      name: "React",
      description: "Proficient in building modern single-page applications",
      skillLevel: "Advanced",
      tags: ["Frontend", "Backend", "DevTools"],
    },
    {
      name: "Python",
      description:
        "Proficient in Python programming language, experience in web development, data science, and automation",
      skillLevel: "Advanced",
      tags: ["Backend", "Scripting"],
    },
    {
      name: "Linux",
      description:
        "Familiar with Linux command-line interface, basic shell scripting, and system administration tasks",
      skillLevel: "Intermediate",
      tags: ["DevOps", "Scripting"],
    },
    {
      name: "Docker",
      description:
        "Experience in containerizing applications for easier deployment and management",
      skillLevel: "Intermediate",
      tags: ["DevOps", "DevTools"],
    },
    {
      name: "Git",
      description:
        "Proficient in version control using Git, including branching, merging, and collaboration workflows",
      skillLevel: "Advanced",
      tags: ["DevTools"],
    },
  ];
  return (
    <div id="skills" className="pt-12">
      <p className="text-lg text-center font-semibold">Competencies</p>
      <div className="flex flex-wrap border gap-4 p-4 mt-6">
        {skills.map((skill) => (
          <SkillWrapper
            key={skill.name}
            name={skill.name}
            description={skill.description}
            skillLevel={skill.skillLevel}
            tags={skill.tags}
          />
        ))}
      </div>
    </div>
  );
};

const Education = () => (
  <div id="education" className="pt-12">
    <p className="text-lg text-center font-semibold">Education</p>
    <div className="grid md:grid-cols-2 justify-between divide-y md:divide-y-0 md:divide-x border gap-4 p-4 mt-6">
      <div className="">
        <p className="text-xl font-semibold tracking-tighter">
          Bachelors of Engineering
        </p>
        <p className="text-xs tracking-normal">in</p>
        <p className="tracking-tight">Information Technology</p>
      </div>
      <div className="sm:pl-2">
        <p className="text-xs tracking-normal">from</p>
        <p className="text-lg font-light tracking-tighter">
          Gujarat Technological University
        </p>
        <p className="tracking-tight">
          Aditya Silver Institute Of Technology |{" "}
          <span className="font-semibold">Ahmedabad</span>
        </p>
      </div>
    </div>
  </div>
);

const Certifications = () => {
  const items = [
    {
      id: 1,
      name: "Associate cloud Engineer (ACE)",
      issuer: "Google Cloud",
      description: "",
      // issuerIcon: gcpIcon,
      issuedOn: "",
      validTill: "",
      link: "",
    },
    {
      id: 2,
      name: "IT Automation with Python - Google Professional Certificate",
      issuer: "Google",
      description: "",
      // issuerIcon: gcpIcon,
      issuedOn: "",
      validTill: "",
      link: "",
    },
    {
      id: 3,
      name: "Frontend with React",
      issuer: "Coursera",
      description: "",
      // issuerIcon: courseraIcon,
      issuedOn: "",
      validTill: "",
      link: "",
    },
    {
      id: 4,
      name: "Django Specialization",
      issuer: "Coursera",
      description: "",
      // issuerIcon: courseraIcon,
      issuedOn: "",
      validTill: "",
      link: "",
    },
  ];
  return (
    <div id="certifications" className="pt-12">
      <p className="text-lg text-center font-semibold">
        Courses & Certifications
      </p>
      <div className="border gap-4 p-4 mt-6">
        <div></div>
      </div>
    </div>
  );
};

const ShowCase = () => {
  return (
    <div id="projects" className="pt-12">
      <p className="text-lg text-center font-semibold">Showcase</p>
      <div className="border gap-4 p-4 mt-6">
        <ComingSoon />
      </div>
    </div>
  );
};

const PortfolioNav = () => {
  return (
    <div className="sticky flex bottom-2 mx-auto border bg-primary-foreground justify-center">
      <div className="divide-x">
        {[
          "hero-section",
          "employment-history",
          "skills",
          "education",
          "certifications",
        ].map((i) => (
          <Button className="rounded-none" variant={"ghost"} key={i}>
            <a href={`#${i}`}>{i}</a>
          </Button>
        ))}
      </div>
    </div>
  );
};

const AlertBar = ({ type = "info", title = "", msg = "" }) => {
  if (msg == "") return null;
  return (
    <Alert variant={type == "warning" ? "destructive" : "default"} className="max-w-md">
      {type == "warning" ? <AlertCircle className="h-4 w-4" /> : <InfoIcon className="h-4 w-4" />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{msg}</AlertDescription>
    </Alert>
  );
};

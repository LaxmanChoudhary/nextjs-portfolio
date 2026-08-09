import Image from "next/image";
import Container from "../shared/container";

import PythonIcon from "../../../public/icons/python.svg";
import JsIcon from "../../../public/icons/javascript.svg";
import TsIcon from "../../../public/icons/typescript.svg";

import Django from "../../../public/icons/django-plain.svg";
import DjangoRest from "../../../public/icons/djangorest.svg";
import FastAPI from "../../../public/icons/fastapi.svg";
import Angular from "../../../public/icons/angular.svg";
import ReactIcon from "../../../public/icons/react.svg";

import PostgresIcon from "../../../public/icons/postgresql.svg";
import TailwindIcon from "../../../public/icons/tailwindcss.svg";
import BootStrapIcon from "../../../public/icons/bootstrap.svg";
import JqueryIcon from "../../../public/icons/jquery.svg";
import AwsIcon from "../../../public/icons/aws.svg";

import GitIcon from "../../../public/icons/git.svg";
import DockerIcon from "../../../public/icons/docker.svg";

import { Code2, HomeIcon, PencilRuler } from "lucide-react";

const AllSkills = () => {
  return (
    <section id="skills">
      <Container className="pt-10 grid">
        <div className="grid gap-8">
          <Languages />
          <FrameWorks />
          <Tools />
        </div>
      </Container>
    </section>
  );
};

const Languages = () => {
  const languages = [
    {
      icon: PythonIcon,
      title: "python",
    },
    {
      icon: JsIcon,
      title: "javascript",
    },
    {
      icon: TsIcon,
      title: "typescript",
    },
  ];

  return (
    <div>
      <p className="uppercase opacity-75">
        <Code2 className="inline align-text-bottom" /> Programming languages i{"'"}m
        familiar to
      </p>
      <div className="flex gap-4 pt-4">
        {languages.map((lang) => (
          <div key={lang.title} title={lang.title}>
            <Image
              style={{
                height: "36px",
                width: "auto",
              }}
              src={lang.icon}
              alt={lang.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FrameWorks = () => {
  const languages = [
    {
      icon: Django,
      title: "django",
    },
    {
      icon: DjangoRest,
      title: "django-rest framework",
    },
    {
      icon: FastAPI,
      title: "fastapi",
    },
    {
      icon: Angular,
      title: "angular",
    },
    {
      icon: ReactIcon,
      title: "react",
    },
  ];

  return (
    <div>
      <p className="uppercase opacity-75">
        <HomeIcon className="inline align-text-bottom" /> Frameworks i have
        worked with
      </p>
      <div className="flex gap-4 pt-4">
        {languages.map((lang) => (
          <div key={lang.title} title={lang.title}>
            <Image
              style={{
                height: "36px",
                width: "auto",
              }}
              src={lang.icon}
              alt={lang.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Tools = () => {
  const languages = [
    {
      icon: GitIcon,
      title: "git",
    },
    {
      icon: DockerIcon,
      title: "docker",
    },
    {
      icon: PostgresIcon,
      title: "postgresql",
    },
    {
      icon: TailwindIcon,
      title: "tailwindcss",
    },
    {
      icon: BootStrapIcon,
      title: "bootstrap",
    },
    {
      icon: JqueryIcon,
      title: "jquery",
    },
    {
      icon: AwsIcon,
      title: "aws cloud services",
    },
  ];

  return (
    <div>
      <p className="uppercase opacity-75 flex gap-1">
        <PencilRuler className="inline align-text-bottom" /> Tools i utilize
      </p>
      <div className="flex gap-4 pt-4">
        {languages.map((lang) => (
          <div key={lang.title} title={lang.title}>
            <Image
              style={{
                height: "36px",
                width: "auto",
              }}
              src={lang.icon}
              alt={lang.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;

"use client";

import Skills from "./skills";
import WorkXP from "./work-xp";
import Courses from "./courses";
import Education from "./education";
import Projects from "./projects";

import "./index.css";
import { Tabs } from "./Tabs";
import { Item } from "react-stately";

export default function ResumeTabs() {
  return (
    <div className="">
      <Tabs>
        <Item title="Skills">
          <Skills />
        </Item>
        <Item title="Work Experience">
          <WorkXP />
        </Item>
        <Item title="Certifications & Courses">
          <Courses />
        </Item>
        <Item title="Education">
          <Education />
        </Item>
        <Item title="Projects">
          <Projects />
        </Item>
      </Tabs>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faBrands from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  const skills = [
    {skill: "html", icon:"faHtml5"},
    {skill: "css", icon:"faCss3"},
    {skill: "javascript", icon:"faSquareJs"},
    {skill: "python", icon:"faPython"},
    {skill: "react", icon:"faReact"},
    {skill: "nodejs", icon:"faNodeJs"},
    {skill: "linux", icon:"faLinux"}
  ];

  return (
    <section
      id="skills"
      aria-label="my skills section"
      className="py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl capitalize font-bold tracking-tight">
          <span className="text-5xl text-orange-700 capitalize">s</span>kills
        </p>
        <div className="flex flex-wrap justify-center gap-8 p-4 mt-8">
          {skills.map((skl) => (
            <div key={skl.skill}>
              <FontAwesomeIcon  icon={faBrands[skl.icon]} size="3x" opacity={0.5} titleId={skl.skill} title={skl.skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faBrands from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  const skills = [
    "faHtml5",
    "faCss3",
    "faSquareJs",
    "faPython",
    "faReact",
    "faGoogle",
    "faLinux",
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
        <div className="flex flex-wrap gap-4 justify-evenly p-4 mt-8">
          {skills.map((skill) => (
            <div key={skill}>
              <FontAwesomeIcon icon={faBrands[skill]} size="3x" opacity={0.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Experience() {
  const timelineData = [
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      type: "professional",
      durationStart: "Aug 2021",
      durationEnd: "Present",
      description:"Role: Systems Engineer\nDesigning & developing Analytical enterprise solutions.\nTools in use: Python, NodeJs.\n\
      Python technical expertise.\n\nRole: ASE (Assistant System Engineer)\nDeveloped analytic functions using python for the client to create meaningful insights.\n\
      Supported ongoing server maintenance and created automation to support the operations.\n\
      Contributed to migrating existing Java app functionalities to a newer framework based on Node Js",
    },
    {
      role: "Python Intern",
      company: "Necessario Innovations Pvt. Ltd.",
      type: "professional",
      durationStart: "Mar 2021",
      durationEnd: "Jun 2021",
      description: "Worked at the startup building products. R&D, tinkering raspberry pi.\nWorked on Python backend (micro-framework) and frontend.\
      Managing and documenting the overall development.\nTesting and Managing SoM like Jetson nano, raspberry pi, image sensors, and lenses.\n\
      Contributed to the initial development phase of the product.\nWorked on flask server built upon Raspberry pi SoM.\nSuccessfully deployed flask on Apache server.",
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
    <section id="experience" aria-label="my experiences" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl font-bold tracking-tight">
          <span className="text-5xl text-orange-700 capitalize">E</span>xperience
        </p>
        <div className="bg-slate-50 rounded-md p-10 mt-8 shadow-sm">
          <div className="grid gap-2 grid-cols-1">
            {timelineData.map((data) => (
              <div
                className="relative pl-8 pb-6 border-l-2 border-orange-700"
                key={data.role + data.company}
              >
                <div className="absolute w-8 h-8 -left-[17px] flex justify-center place-items-center -top-3 text-orange-700 bg-neutral-200 rounded-full p-1">
                  {data.type == "academic" ? (
                    <FontAwesomeIcon icon={faGraduationCap} />
                  ) : (
                    <FontAwesomeIcon icon={faBriefcase} />
                  )}
                </div>
                <p className="text-sm font-thin">
                  {data.durationStart} - {data.durationEnd}
                </p>
                <p className="text-lg font-semibold uppercase">
                  {data.role} <span>- {data.company}</span>
                </p>
                <p className="whitespace-pre-line text-sm">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

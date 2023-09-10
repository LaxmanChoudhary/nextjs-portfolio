import Image from "next/image";
import jsIcon from "../../public/images/javascript-svg-icon.svg";
import htmlIcon from "../../public/images/html-svg-icon.svg";
import cssIcon from "../../public/images/css-svg-icon.svg";
import reactIcon from "../../public/images/react-svg-icon.svg";
import nextjsIcon from "../../public/images/nextjs-svg-icon.svg";
import pythonIcon from "../../public/images/python-svg-icon.svg";
import gcpIcon from "../../public/images/gcp-svg-icon.svg";

export default function Skills() {
  const skillsList = [
    {
      id: 1,
      sub: "Technical Skills",
      skills: [
        {
          icon: jsIcon,
          alt: "javascript",
        },
        {
          icon: htmlIcon,
          alt: "html",
        },
        {
          icon: cssIcon,
          alt: "css",
        },
        {
          icon: reactIcon,
          alt: "react",
        },
        {
          icon: nextjsIcon,
          alt: "nextJs",
        },
        {
          icon: pythonIcon,
          alt: "python",
        },
        {
          icon: gcpIcon,
          alt: "gcp",
        },
      ],
    },
  ];

  return (
    <div className="">
      {skillsList.map((section) => (
        <div key={section.id}>
          <p className="font-semibold">{section.sub}</p>
          <ul className="flex flex-wrap gap-4 p-4">
            {section.skills.map((skill) => (
              <li
                className="flex flex-col gap-2 items-center p-4 w-24 bg-slate-100"
                key={skill.alt}
              >
                {skill.icon && (
                  <Image
                    src={skill.icon}
                    alt={skill.alt}
                    width={40}
                    height={40}
                  />
                )}
                {skill.alt && <p className="font-light">{skill.alt}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

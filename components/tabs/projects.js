import { useState } from "react";
import Overlay from "../Overlay";

export default function Projects() {
  const myProjects = [
    {
      id: "1",
      title: "Github API consuming React Single-Page-App",
      description: `
A react based UI that consumes the github API.  
Include Redux workflow.  
CI / CD using travis config.  
Hosted on github pages.
      `,
      stack: [
        "react",
        "redux",
        "material-ui",
        "javascript",
        "css",
        "travis CI/CD",
        "github-pages"
      ],
      urls: {
        gitUrl: "https://github.com/LaxmanChoudhary/gitlev-dev",
        appUrl: "https://laxmanchoudhary.github.io/gitlev-dev/",
      },
    },
    {
      id: "2",
      title: "Django Rest API with React",
      description: `
A full stack application where backend is created using **Django** and frontend using **React**.
Django serving API's as RESTful APIs.
Contains
- Authentication
- CRUD operations
- Redux flow in Frontend
- Frontend actions
`,
      stack: [
        "python",
        "djano",
        "django-rest-framework",
        "javascript",
        "react",
        "redux",
        "css",
        "bootstrap",
        "html",
      ],
      urls: { gitUrl: "https://github.com/LaxmanChoudhary/django-react-todo" },
    },
    {
      id: "3",
      title: "All Django application",
      description: `
A full-stack web app using django framework. Using django ORM, CRUD operations on Postgress DB.
Authentication using local auth provided within django as well as Github auth integrated.

App contains 2 features.  
* Creating your todo  
* Logging your daily activities in online journal (logger)`,
      stack: ["python", "django", "html", "css", "bootstrap", "heroku"],
      urls: {
        gitUrl: "https://github.com/LaxmanChoudhary/MultiApps",
      },
    },
  ];

  const [displayModal, setDisplayModal] = useState(false);
  const [overlayItem, setOverlayitem] = useState(0);

  const handleOverlayAction = (indx) => {
    setOverlayitem(indx);
    setDisplayModal(true);
  };

  return (
    <div>
      <p className="font-semibold mb-4">Showcase</p>
      <div className="grid md:grid-cols-2 gap-2">
        {myProjects.map((proj, index) => (
          <div
            key={index}
            className="border p-2 cursor-pointer hover:bg-slate-100"
            onClick={() => handleOverlayAction(index)}
          >
            <div className="pl-8">
              <p className="text-lg font-semibold">{proj.title}</p>
              <p className="text-sm">{proj.description.slice(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>
      <Overlay
        display={displayModal}
        setDisplay={setDisplayModal}
        item={myProjects[overlayItem]}
      />
    </div>
  );
}

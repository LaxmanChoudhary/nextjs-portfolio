import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./overlay.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from "react-markdown";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Overlay({ display, setDisplay, item }) {
  useEffect(() => {}, []);

  return (
    <div className="">
      <div className={`Modal ${display ? "Show" : ""}`}>
        <div className="flex gap-2 flex-col m-auto mt-16 ml-8">
          <div className="text-2xl font-bold">{item.title}</div>
          <div className="font-light p-2 w-full"><ReactMarkdown className="markdown">{item.description}</ReactMarkdown></div>
          <div className="flex gap-1 flex-wrap pb-4">
            {item.stack.map((it) => (
              <div key={it} className="text-xs py-1 px-2 border bg-slate-200">
                {it}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
          <div>{item?.urls?.gitUrl && <a href={item.urls.gitUrl} target="blank"><FontAwesomeIcon icon={faGithub} size="xl" /></a>}</div>
          <div>{item?.urls?.appUrl && <a href={item.urls.appUrl} target="blank"><FontAwesomeIcon icon={faGlobe} size="xl" /></a>}</div>
          </div>
        </div>
      </div>
      <div
        className={`Overlay ${display ? "Show" : ""}`}
        onClick={() => setDisplay(!display)}
      />
    </div>
  );
}

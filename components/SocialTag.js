import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialTags() {
  return (
    <div className="fixed flex flex-col gap-4 top-20 right-0 bg-slate-900 text-zinc-100 p-4 z-50">
      <div className="hover:opacity-50">
        <a
          href="https://www.linkedin.com/in/laxmanchoudhary"
          alt="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
      </div>
      <div className="hover:opacity-50">
        <a
          href="https://github.com/LaxmanChoudhary"
          alt="github"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
      </div>
      <div className="hover:opacity-50">
        <a
          href="mailto:im.choudharylaxman@gmail.com"
          alt="mailid"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SocialTags() {
  const router = useRouter();
  const navlink =
    router.pathname == "/" ? (
      <div className="hover:opacity-50">
        <Link href="/blog" replace>
          <a className="">
            <FontAwesomeIcon icon={faBlog} size="xl" title="blog"/>
          </a>
        </Link>
      </div>
    ) : (
      <div className="hover:opacity-50">
        <Link href="/" replace>
          <a className="">
            <FontAwesomeIcon icon={faIdBadge} size="xl" title="resume"/>
          </a>
        </Link>
      </div>
    );
  return (
    <div className="fixed flex flex-col gap-3 top-20 right-0 bg-neutral-900 text-neutral-100 p-3 z-50">
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
      {navlink}
    </div>
  );
}

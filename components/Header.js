import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  if (router.pathname == "/") {
    return (
      <header className="absolute top-0 left-0 w-full z-10 px-10">
        <div className="flex justify-end">
          <div className="text-xs text-white p-3 font-mono">switch to</div>
          <Link href="/blog" replace>
            <a className="py-2 px-4 rounded-b-md shadow-sm bg-neutral-50 hover:bg-neutral-300">
              Blog
            </a>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="absolute top-0 left-0 w-full z-10 px-10">
        <div className="flex justify-end">
          <div className="text-xs text-neutral-800 p-3 font-mono">
            switch to
          </div>

          <Link href="/" replace>
            <a className="py-2 px-4 rounded-b-md text-neutral-50 bg-neutral-800 hover:bg-neutral-300">
              Resume
            </a>
          </Link>
        </div>
      </header>
    );
  }
};

{
  /* <header className="py-10  bg-slate-900 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <Link href="/">
            <a aria-label="Home">
              <p className="font-sans text-3xl font-bold tracking-tighter">
                local.dev
              </p>
            </a>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" replace>
              <a className={`py-1 px-2 rounded hover:bg-slate-600 ${router.pathname == "/" ? "border-b-2 rounded-none border-slate-50" : ""}`}>Resume</a>
            </Link>
            <Link href="/blog" replace>
              <a className={`py-1 px-2 rounded hover:bg-slate-600 ${router.pathname == "/blog" ? "border-b-2 rounded-none border-slate-50" : ""}`}>Blog</a>
            </Link>
          </div>
        </nav>
      </div>
    </header> */
}

export default Header;

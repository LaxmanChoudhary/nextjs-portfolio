import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  // const currentPage = router.pathname == "/" ? "resume" : "blog";

  return (
    <header className="py-10  bg-slate-900 text-slate-50">
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
    </header>
  );
};

export default Header;

import Image from "next/image";
import Logo from "../../public/logo2.svg";
import LogoDark from "../../public/logo-dark.png";
import NextLinkButton from "./next-link-btn";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { HomeIcon, Menu } from "lucide-react";
import { ModeToggle } from "./theme-toggle-btn";

export const navPaths = [
  // { name: "About", path: "/about" },
  // { name: "Skills", path: "/skills" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blogs", path: "/blogs" },
  { name: "Resources", path: "/resources" },
];

export default function NavBar() {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="m-1.5 p-1.5">
          <span className="sr-only">Laxman Choudhary</span>
          <Image
            className="dark:hidden"
            src={Logo}
            alt="laxman choudhary portfolio"
            height={40}
          />
          <Image
            className="hidden dark:block"
            src={LogoDark}
            alt="laxman choudhary portfolio"
            height={40}
          />
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="hidden md:flex lg:gap-x-4">
          {navPaths.map((i) => (
            <NextLinkButton key={i.name} to={i.path}>
              {i.name}
            </NextLinkButton>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <HomeIcon className="h-6 w-6" />
                <span className="sr-only">Laxman Choudhary</span>
              </Link>
              {navPaths.map((i) => (
                <Link
                  key={i.name}
                  href={i.path}
                  className="hover:bg-slate-100 hover:text-slate-900"
                >
                  {i.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </div>
    </nav>
  );
}

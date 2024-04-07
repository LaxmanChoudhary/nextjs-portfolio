import Image from "next/image";
import Logo from "../../public/logo2.svg";
import LogoDark from "../../public/logo-dark.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navPaths } from "@/components/navbar";

export default function Footer() {
  return (
    <footer>
      <div className="bg-secondary pt-16 pb-8 px-6 sm:pt-24 lg:px-4 lg:pt-24">
        <div className="grid md:gap-8 md:grid-cols-2 mx-auto max-w-7xl">
          <div className="space-y-8">
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
            <div className="flex space-x-8 opacity-70"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mt-8 sm:mt-0">
              <h3 className="font-semibold text-sm">Navigation</h3>
              <ul role="list" className="space-y-4 text-xs mt-6">
                {navPaths.map((i) => (
                  <li key={i.name}>
                    <Link
                      href={i.path}
                      className="opacity-70 hover:opacity-100"
                    >
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 sm:mt-0">
              <h3 className="font-semibold text-sm">Others</h3>
              <ul role="list" className="space-y-4 text-xs mt-6">
                <li>
                  <Link href={"#"} className="opacity-70 hover:opacity-100">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t sm:mt-16 lg:mt-20">
          <p className="text-xs">(❁´◡`❁) last updated 2024.</p>
        </div>
      </div>
    </footer>
  );
}

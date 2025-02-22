import PLink from "@/components/shared/link";
import { GitGraphIcon } from "lucide-react";
import React from "react";

function Page() {
  return (
    <>
      <h1 className="text-3xl">Latex to PDF conversion service</h1>
      <div className="h-[1px] w-full bg-slate-200 my-4"></div>
      <main className="text-balance">
        <div className="flex text-sm justify-end">
          <PLink
            className="flex items-center gap-2"
            href={
              "https://github.com/LaxmanChoudhary/latext-to-pdf-api-conversion"
            }
            target="_blank"
          >
            source code
            <GitGraphIcon className="h-4 w-4" />
          </PLink>
        </div>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam
            maiores molestiae reiciendis maxime adipisci ad, dolore, numquam
            placeat illum aut, rem excepturi nemo reprehenderit quaerat eaque.
            Nihil, aspernatur modi?
          </p>
        </div>
      </main>
    </>
  );
}

export default Page;

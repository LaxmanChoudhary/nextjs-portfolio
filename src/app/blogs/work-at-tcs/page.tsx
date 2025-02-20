import Container from "@/components/shared/container";
import PLink from "@/components/shared/link";
import React from "react";

function Page() {
  return (
    <div>
      <Container>
        <h1 className="text-3xl">Working at Tata Consultancy Services</h1>
        <div className="h-[1px] w-full bg-slate-200 my-4"></div>
        <main className="text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam
            maiores molestiae reiciendis maxime adipisci ad, dolore, numquam
            placeat illum aut, rem excepturi nemo reprehenderit quaerat eaque.
            Nihil, aspernatur modi?
          </p>
        </main>
        <footer className="w-full text-center mt-8"><PLink href={"/"}>Back to home</PLink></footer>
      </Container>
    </div>
  );
}

export default Page;

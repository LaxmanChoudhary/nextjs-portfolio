import React from "react";

function Page() {
  return (
    <>
      <h1 className="font-semibold">Working at tcs</h1>
      <p>
        since <strong>Aug 2021</strong>
      </p>
      <div className="h-[1px] w-full bg-slate-200 my-4"></div>
      <main>
        <p>
          I work at tcs as a full stack developer. My day to day
          responsibilities include
        </p>
        <ul>
          <li>
            <strong>Collaborate</strong> with designers, product managers, and
            other engineers to align technical solutions with business goals.
          </li>
          <li>
            <strong>Build and optimize backend services</strong> using Python,
            ensuring scalability, performance, and maintainability.
          </li>
          <li>
            Develop interactive, user-friendly interfaces with Angular, focusing
            on seamless UX.
          </li>
          <li>
            Refactor code, improve performance, and enforce best practices in
            development.
          </li>
          <li>
            Stay updated with the latest tech trends, and improve development
            workflows.
          </li>
        </ul>
        <div className="mt-8">
          <p className="uppercase opacity-75">
            appreciations and achievements i received
          </p>
          <ul>
            <li>Received continuous 3 years of highest appraisal rating.</li>
            <li>Received multiple star of the month award.</li>
          </ul>
        </div>
        <div className="py-2">
          <p className="uppercase opacity-75">I have worked on</p>
          <div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;

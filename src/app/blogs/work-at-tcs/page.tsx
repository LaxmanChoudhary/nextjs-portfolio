import React from "react";

function Page() {
  return (
    <article className="prose prose-sm max-w-5xl">
      <h1 className="font-semibold">Working at tcs</h1>
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
            <table>
              <thead className="text-2xl border-none">
                <tr>
                  <th>8</th>
                  <th>6</th>
                  <th>14</th>
                  <th>4</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td>Products</td>
                  <td>Client teams</td>
                  <td>Features</td>
                  <td>Components</td>
                </tr>
              </tbody>
            </table>
            <div className="grid gap-0 md:gap-2 lg:gap-0 grid-cols-2 md:grid-cols-4">
              <div className="p-1 md:p-2 lg:p-1">
                <h2>Flexiblity with techs</h2>
                <p>
                  Led a team of designers to define the processes for revamping
                  our design system.
                </p>
              </div>
              <div className="p-1 md:p-2 lg:p-1">
                <h2>Something extra</h2>
                <p>
                  Created novel guidelines for designing smaller size icons for
                  dense enterprise products.
                </p>
              </div>
              <div className="p-1 md:p-2 lg:p-1">
                <h2>Mentoring new teammates</h2>
                <p>
                  Mentored a summer intern who was offered a full time position
                  at D. E. Shaw.
                </p>
              </div>
              <div className="p-1 md:p-2 lg:p-1">
                <h2>Hiring & onboarding</h2>
                <p>
                  Improved hiring process for Shaw and conducted interviews to
                  expand the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
}

export default Page;

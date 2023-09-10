import { useState } from "react";

export default function WorkXP() {
  const [selected, setSelected] = useState(0);

  const workxpList = [
    {
      id: 0,
      role: "Software Engineer",
      start: "Aug 2021",
      end: "Present",
      org: "Tata Consultancy Services",
      skillset: ["python", "linux", "rpi"],
      description:
        "Role: Systems Engineer\nDesigning & developing Analytical enterprise solutions.\nTools in use: Python, NodeJs.\n\
        Python technical expertise.\n\nRole: ASE (Assistant System Engineer)\nDeveloped analytic functions using python for the client to create meaningful insights.\n\
        Supported ongoing server maintenance and created automation to support the operations.\n\
        Contributed to migrating existing Java app functionalities to a newer framework based on Node Js",
    },
    {
      id: 1,
      role: "Python Intern",
      start: "Mar 2021",
      end: "Jun 2021",
      org: "Necessario Innovations Pvt. Ltd.",
      skillset: ["python", "linux", "rpi"],
      description:
        "Worked at the startup building products. R&D, tinkering raspberry pi.\nWorked on Python backend (micro-framework) and frontend.\
        Managing and documenting the overall development.\nTesting and Managing SoM like Jetson nano, raspberry pi, image sensors, and lenses.\n\
        Contributed to the initial development phase of the product.\nWorked on flask server built upon Raspberry pi SoM.\nSuccessfully deployed flask on Apache server.",
    },
  ];

  const selectedJob = workxpList[selected];

  return (
    <div className="">
      <p className="font-semibold mb-4">My employment journey</p>
      <div className="mx-auto overflow-y-auto p-4">
        <div className="fixed border-b-2 lg:pb-0 pb-4 w-auto lg:w-[23rem] overflow-y-auto lg:border-b-0 lg:border-r-2 pr-4">
          <div className="flex gap-4 lg:block relative">
            {workxpList.map((job) => (
              <div
                key={job.id}
                className={`bg-slate-100 text-left ${
                  job.id == selected && "bg-slate-600 text-slate-50"
                } py-2 px-4 min-w-[180px]`}
                onClick={() => setSelected(job.id)}
              >
                <p className="text-inherit">{job.role}</p>
                <p className="text-sm">{job.org}</p>
                <p className="text-sm font-light">
                  {job.start} - {job.end}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-28 lg:mt-0 lg:ml-[25.5rem]">
          <div className="">
            <p className="font-light">
              {selectedJob.start} - {selectedJob.end}
            </p>
            <p className="text-2xl font-bold">{selectedJob.role}</p>
            <p className="text-xl">{selectedJob.org}</p>
            <p>{selectedJob.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//   return (
//     <div>
//       <p className="font-semibold mb-4">My employment journey</p>
//       <div className="">
//         <div className="mb-8 border p-2">
//           {workxpList.map((job) => (
//             <button
//               key={job.id}
//               className={`text-left ${job.id == selected && "bg-slate-500 text-slate-50 "}bg-slate-100 py-2 px-4 mr-4`}
//               onClick={() => setSelected(job.id)}
//             >
//               <p className="text-inherit">{job.role}</p>
//               <p className="text-sm">{job.org}</p>
//               <p className="text-sm font-light">
//                 {job.start} - {job.end}
//               </p>
//             </button>
//           ))}
//         </div>
//         <div className="">
//           <p className="font-light">{selectedJob.start} - {selectedJob.end}</p>
//           <p className="text-2xl font-bold">{selectedJob.role}</p>
//           <p className="text-xl">{selectedJob.org}</p>
//           <p>{selectedJob.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

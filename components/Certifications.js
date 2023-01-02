import Image from "next/image";

export default function Certifications() {
  const certs = [
    {
      id: 1,
      title: "Cloud Certified Associate Cloud Engineer (ACE)",
      by: "Google Cloud",
      in: "Sep 2022",
      till: "Sep 2025",
    },
    {
      id: 2,
      title: "Front-End Web Development with React",
      by: "Coursera",
      in: "Oct 2020",
      till: "",
    },
    {
      id: 3,
      title: "Django for everybody- 4 course specialization",
      by: "Coursera",
      in: "Aug 2020",
      till: "",
    },
    {
      id: 4,
      title: "Crash Course on Python",
      by: "Coursera",
      in: "Jul 2020",
      till: "",
    },
  ];
  const path = (brand) => {
    if (brand.includes("Google")) {
      return "/images/gcloud-logo2.png";
    } else if (brand.includes("Coursera")) {
      return "/images/coursera-logo2.png";
    }
  };
  return (
    <section id="certifications" className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl font-bold tracking-tight">
          <span className="text-5xl text-orange-700 capitalize">C</span>ertifications
        </p>
        <div className="grid grid-col-1 lg:grid-cols-2 m-8 p-4 gap-8">
          {certs.map((cert) => (
            <div
              className="relative p-4 border-2 border-neutral-500 rounded-lg h-full"
              key={cert.id}
            >
              <span className="image-container border-2 border-neutral-500 rounded-lg p-1.5 -left-4 -top-3 bg-white">
                <Image
                  src={path(cert.by)}
                  alt={cert.by}
                  layout="fill"
                  className="image-cert"
                />
              </span>
              <span className="absolute h-6 w-6 rounded-full bg-gradient-to-r from-neutral-900 to-neutral-500 -top-3 right-6"></span>
              <div className="">
                <p className="text-xl text-neutral-700 font-semibold">
                  {cert.title}
                </p>
                {/* <p className="text-sm font-thin">valid from: {cert.in}</p>
                <p className="text-sm font-thin">valid till: {cert.till ? cert.till : "∞"}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

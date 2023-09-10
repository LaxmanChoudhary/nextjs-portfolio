import Image from "next/image";
import gcpIcon from "../../public/images/gcp-svg-icon.svg";
import courseraIcon from "../../public/images/coursera-svg-icon.svg";

export default function Courses() {
  const items = [
    {
      id: 1,
      name: "Google Certified Associate cloud Engineer",
      issuer: "Google",
      description: "",
      issuerIcon: gcpIcon,
      issuedOn: "",
      validTill: "",
      link: "",
    },
    {
      id: 2,
      name: "IT Automation with Python - Google Professional Certificate",
      issuer: "Google",
      description: "",
      issuerIcon: gcpIcon,
      issuedOn: "",
      validTill: "",
      link: "",
    },
    {
      id: 3,
      name: "Frontend with React",
      issuer: "Coursera",
      description: "",
      issuerIcon: courseraIcon,
      issuedOn: "",
      validTill: "",
      link: "",
    },
    {
      id: 4,
      name: "Django Specialization",
      issuer: "Coursera",
      description: "",
      issuerIcon: courseraIcon,
      issuedOn: "",
      validTill: "",
      link: "",
    },
  ];
  return (
    <div>
      <p className="font-semibold mb-4">Certifications & courses</p>
      <div
        className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2"
        role="courses-container"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between relative p-4 border shadow"
          >
            <div className="grid grid-cols-2">
              {item.issuerIcon && (
                <Image
                  className="self-center"
                  src={item.issuerIcon}
                  alt={item.issuer}
                  height={40}
                  width={40}
                />
              )}
              <p className="self-center">
                <span className="font-light">Issuer:</span> {item.issuer}
              </p>
            </div>
            <div className="">
              <p className="uppercase font-semibold my-2">{item.name}</p>
            </div>
            <div className="font-light text-sm border-t">
              <p>Issued on: {item.issuedOn}</p>
              <p>Valid till: {item.validTill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

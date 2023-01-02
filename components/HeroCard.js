import Image from "next/image";
import ProfileImg from "../public/images/profile.jpg";

export default function HeroCard() {
  const user = {
    "firstName": "laxman",
    "lastName": "choudhary",
  }
  const firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1);
  const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1);

  return (
    <div
      id="top"
      className="flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32 lg:pb-32 bg-gradient-to-r from-neutral-900 to-neutral-800 text-neutral-100 h-screen"
    >
      {/* <div className="">
        <Image
          src={ProfileImg}
          height="150"
          width="150"
          alt="userProfile"
          className="rounded-full"
        />
        <p className="text-2xl font-bold font-sans tracking-tight">{`${firstName} ${lastName}`}</p>
        <p className="text-xs">{"I'm a Software Engineer"}</p>
      </div> */}
      <div>
        <p className="text-5xl">Hi! this is {firstName} {lastName}</p>
        <p>A Software Engineer</p>
      </div>
    </div>
  );
}

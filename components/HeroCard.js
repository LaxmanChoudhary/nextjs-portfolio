import Image from "next/image";
import ProfileImg from "../public/images/profile.jpg";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import particlesConfig from "../config/configParticles";

export default function HeroCard() {
  const user = {
    firstName: "laxman",
    lastName: "choudhary",
  };
  const firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1);
  const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div
      id="top"
      className="relative h-screen w-full bg-neutral-900 text-neutral-100"
    >
      <div className="absolute w-full z-0">
        <Particles init={particlesInit} loaded={particlesLoaded} className="h-screen w-full" params={particlesConfig} />
      </div>
      <div className="flex flex-col w-full h-full pl-8 sm:p-0 justify-center sm:items-center">
        <p className="text-3xl sm:text-5xl">
          Hi! this is {firstName} {lastName}
        </p>
        <p className="">A Software Engineer</p>
      </div>
    </div>
  );
}

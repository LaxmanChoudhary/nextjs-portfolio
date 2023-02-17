import Image from "next/image";
import { useRouter } from "next/router";

export default function Card({ project }) {
  const router = useRouter();

  return (
    <div className="relative rounded-lg md:place-content-center p-4 border-2 min-h-[200px]">
      <div className="relative grid gap-2 grid-cols-2 md:grid-cols-1 w-full h-full">
        <div className="image-container flex p-0.5 md:p-8">
          <Image
            src={project.imageUrl}
            alt={"cert.by"}
            layout="fill"
            className="image-cert"
          />
        </div>
        <div className="md:absolute flex justify-center items-center bg-neutral-100 w-full h-full sm:p-4 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in">
          <p
            onClick={() => router.push(`/p/${project.id}`)}
            className="sm:text-xl md:text-3xl font-semibold cursor-pointer"
          >
            {project.title}
          </p>
        </div>
      </div>
    </div>
  );
}

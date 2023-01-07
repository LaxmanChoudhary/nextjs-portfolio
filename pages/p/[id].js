import { useRouter } from "next/router";

const allProjects = [
  {
    id: "1",
    title: "React Todo SPA",
    description: "Dummy text, need to update data yet!",
    stack: [
      "html",
      "javascript",
      "css",
      "python",
      "raspberry pi",
      "google cloud platform",
    ],
    projectUrls: { websiteUrl: "https://www.abc.xyz" },
    imageUrl: "https://i.imgur.com/tC8nFKH.jpg",
  },
  {
    id: "2",
    title: "Django Rest API",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis fuga deserunt eius cum! Similique voluptatum expedita dolorem at corrupti voluptatibus tenetur numquam, eos temporibus eligendi sunt et! Culpa, soluta.",
    stack: [
      "html",
      "javascript",
      "css",
      "python",
      "raspberry pi",
      "java",
      "ruby",
      "google cloud platform",
    ],
    projectUrls: { githubUrl: "https://www.github.com" },
    imageUrl: "/images/react_hero.png",
  },
  {
    id: "3",
    title: "Full-stack Django",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis fuga deserunt eius cum! Similique voluptatum expedita dolorem at corrupti voluptatibus tenetur numquam, eos temporibus eligendi sunt et! Culpa, soluta.",
    stack: [
      "html",
      "javascript",
      "css",
      "python",
      "raspberry pi",
      "java",
      "ruby",
      "google cloud platform",
    ],
    projectUrls: {
      githubUrl: "https://www.github.com",
      websiteUrl: "https://www.abc.xyz",
    },
    imageUrl: "/images/auto.webp",
  },
];

export default function Project({ project }) {
  const router = useRouter();

  return (
    <section id="blog" className="relative max-w-7xl mx-auto overflow-hidden mt-20 mb-28 sm:my-20 h-screen">
      <div className="">
        <button className="bg-neutral-900 text-neutral-100 px-4 py-2 hover:bg-neutral-700 active:bg-neutral-800" onClick={() => router.back()}>Back</button>
        <div className="flex flex-col p-4">
          <p className="text-3xl font-semibold text-center">{project.title}</p>
          <p className="max-w-3xl mx-auto mt-8">{project.description}</p>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  let allPaths = allProjects.map(each => {
    return {params: { id: each.id }}
  })
  return {
    paths: allPaths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  let project = allProjects.find(each => each.id == params.id)
  return {
    // Passed to the page component as props
    props: { project },
  }
}
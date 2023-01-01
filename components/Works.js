import Card from "../components/Card";

export default function Works() {
  const myProjects = [
    {
      id: "1",
      title: "Project 1",
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
      title: "Project 2",
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
      title: "Project 3",
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

  return (
    <section id="works" aria-label="my experiences" className="py-20 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl font-bold tracking-tight">
          <span className="text-5xl text-orange-700 capitalize">W</span>orks
        </p>
        <div className="autogrid gap-3 mt-8 p-4">
          {myProjects.map((myProject) => (
            <Card project={myProject} key={myProject.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

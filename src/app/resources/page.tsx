import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import { formatPostDate } from "@/lib/utils";
import {
  CircleUserRound,
  NotebookText,
  VideoIcon,
  FolderGit2,
  Code,
  ExternalLinkIcon,
  Album,
} from "lucide-react";

const related_to = [
  "python",
  "react",
  "angular",
  "vanilla javascript",
  "nextjs",
  "misc",
] as const;

const resources_types = ["video", "reading", "git", "packages"] as const;

export interface Resource {
  title: string;
  description?: string;
  url: string;
  resType: (typeof resources_types)[number];
  relatedTo?: (typeof related_to)[number];
  tags: string[];
  author: string;
  addedOn: string;
  updatedon?: string;
}

export default function ResourcePage() {
  const resources: Resource[] = [
    {
      title: "Florian, Youtube creator",
      description: "very exceptional creator, takes attention to detail.",
      url: "https://www.youtube.com/",
      resType: "video",
      relatedTo: "nextjs",
      tags: ["Front-end", "nextjs"],
      author: "Author",
      addedOn: "2024-04-02T05:35:07.322Z",
    },
    {
      title: "Django packages",
      description:
        "Great pluggable appps/projects for Django framework python.",
      url: "https://djangopackages.org/",
      resType: "packages",
      relatedTo: "python",
      tags: ["Back-end", "python"],
      author: "Author",
      addedOn: "2024-04-06T05:35:07.322Z",
    },
    {
      resType: "video",
      title: "PyPlane, Youtube creator",
      url: "",
      relatedTo: "python",
      tags: ["Back-end", "python"],
      author: "Author",
      addedOn: "2024-04-04T05:35:07.322Z",
    },
  ];

  const filteredResources = related_to.map((rT) => {
    let fR = resources.filter((r) => r.relatedTo == rT);
    if (fR.length > 0) {
      return { category: rT, resources: fR };
    } else {
      return null;
    }
  });

  return (
    <div className="">
      <TypographyH1>Resources</TypographyH1>
      <p className="text-sm tracking-tight opacity-75">
        Some resources that I find useful to share.
      </p>
      <div className="mt-8">
        <div className="divide-y space-y-4">
          {filteredResources.map((rt, i) => {
            if (rt == null) return null;
            return (
              <div key={i}>
                <p className="text-xl font-semibold capitalize">
                  {rt?.category}
                </p>
                {rt?.resources.map((r, i2) => (
                  <div key={i2}>
                    <a
                      className="flex space-x-2 hover:underline"
                      href={r.url}
                      target="_blank"
                    >
                      <div className="flex gap-4">
                        <ExternalLinkIcon size={12} className="self-center" />
                        <p className="flex font-light">{r.title}</p>
                      </div>
                      {r.description && (
                        <p className="tracking-tight text-sm self-end">
                          {r.description}
                        </p>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

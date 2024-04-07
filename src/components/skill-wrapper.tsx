import { Skill } from "@/app/portfolio/page";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "./ui/badge";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "./ui/button";

interface SkillWrapperProps extends Skill {}

export default function SkillWrapper({
  name,
  description,
  skillLevel,
  tags,
}: SkillWrapperProps) {
  return (
    <div className="border hover:shadow duration-300 px-2">
      <div className="flex items-center">
        <p className="text-sm font-semibold tracking-wide">{name}</p>
        <SkillHoverAction
          name={name}
          description={description}
          skillLevel={skillLevel}
          tags={tags}
        />
      </div>
      <div className="flex pb-2">
        <div className="flex flex-wrap gap-1 items-center pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant={"outline"}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

const SkillHoverAction = ({
  name,
  description,
  skillLevel,
  tags,
}: SkillWrapperProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant={"link"} size={"sm"}>
          <ExternalLinkIcon size={12} />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4 divide-x">
          <div>
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-xs tracking-tighter">{skillLevel}</p>
          </div>
          <p className="text-sm pl-4">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

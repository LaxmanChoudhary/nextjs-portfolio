import { cn } from "@/lib/utils";
import React from "react";

function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className={cn("w-full lg:w-[60%]", className)}>
        <div className="my-7 mx-4 sm:mx-10 sm:my-8">{children}</div>
      </div>
    </div>
  );
}

export default Container;

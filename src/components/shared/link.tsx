import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { LinkHTMLAttributes } from "react";

export interface PLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  target?: string;
}

function PLink({ href, children, className, ...props }: PLinkProps) {
  return (
    <Link
      className={cn("text-purple-600 decoration-2 hover:underline", className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

export default PLink;

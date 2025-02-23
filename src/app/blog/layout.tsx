import Container from "@/components/shared/container";
import PLink from "@/components/shared/link";
import React from "react";

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Container>
        <article className="prose prose-sm max-w-5xl dark:prose-invert">
          {children}
        </article>
        <footer className="text-sm mt-8">
          <PLink href={"/"}>Back to home</PLink>
        </footer>
      </Container>
    </div>
  );
}

export default BlogLayout;

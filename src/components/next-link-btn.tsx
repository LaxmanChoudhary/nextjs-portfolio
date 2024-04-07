"use client"
import Link from "next/link";
import { Button, ButtonProps } from "./ui/button";
import { usePathname } from 'next/navigation'

interface NextLinkButtonProps extends ButtonProps {
  to: string;
}

export default function NextLinkButton({ to, children, ...props }: NextLinkButtonProps) {
  const pathname = usePathname()
  return (
    <Link href={to} className={`rounded-full ${pathname === to ? 'bg-secondary text-primary' : ''}`}>
      <Button variant={"link"} {...props}>{children}</Button>
    </Link>
  );
}

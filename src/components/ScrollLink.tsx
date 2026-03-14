'use client'
import { useEffect, useRef } from "react";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
}

export default function ScrollLink({ href, children, className, primary = false }: ScrollLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    linkRef.current?.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, [href]);

  return (
    <a
      ref={linkRef}
      href={href}
      className={`${className} ${primary ? 'bg-cyan-500 hover:bg-cyan-600' : 'bg-blue-500 hover:bg-blue-600'} px-6 py-3 rounded-full transition-colors text-white font-medium`}
    >
      {children}
    </a>
  );
}

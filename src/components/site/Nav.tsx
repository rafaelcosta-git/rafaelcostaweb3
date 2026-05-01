import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-ember animate-blink" />
          <span className="mono text-sm tracking-tight">rafael.costa</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm link-underline text-foreground/80 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:mingosrafael24@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 text-sm border border-ink/80 px-4 py-2 rounded-full hover:bg-ink hover:text-paper transition-colors duration-300"
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
};

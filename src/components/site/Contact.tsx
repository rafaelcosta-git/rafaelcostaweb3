import { useReveal } from "@/hooks/useReveal";

const links = [
  { label: "Email", value: "mingosrafael24@gmail.com", href: "mailto:mingosrafael24@gmail.com" },
  { label: "GitHub", value: "rafaelcosta-git", href: "https://github.com/rafaelcosta-git" },
  { label: "LinkedIn", value: "rafael-costa", href: "https://linkedin.com/in/rafael-costa-950a80321" },
];

export const Contact = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-ink text-paper overflow-hidden">
      {/* Ambient gradient inspired by the editorial reference */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/3 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-ember/30 via-ember-soft/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-ember-soft/20 via-ember/5 to-transparent blur-3xl" />
      </div>
      <div className="relative container">
        <div ref={ref} className="reveal">
          <p className="eyebrow text-paper/60 mb-6">— Let's talk</p>
          <h2 className="display text-5xl md:text-8xl lg:text-[10rem] leading-[0.95]">
            Let's <span className="italic font-light text-ember-soft">build</span>
            <br />
            something great together.
          </h2>

          <div className="mt-16 grid md:grid-cols-12 gap-8 items-end">
            <a
              href="mailto:mingosrafael24@gmail.com"
              className="md:col-span-6 group inline-flex items-center gap-4 text-2xl md:text-3xl border-b border-paper/30 pb-4 hover:border-ember transition-colors duration-500"
            >
              <span>mingosrafael24@gmail.com</span>
              <span className="ml-auto transition-transform duration-500 group-hover:translate-x-2 group-hover:text-ember">→</span>
            </a>
            <p className="md:col-span-4 md:col-start-9 text-paper/70 text-base">
              Open to junior full-stack roles, internships and freelance collaborations. I usually reply within 24 hours.
            </p>
          </div>

          <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group">
                <p className="eyebrow text-paper/50 mb-2">{l.label}</p>
                <p className="mono text-sm text-paper group-hover:text-ember transition-colors break-all">
                  {l.value} <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="container mt-32 pt-8 border-t border-paper/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <p className="mono text-xs text-paper/50">© {new Date().getFullYear()} Rafael Costa — Crafted with care.</p>
        <p className="mono text-xs text-paper/50">Junior Full Stack Web Developer · Portugal</p>
      </footer>
    </section>
  );
};

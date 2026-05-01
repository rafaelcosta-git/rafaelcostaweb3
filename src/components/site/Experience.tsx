import { useReveal } from "@/hooks/useReveal";

type Item = {
  index: string;
  year: string;
  title: string;
  org: string;
  role: string;
  bullets: string[];
  tags: string[];
};

const items: Item[] = [
  {
    index: "01",
    year: "2026",
    title: "Future Innovators Hackathon",
    org: "Unicorn Factory Lisboa × START Lisboa",
    role: "Frontend & Pitch",
    bullets: [
      "Built an MVP end-to-end in 24 hours as part of a multidisciplinary team.",
      "Reached the top 8 out of 26 competing teams.",
      "Owned frontend development and co-led the final pitch to the jury.",
    ],
    tags: ["Hackathon", "MVP", "Teamwork", "Pitching"],
  },
];

const ExperienceItem = ({ item }: { item: Item }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article ref={ref} className="reveal group border-t border-border py-12 md:py-16">
      <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="mono text-xs text-muted-foreground">{item.index}</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div>
              <p className="eyebrow">Year</p>
              <p className="mono text-sm mt-1">{item.year}</p>
            </div>
            <div>
              <p className="eyebrow">Role</p>
              <p className="mono text-sm mt-1">{item.role}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-9 md:col-start-4">
          <h3 className="display text-3xl md:text-5xl mb-2 transition-transform duration-700 group-hover:translate-x-1">
            {item.title}
          </h3>
          <p className="font-display italic text-lg md:text-xl text-ember mb-6">{item.org}</p>

          <ul className="space-y-2.5 mb-7">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                <span className="text-ember mt-1.5 shrink-0">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="mono text-xs px-3 py-1 border border-border rounded-full hover:border-ink hover:bg-ink hover:text-paper transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow mb-4">— Highlights</p>
            <h2 className="display text-5xl md:text-7xl">
              Experience, <span className="italic font-light">in the wild.</span>
            </h2>
          </div>
          <p className="hidden md:block mono text-sm text-muted-foreground">01 / 01</p>
        </div>

        <div>
          {items.map((it) => (
            <ExperienceItem key={it.index} item={it} />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

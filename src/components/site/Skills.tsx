import { useReveal } from "@/hooks/useReveal";

const groups = [
  { label: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { label: "Backend", items: ["Node.js", "PHP", "REST APIs"] },
  { label: "Database", items: ["MySQL"] },
  { label: "Web3", items: ["Solidity", "Web3.js", "Wagmi", "MetaMask"] },
  { label: "Tools", items: ["Git", "GitHub", "Vite", "Remix", "VS Code"] },
];

export const Skills = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <div className="mb-16">
          <p className="eyebrow mb-4">— Capabilities</p>
          <h2 className="display text-5xl md:text-7xl">
            Tools of the <span className="italic font-light">trade.</span>
          </h2>
        </div>

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className="bg-background p-6 md:p-8 hover:bg-paper-deep/60 transition-colors duration-500"
            >
              <div className="flex items-baseline gap-3 mb-5">
                <span className="mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="display text-2xl md:text-3xl">{g.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="mono text-xs px-2.5 py-1 border border-border rounded-full text-foreground/80 hover:border-ember hover:text-ember transition-colors duration-300"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

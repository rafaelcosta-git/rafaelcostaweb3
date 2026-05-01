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

        <div ref={ref} className="reveal divide-y divide-border border-y border-border">
          {groups.map((g, i) => (
            <div key={g.label} className="grid md:grid-cols-12 gap-6 py-8 group hover:bg-paper-deep/40 transition-colors duration-500 px-2 -mx-2">
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="display text-3xl md:text-4xl">{g.label}</h3>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-x-8 gap-y-3 items-center">
                {g.items.map((it) => (
                  <span key={it} className="text-lg md:text-xl text-foreground/80 hover:text-ember transition-colors duration-300 link-underline">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

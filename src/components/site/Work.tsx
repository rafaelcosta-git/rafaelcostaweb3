import { useReveal } from "@/hooks/useReveal";
import ecommercePreview from "@/assets/ecommerce-preview.png";

type Project = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  year: string;
  type: string;
  image?: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "E-commerce Platform",
    tagline: "Full-stack shopping experience",
    description:
      "A complete e-commerce web application featuring a product catalog, secure user authentication, and end-to-end order management — engineered with performance and user experience in mind.",
    stack: ["Node.js", "PHP", "MySQL", "JavaScript", "REST API"],
    highlights: ["Auth & sessions", "Product catalog", "Order management", "Performance focused"],
    year: "2024",
    type: "Full Stack",
    image: ecommercePreview,
  },
  {
    index: "02",
    title: "On-chain Voting dApp",
    tagline: "Decentralized governance",
    description:
      "A decentralized voting application powered by Solidity smart contracts deployed on testnet. Wallet-based authentication and transactions through MetaMask, with a reactive frontend wired to the chain.",
    stack: ["Solidity", "Web3.js", "Wagmi", "MetaMask", "React"],
    highlights: ["Smart contracts", "Testnet deployed", "Wallet auth", "On-chain transactions"],
    year: "2024",
    type: "Web3 / dApp",
  },
];

const ProjectCard = ({ p }: { p: Project }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal group border-t border-border py-12 md:py-16">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Left meta */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-6">
            <span className="mono text-xs text-muted-foreground">{p.index}</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="space-y-2">
            <p className="eyebrow">Year</p>
            <p className="mono text-sm">{p.year}</p>
            <p className="eyebrow pt-3">Type</p>
            <p className="mono text-sm">{p.type}</p>
          </div>
        </div>

        {/* Center content */}
        <div className="md:col-span-6">
          <h3 className="display text-5xl md:text-6xl lg:text-7xl mb-3 transition-transform duration-700 group-hover:translate-x-1" style={{ transitionTimingFunction: "var(--transition-smooth)" }}>
            {p.title}
          </h3>
          <p className="font-display italic text-xl text-ember mb-6">{p.tagline}</p>
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-xl">{p.description}</p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm">
                <span className="text-ember">→</span>
                <span className="text-foreground/80">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right stack */}
        <div className="md:col-span-3 md:text-right">
          <p className="eyebrow mb-4">Built with</p>
          <ul className="flex flex-wrap md:justify-end gap-2">
            {p.stack.map((s) => (
              <li key={s} className="mono text-xs px-3 py-1 border border-border rounded-full hover:border-ink hover:bg-ink hover:text-paper transition-colors duration-300">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Visual canvas */}
      <div className="mt-10 relative aspect-[21/9] overflow-hidden rounded-sm bg-paper-deep border border-border">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="display text-[20vw] md:text-[14vw] text-foreground/[0.06] select-none whitespace-nowrap">
            {p.title}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ember/10" />
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <span className="mono text-xs text-foreground/60">{p.index} / {p.type}</span>
          <a
            href={p.title.includes("Voting") ? "https://github.com/rafaelcosta-git" : "https://github.com/rafaelcosta-git"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mono text-xs link-underline"
          >
            View on GitHub <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow mb-4">— Selected Work</p>
            <h2 className="display text-5xl md:text-7xl">
              Projects, <span className="italic font-light">in detail.</span>
            </h2>
          </div>
          <p className="hidden md:block mono text-sm text-muted-foreground">
            02 / 02
          </p>
        </div>

        <div>
          {projects.map((p) => (
            <ProjectCard key={p.index} p={p} />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

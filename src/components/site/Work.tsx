import { useReveal } from "@/hooks/useReveal";
import ecommercePreview from "@/assets/ecommerce-preview.png";
import dappPreview from "@/assets/dapp-preview.png";

type Project = {
  index: string;
  title: string;
  tagline: string;
  bullets: string[];
  stack: string[];
  year: string;
  type: string;
  image?: string;
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "E-commerce Platform",
    tagline: "Full-stack shopping experience with auth & order management.",
    bullets: [
      "Built a full-stack e-commerce platform with authentication and order management.",
      "Implemented REST APIs and JWT-based authentication.",
      "Designed MySQL database structure for products, users and orders.",
    ],
    stack: ["Node.js", "PHP", "MySQL", "JavaScript", "REST API"],
    year: "2024",
    type: "Full Stack",
    image: ecommercePreview,
    github: "https://github.com/rafaelcosta-git",
  },
  {
    index: "02",
    title: "On-chain Voting dApp",
    tagline: "Decentralized governance powered by smart contracts.",
    bullets: [
      "Developed a decentralized voting app using Solidity smart contracts.",
      "Integrated MetaMask wallet authentication.",
      "Built frontend connected to blockchain using Wagmi / Web3.js.",
    ],
    stack: ["Solidity", "Web3.js", "Wagmi", "MetaMask", "React"],
    year: "2024",
    type: "Web3 / dApp",
    image: dappPreview,
    github: "https://github.com/rafaelcosta-git",
  },
];

const ProjectCard = ({ p }: { p: Project }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article ref={ref} className="reveal group border-t border-border py-14 md:py-20">
      <div className="grid md:grid-cols-12 gap-8 md:gap-10">
        {/* Left meta */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-6">
            <span className="mono text-xs text-muted-foreground">{p.index}</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div>
              <p className="eyebrow">Year</p>
              <p className="mono text-sm mt-1">{p.year}</p>
            </div>
            <div>
              <p className="eyebrow">Type</p>
              <p className="mono text-sm mt-1">{p.type}</p>
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="md:col-span-9">
          <h3
            className="display text-4xl md:text-6xl lg:text-7xl mb-3 transition-transform duration-700 group-hover:translate-x-1"
            style={{ transitionTimingFunction: "var(--transition-smooth)" }}
          >
            {p.title}
          </h3>
          <p className="font-display italic text-lg md:text-xl text-ember mb-8">{p.tagline}</p>

          <ul className="space-y-3 mb-8 max-w-2xl">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-base md:text-lg leading-relaxed text-foreground/85">
                <span className="text-ember mt-1.5 shrink-0">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-8">
            {p.stack.map((s) => (
              <span
                key={s}
                className="mono text-xs px-3 py-1 border border-border rounded-full hover:border-ink hover:bg-ink hover:text-paper transition-colors duration-300"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mono text-sm link-underline"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mono text-sm text-ember link-underline"
              >
                Live demo <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Visual preview */}
      {p.image && (
        <div className="mt-12 relative aspect-[21/9] overflow-hidden rounded-sm bg-paper-deep border border-border">
          <img
            src={p.image}
            alt={`${p.title} preview`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ember/10" />
        </div>
      )}
    </article>
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
          <p className="hidden md:block mono text-sm text-muted-foreground">02 / 02</p>
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

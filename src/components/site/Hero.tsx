export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-28 md:pt-48 md:pb-36 overflow-hidden">
      <div className="container">
        <div className="flex items-center gap-3 mb-10 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
          <span className="eyebrow">Available for work · Junior Full Stack Dev</span>
        </div>

        <h1
          className="display text-[12vw] md:text-[7.5vw] lg:text-[7rem] xl:text-[7.5rem] text-foreground/85 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Rafael <span className="italic font-light">Costa.</span>
        </h1>

        <div className="mt-10 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-9 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <p className="display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              I build <span className="italic font-light">scalable web applications</span> — from{" "}
              REST APIs and authentication systems to{" "}
              <span className="italic font-light">on-chain Web3 integrations.</span>
            </p>
            <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
              Junior Full Stack Developer shipping production-ready features end-to-end with React, Node.js, TypeScript and Solidity.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 rounded-full hover:bg-ember transition-colors duration-500"
              >
                <span className="mono text-sm uppercase tracking-wider">View Projects</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-2 py-4 mono text-sm uppercase tracking-wider link-underline"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div
            className="md:col-span-4 md:col-start-9 flex flex-col gap-3 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="eyebrow">Based in</span>
              <span className="mono text-sm">Portugal</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="eyebrow">Stack</span>
              <span className="mono text-sm">JS · TS · Web3</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="eyebrow">Status</span>
              <span className="mono text-sm text-ember">Open to roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

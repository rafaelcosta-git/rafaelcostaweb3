export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container">
        <div className="flex items-center gap-3 mb-10 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          <span className="eyebrow">Available for work · Junior Full Stack Dev</span>
        </div>

        <h1 className="display text-[15vw] md:text-[10vw] lg:text-[9.2rem] xl:text-[11rem] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Rafael
          <br />
          <span className="italic font-light">Costa.</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-7 lg:col-span-6 text-xl md:text-2xl leading-snug text-foreground/85 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            I build full-stack web applications with{" "}
            <span className="italic font-display">React, Node.js</span> and{" "}
            <span className="italic font-display">TypeScript</span> — from authentication and APIs to SQL databases and on-chain dApps.
          </p>
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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

      {/* Marquee */}
      <div className="mt-24 md:mt-32 border-y border-border py-6 overflow-hidden bg-paper-deep/40">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["React", "TypeScript", "Node.js", "Solidity", "MySQL", "Wagmi", "PHP", "Vite", "REST APIs", "MetaMask"].map((s) => (
                <span key={s} className="display text-4xl md:text-5xl text-foreground/70">
                  {s} <span className="text-ember">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

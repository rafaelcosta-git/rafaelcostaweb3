import { useReveal } from "@/hooks/useReveal";

export const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-32 bg-paper-deep/50 border-y border-border">
      <div className="container">
        <div ref={ref} className="reveal grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">— About</p>
            <h2 className="display text-5xl md:text-6xl">
              The <span className="italic font-light">developer</span> behind the code.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              Junior Full Stack Developer focused on the{" "}
              <span className="italic font-display">JavaScript ecosystem</span> — React, Node.js and TypeScript. I enjoy building things that actually work in production: auth flows, REST APIs, database schemas and on-chain integrations.
            </p>
            <p className="text-foreground/75">
              Right now I'm sharpening my <span className="font-medium text-foreground">backend architecture</span> skills and going deeper into <span className="font-medium text-foreground">Web3 development</span> with Solidity and Wagmi — bridging traditional full-stack with decentralized systems.
            </p>
            <p className="text-foreground/75">
              I took part in the{" "}
              <span className="font-medium text-foreground">Future Innovators Hackathon</span> (Unicorn Factory Lisboa &amp; START Lisbon), shipping an MVP in 24 hours, and previously volunteered at <span className="font-medium text-foreground">START Summit (Switzerland)</span>.
            </p>
            <p className="text-foreground/75">
              Looking for <span className="font-medium text-foreground">junior full-stack roles</span> or <span className="font-medium text-foreground">freelance collaborations</span> where I can ship real product and keep growing fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

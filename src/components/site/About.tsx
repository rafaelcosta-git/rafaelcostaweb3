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
              <span className="italic font-display">JavaScript ecosystem</span> — React, Node.js and TypeScript. I ship complete features end-to-end: auth, APIs, databases and on-chain integrations.
            </p>
            <p className="text-foreground/75">
              I participated in the{" "}
              <span className="font-medium text-foreground">Future Innovators Hackathon</span> (Unicorn Factory Lisboa &amp; START Lisbon), where I helped build an MVP in 24 hours and contributed to both frontend development and pitching in a fast-paced environment.
            </p>
            <p className="text-foreground/75">
              Previously volunteered at <span className="font-medium text-foreground">START Summit (Switzerland)</span> — international, high-pressure environments where teamwork and clear communication matter most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

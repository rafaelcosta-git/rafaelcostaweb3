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
              I'm a Junior Full Stack Web Developer with a strong focus on the JavaScript ecosystem —{" "}
              <span className="italic font-display">React, Node.js</span> and{" "}
              <span className="italic font-display">TypeScript</span>. My hands-on work spans authentication, API integration and SQL database management.
            </p>
            <p className="text-foreground/75">
              I've shipped a full-stack e-commerce platform and a decentralized voting dApp on testnet — and I'm currently focused on sharpening my craft and finding the right opportunity to grow as a developer.
            </p>
            <p className="text-foreground/75">
              Off-screen, I volunteered at <span className="font-medium text-foreground">START Summit (Switzerland)</span>, where I learned to thrive in international, high-pressure environments through teamwork and clear communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

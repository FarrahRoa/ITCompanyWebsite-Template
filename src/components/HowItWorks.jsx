import Reveal, { Stagger, StaggerItem } from "./Reveal";

export default function HowItWorks() {
  const steps = [
    { step: "01", title: "Intro call", desc: "Twenty minutes with an engineer. You describe your environment and what's not working; we tell you honestly whether we can help." },
    { step: "02", title: "Assessment & plan", desc: "An environment review or site survey, then a fixed-scope proposal — services, timelines and pricing in plain English." },
    { step: "03", title: "Delivery", desc: "Onboarding or project execution with a named lead, clear milestones, and documentation you actually receive." },
  ];

  return (
    <section id="how-it-works" className="relative py-12 lg:py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="max-w-3xl mb-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight">HOW IT WORKS</h2>
          <h3 className="mt-3 font-heading text-2xl font-semibold">Starting is simple.</h3>
        </Reveal>

        <Stagger className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch mt-6">
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <article className="group relative flex h-full min-h-[200px] rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-mono text-primary/90 font-semibold">STEP {s.step}</div>
                    <div className="text-2xl font-heading font-bold text-primary/80">{s.step}</div>
                  </div>
                  <h4 className="font-heading text-lg font-semibold mb-2">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

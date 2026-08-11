import Reveal, { Stagger, StaggerItem } from "./Reveal";

export default function TrackRecord() {
  const cards = [
    {
      category: "Retail",
      title: "National retail estate",
      desc: "Multi-site wireless survey and heat-mapping programme with per-site remediation plans.",
    },
    {
      category: "Energy",
      title: "Energy sector site",
      desc: "Switch and server installation, rack and stack, and structured cabling inside a live enterprise change programme.",
    },
    {
      category: "Professional services",
      title: "Corporate relocation",
      desc: "Full office IT move: decommission, secure erasure, transport, re-rack — users live the same week.",
    },
  ];

  const tags = ["Retail", "Energy", "Manufacturing", "Data Centres", "Professional Services"];

  return (
    <section id="track-record" className="relative py-16 lg:py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="max-w-3xl mb-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight">TRACK RECORD</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Scylla has delivered field engineering and infrastructure work inside major enterprise programmes — across retail, energy, manufacturing and data-centre environments, including multi-site projects delivered alongside global IT partners, with engineers deployed across the UK and Europe.
          </p>
          <p className="mt-3 text-muted-foreground">We don't publish client logos without permission. We'd rather show you the work:</p>
        </Reveal>

        <Stagger className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch">
          {cards.map((c, i) => (
            <StaggerItem key={c.title}>
              <article className="group relative flex h-full min-h-[220px] rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
                <div className="flex flex-col h-full">
                  <span className="font-mono-label text-muted-foreground/80 mb-3">{c.category}</span>
                  <h3 className="font-heading text-lg font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {tags.map((t) => (
            <span key={t} className="text-sm px-3 py-1 rounded-full border border-border/50 bg-muted/20 text-muted-foreground">{t}</span>
          ))}
        </div>

        <div className="mt-4 text-sm text-muted-foreground">References available on request.</div>
      </div>
    </section>
  );
}

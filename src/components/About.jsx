import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-12 lg:py-20 bg-muted/30 scroll-mt-28">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <Reveal>
              <span className="font-mono-label text-primary">Why Scylla (ABOUT US)</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">One partner. No vendor seams.</h2>
              <p className="mt-4 text-muted-foreground text-lg">Most businesses end up with one supplier for licences, another for support, and a third for anything involving a rack or a ladder. When something breaks at the seams, everyone points at everyone else — and you're the one holding the outage.</p>
              <p className="mt-3 text-muted-foreground text-lg">Scylla was built so there are no seams. The people who sold you the license, the people who answer your tickets, and the people who terminate your fiber work for the same company, under the same contract. One number to call. One team accountable for the result.</p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="flex flex-col gap-4">
                {[
                  { n: "01", title: "Supply", desc: "Licensing & procurement through direct partnerships" },
                  { n: "02", title: "Manage", desc: "Helpdesk, monitoring, patching and protection" },
                  { n: "03", title: "Install", desc: "Engineers on site — surveys, builds, moves, decommissions" },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card/50 shadow-sm h-28 w-full">
                    <div className="flex-shrink-0 w-14 h-14 rounded-md grid place-items-center bg-primary/5 text-primary font-mono-label font-semibold text-lg">{item.n}</div>
                    <div className="flex-1">
                      <div className="font-heading font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
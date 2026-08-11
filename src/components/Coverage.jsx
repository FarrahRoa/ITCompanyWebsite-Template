import Reveal from "./Reveal";
import CoverageNetwork from "./visuals/CoverageNetwork";

export default function Coverage() {
  return (
    <section id="coverage" className="relative py-12 lg:py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <Reveal>
              <div className="font-mono-label text-primary text-sm uppercase mb-3">COVERAGE</div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">UK-based. Delivering across Europe.</h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Scylla is headquartered at Trinity Buoy Wharf, London, with engineers placed across Europe and global partners for international sites. For multi-site and multi-country businesses that means one contract, one standard of work, and one team coordinating the lot.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-[11px] font-mono-label uppercase tracking-[0.28em] text-muted-foreground mb-1">Head office</div>
                  <div className="font-semibold">London, UK</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono-label uppercase tracking-[0.28em] text-muted-foreground mb-1">Field engineers</div>
                  <div className="font-semibold">UK & Europe</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono-label uppercase tracking-[0.28em] text-muted-foreground mb-1">International sites</div>
                  <div className="font-semibold">Global partner network</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="w-full">
            <Reveal>
              <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
                <CoverageNetwork />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

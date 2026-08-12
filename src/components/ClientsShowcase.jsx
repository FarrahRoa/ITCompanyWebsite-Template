import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { clients, partners } from "@/data";

export default function ClientsShowcase() {
  const marqueeItems = [...clients.items, ...clients.items];
  const orderedPartners = [
    "Microsoft Partner",
    "Google",
    "Bitdefender",
    "Ubiquiti",
    "Marblism",
    "Cisco Meraki",
  ].map((name) => partners.items.find((partner) => partner.name === name)).filter(Boolean);

  return (
    <section id="clients" className="relative py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono-label text-primary">{clients.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {clients.title} <span className="text-gradient">{clients.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{clients.description}</p>
        </Reveal>

        <div className="space-y-10">
          <div className="rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-lg shadow-primary/5">
            <div className="text-center max-w-3xl mx-auto">
              <span className="font-mono-label text-primary">{partners.eyebrow}</span>
              <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight">
                {partners.title} <span className="text-gradient">{partners.titleAccent}</span>
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Our technology partners support the infrastructure, security, and cloud services we deploy for every client.
              </p>
            </div>

            <div className="mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
              {orderedPartners.map((partner) => (
                <motion.div
                  key={partner.name}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="h-full flex items-center gap-4 rounded-3xl border border-border/70 bg-background/70 p-4 shadow-sm shadow-primary/5"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-3xl bg-primary/10 text-primary font-semibold">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-9 w-9 object-contain"
                      />
                    ) : (
                      partner.name.split(" ").map((word) => word[0]).join("").toUpperCase()
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-semibold truncate">{partner.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{partner.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/70 p-6 sm:p-8 shadow-lg shadow-primary/5">
            <div className="text-center max-w-3xl mx-auto">
              <span className="font-mono-label text-primary">{clients.eyebrow}</span>
              <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight">
                {clients.title} <span className="text-gradient">{clients.titleAccent}</span>
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">{clients.description}</p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border/70 bg-background/70 p-4">
              <div className="relative overflow-hidden h-[260px] sm:h-[280px] lg:h-[300px]">
                <div className="marquee-track flex h-full items-center gap-4 sm:gap-5">
                  {marqueeItems.map((client, index) => (
                    <motion.div
                      key={`${client.name}-${index}`}
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="min-w-[220px] max-w-[220px] h-[220px] sm:min-w-[240px] sm:max-w-[240px] sm:h-[240px] rounded-2xl border border-border/70 bg-card/70 p-5 text-center shadow-sm shadow-primary/5 grayscale transition-all duration-300 hover:grayscale-0 flex flex-col"
                      aria-hidden={index >= clients.items.length}
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border/70 bg-white/70 text-lg font-semibold tracking-[0.3em] text-muted-foreground transition-all duration-300 group-hover:text-primary">
                        {client.logo ? (
                          <img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="h-10 w-10 object-contain"
                          />
                        ) : (
                          client.name.slice(0, 2).toUpperCase()
                        )}
                      </div>
                      <div className="mt-6 flex-1 flex flex-col justify-start">
                        <h3 className="font-heading text-base font-semibold">{client.name}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

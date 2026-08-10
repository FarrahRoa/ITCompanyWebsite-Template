import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/data";

export default function ServicesPreview() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="max-w-3xl mb-12">
          <span className="font-mono-label text-primary">{services.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {services.title} <span className="text-gradient">{services.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{services.description}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.featured.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative h-full rounded-3xl border border-border/70 bg-card/70 p-6 shadow-lg shadow-primary/5"
                >
                  <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    See details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25">
            View full services <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Request a tailored support plan
          </a>
        </Reveal>
      </div>
    </section>
  );
}

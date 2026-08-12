import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { technologies } from "@/data";

export default function Technologies() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="font-mono-label text-primary">{technologies.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {technologies.title} <span className="text-gradient">{technologies.titleAccent}</span>
          </h2>
        </Reveal>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {technologies.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-8 text-center shadow-lg shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-60" />
                <div className="relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-background/70 text-lg font-semibold tracking-[0.25em] text-primary">
                    {item.logo && item.logo.startsWith("/") ? (
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="h-9 w-9 object-contain"
                      />
                    ) : (
                      item.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()
                    )}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
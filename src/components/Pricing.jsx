import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import MagneticButton from "./MagneticButton";
import { pricing } from "@/data";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 lg:py-24 bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono-label text-primary">{pricing.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {pricing.title} <span className="text-gradient">{pricing.titleAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{pricing.description}</p>
        </Reveal>

        <Stagger className="grid lg:grid-cols-3 gap-6 items-center">
          {pricing.plans.map((p) => (
            <StaggerItem key={p.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative h-full rounded-3xl p-8 overflow-hidden ${
                  p.highlight
                    ? "bg-gradient-to-b from-primary to-secondary text-primary-foreground shadow-2xl shadow-primary/30 lg:scale-105"
                    : "glass"
                }`}
              >
                {p.highlight && (
                  <div className="absolute top-6 right-6 flex items-center gap-1 glass rounded-full px-3 py-1 text-xs font-semibold text-primary">
                    <Sparkles className="w-3.5 h-3.5" /> Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-bold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-heading text-4xl font-extrabold">{p.price}</span>
                  <span className={`mb-1 text-sm ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${p.highlight ? "text-chart-3" : "text-accent"}`} />
                      <span className={p.highlight ? "text-primary-foreground/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  as="a"
                  href="#contact"
                  className={`mt-8 w-full inline-flex justify-center items-center px-6 py-3 rounded-full font-semibold transition-all ${
                    p.highlight
                      ? "bg-primary-foreground text-primary hover:opacity-90"
                      : "btn-gradient"
                  }`}
                >
                  {p.cta}
                </MagneticButton>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
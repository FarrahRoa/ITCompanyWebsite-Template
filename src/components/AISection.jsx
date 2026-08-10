import { motion } from "framer-motion";
import { BrainCircuit, Bot, Workflow, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { ai } from "@/data";

const icons = [BrainCircuit, Bot, Workflow, ShieldCheck, Sparkles];

export default function AISection() {
  return (
    <section id="ai-team" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <Reveal className="max-w-3xl mb-12">
          <span className="font-mono-label text-primary">{ai.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {ai.title} <span className="text-gradient">{ai.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{ai.description}</p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
            {ai.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group relative rounded-3xl border border-border/70 bg-card/70 p-6 shadow-lg shadow-primary/5 h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono-label text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{item.desc}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl border border-border/70 bg-background/70 p-8 shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.2),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent_45%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Sparkles className="w-4 h-4" />
                  Intelligent workflow layer
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold">Practical AI, not hype</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We design AI assistants, automation flows, and integration strategies around real operations — from service desks to client communications and internal process optimization.
                </p>
                <div className="mt-8 space-y-3">
                  {ai.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm text-foreground">
                      <span className="grid place-items-center w-8 h-8 rounded-full bg-accent/15 text-accent">
                        <Workflow className="w-4 h-4" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

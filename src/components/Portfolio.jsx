import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import PortfolioVisual from "./visuals/PortfolioVisual";
import { portfolio } from "@/data";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const projects = Array.isArray(portfolio?.projects) ? portfolio.projects : [];
  const categoryOptions = ["All", ...(Array.isArray(portfolio?.categories) ? portfolio.categories : [])];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="font-mono-label text-primary">{portfolio.eyebrow}</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {portfolio.title} <span className="text-gradient">{portfolio.titleAccent}</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.title}
                href="#contact"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden glass aspect-[4/3]"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <PortfolioVisual index={i} label={p.title} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="grid place-items-center h-9 w-9 rounded-full bg-white/10 text-white backdrop-blur">
                    <p.icon className="w-4 h-4" />
                  </span>
                  <span className="glass rounded-full px-3 py-1 font-mono-label text-primary">{p.category}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                      <p className="text-sm text-white/70 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">{p.desc}</p>
                    </div>
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-white/10 backdrop-blur shrink-0 group-hover:bg-primary group-hover:rotate-45 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
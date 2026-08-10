import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { blog } from "@/data";

export default function BlogPreview() {
  return (
    <section id="blog" className="relative py-16 lg:py-24 bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="font-mono-label text-primary">{blog.eyebrow}</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {blog.title} <span className="text-gradient">{blog.titleAccent}</span>
            </h2>
          </div>
          <a href="#blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
            {blog.allArticlesLabel} <ArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.posts.map((p) => (
            <StaggerItem key={p.title}>
              <motion.a
                href="#blog"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group block h-full rounded-2xl glass overflow-hidden"
              >
                <div className="relative h-44 bg-gradient-to-br from-primary/20 via-secondary/15 to-chart-3/20 overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading font-extrabold text-5xl text-primary/10 group-hover:scale-110 transition-transform">{p.tag[0]}</span>
                  </div>
                  <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 font-mono-label text-primary">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {p.date}</span>
                    <span>{p.read} read</span>
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
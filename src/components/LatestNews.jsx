import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { news } from "@/data";

const categoryStyles = {
  "Company News": "bg-primary/10 text-primary",
  "Project Updates": "bg-secondary/15 text-secondary",
  "IT Tips": "bg-accent/20 text-accent-foreground",
  Cybersecurity: "bg-chart-3/15 text-chart-3",
  "AI & Automation": "bg-chart-4/20 text-chart-4",
  Events: "bg-chart-5/20 text-chart-5",
};

export default function LatestNews() {
  const allPosts = news.items;
  let featuredPosts = allPosts.filter((item) => item.featured);
  if (featuredPosts.length < 2) {
    const needed = 2 - featuredPosts.length;
    featuredPosts = [...featuredPosts, ...allPosts.filter((i) => !i.featured).slice(0, needed)];
  }
  featuredPosts = featuredPosts.slice(0, 2);

  const featuredIds = new Set(featuredPosts.map((p) => p.id));
  const regularPosts = allPosts.filter((item) => !featuredIds.has(item.id)).slice(0, 3);

  return (
    <section id="news" className="relative py-16 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="max-w-3xl mb-12">
          <span className="font-mono-label text-primary">{news.eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {news.title} <span className="text-gradient">{news.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{news.description}</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,1fr)]">
          <div className="grid gap-6">
            {featuredPosts[0] && (
              <Reveal delay={0.05}>
                <motion.a
                  href={featuredPosts[0].url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -8, scale: 1.005 }}
                  className="group block h-full overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-3 shadow-2xl shadow-primary/10"
                >
                <div className="relative overflow-hidden rounded-[1.5rem] h-full">
                  <img
                    src={featuredPosts[0].image}
                    alt={featuredPosts[0].title}
                    loading="lazy"
                    className="h-48 sm:h-56 md:h-64 lg:h-44 xl:h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent" />
                  <div className="absolute left-4 top-4 z-20 inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                    {featuredPosts[0].platform}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className={`relative z-10 mb-4 block rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[featuredPosts[0].category] || "bg-primary/10 text-primary"}`}>
                      {featuredPosts[0].category}
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{featuredPosts[0].title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{featuredPosts[0].excerpt}</p>
                    <div className="mt-6 flex items-center justify-between text-sm text-white/75">
                      <span>{featuredPosts[0].date}</span>
                      <span className="inline-flex items-center gap-2 font-semibold text-white">
                        Read More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          )}

          {featuredPosts[1] && (
            <Reveal delay={0.06}>
              <motion.a
                href={featuredPosts[1].url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8, scale: 1.005 }}
                className="group block h-full overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-3 shadow-2xl shadow-primary/10"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] h-full">
                  <img
                    src={featuredPosts[1].image}
                    alt={featuredPosts[1].title}
                    loading="lazy"
                    className="h-48 sm:h-56 md:h-64 lg:h-44 xl:h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent" />
                  <div className="absolute left-4 top-4 z-20 inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                    {featuredPosts[1].platform}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className={`relative z-10 mb-4 block rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[featuredPosts[1].category] || "bg-primary/10 text-primary"}`}>
                      {featuredPosts[1].category}
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{featuredPosts[1].title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{featuredPosts[1].excerpt}</p>
                    <div className="mt-6 flex items-center justify-between text-sm text-white/75">
                      <span>{featuredPosts[1].date}</span>
                      <span className="inline-flex items-center gap-2 font-semibold text-white">
                        Read More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          )}
          </div>

          <div className="grid gap-6">
            {regularPosts.map((item, index) => (
              <Reveal key={item.id} delay={0.06 + index * 0.04}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.005 }}
                  className="group h-full overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/70 p-5 shadow-lg shadow-primary/5"
                >
                <div className="flex h-full gap-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block h-24 w-24 shrink-0 overflow-hidden rounded-2xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </a>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryStyles[item.category] || "bg-primary/10 text-primary"}`}>
                        {item.category}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{item.platform}</span>
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.date}</span>
                      <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary">
                        Read More <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
          </div>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 text-center shadow-lg shadow-primary/5 lg:p-10">
            <h3 className="font-heading text-2xl font-semibold">{news.ctaTitle}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">{news.ctaDescription}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {news.socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

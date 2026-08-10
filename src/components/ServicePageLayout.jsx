import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import CursorGlow from "./CursorGlow";

export default function ServicePageLayout({
  eyebrow,
  title,
  heroTitle,
  heroDescription,
  heroStats,
  features,
  benefits,
  ctaTitle,
  ctaDescription,
}) {
  return (
    <div className="relative overflow-x-clip">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(47,128,209,0.12),transparent_45%)]" />
          <div className="container mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="font-mono-label text-primary">{eyebrow}</span>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{heroDescription}</p>
            </motion.div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + index * 0.06 }}
                  className="glass rounded-2xl border border-border/70 p-6 shadow-lg shadow-primary/5"
                >
                  <div className="font-mono-label text-primary">{item.label}</div>
                  <div className="mt-3 font-heading text-2xl font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 + index * 0.04 }}
                  whileHover={{ y: -6, scale: 1.005 }}
                  className="rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-lg shadow-primary/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <h2 className="font-heading text-xl font-semibold">{feature.title}</h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 shadow-lg shadow-primary/5 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <span className="font-mono-label text-primary">Why it matters</span>
                  <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">{title}</h2>
                  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    Premium, scalable service delivery designed to support modern teams with clarity, efficiency, and dependable execution.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-card/70 p-6">
                  <div className="space-y-3">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-background/70 p-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-[2rem] border border-border/70 bg-card/70 p-8 text-center shadow-lg shadow-primary/5 lg:p-10"
            >
              <h3 className="font-heading text-2xl font-semibold">{ctaTitle}</h3>
              <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">{ctaDescription}</p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="pb-24 lg:pb-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 shadow-lg shadow-primary/5 lg:p-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <span className="font-mono-label text-primary">Contact</span>
                  <h2 className="mt-2 font-heading text-3xl font-semibold">Let’s build the right solution together</h2>
                </div>
                <a href="mailto:hello@company.com" className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary">
                  hello@company.com <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

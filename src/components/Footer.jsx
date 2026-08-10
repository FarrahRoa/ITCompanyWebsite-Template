import { useState } from "react";
import { Hexagon, ArrowRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { footer, brand } from "@/data";

// generic placeholder code shown faintly in the footer background
const codeLines = [
  "export function build(project: Project) {",
  "  const plan = architect.design(project.requirements);",
  "  const team = assemble.squad(plan.skills);",
  "  return deliver.iterate(plan, team);",
  "}",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3000);
  };

  const [first, ...rest] = brand.name.split(" ");

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* faint code background */}
      <div className="absolute inset-0 opacity-[0.03] font-mono text-xs leading-relaxed p-8 select-none whitespace-pre-wrap break-all">
        {(codeLines.join("\n") + "\n").repeat(30)}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950" />

      <div className="relative container mx-auto px-6 max-w-7xl py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* brand + newsletter */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30">
                <Hexagon className="w-5 h-5" />
              </span>
              <span className="font-heading font-bold text-lg text-white">
                {first}
                {rest.length > 0 && <span className="text-gradient">{" "}{rest.join(" ")}</span>}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">{footer.description}</p>

            <form onSubmit={subscribe} className="mt-6">
              <div className="font-mono-label text-slate-500 mb-2">{footer.newsletterLabel}</div>
              <div className="relative flex items-center glass rounded-full p-1 pl-4 max-w-sm border border-white/10">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={footer.newsletterPlaceholder}
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-500 outline-none"
                />
                <button type="submit" className="grid place-items-center w-9 h-9 rounded-full btn-gradient hover:scale-105 transition-transform shrink-0" aria-label="Subscribe">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {done && <p className="mt-2 text-xs text-accent">{footer.newsletterDone}</p>}
            </form>

            <div className="flex gap-3 mt-6">
              {footer.socials.map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center w-9 h-9 rounded-full glass border border-white/10 text-slate-400 hover:text-white hover:border-primary/50 transition-colors" aria-label="Social link">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footer.columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono-label text-slate-500 mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors">
                        <span className="relative">
                          {l}
                          <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>{footer.legal}</p>
            <div className="flex gap-6">
              {footer.links.map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { footer } from "@/data/footer";

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

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const subscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3000);
  };

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
              <img src="/Scylla_Logo_Color.png" alt="Scylla" className="h-10 w-auto object-contain" />
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
              {footer.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center w-9 h-9 rounded-full glass border border-white/10 text-slate-400 hover:text-white hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footer.columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono-label text-slate-500 mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors">
                        <span className="relative">
                          {l.label}
                          <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-mono-label text-slate-500 mb-4">{footer.contact.title}</h4>
              <div className="space-y-2 text-sm text-slate-400">
                {footer.contact.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
                <div>
                  <a href={`mailto:${footer.contact.email}`} className="hover:text-white transition-colors">{footer.contact.email}</a>
                </div>
                <div>
                  <a href={`tel:${footer.contact.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">{footer.contact.phone}</a>
                </div>
                <div>{footer.contact.hours}</div>
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>{footer.legal}</p>
            <div className="flex gap-6">
              {footer.links.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
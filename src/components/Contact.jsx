import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { contact } from "@/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.service) e.service = "Select a service";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1400);
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info + map */}
          <Reveal>
            <span className="font-mono-label text-primary">{contact.eyebrow}</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {contact.title} <span className="text-gradient">{contact.titleAccent}</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">{contact.description}</p>

            <div className="mt-8 space-y-4">
              {contact.details.map((d) => (
                <ContactRow key={d.label} {...d} />
              ))}
            </div>

            {contact.socials?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {contact.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border/70 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}

            {/* Map placeholder */}
            <div className="mt-8 relative h-56 rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 grid-pattern opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="relative grid place-items-center w-14 h-14 mx-auto rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 animate-float">
                    <MapPin className="w-6 h-6" />
                    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  </span>
                  <p className="mt-3 font-mono-label text-muted-foreground">{contact.mapLabel}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-3xl p-10 text-center min-h-[460px] flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="grid place-items-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-5"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold">{contact.success.title}</h3>
                  <p className="mt-2 text-muted-foreground">{contact.success.body}</p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" }); }}
                    className="mt-6 text-sm font-semibold text-primary hover:underline"
                  >
                    {contact.success.again}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={submit}
                  className="glass rounded-3xl p-6 sm:p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" error={errors.name}>
                      <input value={form.name} onChange={set("name")} className="peer/input w-full bg-transparent pt-6 pb-2 px-4 outline-none" placeholder="Jane Doe" />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <input type="email" value={form.email} onChange={set("email")} className="peer/input w-full bg-transparent pt-6 pb-2 px-4 outline-none" placeholder="jane@company.com" />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Company" required={false}>
                      <input value={form.company} onChange={set("company")} className="peer/input w-full bg-transparent pt-6 pb-2 px-4 outline-none" placeholder="Acme Inc." />
                    </Field>
                    <Field label="Phone" required={false}>
                      <input value={form.phone} onChange={set("phone")} className="peer/input w-full bg-transparent pt-6 pb-2 px-4 outline-none" placeholder="+1 555 000 0000" />
                    </Field>
                  </div>
                  <Field label="Service" error={errors.service}>
                    <select value={form.service} onChange={set("service")} className="peer/input w-full bg-transparent pt-6 pb-2 px-4 outline-none appearance-none">
                      <option value="" className="bg-background">Select a service…</option>
                      {contact.services.map((s) => <option key={s} value={s} className="bg-background">{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Message" error={errors.message}>
                    <textarea value={form.message} onChange={set("message")} rows={4} className="peer/input w-full bg-transparent pt-6 pb-2 px-4 outline-none resize-none" placeholder="Tell us about your project…" />
                  </Field>

                  <MagneticButton
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-full font-semibold btn-gradient disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                    ) : (
                      <>Send message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                    )}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, required = true, children }) {
  return (
    <label className="relative block rounded-xl border border-input bg-card/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all overflow-hidden">
      <span className={`absolute left-4 top-2 font-mono-label transition-color peer-focus/input:text-primary ${error ? "text-destructive" : "text-muted-foreground"}`}>
        {label}{required && " *"}
      </span>
      {children}
      {error && <span className="absolute right-4 top-3 text-xs text-destructive font-medium">{error}</span>}
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-card transition-colors">
      <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <div className="font-mono-label text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
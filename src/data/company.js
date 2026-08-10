import {
  ShieldCheck, Lightbulb, Target, Eye, Award,
  Users, Repeat, Headphones, CloudCog, Cpu,
  Atom, Boxes, Container, Database, FileCode2, Layers, Cloud,
  Search, Map, PenTool, Code2, FlaskConical, Rocket, Wrench,
  Mail, Phone, MapPin,
  Twitter, Github, Linkedin, Youtube,
} from "lucide-react";

export const brand = {
  name: "Scylla",
  tagline: "UK-BASED IT DELIVERY PARTNER",
  rotatingWords: ["Reliable", "Secure", "Scalable", "Modern"],
};

export const hero = {
  badge: "UK-BASED IT DELIVERY PARTNER",
  headlineLines: ["From the license", "to the last cable."],
  headlineLead: "Designed to scale",
  subtitle:
    "Scylla supplies and supports Microsoft 365, Google Workspace and security licensing, runs your day-to-day IT, and puts engineers on site for surveys, installs, rollouts and decommissions. One partner, one point of accountability.",
  primaryCta: { label: "Contact Us", href: "#contact" },
  secondaryCta: { label: "Learn More", href: "#about" },
  trust: ["24/7 Support Coverage", "Trusted Partnerships", "Flexible Delivery"],
  stats: [
    { label: "Projects", value: "250+" },
    { label: "Response", value: "Fast" },
  ],
  status: "Monitoring and support ready for your next project",
};

export const about = {
  eyebrow: "/ About Us",
  title: "Delivering dependable",
  titleAccent: "IT experiences",
  description:
    "We are a professional technology partner focused on infrastructure, managed services, cybersecurity, and digital solutions that help organizations operate with confidence.",
  pillars: [
    { icon: Target, title: "Company Overview", text: "A trusted delivery partner for IT infrastructure, support, and technology transformation across modern organizations." },
    { icon: Eye, title: "Mission", text: "To keep every client environment reliable, secure, and ready for growth through proactive support and strategic execution." },
    { icon: Award, title: "Vision", text: "To become the go-to technology partner for organizations needing calm, confident, and future-ready IT operations." },
    { icon: ShieldCheck, title: "Core Values", text: "Integrity, responsiveness, precision, and long-term partnership guide everything we do." },
    { icon: Users, title: "Why Choose Us", text: "We combine enterprise-grade delivery with personalized service, fast response times, and a consultative approach." },
  ],
  badge: { label: "Flexible Delivery", value: "On-site & remote", sub: "Adaptable to your business needs" },
  stats: [
    { value: 250, suffix: "+", label: "Projects Completed" },
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 180, suffix: "+", label: "Happy Clients" },
    { value: 12000, suffix: "+", label: "Support Tickets Resolved" },
  ],
};

export const process = {
  eyebrow: "/ Our Process",
  title: "From idea to",
  titleAccent: "launch",
  description:
    "A clear, transparent delivery process that keeps you informed at every stage of the project.",
  steps: [
    { icon: Search, title: "Discovery", desc: "We learn about your business, goals, and requirements to define the problem clearly." },
    { icon: Map, title: "Planning", desc: "We create a roadmap, architecture, and milestones aligned to your objectives." },
    { icon: PenTool, title: "Design", desc: "We craft intuitive interfaces and data models focused on clarity and usability." },
    { icon: Code2, title: "Development", desc: "We build in iterative sprints with continuous integration from day one." },
    { icon: FlaskConical, title: "Testing", desc: "We run automated, security, and performance tests across all scenarios." },
    { icon: Rocket, title: "Deployment", desc: "We launch with zero-downtime rollouts and safe rollback options." },
    { icon: Wrench, title: "Maintenance", desc: "We provide ongoing support, monitoring, and continuous improvement." },
  ],
};

export const whyChooseUs = {
  eyebrow: "/ Why Choose Us",
  title: "The advantages of",
  titleAccent: "working with us",
  description: "A few reasons businesses trust us to deliver their most important projects.",
  features: [
    { icon: Users, title: "Experienced Team", desc: "Senior engineers and designers with years of hands-on project experience." },
    { icon: Repeat, title: "Agile Delivery", desc: "Short, transparent sprints with regular demos — no black-box timelines." },
    { icon: ShieldCheck, title: "Secure by Default", desc: "Security best practices and compliance built into every project." },
    { icon: Headphones, title: "Responsive Support", desc: "Fast response times and clear communication throughout the engagement." },
    { icon: CloudCog, title: "Cloud Native", desc: "Built for modern cloud infrastructure from the very first commit." },
    { icon: Cpu, title: "Modern Stack", desc: "Proven, current technologies that balance innovation with stability." },
  ],
};

export const technologies = {
  eyebrow: "/ Our Stack",
  title: "Built on a",
  titleAccent: "modern, proven stack",
  items: [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Layers },
    { name: "Node.js", icon: FileCode2 },
    { name: "TypeScript", icon: FileCode2 },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Container },
    { name: "Kubernetes", icon: Boxes },
    { name: "Azure", icon: Cloud },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "GraphQL", icon: FileCode2 },
    { name: "Python", icon: Cpu },
  ],
};

export const pricing = {
  eyebrow: "/ Pricing",
  title: "Simple, flexible",
  titleAccent: "engagement plans",
  description: "Choose a plan that fits your needs. Scale up or down as your project evolves.",
  plans: [
    {
      name: "Starter",
      price: "$4.9K",
      period: "/mo",
      desc: "For teams validating an idea with production-grade foundations.",
      features: ["Dedicated engineering pod (2)", "Cloud architecture review", "CI/CD pipeline setup", "Business-hours support", "Monthly strategy session"],
      cta: "Start with Starter",
      highlight: false,
    },
    {
      name: "Professional",
      price: "$12K",
      period: "/mo",
      desc: "For scaling products that need velocity without sacrificing quality.",
      features: ["Cross-functional squad (5)", "Cloud-native architecture", "AI integration & automation", "24/7 monitoring & support", "Weekly demos & roadmap", "Security & compliance audits"],
      cta: "Choose Professional",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For mission-critical systems with advanced requirements.",
      features: ["Multiple dedicated squads", "Multi-cloud & edge strategy", "Zero-trust security program", "Dedicated SRE & SLAs", "On-site engagement option", "Executive technology partner"],
      cta: "Talk to Sales",
      highlight: false,
    },
  ],
};

export const blog = {
  eyebrow: "/ Insights",
  title: "Latest articles and",
  titleAccent: "updates",
  allArticlesLabel: "All articles",
  posts: [
    { tag: "Architecture", title: "Designing Systems for Scale and Reliability", excerpt: "A practical guide to building architectures that handle growth gracefully without rewrites.", date: "Aug 02, 2026", read: "8 min" },
    { tag: "AI", title: "Putting AI to Work in Real Products", excerpt: "How to integrate AI into production workflows with measurable, reliable results.", date: "Jul 24, 2026", read: "12 min" },
    { tag: "Security", title: "Security by Default: A Practical Approach", excerpt: "Why every new system should ship with security built in from the first commit.", date: "Jul 15, 2026", read: "10 min" },
  ],
};

export const contact = {
  eyebrow: "/ Get In Touch",
  title: "Let's build your",
  titleAccent: "next project",
  description:
    "Tell us about your project. We'll respond within one business day with a path forward — no pressure, just clear next steps.",
  details: [
    { icon: Mail, label: "Email", value: "support@scylla.one", href: "mailto:company@example.com" },
    { icon: Phone, label: "Phone", value: "0203 504 5005", href: "tel:+10000000000" },
    { icon: MapPin, label: "Location", value: "SBC HouseRestmor Way Wallington, England, SM6 7AH" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Microsoft", href: "https://www.microsoft.com" },
    { label: "Google", href: "https://www.google.com" },
  ],
  mapLabel: "Multiple Locations · Worldwide",
  services: ["Web Development", "Mobile Apps", "Cloud Solutions", "DevOps", "AI Integration", "Cybersecurity", "IT Consulting", "Other"],
  success: { title: "Message received.", body: "Our team will reach out within one business day.", again: "Send another message" },
};

export const footer = {
  description:
    "Your trusted technology partner. We help businesses design, build, and scale modern digital solutions.",
  newsletterLabel: "/ Subscribe to our newsletter",
  newsletterPlaceholder: "you@company.com",
  newsletterDone: "Subscribed. Thank you for joining.",
  columns: [
    { title: "Company", links: ["About", "Services", "Portfolio", "Contact", "Careers"] },
    { title: "Services", links: ["Web Development", "Cloud Solutions", "AI Integration", "Cybersecurity", "DevOps"] },
    { title: "Industries", links: ["Finance", "Healthcare", "Retail", "Enterprise", "Government"] },
    { title: "Resources", links: ["Blog", "Case Studies", "Documentation", "Security", "Status"] },
  ],
  socials: [Twitter, Github, Linkedin, Youtube],
  legal: "© 20XX Company Name. All Rights Reserved.",
  links: ["Privacy Policy", "Terms of Service", "Cookies"],
};

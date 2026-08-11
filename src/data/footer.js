import { Twitter, Github, Linkedin, Youtube, Facebook } from "lucide-react";

// ===============================
// FOOTER CONTENT
// ===============================
export const footer = {
  description:
    "UK-based IT delivery partner. Cloud licensing, managed IT and field engineering — one accountable team.",

  newsletterLabel: "/ Subscribe to our newsletter",
  newsletterPlaceholder: "you@company.com",
  newsletterDone: "Subscribed. Thank you for joining.",

  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Project Showcase", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Professional Services", href: "#services" },
        { label: "MSP On-Call Support", href: "#services" },
        { label: "AI Integration", href: "#services" },
        { label: "Software & Digital Solutions", href: "#services" },
      ],
    },
  ],

  contact: {
    title: "Contact",
    address: [
      "SBC House",
      "Restmor Way",
      "Wallington",
      "England",
      "SM6 7AH",
    ],
    email: "support@scylla.one",
    phone: "0203 504 5005",
    hours: "Mon–Fri, 9:00–18:00",
  },

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/scylla1/", icon: Linkedin },
    { label: "Facebook", href: "https://www.facebook.com/share/18AG1grJh2/?mibextid=wwXIfr", icon: Facebook},
    { label: "Instagram", href: "https://www.instagram.com/scylla.one?igsh=MmdlY29wbHpxaG4y", icon: Instagram }
    
  ],

  legal: "© 2026 Scylla. All Rights Reserved.",
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

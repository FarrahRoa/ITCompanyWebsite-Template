import { Wifi, Cable, MonitorSmartphone, Building2, ScanLine } from "lucide-react";

export const portfolio = {
  eyebrow: "/ Project Showcases",
  title: "Premium delivery across",
  titleAccent: "critical environments",
  description: "A selection of operational technology engagements designed for performance, reliability, and long-term support.",
  categories: ["Network", "Infrastructure", "Device", "Automation", "Sustainability"],
  projects: [
    { title: "WiFi Surveys", category: "Network", desc: "Signal mapping, capacity planning, and coverage optimization for high-traffic environments.", icon: Wifi },
    { title: "Rack & Stack", category: "Infrastructure", desc: "Structured deployment of servers, switches, and networking equipment with tidy, tested setup.", icon: Cable },
    { title: "Laptop Builds & Configuration", category: "Device", desc: "Fast, secure device deployment with imaging, configuration, and policy alignment.", icon: MonitorSmartphone },
    { title: "Building Management Systems (BMS)", category: "Automation", desc: "Integration and support for smart building systems to improve monitoring and control.", icon: Building2 },
    { title: "E-Waste Solutions", category: "Sustainability", desc: "Secure, compliant disposal and environmentally responsible hardware retirement programs.", icon: ScanLine },
    { title: "Fibre Structured Cabling", category: "Infrastructure", desc: "Professional fibre infrastructure deployment for reliable connectivity and low-latency performance.", icon: Cable },
  ],
};

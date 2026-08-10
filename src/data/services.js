import {
  Wifi, Cable, MonitorSmartphone, ServerCog, BriefcaseBusiness, Headphones, Building2,
  ShieldCheck, CloudCog, HardDrive, Workflow, Globe2, SearchCheck, BadgeCheck,
  Computer, Boxes, ScanLine,
} from "lucide-react";

export const services = {
  eyebrow: "/ Services",
  title: "Enterprise support and",
  titleAccent: "digital delivery",
  description:
    "From network infrastructure to managed support and software deployment, we provide the practical services modern organizations need to operate confidently.",
  featured: [
    { icon: Wifi, title: "WiFi Surveys & Heat Mapping", desc: "Assess coverage, performance, and capacity across offices and facilities." },
    { icon: ServerCog, title: "Managed IT Support", desc: "24/7 monitoring, helpdesk, patching, and remote support for ongoing reliability." },
    { icon: ShieldCheck, title: "Cybersecurity", desc: "Endpoint protection, backup, and proactive security controls built for modern threats." },
    { icon: CloudCog, title: "Cloud & Microsoft 365", desc: "Migrations, administration, and support for Microsoft 365 and Google Workspace." },
  ],
  categories: [
    {
      title: "Professional Services",
      items: [
        { icon: Wifi, title: "WiFi Surveys & Heat Mapping", desc: "Capture signal strength, coverage gaps, and optimization recommendations.", tag: "Network" },
        { icon: Cable, title: "Network Cabling & Installation", desc: "Structured cabling and deployment for dependable connectivity across sites.", tag: "Infrastructure" },
        { icon: MonitorSmartphone, title: "Hardware Procurement", desc: "Procurement planning and sourcing for laptops, switches, access points, and servers.", tag: "Procurement" },
        { icon: BriefcaseBusiness, title: "System Implementation & Roll Out", desc: "Controlled deployment of new systems, equipment, and service changes.", tag: "Delivery" },
        
        { icon: Headphones, title: "On-site Technical Support", desc: "Rapid response for urgent issues and day-to-day technical assistance.", tag: "Support" },
        { icon: Workflow, title: "Office Relocation IT Support", desc: "Move planning and implementation to keep operations running during transitions.", tag: "Relocation" },
      ],
    },
    {
      title: "MSP On-Call Support",
      items: [
        { icon: ServerCog, title: "Fully Managed IT Services", desc: "End-to-end support for users, devices, infrastructure, and service continuity.", tag: "Managed" },
        { icon: Headphones, title: "24/7 Remote Monitoring & Support", desc: "Constant visibility and fast response for critical systems and environments.", tag: "Monitoring" },
        { icon: ShieldCheck, title: "Cybersecurity & Endpoint Protection", desc: "Advanced protection for devices, users, and business-critical assets.", tag: "Security" },
        { icon: HardDrive, title: "Backup & Disaster Recovery", desc: "Protection strategies designed to recover quickly when disruptions occur.", tag: "Resilience" },
        { icon: Computer, title: "Device & Asset Management", desc: "Inventory oversight, lifecycle tracking, and standard deployment support.", tag: "Assets" },
        { icon: CloudCog, title: "Email & Cloud Management", desc: "Administration and support across Microsoft 365 and Google Workspace.", tag: "Cloud" },
      ],
    },
    {
      title: "Software & Digital Solutions",
      items: [
        { icon: Boxes, title: "Business Software Deployment", desc: "CRM, ERP, and productivity tools implemented for reliable adoption.", tag: "Software" },
        
        { icon: Globe2, title: "Web Design & Hosting", desc: "Professional web presence and hosting support designed for performance.", tag: "Web" },
        { icon: SearchCheck, title: "SEO & Local Listings Management", desc: "Improve visibility across search and local directories.", tag: "Marketing" },
        
        { icon: MonitorSmartphone, title: "Social Media Management", desc: "Consistent, on-brand digital presence across key channels.", tag: "Social" },
        { icon: BadgeCheck, title: "Microsoft Licensing", desc: "Guidance and planning for licensing coverage and cost optimization.", tag: "Licensing" },
        { icon: Headphones, title: "VoIP Services", desc: "Reliable voice communications for modern distributed teams and offices.", tag: "Communications" },
      ],
    },
  ],
  cta: { title: "Schedule a consultation", desc: "Tell us your challenge and we’ll shape the right support plan.", href: "#contact" },
};

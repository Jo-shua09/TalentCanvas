import { Lock, Eye, Database, Bell, UserCheck } from "lucide-react";

export const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Account information (name, email, password)",
      "Profile data (resume, skills, work history)",
      "Usage data (how you interact with our platform)",
      "Communication data (messages sent through our platform)",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "To provide and improve our job matching services",
      "To connect candidates with employers",
      "To send relevant job recommendations",
      "To analyze and improve our AI algorithms",
    ],
  },
  {
    icon: UserCheck,
    title: "Information Sharing",
    content: [
      "With employers when you apply to their jobs",
      "With service providers who help us operate",
      "When required by law or legal process",
      "With your explicit consent",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "End-to-end encryption for all sensitive data",
      "Regular security audits and penetration testing",
      "SOC 2 Type II certified infrastructure",
      "GDPR and CCPA compliant practices",
    ],
  },
  {
    icon: Bell,
    title: "Your Rights",
    content: [
      "Access and download your personal data",
      "Request correction of inaccurate data",
      "Delete your account and associated data",
      "Opt-out of marketing communications",
    ],
  },
];

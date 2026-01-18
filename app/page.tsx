"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  ChevronRight,
  Briefcase,
  FolderGit2,
  Award,
  Code2,
} from "lucide-react";

// ✅ use RELATIVE imports (no "@/")
import BackgroundFX from "../components/BackgroundFX";
import ProjectSlider, { Project } from "../components/ProjectSlider";

/* ------------------------- UI COMPONENTS (FIXED + TYPED) ------------------------- */

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface SectionProps {
  id: string;
  title: string;
  icon: IconType;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-5 h-5 text-cyan-300" />
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-cyan-300 drop-shadow-[0_0_6px_rgba(56,189,248,0.35)]">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

interface PillProps {
  children: ReactNode;
}
const Pill: React.FC<PillProps> = ({ children }) => (
  <span className="inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-sm leading-6 text-zinc-200">
    {children}
  </span>
);

interface CardProps {
  children: ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="rounded-2xl border border-zinc-800/70 bg-zinc-900/35 backdrop-blur-sm p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45)] transition"
  >
    {children}
  </motion.div>
);

/* ------------------------- Config / Data ------------------------- */

const PROFILE = {
  name: "Roshan Kakarla",
  title: "DevSecOps Engineer • SRE • Cloud (AWS/Azure) • Kubernetes",
  blurb:
    "I build secure, reliable cloud platforms—Kubernetes, IaC, CI/CD, and observability. Experience across AWS/Azure, DevSecOps controls, incident response, and production operations.",
  location: "United States",
  email: "kakarlaroshan0401@gmail.com",
  links: {
    github: "https://github.com/Rkaka1041",
    linkedin: "https://www.linkedin.com/in/roshan-kakarla-171473387",
    resumePdf: "/resume/Roshan_Kakarla_Resume.pdf", // ✅ replace the PDF in public/resume with your DevOps resume
  },
};

const PROJECTS: Project[] = [
  {
    title: "FAITH CHURCH APP",
    summary:
      "Community events, live sermon streaming, and donations platform using React.js, Firebase, and Flask.",
    stack: ["React.js", "Firebase", "Flask", "Cloud Functions"],
    repo: "https://github.com/Rkaka1041",
    demo: "#",
  },
  {
    title: "SELF CHECK-IN SYSTEM",
    summary:
      "Automated check-in and payment system with QR validation and secure payments.",
    stack: ["FastAPI", "React.js", "Stripe", "PostgreSQL", "AWS"],
    repo: "https://github.com/Rkaka1041",
    demo: "#",
  },
  {
    title: "PARKING LOT SLOT RESERVATION",
    summary: "Slot booking with live availability and RBAC for admins/users.",
    stack: ["Node.js", "Express", "React.js", "MySQL", "JWT"],
    repo: "https://github.com/Rkaka1041",
    demo: "#",
  },
];

type SkillGroups = Record<string, string[]>;
const SKILLS: SkillGroups = {
  "Cloud Platforms": ["AWS (EKS, EC2, IAM, VPC, ALB, CloudWatch)", "Azure (AKS, VNets, Monitor)"],
  "Containers & Orchestration": ["Kubernetes (EKS/AKS)", "Docker", "Helm"],
  "IaC & Automation": ["Terraform", "Ansible", "Bash", "Python"],
  "CI/CD": ["Jenkins", "GitHub Actions", "Azure DevOps"],
  "Observability": ["Prometheus", "Grafana", "CloudWatch", "Azure Monitor", "Log Analytics"],
  "Security": ["IAM", "RBAC", "Secrets Management", "Policy Guardrails"],
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  project: string;
  bullets: string[];
};

/* ------------------------- EXPERIENCE (DEVOPS RESUME ALIGNMENT) ------------------------- */

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "TransUnion",
    role: "DevSecOps Engineer",
    period: "Jan 2025 – Present",
    project: "AWS Enterprise Platforms – Security & Reliability",
    bullets: [
      "Designed and operated secure AWS infrastructure (EKS, EC2, IAM, VPC, ALB, CloudWatch) for production workloads.",
      "Implemented Infrastructure as Code with Terraform modules and security guardrails to reduce misconfigurations.",
      "Embedded DevSecOps controls into CI/CD using Jenkins and GitHub Actions with secure secrets practices.",
      "Managed Kubernetes security posture on AWS EKS using RBAC, isolation controls, and secure deployment patterns.",
      "Implemented monitoring and observability using CloudWatch, Prometheus, and Grafana for production services.",
      "Supported on-call rotations, incident response, root cause analysis, and remediation for reliability/security issues.",
      "Enforced least-privilege access and environment isolation across AWS accounts, Kubernetes, and CI/CD pipelines.",
      "Authored runbooks, operational docs, and audit-ready standards for compliance and production operations.",
    ],
  },
  {
    company: "Dollar General",
    role: "DevOps Cloud Engineer",
    period: "Jun 2023 – Dec 2024",
    project: "Azure Cloud Platforms – Retail & Supply Chain Systems",
    bullets: [
      "Built and managed Azure infrastructure using AKS, VNets, Load Balancers, Storage Accounts, and Azure Monitor.",
      "Provisioned and standardized cloud resources using Terraform and automation to improve reliability and consistency.",
      "Designed and maintained CI/CD pipelines using Azure DevOps and GitHub Actions for automated deployments.",
      "Supported Kubernetes on Azure, ensuring cluster stability, deployment readiness, and capacity planning.",
      "Implemented monitoring/alerting using Azure Monitor, Log Analytics, and Grafana for faster detection/response.",
      "Partnered with application teams to streamline deployments and reduce manual operations.",
      "Supported cloud cost optimization via right-sizing, usage analysis, and cleanup of unused resources.",
      "Created runbooks and operational documentation to support production support and on-call execution.",
    ],
  },
  {
    company: "Procter & Gamble (P&G)",
    role: "Site Reliability Engineer (SRE)",
    period: "Jan 2022 – May 2023",
    project: "On-Prem & Hybrid Enterprise Systems",
    bullets: [
      "Supported large-scale on-prem and hybrid production systems across Linux and Windows Server with strict SLOs.",
      "Automated provisioning and operational workflows using Ansible, Bash, and Python for consistent execution.",
      "Built monitoring dashboards using Prometheus and Grafana to improve real-time visibility and alerting.",
      "Participated in on-call rotations and led incident response to restore services and reduce downtime.",
      "Performed RCA and implemented long-term corrective actions to prevent repeat incidents and improve reliability.",
      "Created and maintained runbooks and operational procedures to reduce MTTR and improve response quality.",
      "Collaborated with engineering teams on capacity planning, performance tuning, and resilience improvements.",
      "Introduced DevOps automation practices into traditional operations to improve stability and speed of change.",
    ],
  },
  {
    company: "Cosmicvent Software Pvt. Ltd.",
    role: "DevOps Engineer",
    period: "Jan 2019 – Jun 2021",
    project: "AWS-Hosted SaaS Platforms",
    bullets: [
      "Designed and managed AWS infrastructure using EC2, S3, RDS, IAM, and VPC for SaaS environments.",
      "Built CI/CD pipelines using Jenkins and Git to automate builds, testing, and deployments across environments.",
      "Containerized services using Docker and supported early Kubernetes adoption for consistent deployments.",
      "Implemented monitoring and logging using CloudWatch and open-source tools for operational visibility.",
      "Supported release management and production deployments with structured change practices.",
      "Collaborated with developers to streamline release workflows and promote DevOps best practices.",
      "Assisted with infrastructure security, access controls, and environment hardening practices.",
      "Maintained documentation including infrastructure diagrams, runbooks, and deployment guides.",
    ],
  },
];

/* ------------------------- IMPACT ------------------------- */

const ACHIEVEMENTS = [
  { title: "Cloud Reliability", desc: "Improved production stability with monitoring, alerting, and incident response practices." },
  { title: "Delivery Automation", desc: "Automated CI/CD and Infrastructure as Code to reduce manual deployments and drift." },
  { title: "Security & Compliance", desc: "Implemented least-privilege access and DevSecOps controls across pipelines and clusters." },
];

/* ------------------------------ Page ------------------------------ */

export default function Portfolio() {
  return (
    <div className="min-h-screen text-zinc-100">
      <BackgroundFX />

      {/* Hero */}
      <header className="border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl font-bold tracking-tight text-zinc-50"
              >
                {PROFILE.name}
              </motion.h1>
              <p className="mt-1 text-zinc-400">{PROFILE.title}</p>
              <p className="mt-3 max-w-2xl leading-7 text-zinc-300">{PROFILE.blurb}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                <MapPin className="w-4 h-4" /> {PROFILE.location}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PROFILE.links.resumePdf}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-2 hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <Download className="w-4 h-4" /> Resume
                </a>
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-2 hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-2 hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-2 hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <Mail className="w-4 h-4" /> Contact
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="md:min-w-[340px]"
            >
              <Card>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Code2 className="w-4 h-4 text-cyan-300" /> Quick Snapshot
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-300" /> DevSecOps / SRE with cloud + Kubernetes focus
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-300" /> Terraform, CI/CD, Observability, Incident Response
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-300" /> AWS + Azure production platform operations
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={Briefcase}>
        <div className="grid md:grid-cols-3 gap-5">
          {EXPERIENCE.map((e) => (
            <Card key={e.company + e.period}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-zinc-100">{e.company}</h3>
                <span className="text-xs text-zinc-500">{e.period}</span>
              </div>
              <p className="text-sm text-zinc-400 mt-0.5">{e.role}</p>
              <p className="text-xs text-zinc-500 mt-1">{e.project}</p>
              <ul className="mt-3 space-y-2 text-sm list-disc pl-5 text-zinc-300">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={FolderGit2}>
        <ProjectSlider items={PROJECTS} />
      </Section>

      {/* Skills */}
      <Section id="skills" title="Tech Stack" icon={Code2}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(SKILLS).map(([group, items]) => (
            <Card key={group}>
              <h4 className="font-semibold text-zinc-100">{group}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Impact */}
      <Section id="achievements" title="Selected Impact" icon={Award}>
        <div className="grid md:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((a) => (
            <Card key={a.title}>
              <h4 className="font-semibold text-zinc-100">{a.title}</h4>
              <p className="text-sm mt-2 leading-6 text-zinc-300">{a.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <Mail className="w-4 h-4" /> {PROFILE.email}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-cyan-300"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-cyan-300"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
          <p className="text-zinc-500">© {new Date().getFullYear()} {PROFILE.name}</p>
        </div>
      </footer>
    </div>
  );
}

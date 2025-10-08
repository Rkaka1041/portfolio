"use client";

import React from "react";
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

/* ------------------------- Config / Data ------------------------- */

const PROFILE = {
  name: "Roshan Kakarla",
  title: "Software Engineer — Backend • Full-Stack • Cloud",
  blurb:
    "I build scalable APIs, event-driven services, and elegant UIs. 4 years across fintech, insurance, and SaaS.",
  location: "United States",
  email: "kakarlaroshan0401@gmail.com",
  links: {
    github: "https://github.com/Rkaka1041",
    linkedin: "https://www.linkedin.com/in/roshan-kakarla",
    resumePdf: "/resume/Roshan_Kakarla_Resume.pdf",
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
    summary:
      "Slot booking with live availability and RBAC for admins/users.",
    stack: ["Node.js", "Express", "React.js", "MySQL", "JWT"],
    repo: "https://github.com/Rkaka1041",
    demo: "#",
  },
];

type SkillGroups = Record<string, string[]>;
const SKILLS: SkillGroups = {
  "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  Frameworks: ["Spring Boot", "FastAPI", "Flask", "React.js"],
  "Cloud & Infra": ["AWS (Lambda, EC2, RDS, S3)", "Docker"],
  Data: ["PostgreSQL", "MySQL", "Kafka"],
  "Testing & CI/CD": ["JUnit", "PyTest", "GitHub Actions"],
  Methodologies: ["Agile/Scrum", "TDD", "CI/CD"],
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  project: string;
  bullets: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "American Express",
    role: "Software Engineer",
    period: "Feb 2023 – Dec 2024",
    project: "Enterprise Fraud Detection & Risk Analytics Platform",
    bullets: [
      "Designed fraud APIs with Spring Boot & FastAPI",
      "Kafka pipelines for real-time scoring & anomalies",
      "Built React dashboards for risk analytics",
      "Optimized PostgreSQL & caching → ~40% faster APIs",
      "AWS Lambda/EC2/RDS for scalable infra",
      "CI/CD with GitHub Actions & Docker",
      "OAuth2/JWT for secure auth; Agile sprints",
    ],
  },
  {
    company: "State Farm Insurance",
    role: "Software Engineer",
    period: "Jan 2022 – Dec 2022",
    project: "Claims Automation & Policy Management System",
    bullets: [
      "REST microservices in Spring Boot",
      "React modules for claim status & agent dashboards",
      "Python ETL — improved data accuracy ~30%",
      "Legacy APIs migrated to AWS (EC2, API Gateway)",
      "PostgreSQL views & procs for reporting",
      "JUnit/PyTest — 90%+ coverage; CloudWatch monitoring",
    ],
  },
  {
    company: "Cosmicvent Software",
    role: "Software Engineer",
    period: "Dec 2020 – Dec 2021",
    project: "Healthcare Data Visualization & Dashboard Platform",
    bullets: [
      "Interactive React dashboards + REST APIs",
      "Backends in Flask & Spring Boot for ingestion",
      "PostgreSQL schema + indexing for speed",
      "S3 for secure storage; Python jobs + CRON",
      "Analytics reduced manual reporting by ~45%",
    ],
  },
];

const ACHIEVEMENTS = [
  { title: "API speed-ups", desc: "~40% faster responses via SQL tuning & caching." },
  { title: "Data quality", desc: "~30% accuracy improvement via ETL hardening." },
  { title: "Ops impact", desc: "45% less manual reporting with automated analytics." },
];

/* ------------------------- Small UI primitives ------------------------- */

interface SectionProps {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}
const Section = ({ id, title, icon: Icon, children }: SectionProps) => (
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

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-sm leading-6 text-zinc-200">
    {children}
  </span>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="rounded-2xl border border-zinc-800/70 bg-zinc-900/35 backdrop-blur-sm p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.45)] transition"
  >
    {children}
  </motion.div>
);

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

              {/* Actions (Resume now downloads) */}
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
                    <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-300" /> 4 years building production systems
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-300" /> Backend focus (Java, Python), React, AWS
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-300" /> Fraud, claims, analytics platforms
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
            <Card key={e.company}>
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
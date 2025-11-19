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

import BackgroundFX from "../components/BackgroundFX";
import ProjectSlider, { Project } from "../components/ProjectSlider";

/* ------------------------- UI COMPONENTS (FIXED) ------------------------- */

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
      <h2 className="text-xl sm:text-2xl font-semibold text-cyan-300">
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
  <span className="inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-200">
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

/* ------------------------- PROFILE ------------------------- */

const PROFILE = {
  name: "Roshan Kakarla",
  title: "Software Engineer — Backend • Full-Stack • Cloud",
  blurb:
    "Software Engineer with 3+ years developing scalable backend APIs, microservices, and full-stack apps using Java, Python, React, Node.js, Spring Boot, FastAPI, PostgreSQL, AWS.",
  location: "United States",
  email: "kakarlaroshan0401@gmail.com",
  links: {
    github: "https://github.com/Rkaka1041",
    linkedin: "https://www.linkedin.com/in/roshan-kakarla-171473387",
    resumePdf: "/resume/Roshan_Kakarla_Resume.pdf",
  },
};

/* ------------------------- EXPERIENCE (YOUR REAL RESUME) ------------------------- */

const EXPERIENCE = [
  {
    company: "TechCorp",
    role: "Software Developer",
    period: "Oct 2025 – Present",
    project: "Full-Stack Business Systems & Microservices Platform",
    bullets: [
      "Developed features using Spring Boot, Angular, and PostgreSQL improving performance by 35%.",
      "Built REST microservices integrating multiple business systems.",
      "Deployed AWS EC2/Lambda services achieving 99.9% uptime.",
      "Automated CI/CD pipelines using Jenkins & GitHub Actions.",
      "Implemented secure JWT authentication and compliance practices.",
    ],
  },
  {
    company: "Technoprism LLC",
    role: "Jr. Software Engineer",
    period: "Apr 2025 – Oct 2025",
    project: "Analytics & Real-Time Dashboards",
    bullets: [
      "Developed Python/Node.js APIs processing 10M+ daily events.",
      "Built Angular dashboards with real-time sync.",
      "Optimized SQL/MongoDB queries reducing latency by 30%.",
      "Achieved 95% test coverage with PyTest & JUnit.",
    ],
  },
  {
    company: "American Express",
    role: "Software Engineer",
    period: "Feb 2023 – Dec 2024",
    project: "Enterprise Fraud Detection & Risk Analytics",
    bullets: [
      "Developed Spring Boot & FastAPI microservices for fraud scoring.",
      "Built Kafka pipelines for high-volume anomaly detection.",
      "Optimized PostgreSQL + caching improving speed by 40%.",
      "Deployed AWS Lambda, EC2, RDS for high availability.",
      "Implemented OAuth2/JWT & CI/CD with GitHub Actions.",
    ],
  },
  {
    company: "Cosmicvent Software",
    role: "Software Engineer",
    period: "Jan 2019 – Jun 2021",
    project: "Cloud Microservices & Analytics",
    bullets: [
      "Developed backend services in Spring Boot & Python improving throughput by 28%.",
      "Built dashboards using React.js, Flask, FastAPI.",
      "Optimized PostgreSQL/MongoDB improving performance by 32%.",
      "Deployed microservices on AWS/GCP achieving 99.9% uptime.",
    ],
  },
];

/* ------------------------- PROJECTS ------------------------- */

const PROJECTS: Project[] = [
  {
    title: "FAITH CHURCH APP",
    summary: "Community events, sermons, donations — React.js + Firebase + Flask.",
    stack: ["React.js", "Firebase", "Flask"],
    repo: "https://github.com/Rkaka1041",
    demo: "#",
  },
  {
    title: "SELF CHECK-IN SYSTEM",
    summary: "QR check-in, Stripe payments, RBAC.",
    stack: ["FastAPI", "React.js", "AWS", "PostgreSQL"],
    repo: "https://github.com/Rkaka1041",
    demo: "#",
  },
  {
    title: "PARKING SLOT RESERVATION",
    summary: "Slot booking with JWT auth and live tracking.",
    stack: ["Node.js", "React.js", "MySQL", "JWT"],
    repo: "https://github.com/Rkaka1041",
    demo: "#",
  },
];

/* ------------------------- SKILLS ------------------------- */

const SKILLS = {
  "Programming": ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  Frameworks: ["Spring Boot", "FastAPI", "Flask", "React.js", "Node.js"],
  Cloud: ["AWS (EC2, Lambda, RDS, S3)", "Azure"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "DevOps": ["Docker", "GitHub Actions", "Jenkins"],
  Testing: ["JUnit", "PyTest", "Selenium"],
};

/* ------------------------- ACHIEVEMENTS ------------------------- */

const ACHIEVEMENTS = [
  { title: "API Optimisation", desc: "Improved API performance by ~40% at Amex." },
  { title: "Data Reliability", desc: "Achieved 95%+ test coverage across services." },
  { title: "Uptime", desc: "Maintained 99.9% uptime on AWS deployments." },
];

/* ------------------------- PAGE UI ------------------------- */

export default function Portfolio() {
  return (
    <div className="min-h-screen text-zinc-100">
      <BackgroundFX />

      {/* Hero */}
      <header className="border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold"
              >
                {PROFILE.name}
              </motion.h1>

              <p className="mt-1 text-zinc-400">{PROFILE.title}</p>
              <p className="mt-3 max-w-2xl text-zinc-300">{PROFILE.blurb}</p>

              <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                <MapPin className="w-4 h-4" /> {PROFILE.location}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PROFILE.links.resumePdf}
                  download
                  className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-xl hover:text-cyan-300 hover:border-cyan-400/60"
                >
                  <Download className="w-4 h-4" /> Resume
                </a>

                <a
                  href={PROFILE.links.github}
                  className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-xl hover:text-cyan-300 hover:border-cyan-400/60"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>

                <a
                  href={PROFILE.links.linkedin}
                  className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-xl hover:text-cyan-300 hover:border-cyan-400/60"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Snapshot Card */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:min-w-[340px]">
              <Card>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Code2 className="w-4 h-4 text-cyan-300" /> Quick Snapshot
                </div>

                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-cyan-300" />
                    3+ years experience in backend & cloud engineering.
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-cyan-300" />
                    Java, Python, React, Spring Boot, AWS.
                  </li>
                  <li className="flex gap-2">
                    <ChevronRight className="w-4 h-4 text-cyan-300" />
                    REST APIs · Microservices · CI/CD.
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={Briefcase}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPERIENCE.map((e) => (
            <Card key={e.company}>
              <div className="flex justify-between">
                <h3 className="font-semibold">{e.company}</h3>
                <span className="text-xs text-zinc-400">{e.period}</span>
              </div>
              <p className="text-sm text-zinc-400">{e.role}</p>
              <p className="text-xs text-zinc-500">{e.project}</p>
              <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
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
          {Object.entries(SKILLS).map(([title, items]) => (
            <Card key={title}>
              <h4 className="font-semibold">{title}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Selected Impact" icon={Award}>
        <div className="grid md:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((a) => (
            <Card key={a.title}>
              <h4 className="font-semibold">{a.title}</h4>
              <p className="mt-2 text-sm text-zinc-300">{a.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  );
}
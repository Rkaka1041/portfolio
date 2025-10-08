"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";

type Project = {
  title: string;
  summary: string;
  stack: string[];
  repo: string;
  demo?: string;
};

export default function ProjectSlider({ items }: { items: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: trackRef });
  const glow = useTransform(scrollXProgress, [0, 1], [0.15, 0.4]);

  return (
    <div className="relative">
      {/* neon edge glow reacts to drag progress */}
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(56,189,248,0.25), rgba(168,85,247,0.25))",
          opacity: glow,
        }}
      />

      <motion.div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-1"
        drag="x"
        dragConstraints={{ left: -600, right: 0 }}
        dragElastic={0.08}
      >
        {items.map((p, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -3 }}
            className="min-w-[320px] max-w-[360px] rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
          >
            <header className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <ExternalLink className="w-4 h-4 text-zinc-400" />
            </header>

            <p className="mt-3 text-sm text-zinc-300">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-cyan-300"
              >
                <FolderGit2 className="w-4 h-4" /> Repo
              </a>
              {p.demo && p.demo !== "#" && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-cyan-300"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
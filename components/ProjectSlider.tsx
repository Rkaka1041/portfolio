"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  repo: string;
  demo?: string;
};

export default function ProjectSlider({ items }: { items: Project[] }) {
  return (
    <div className="relative">
      {/* Horizontal scroll track */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-1">
        {items.map((p, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -3 }}
            className="min-w-[320px] max-w-[360px] rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
          >
            <header className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.title}</h3>
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
      </div>
    </div>
  );
}
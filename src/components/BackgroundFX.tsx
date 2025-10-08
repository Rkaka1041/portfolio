"use client";

import React from "react";
import { motion } from "framer-motion";

/** Bold neon FX tuned for dark background */
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
      {/* brighter swirls */}
      <motion.div
        className="absolute inset-0"
        style={{
          mixBlendMode: "screen",
          background:
            "radial-gradient(75vmax 75vmax at 15% 20%, rgba(56,189,248,0.50), transparent 70%), radial-gradient(75vmax 75vmax at 85% 80%, rgba(168,85,247,0.50), transparent 70%)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* stronger center glow */}
      <div
        className="absolute inset-0"
        style={{
          mixBlendMode: "screen",
          background:
            "radial-gradient(45vmax 45vmax at 50% 35%, rgba(99,102,241,0.28), transparent 65%)",
        }}
      />

      {/* higher-contrast animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        animate={{ backgroundPositionY: ["0px", "44px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* slightly stronger noise */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
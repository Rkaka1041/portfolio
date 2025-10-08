"use client";
import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />
      {/* Moving grid overlay */}
      <motion.div
        className="absolute inset-0 bg-[length:44px_44px] opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
        }}
        animate={{ backgroundPositionY: ["0px", "44px"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
}
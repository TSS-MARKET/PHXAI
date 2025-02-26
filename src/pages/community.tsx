import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Reusable Animated Link Component
const AnimatedLink = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="flex items-center gap-3 px-6 py-4 border border-[#ff00ff]/60 rounded-lg transition-all hover:bg-[#ff00ff]/10 uppercase tracking-widest"
    aria-label={`Join us on ${children}`}
  >
    {children} <ArrowUpRight className="h-5 w-5" />
  </motion.a>
);

export default function Community() {
  const navigate = useNavigate();
  
  return (
    <main className="relative min-h-screen bg-[#0a0f1e] text-white py-16 px-8 overflow-hidden">
      {/* 3D Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {["top-1/4 left-10", "bottom-1/4 right-10"].map((pos, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 + index * 0.5, repeat: Infinity, repeatType: "reverse" }}
            className={`absolute ${pos} h-48 w-48 bg-[#${index ? "6f00ff" : "ff00ff"}]/40 blur-2xl`}
          />
        ))}
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          variant="ghost"
          className="text-[#ff00ff] hover:text-[#6f00ff] transition-all"
          onClick={() => navigate("/", { replace: true })}
          aria-label="Go back"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-6xl font-bold font-mono bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
            Join the Community
          </h1>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <AnimatedLink href="https://t.me/yourtelegram">Telegram</AnimatedLink>
          <AnimatedLink href="https://discord.gg/yourdiscord">Discord</AnimatedLink>
          <AnimatedLink href="https://twitter.com/yourtwitter">Twitter</AnimatedLink>
        </div>
      </div>
    </main>
  );
}

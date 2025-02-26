import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Community() {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0a0f1e] text-white py-16 px-8 overflow-hidden">
      {/* 3D Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-10 h-48 w-48 bg-[#ff00ff]/40 blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 right-10 h-48 w-48 bg-[#6f00ff]/40 blur-2xl"
        />
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          variant="ghost"
          className="text-[#ff00ff] hover:text-[#6f00ff] transition-all"
          onClick={handleBack}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono break-words bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
            Join the Community
          </h1>
        </motion.div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <motion.a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex items-center gap-3 px-6 py-4 border border-[#ff00ff]/60 rounded-lg transition-all hover:bg-[#ff00ff]/10 uppercase tracking-widest"
          >
            Telegram <ArrowUpRight className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://discord.gg/yourdiscord"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="flex items-center gap-3 px-6 py-4 border border-[#ff00ff]/60 rounded-lg transition-all hover:bg-[#ff00ff]/10 uppercase tracking-widest"
          >
            Discord <ArrowUpRight className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex items-center gap-3 px-6 py-4 border border-[#ff00ff]/60 rounded-lg transition-all hover:bg-[#ff00ff]/10 uppercase tracking-widest"
          >
            Twitter <ArrowUpRight className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </main>
  );
}

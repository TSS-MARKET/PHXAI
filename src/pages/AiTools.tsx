import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Tools array
const tools = [
  { name: "Twitter Tracker", description: "Track crypto sentiment on Twitter." },
  { name: "Market Analyser", description: "Analyse market trends and data." },
  { name: "Sentiment Analyser", description: "Gauge market sentiment with AI." },
  { name: "Token Creation", description: "Easily create your own tokens." },
  { name: "Liquidity Pool Creator", description: "Create and manage liquidity pools." },
  { name: "Trending News", description: "Stay updated with AI-curated crypto news." },
];

export default function AiTools() {
  const navigate = useNavigate();
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0a0f1e] text-white">
      {/* Simplified Glow Effects (no animate-pulse) */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 h-60 w-60 bg-[#ff00ff]/30 blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-1/4 h-60 w-60 bg-[#6f00ff]/30 blur-3xl opacity-60" />
      </div>

      {/* Desktop Back Button (absolute) */}
      <div className="hidden sm:block absolute top-6 left-6 z-10">
        <Button
          variant="ghost"
          className="text-[#ff00ff] hover:text-[#6f00ff] transition-all"
          onClick={handleBack}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="text-lg font-bold tracking-wide uppercase">Back</span>
        </Button>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-6">
        {/* Mobile Header (Back + Title) */}
        <div className="sm:hidden flex flex-col gap-4 mb-6">
          <Button
            variant="ghost"
            className="text-[#ff00ff] hover:text-[#6f00ff] transition-all self-start"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="text-base font-bold tracking-wide uppercase">Back</span>
          </Button>
          <div>
            <h1 className="text-4xl font-bold font-mono bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
              AI Tools Hub
            </h1>
            <p className="text-sm uppercase mt-2 tracking-wide text-[#e0e7ff]">
              Explore Next-Gen AI Tools for Crypto Mastery
            </p>
          </div>
        </div>

        {/* Desktop Title */}
        <div className="hidden sm:block mb-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold font-mono bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
            AI Tools Hub
          </h1>
          <p className="text-lg uppercase mt-2 tracking-wide text-[#e0e7ff]">
            Explore Next-Gen AI Tools for Crypto Mastery
          </p>
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 space-y-3 border border-[#ff00ff]/60 rounded-lg bg-[#121826]/50 hover:bg-[#ff00ff]/10 transition-all cursor-pointer backdrop-blur-md shadow-md"
              onClick={() => setSelectedTool(tool.name)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-xl font-semibold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent uppercase">
                  {tool.name}
                </h3>
                <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-[#ff00ff]" />
              </div>
              <p className="text-sm sm:text-base text-[#e0e7ff]">
                {tool.description}
              </p>
              <Button
                className="w-full bg-[#ff00ff]/20 hover:bg-[#ff00ff]/30 text-[#ff00ff] border border-[#ff00ff]/60 transition-all rounded-full uppercase tracking-widest font-bold py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
              >
                Launch Tool
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Access Restriction Popup */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 px-4"
          >
            {/* 3D effect on hover */}
            <motion.div
              whileHover={{ rotateX: 3, rotateY: 3, scale: 1.03 }}
              style={{ perspective: "1000px" }}
              className="p-6 bg-[#121826] border border-[#ff00ff]/60 rounded-md shadow-[0_0_15px_#ff00ff] max-w-md w-full text-center"
            >
              <Lock className="h-8 w-8 sm:h-12 sm:w-12 text-[#ff00ff] mx-auto mb-2" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#e0e7ff] mb-2">
                Access Restricted
              </h2>
              <p className="text-sm sm:text-base text-[#e0e7ff] mb-4">
                You must hold at least{" "}
                <span className="font-bold text-[#ff00ff]">200K $PHX</span> to use{" "}
                {selectedTool}.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="bg-[#ff00ff]/20 hover:bg-[#ff00ff]/30 text-[#ff00ff] border border-[#ff00ff]/60 transition-all rounded-full uppercase tracking-widest px-4 sm:px-6 py-2 text-xs sm:text-sm whitespace-nowrap"
                  onClick={() => window.open("https://jup.ag", "_blank")}
                >
                  Buy on Jupiter
                </Button>
                <Button
                  className="bg-[#6f00ff]/20 hover:bg-[#6f00ff]/30 text-[#6f00ff] border border-[#6f00ff]/60 transition-all rounded-full uppercase tracking-widest px-4 sm:px-6 py-2 text-xs sm:text-sm whitespace-nowrap"
                  onClick={() => window.open("https://pancakeswap.finance", "_blank")}
                >
                  Buy on PancakeSwap
                </Button>
              </div>
              <Button
                variant="ghost"
                className="mt-4 text-[#ff00ff]"
                onClick={() => setSelectedTool(null)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

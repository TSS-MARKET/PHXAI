import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, Cpu, BarChart, Code, Layers, Newspaper, Wallet, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Define AI Tools with Icons
const tools = [
  { name: "Twitter Tracker", description: "Track crypto sentiment on Twitter.", icon: <Settings className="h-8 w-8 text-[#ff00ff]" /> },
  { name: "Market Analyser", description: "Analyse market trends and data.", icon: <BarChart className="h-8 w-8 text-[#6f00ff]" /> },
  { name: "Sentiment Analyser", description: "Gauge market sentiment with AI.", icon: <Cpu className="h-8 w-8 text-[#ff00ff]" /> },
  { name: "Token Creation", description: "Easily create your own tokens.", icon: <Code className="h-8 w-8 text-[#6f00ff]" /> },
  { name: "Liquidity Pool Creator", description: "Create and manage liquidity pools.", icon: <Layers className="h-8 w-8 text-[#ff00ff]" /> },
  { name: "Trending News", description: "Stay updated with AI-curated crypto news.", icon: <Newspaper className="h-8 w-8 text-[#6f00ff]" /> }
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
    <main className="relative min-h-screen flex items-center justify-center p-6 bg-[#0a0f1e] overflow-hidden">
      {/* 3D Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 h-60 w-60 bg-[#ff00ff]/40 blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 h-60 w-60 bg-[#6f00ff]/40 blur-3xl opacity-70 animate-pulse" />
      </div>

      {/* Top Navigation: Back & Connect Wallet */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-[#ff00ff] hover:text-[#6f00ff] transition-all"
          onClick={handleBack}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="text-lg font-bold tracking-wide uppercase">Back</span>
        </Button>
      </div>
      <div className="absolute top-6 right-6 z-10">
      </div>

      <div className="relative z-10 max-w-5xl w-full space-y-12 text-center">
        {/* Animated Title */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-6xl sm:text-7xl font-bold font-mono bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
            AI Tools Hub
          </h1>
          <p className="text-[#e0e7ff] text-lg tracking-wide uppercase mt-4">
            Explore Next-Gen AI Tools for Crypto Mastery
          </p>
        </motion.div>

        {/* AI Tools Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 space-y-4 border border-[#ff00ff]/60 rounded-lg bg-[#121826]/50 hover:bg-[#ff00ff]/10 transition-all cursor-pointer backdrop-blur-md shadow-xl shadow-[#ff00ff]/30"
              onClick={() => setSelectedTool(tool.name)}
            >
              <div className="flex items-center gap-3">
                {tool.icon}
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent uppercase">
                  {tool.name}
                </h3>
              </div>
              <p className="text-[#e0e7ff]">{tool.description}</p>
              <Button 
                className="w-full bg-[#ff00ff]/20 hover:bg-[#ff00ff]/30 text-[#ff00ff] border border-[#ff00ff]/60 transition-all rounded-full uppercase tracking-widest font-bold py-4"
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
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
          >
            <div className="p-8 bg-[#121826] border border-[#ff00ff]/60 rounded-lg shadow-2xl max-w-lg text-center">
              <Lock className="h-12 w-12 text-[#ff00ff] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#e0e7ff]">Access Restricted</h2>
              <p className="text-[#e0e7ff] mt-2">You must hold at least <span className="font-bold text-[#ff00ff]">200K $PHX</span> to use {selectedTool}.</p>
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  className="bg-[#ff00ff]/20 hover:bg-[#ff00ff]/30 text-[#ff00ff] border border-[#ff00ff]/60 transition-all rounded-full uppercase tracking-widest px-6 py-3"
                  onClick={() => window.open("https://jup.ag", "_blank")}
                >
                  Buy on Jupiter
                </Button>
                <Button
                  className="bg-[#6f00ff]/20 hover:bg-[#6f00ff]/30 text-[#6f00ff] border border-[#6f00ff]/60 transition-all rounded-full uppercase tracking-widest px-6 py-3"
                  onClick={() => window.open("https://pancakeswap.finance", "_blank")}
                >
                  Buy on PancakeSwap
                </Button>
              </div>
              <Button variant="ghost" className="mt-4 text-[#ff00ff]" onClick={() => setSelectedTool(null)}>Close</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

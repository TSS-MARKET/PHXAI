import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Brain, Loader, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveAccount } from "thirdweb/react";

const REQUIRED_PHX = 200000;
const SIMULATED_BALANCE = 300000;

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
  const [checkingBalance, setCheckingBalance] = useState(false);
  const [accessGranted, setAccessGranted] = useState<boolean | null>(null);
  const account = useActiveAccount();
  const [balanceLoading, setBalanceLoading] = useState(true);

  useEffect(() => {
    if (account) {
      const timer = setTimeout(() => {
        setBalanceLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setBalanceLoading(false);
    }
  }, [account]);

  const handleToolLaunch = (toolName: string) => {
    if (!account) {
      alert("Connect wallet first!");
      return;
    }
    setSelectedTool(toolName);
    setCheckingBalance(true);
    
    // Simulated balance check
    setTimeout(() => {
      setCheckingBalance(false);
      setAccessGranted(SIMULATED_BALANCE >= REQUIRED_PHX);
    }, 2000);
  };

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0a0f1e] text-white">
      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 h-60 w-60 bg-[#ff00ff]/30 blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-1/4 h-60 w-60 bg-[#6f00ff]/30 blur-3xl opacity-60" />
      </div>

      {/* Back Button */}
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
        {/* Mobile Header */}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col h-full p-4 space-y-3 border border-[#ff00ff]/60 rounded-lg bg-[#121826]/50 hover:bg-[#ff00ff]/10 transition-all cursor-pointer backdrop-blur-md shadow-md"
              onClick={() => handleToolLaunch(tool.name)}
            >
              <div className="flex items-start justify-between h-16">
                <h3 className="text-base sm:text-xl font-semibold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent uppercase max-w-[70%]">
                  {tool.name}
                </h3>
                <Brain className="h-6 w-6 sm:h-7 sm:w-7 text-[#ff00ff] self-start mt-1" />
              </div>
              <p className="text-sm sm:text-base text-[#e0e7ff] flex-1">
                {tool.description}
              </p>
              <div className="mt-auto flex justify-center w-full">
                <Button
                  className="w-full bg-[#ff00ff]/20 hover:bg-[#ff00ff]/30 text-[#ff00ff] border border-[#ff00ff]/60 transition-all rounded-full uppercase tracking-widest font-bold py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToolLaunch(tool.name);
                  }}
                >
                  Launch Tool
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Popup System */}
      <AnimatePresence>
        {/* Balance Checking Popup */}
        {checkingBalance && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 px-4"
          >
            <motion.div
              className="p-10 bg-black rounded-2xl shadow-2xl max-w-md w-full text-center border border-transparent flex flex-col items-center"
            >
              <Loader className="h-12 w-12 text-[#ff00ff] animate-spin mb-6" />
              <h2 className="text-3xl font-bold text-[#e0e7ff] mb-4">
                Checking Balance...
              </h2>
              <p className="text-lg text-[#e0e7ff] mb-8 text-center">
                Verifying your $PHX holdings
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Access Granted Popup */}
        {accessGranted && selectedTool && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 px-4"
          >
            <motion.div
              whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02 }}
              style={{ perspective: "1000px" }}
              className="p-10 bg-black rounded-2xl shadow-2xl max-w-md w-full text-center border border-transparent flex flex-col items-center"
            >
              <CheckCircle className="h-12 w-12 text-[#00ff00] mb-6" />
              <h2 className="text-3xl font-bold text-[#e0e7ff] mb-4">
                Access Granted!
              </h2>
              <p className="text-lg text-[#e0e7ff] mb-8 text-center">
                You have sufficient $PHX to access {selectedTool}
              </p>
              <div className="w-full space-y-4">
                <button
                  onClick={() => {
                    navigate(`/ai-tools/${selectedTool.toLowerCase().replace(/\s+/g, '-')}`);
                    setAccessGranted(null);
                    setSelectedTool(null);
                  }}
                  className="w-full text-lg font-semibold uppercase px-6 py-3 bg-[#00ff00]/20 hover:bg-[#00ff00]/30 text-[#00ff00] border border-[#00ff00]/60 transition-all rounded-full"
                >
                  Proceed to Tool
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Access Restricted Popup */}
        {accessGranted === false && selectedTool && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 px-4"
          >
            <motion.div
              whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02 }}
              style={{ perspective: "1000px" }}
              className="p-10 bg-black rounded-2xl shadow-2xl max-w-md w-full text-center border border-transparent flex flex-col items-center"
            >
              <Lock className="h-12 w-12 text-[#ff00ff] mb-6" />
              <h2 className="text-3xl font-bold text-[#e0e7ff] mb-4">
                Access Restricted
              </h2>
              <p className="text-lg text-[#e0e7ff] mb-8 text-center">
                You need at least{" "}
                <span className="font-bold text-[#ff00ff]">200K $PHX</span> to use{" "}
                {selectedTool}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full">
                <button
                  onClick={() => window.open("https://jup.ag", "_blank")}
                  className="w-full sm:w-auto text-lg font-semibold uppercase px-6 py-3 border-2 border-[#ff00ff] text-[#ff00ff] rounded-md hover:bg-[#ff00ff]/10 transition-colors"
                >
                  Buy on Jupiter
                </button>
                <button
                  onClick={() => window.open("https://pancakeswap.finance", "_blank")}
                  className="w-full sm:w-auto text-lg font-semibold uppercase px-6 py-3 border-2 border-[#ff00ff] text-[#ff00ff] rounded-md hover:bg-[#ff00ff]/10 transition-colors"
                >
                  Buy on PancakeSwap
                </button>
              </div>
              <button
                onClick={() => {
                  setSelectedTool(null);
                  setAccessGranted(null);
                }}
                className="w-full text-lg font-semibold uppercase px-6 py-3 border-2 border-[#ff00ff] text-[#ff00ff] rounded-full hover:bg-[#ff00ff]/10 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
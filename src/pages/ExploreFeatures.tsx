import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Cpu, BarChart, Code, Layers, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  { title: "AI Analytics", description: "Cutting-edge AI for real-time market analysis.", icon: <Cpu className="h-8 w-8 text-[#ff00ff]" /> },
  { title: "Secure Wallet Integration", description: "Manage your wallet with top-notch security.", icon: <BarChart className="h-8 w-8 text-[#6f00ff]" /> },
  { title: "Token Creation", description: "Effortlessly create new tokens with ease.", icon: <Code className="h-8 w-8 text-[#ff00ff]" /> },
  { title: "Liquidity Pools", description: "Create and manage liquidity pools seamlessly.", icon: <Layers className="h-8 w-8 text-[#6f00ff]" /> },
  { title: "Crypto News", description: "Stay updated with AI-curated crypto news.", icon: <Newspaper className="h-8 w-8 text-[#ff00ff]" /> },
];

export default function ExploreFeatures() {
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
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 right-10 h-56 w-56 bg-[#ff00ff]/40 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-10 h-56 w-56 bg-[#6f00ff]/40 blur-3xl"
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
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl font-bold font-mono bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
            Explore Features
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-[#121826]/50 border border-[#ff00ff]/60 rounded-lg shadow-xl transition-all cursor-pointer hover:bg-[#ff00ff]/10"
            >
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent">
                  {feature.title}
                </h2>
              </div>
              <p className="text-lg text-[#e0e7ff]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

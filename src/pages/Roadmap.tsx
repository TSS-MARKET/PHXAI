import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const roadmapItems = [
  {
    phase: "Q1 2025",
    description:
      "Launch beta platform on BSC with core AI tools (sentiment analysis & Twitter tracker). Begin initial user onboarding and community building.",
  },
  {
    phase: "Q2 2025",
    description:
      "Roll out full feature set including automated trading and token sale integration. Launch $PHX token with staking and governance.",
  },
  {
    phase: "Q3 2025",
    description:
      "Expand globally with multi-chain support (e.g., Solana). Enhance AI functionalities and additional monetization streams.",
  },
  {
    phase: "Q4 2025",
    description:
      "TBD: Additional future enhancements and further developments.",
  },
];

export default function Roadmap() {
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
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 left-10 h-64 w-64 bg-[#ff00ff]/40 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 right-10 h-64 w-64 bg-[#6f00ff]/40 blur-3xl"
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
          <h1 className="text-6xl font-bold font-mono bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
            Roadmap
          </h1>
        </motion.div>
        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index === 3 ? 0.1 : index * 0.2, // Q4 gets a 0.1s delay, others use index*0.2
              }}
              className="p-6 bg-[#121826]/50 border border-[#ff00ff]/60 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent">
                {item.phase}
              </h2>
              <p className="mt-2 text-xl text-[#e0e7ff]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

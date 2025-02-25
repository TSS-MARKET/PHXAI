import { Button } from "./ui/button";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  // Fade-in animation for container
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{ perspective: "1500px" }} // increased perspective for deeper 3D
    >
      {/* Additional 3D Background Elements */}
      <motion.div
        initial={{ rotateY: 0, scale: 0.8 }}
        animate={{ rotateY: 360, scale: 1.2 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] h-[300px] w-[300px] bg-gradient-to-br from-[#ff00ff] to-[#6f00ff] opacity-20 blur-3xl"
      />
      <motion.div
        initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
        animate={{ rotateX: 360, rotateY: 360, scale: 1.1 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] bg-gradient-to-br from-[#6f00ff] to-[#ff00ff] opacity-25 blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-[#0a0f1e] border border-[#ff00ff] rounded-full opacity-10 blur-2xl"
      />

      {/* Existing Glow Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-1/4 h-60 w-60 bg-[#ff00ff]/40 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-1/4 h-60 w-60 bg-[#6f00ff]/40 blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto mt-[-50px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold font-space tracking-tight bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent drop-shadow-md">
            PHOENIX AI 🐦‍🔥
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-space tracking-wide bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent">
            REBIRTH OF CRYPTO
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-4">
            Harness the power of artificial intelligence to dominate crypto markets. Empower your crypto journey with a full spectrum of breakthrough tools—from smart trading to deep analytics and beyond.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-secondary/20 text-secondary hover:bg-secondary/10 font-semibold py-8 px-10 rounded-full transition-transform"
            onClick={() => navigate("/buy-token")}
          >
            BUY $PHX
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-accent/20 text-accent hover:bg-accent/10 font-semibold py-8 px-10 rounded-full transition-transform flex items-center gap-2"
            onClick={() => navigate("/ai-tools")}
          >
            AI Tools
            <Brain className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

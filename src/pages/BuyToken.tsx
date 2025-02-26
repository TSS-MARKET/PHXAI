import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// Logos
import BinanceLogo from "/logos/binance.png";
import BybitLogo from "/logos/bybit.png";
import OKXLogo from "/logos/okx.png";
import BitgetLogo from "/logos/bitget.png";
import GateioLogo from "/logos/gateio.png";
import MEXCLogo from "/logos/mexc.png";
import JupiterLogo from "/logos/jupiter.png";
import PancakeSwapLogo from "/logos/pancakeswap.png";

export default function BuyToken() {
  const navigate = useNavigate();
  const CONTRACT_ADDRESS = "7PhXjR2rRpFgjvjwrxEvKGeCqYvKBZA8qRm4LXQAjKfG";

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    toast.success("Contract address copied!");
  };

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0a0f1e] text-white overflow-hidden">
      {/* 3D Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 h-60 w-60 bg-[#ff00ff]/40 blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 h-60 w-60 bg-[#6f00ff]/40 blur-3xl opacity-70 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-6">
        {/* Back Button */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            className="text-[#ff00ff] hover:text-[#6f00ff] transition-all"
            onClick={handleBack}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="text-base sm:text-lg font-bold tracking-wide uppercase">Back</span>
          </Button>
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-mono bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
              Buy $PHX Token
            </h1>
            <p className="text-sm sm:text-lg uppercase mt-2 tracking-wide text-[#e0e7ff]">
              The Future of AI-Powered Crypto Trading
            </p>
          </div>
        </div>

        {/* DEX Buy Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent uppercase">
            Buy on DEX
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button
              className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold bg-[#ff00ff]/20 hover:bg-[#ff00ff]/30 text-[#ff00ff] border border-[#ff00ff]/60 transition-all rounded-full uppercase tracking-widest flex items-center gap-2"
              onClick={() => window.open("https://jup.ag", "_blank")}
            >
              <img src={JupiterLogo} alt="Jupiter" className="h-5 w-5 sm:h-6 sm:w-6" />
              Buy on Jupiter
            </Button>
            <Button
              className="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold bg-[#6f00ff]/20 hover:bg-[#6f00ff]/30 text-[#6f00ff] border border-[#6f00ff]/60 transition-all rounded-full uppercase tracking-widest flex items-center gap-2"
              onClick={() => window.open("https://pancakeswap.finance", "_blank")}
            >
              <img src={PancakeSwapLogo} alt="PancakeSwap" className="h-5 w-5 sm:h-6 sm:w-6" />
              Buy on PancakeSwap
            </Button>
          </div>
        </motion.div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 p-4 border border-[#ff00ff]/60 rounded-lg bg-[#121826]/50 backdrop-blur-md shadow-2xl shadow-[#ff00ff]/30"
        >
          <div className="flex flex-col gap-2 bg-[#ff00ff]/10 p-3 rounded-lg">
            <p className="text-sm sm:text-base uppercase font-semibold text-[#e0e7ff]">Contract Address:</p>
            <div className="flex items-center justify-between gap-3">
              <code className="text-sm sm:text-base text-[#ff00ff] font-mono break-all">{CONTRACT_ADDRESS}</code>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#ff00ff] hover:text-[#6f00ff] transition-all"
                onClick={copyAddress}
              >
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* CEX Listings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 space-y-4"
        >
          <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent uppercase">
            CEX Listings Coming Soon
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              ["Binance", BinanceLogo],
              ["Bybit", BybitLogo],
              ["OKX", OKXLogo],
              ["Bitget", BitgetLogo],
              ["Gate.io", GateioLogo],
              ["MEXC", MEXCLogo],
            ].map(([exchange, logo], index) => (
              <motion.div
                key={exchange}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="p-3 sm:p-5 text-center text-sm sm:text-lg font-bold text-[#e0e7ff] border border-[#ff00ff]/60 rounded-lg bg-[#121826]/60 hover:bg-[#ff00ff]/10 transition-all uppercase tracking-wider flex flex-col items-center justify-center gap-2"
              >
                <img src={logo} alt={exchange} className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>{exchange}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

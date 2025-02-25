import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Wallet, Globe } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Exchange Logos
import BinanceLogo from "/logos/binance.png";
import BybitLogo from "/logos/bybit.png";
import OKXLogo from "/logos/okx.png";
import BitgetLogo from "/logos/bitget.png";
import GateioLogo from "/logos/gateio.png";
;
import MEXCLogo from "/logos/mexc.png";

// DEX Logos
import JupiterLogo from "/logos/jupiter.png";
import PancakeSwapLogo from "/logos/pancakeswap.png";

export default function BuyToken() {
  const navigate = useNavigate();
  const CONTRACT_ADDRESS = "7PhXjR2rRpFgjvjwrxEvKGeCqYvKBZA8qRm4LXQAjKfG"; // Example Solana address

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
      <div className="relative z-10 max-w-4xl w-full space-y-12 text-center">
        {/* Animated Title */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-6xl sm:text-7xl font-bold font-mono bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent tracking-widest drop-shadow-md">
            Buy $PHX Token
          </h1>
          <p className="text-[#e0e7ff] text-lg tracking-wide uppercase mt-4">
            The Future of AI-Powered Crypto Trading
          </p>
        </motion.div>

        {/* DEX Buy Buttons (Updated with PancakeSwap) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent uppercase">
            Buy on DEX
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button
              size="lg"
              className="px-10 py-5 text-xl font-bold bg-[#ff00ff]/20 hover:bg-[#ff00ff]/30 text-[#ff00ff] border border-[#ff00ff]/60 transition-all rounded-full uppercase tracking-widest flex items-center gap-3"
              onClick={() => window.open("https://jup.ag", "_blank")}
            >
              <img src={JupiterLogo} alt="Jupiter" className="h-6 w-6" />
              Buy on Jupiter
            </Button>
            <Button
              size="lg"
              className="px-10 py-5 text-xl font-bold bg-[#6f00ff]/20 hover:bg-[#6f00ff]/30 text-[#6f00ff] border border-[#6f00ff]/60 transition-all rounded-full uppercase tracking-widest flex items-center gap-3"
              onClick={() => window.open("https://pancakeswap.finance", "_blank")}
            >
              <img src={PancakeSwapLogo} alt="PancakeSwap" className="h-6 w-6" />
              Buy on PancakeSwap
            </Button>
          </div>
        </motion.div>

        {/* Contract Address Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 border border-[#ff00ff]/60 rounded-lg bg-[#121826]/50 backdrop-blur-md shadow-2xl shadow-[#ff00ff]/30"
        >
          <div className="flex items-center justify-between gap-4 p-3 bg-[#ff00ff]/10 rounded-lg">
            <p className="text-sm text-[#e0e7ff] uppercase font-semibold">Contract Address:</p>
            <div className="flex items-center gap-3">
              <code className="text-[#ff00ff] font-mono text-lg">{CONTRACT_ADDRESS}</code>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-[#ff00ff] hover:text-[#6f00ff] transition-all"
                onClick={copyAddress}
              >
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* CEX Listings Section with Logos */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent uppercase">
            CEX Listings Coming Soon
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[["Binance", BinanceLogo], ["Bybit", BybitLogo], ["OKX", OKXLogo], ["Bitget", BitgetLogo], ["Gate.io", GateioLogo], ["MEXC", MEXCLogo]].map(([exchange, logo], index) => (
              <motion.div
                key={exchange}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="p-5 text-center text-lg font-bold text-[#e0e7ff] border border-[#ff00ff]/60 rounded-lg bg-[#121826]/60 hover:bg-[#ff00ff]/10 transition-all uppercase tracking-wider flex items-center justify-center gap-3"
              >
                <img src={logo} alt={exchange} className="h-6 w-6" />
                {exchange}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

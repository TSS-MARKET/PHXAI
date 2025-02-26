import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/roadmap", label: "Roadmap" },
    { path: "/community", label: "Community" },
    { path: "/features", label: "Features" },
  ];

  return (
    <nav className="bg-[#0a0f1e] shadow-lg w-full relative z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section: Logo (PHOENIX AI) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          PHOENIX AI
        </motion.button>

        {/* Center Section: Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center gap-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 rounded-md border border-[#ff00ff]/60 bg-[#121826]/50 shadow-md"
            >
              <Link
                to={link.path}
                className="text-lg font-semibold uppercase bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent transition-colors hover:opacity-90 px-4 py-2"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Section: Desktop CTA Buttons */}
        <div className="hidden md:flex flex-1 justify-end gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => navigate("/buy-token")}
            className="bg-[#ff00ff] hover:bg-[#ff00ff]/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform"
          >
            BUY $PHX
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => navigate("/ai-tools")}
            className="bg-[#6f00ff] hover:bg-[#6f00ff]/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform flex items-center gap-2"
          >
            AI TOOLS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => alert("Wallet Connect Coming Soon!")}
            className="flex items-center gap-2 border border-[#ff00ff]/60 text-[#ff00ff] font-semibold py-2 px-4 rounded-full transition-all"
          >
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </motion.button>
        </div>

        {/* Mobile Right Section: Hamburger Menu & Mobile Connect Wallet Icon */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => alert("Wallet Connect Coming Soon!")}
            className="flex items-center gap-2 border border-[#ff00ff]/60 text-[#ff00ff] font-semibold py-2 px-4 rounded-full transition-all"
          >
            <Wallet className="h-5 w-5" />
          </motion.button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.label} className="p-2">
                <Link
                  to={link.path}
                  className="text-lg font-semibold uppercase bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent transition-colors hover:opacity-90 block px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/buy-token");
                }}
                className="bg-[#ff00ff] hover:bg-[#ff00ff]/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform"
              >
                BUY $PHX
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/ai-tools");
                }}
                className="bg-[#6f00ff] hover:bg-[#6f00ff]/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform flex items-center justify-center gap-2"
              >
                AI TOOLS
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  alert("Wallet Connect Coming Soon!");
                }}
                className="flex items-center justify-center gap-2 border border-[#ff00ff]/60 text-[#ff00ff] font-semibold py-2 px-4 rounded-full transition-all"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

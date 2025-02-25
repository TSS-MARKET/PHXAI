import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Define your navigation links for the center section
  const navLinks = [
    { path: "/roadmap", label: "Roadmap" },
    { path: "/community", label: "Community" },
    { path: "/features", label: "Features" },
  ];

  return (
    <nav className="bg-[#0a0f1e] shadow-lg relative z-50">
      {/* Top Bar: Left = Logo, Right = Hamburger (on mobile) */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: PHOENIX AI (Back to Home) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          PHOENIX AI
        </motion.button>

        {/* Hamburger Button (shows on mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu (mobile) & Horizontal Menu (desktop) */}
      <div
        className={`md:flex items-center justify-between px-6 ${
          isOpen ? "flex flex-col" : "hidden"
        } md:flex-row`}
      >
        {/* Center Section: Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 rounded-md border border-[#ff00ff]/60 bg-[#121826]/50 shadow-md"
            >
              <Link
                to={link.path}
                className="text-lg font-semibold uppercase bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent transition-colors hover:opacity-90 px-4 py-2 block"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Section: CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0">
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
      </div>
    </nav>
  );
}

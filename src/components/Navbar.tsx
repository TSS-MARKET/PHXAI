import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import WalletConnect from "./WalletConnect";

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
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          PHOENIX AI
        </motion.button>

        {/* Desktop Navigation */}
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

        {/* Desktop CTAs */}
        <div className="hidden md:flex flex-1 justify-end gap-4 items-center">
          <motion.div
            whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-2 rounded-md border border-[#ff00ff]/60 bg-[#121826]/50 shadow-md"
          >
            <Link
              to="/buy-token"
              className="text-lg font-semibold uppercase bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent transition-colors hover:opacity-90 px-4 py-2"
            >
              BUY $PHX
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-2 rounded-md border border-[#ff00ff]/60 bg-[#121826]/50 shadow-md"
          >
            <Link
              to="/ai-tools"
              className="text-lg font-semibold uppercase bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent transition-colors hover:opacity-90 px-4 py-2"
            >
              AI TOOLS
            </Link>
          </motion.div>
          <WalletConnect />
        </div>

        {/* Mobile Top Bar: WalletConnect + Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <WalletConnect />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
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
              <motion.div
                whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2 rounded-md border border-[#ff00ff]/60 bg-[#121826]/50 shadow-md"
              >
                <Link
                  to="/buy-token"
                  className="text-lg font-semibold uppercase bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent transition-colors hover:opacity-90 block px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BUY $PHX
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2 rounded-md border border-[#ff00ff]/60 bg-[#121826]/50 shadow-md"
              >
                <Link
                  to="/ai-tools"
                  className="text-lg font-semibold uppercase bg-gradient-to-r from-[#ff00ff] to-[#6f00ff] bg-clip-text text-transparent transition-colors hover:opacity-90 block px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AI TOOLS
                </Link>
              </motion.div>
              {/* Mobile WalletConnect Menu Item */}
              <div className="p-2">
                <WalletConnect />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

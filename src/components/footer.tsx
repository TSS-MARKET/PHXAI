import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4">
            © {new Date().getFullYear()} PHOENIX AI. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-[#ff00ff] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-[#ff00ff] transition-colors">
              About PHOENIX AI
            </Link>
            <Link to="/team" className="hover:text-[#ff00ff] transition-colors">
              Team
            </Link>
            <Link to="/contact" className="hover:text-[#ff00ff] transition-colors">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

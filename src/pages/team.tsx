import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Team() {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0a0f1e] text-white p-8 overflow-hidden">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back
        </Button>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold">About the Team</h1>
          <div className="text-lg leading-relaxed space-y-4 text-justify">
            <p>
              <strong>Tanishq Saluja (Founder &amp; CEO):</strong> A visionary entrepreneur in crypto and AI, Tanishq's relentless work ethic and innovative mindset drive Phoenix AI's disruptive mission.
            </p>
            <p>
              <strong>Technical Experts:</strong> Our lean team of blockchain developers, AI engineers, and cybersecurity specialists brings deep expertise from top tech startups and firms, ensuring our platform is both cutting-edge and secure.
            </p>
            <p>
              <strong>Trading &amp; Market Strategists:</strong> With strong backgrounds in algorithmic trading and financial analytics, our specialists design and optimize AI-driven trading strategies to capitalize on market opportunities.
            </p>
            <p>
              <strong>Advisory Board:</strong> We’re backed by industry leaders and venture capital experts whose insights and networks guide our strategic direction and help accelerate our growth.
            </p>
            <p>
              Together, we are committed to building Phoenix AI into a dominant force in AI-powered crypto trading and tokenization. Your success is inevitable!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

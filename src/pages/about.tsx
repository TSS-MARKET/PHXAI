import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();
  const handleBack = () => {
    if(window.history.state && window.history.state.idx > 0){
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <section 
      className="relative min-h-screen bg-[#0a0f1e] text-white px-4 py-12 overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Optional: Background overlay (you can remove this if undesired) */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" onClick={handleBack} className="text-white hover:text-gray-300">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back
          </Button>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="space-y-6"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold font-space bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
            PHOENIX AI
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-space tracking-tight">
            About Us & Our Vision
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl leading-relaxed space-y-4">
            <p>
              At Phoenix AI, we harness the power of artificial intelligence to dominate crypto markets. Our journey began with a singular vision: to merge cutting-edge AI with blockchain technology and empower users with intelligent tools that drive innovation.
            </p>
            <h3 className="text-2xl font-bold mt-4">Our Mission</h3>
            <p>
              Our mission is to revolutionize the crypto industry by providing state-of-the-art AI tools that offer deep insights, smart trading solutions, and advanced analytics. We are dedicated to making crypto trading smarter, safer, and more accessible to investors worldwide.
            </p>
            <h3 className="text-2xl font-bold mt-4">Our Vision</h3>
            <p>
              We envision a future where artificial intelligence not only predicts market trends but also drives strategic decision-making in crypto investments. Phoenix AI is committed to creating a platform that redefines crypto trading and asset management through continuous innovation.
            </p>
            <h3 className="text-2xl font-bold mt-4">Our Story</h3>
            <p>
              Founded by Tanishq Saluja, Phoenix AI emerged from a passion for technology and a deep belief in the transformative power of AI. With a team of experts in AI, blockchain, and fintech, we have built a platform that empowers investors and traders to unlock new opportunities in the digital asset space.
            </p>
            <h3 className="text-2xl font-bold mt-4">Join Our Journey</h3>
            <p>
              We invite you to join us on this exciting journey. Whether you’re a seasoned investor or a newcomer, Phoenix AI provides the tools and insights you need to thrive in a rapidly evolving market. Together, we can ignite a renaissance in the crypto world—a rebirth powered by innovation, passion, and excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // Using HashRouter
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Binance } from "@thirdweb-dev/chains";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BuyToken from "./pages/BuyToken";
import AiTools from "./pages/AiTools";
import Roadmap from "./pages/Roadmap";
import Community from "./pages/community";
import ExploreFeatures from "./pages/ExploreFeatures";
import About from "./pages/about";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import Team from "./pages/team";

// Navbar
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <ThirdwebProvider 
    clientId="3926c1efa1e7db25e00965547e2b47f4" 
    activeChain={Binance}
    autoConnect={true}  // Enable auto connect so wallet persists on refresh
  >
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Global Navbar */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/buy-token" element={<BuyToken />} />
            <Route path="/ai-tools" element={<AiTools />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/community" element={<Community />} />
            <Route path="/features" element={<ExploreFeatures />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </HashRouter>
  </ThirdwebProvider>
);

export default App;

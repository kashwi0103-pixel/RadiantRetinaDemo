import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-cream text-charcoal selection:bg-chartreuse selection:text-forest">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-chartreuse opacity-20 rounded-full blur-md" />
            <div className="w-4 h-4 rounded-full bg-chartreuse relative z-10" />
          </div>
          <span className="text-2xl font-bold text-forest tracking-tight">Radiant Retina</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-charcoal/80">
          <Link to="/screen" className="hover:text-forest transition-colors">Screening</Link>
          <Link to="/how-it-works" className="hover:text-forest transition-colors">How it works</Link>
          <Link to="/dashboard" className="hover:text-forest transition-colors">For Clinicians</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:block font-medium text-forest hover:text-forest-dark transition-colors">Login</Link>
          <Link 
            to="/screen" 
            className="bg-forest text-cream px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-forest-dark transition-all duration-300"
          >
            Start Screening <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-forest mb-8">
            See the Retina.<br />
            Understand the Risk.<br />
            <span className="text-terracotta">Act in Time.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-12 max-w-xl">
            An AI-powered diabetic retinopathy screening platform designed to turn retinal images into actionable patient and healthcare intelligence.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              to="/screen" 
              className="bg-chartreuse text-forest px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#cbe04a] transition-colors shadow-sm"
            >
              Start Screening <Activity className="w-5 h-5" />
            </Link>
            <Link 
              to="/dashboard" 
              className="bg-cream-dark text-forest px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-[#e0d6c2] transition-colors"
            >
              Explore Platform <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Hero Visual - Stylised Retinal Representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square flex items-center justify-center"
        >
          {/* Abstract Retinal Design */}
          <div className="absolute inset-0 bg-cream-dark/30 rounded-full blur-3xl opacity-50" />
          <svg viewBox="0 0 400 400" className="w-full h-full max-w-lg drop-shadow-xl" aria-hidden="true">
            <defs>
              <radialGradient id="retina-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D9E66B" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#6FA66A" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#F7F2E8" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D9785B" stopOpacity="1" />
                <stop offset="100%" stopColor="#D9785B" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Base Macula/Optic Disc Area */}
            <circle cx="200" cy="200" r="180" fill="url(#retina-glow)" />
            <circle cx="200" cy="200" r="179" stroke="#6FA66A" strokeWidth="1" strokeOpacity="0.3" fill="none" />
            
            {/* Flowing Organic Lines representing vessels */}
            <path d="M 240 60 C 220 120, 180 180, 120 280 C 100 310, 100 350, 120 370" stroke="#214E3B" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
            <path d="M 320 120 C 260 140, 200 200, 160 320" stroke="#6FA66A" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9" />
            <path d="M 360 220 C 300 210, 220 230, 180 340" stroke="#D9785B" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
            <path d="M 160 40 C 180 100, 140 180, 60 220" stroke="#6FA66A" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
            
            {/* Connected Nodes representing analysis points */}
            <circle cx="180" cy="180" r="12" fill="#214E3B" />
            <circle cx="180" cy="180" r="24" fill="#214E3B" opacity="0.1" />
            
            <circle cx="120" cy="280" r="8" fill="#D9785B" />
            <circle cx="120" cy="280" r="20" fill="url(#node-glow)" opacity="0.4" />
            
            <circle cx="220" cy="230" r="6" fill="#D9E66B" />
            
            <circle cx="260" cy="140" r="10" fill="#6FA66A" />
            
            <circle cx="320" cy="120" r="5" fill="#D9785B" />
          </svg>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-4 bg-cream p-4 rounded-2xl shadow-sm border border-cream-dark flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-botanical/20 text-botanical flex items-center justify-center font-bold">✓</div>
            <div>
              <div className="text-sm font-bold text-forest">High Confidence</div>
              <div className="text-xs text-charcoal/60">94% Analysis</div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -left-8 bg-cream p-4 rounded-2xl shadow-sm border border-cream-dark flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-terracotta/20 text-terracotta flex items-center justify-center font-bold">!</div>
            <div>
              <div className="text-sm font-bold text-forest">Risk Detected</div>
              <div className="text-xs text-charcoal/60">Early intervention</div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Play, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Creative Professional Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
        
        {/* Deep architectural gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-900/40 border border-teal-700/50 text-teal-300 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
            <Activity className="w-4 h-4" /> Built for Indian Eye-Care Providers
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Prevent blindness with <span className="text-teal-400">AI-powered</span> retinal screening.
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
            Empower your clinic with DR Sahayak. Instantly detect and grade Diabetic Retinopathy from fundus images with enterprise-grade precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/screen" className="w-full sm:w-auto bg-teal-600 text-white px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-teal-500 transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)]">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="w-full sm:w-auto bg-slate-800 text-white border border-slate-700 px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-700 transition-all shadow-sm">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-lg lg:max-w-full flex justify-center"
        >
          {/* Main Retina Animation replacing the card */}
          <div className="relative w-full aspect-square max-w-[400px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3),_0_0_40px_rgba(20,184,166,0.2)] bg-slate-900 border-[8px] border-white z-10">
            {/* Realistic Retina Base */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_#d97706_0%,_#b45309_30%,_#78350f_70%,_#451a03_100%)] shadow-[0_0_50px_rgba(0,0,0,0.9)_inset]" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <defs>
                <filter id="blur-sm"><feGaussianBlur stdDeviation="1" /></filter>
                <filter id="blur-md"><feGaussianBlur stdDeviation="2" /></filter>
                <filter id="blur-lg"><feGaussianBlur stdDeviation="3" /></filter>
              </defs>
              {/* Optic Disc */}
              <ellipse cx="75" cy="50" rx="9" ry="12" fill="#fcd34d" opacity="0.9" filter="url(#blur-sm)" />
              <ellipse cx="75" cy="50" rx="5" ry="7" fill="#fef3c7" opacity="0.8" filter="url(#blur-sm)" />
              
              {/* Macula */}
              <circle cx="40" cy="50" r="15" fill="#451a03" opacity="0.7" filter="url(#blur-lg)" />
              <circle cx="40" cy="50" r="5" fill="#2e1002" opacity="0.5" filter="url(#blur-sm)" />

              {/* Main Vessels (Arteries and Veins) */}
              <g strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                {/* Superior temporal */}
                <path d="M 75 45 Q 60 15 20 10" stroke="#7f1d1d" strokeWidth="1.8" fill="none" />
                <path d="M 73 47 Q 55 25 15 25" stroke="#991b1b" strokeWidth="1.2" fill="none" />
                {/* Inferior temporal */}
                <path d="M 75 55 Q 60 85 20 90" stroke="#7f1d1d" strokeWidth="1.8" fill="none" />
                <path d="M 73 53 Q 55 75 15 75" stroke="#991b1b" strokeWidth="1.2" fill="none" />
                {/* Superior nasal */}
                <path d="M 78 45 Q 85 25 95 20" stroke="#7f1d1d" strokeWidth="1.5" fill="none" />
                {/* Inferior nasal */}
                <path d="M 78 55 Q 85 75 95 80" stroke="#7f1d1d" strokeWidth="1.5" fill="none" />
                
                {/* Branches */}
                <path d="M 45 23 Q 30 15 10 18" stroke="#7f1d1d" strokeWidth="1" fill="none" />
                <path d="M 40 33 Q 25 35 5 40" stroke="#991b1b" strokeWidth="0.8" fill="none" />
                <path d="M 45 77 Q 30 85 10 82" stroke="#7f1d1d" strokeWidth="1" fill="none" />
                <path d="M 40 67 Q 25 65 5 60" stroke="#991b1b" strokeWidth="0.8" fill="none" />
                
                {/* Pathologies */}
                <circle cx="35" cy="35" r="1.5" fill="#7f1d1d" opacity="0.9" />
                <circle cx="32" cy="37" r="1" fill="#7f1d1d" opacity="0.9" />
                <circle cx="55" cy="65" r="2" fill="#7f1d1d" opacity="0.9" />
                
                {/* Hard Exudates (Yellowish) */}
                <circle cx="58" cy="63" r="1" fill="#fde047" opacity="0.8" />
                <circle cx="56" cy="67" r="1.5" fill="#fde047" opacity="0.8" />
                <circle cx="54" cy="64" r="1" fill="#fde047" opacity="0.8" />
              </g>
            </svg>

            {/* AI Overlay Layer (Grid, Targets, Scanner) */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none rounded-full">
              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.15)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]" />
              
              {/* Scanner Line moving left to right */}
              <motion.div 
                animate={{ left: ['-20%', '120%', '-20%'] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="absolute top-0 bottom-0 w-[2px] bg-teal-400 shadow-[0_0_20px_#2dd4bf] z-20"
              >
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-teal-500/30 to-transparent" />
              </motion.div>

              {/* Detected Pathologies popping up */}
              <motion.div 
                animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.8, 0.8, 1, 1, 0.8, 0.8] }}
                transition={{ duration: 4, times: [0, 0.35, 0.4, 0.9, 0.95, 1], repeat: Infinity }}
                className="absolute left-[30%] top-[30%] w-12 h-12 border-2 border-red-500/80 rounded shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center bg-red-500/10"
              >
                <div className="absolute -top-6 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">MA</div>
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping opacity-75" />
              </motion.div>

              <motion.div 
                animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.8, 0.8, 1, 1, 0.8, 0.8] }}
                transition={{ duration: 4, times: [0, 0.65, 0.7, 0.9, 0.95, 1], repeat: Infinity }}
                className="absolute left-[50%] top-[60%] w-16 h-16 border-2 border-yellow-400/80 rounded shadow-[0_0_15px_rgba(250,204,21,0.5)] flex items-center justify-center bg-yellow-400/10"
              >
                <div className="absolute -bottom-6 -right-2 bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-0.5 rounded shadow-sm">EX</div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping opacity-75" />
              </motion.div>
            </div>
            
            {/* Status overlays on top of the circle */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] -right-[5%] bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-30"
            >
              <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">✓</div>
              <div className="text-sm font-bold text-slate-800">98.2% Confidence</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] -left-[5%] bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-30"
            >
              <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">!</div>
              <div>
                <div className="text-sm font-bold text-slate-800">Moderate NPDR</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

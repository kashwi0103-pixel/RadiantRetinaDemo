import { Link } from 'react-router-dom';
import { ArrowRight, Camera, BrainCircuit, HeartPulse, Stethoscope, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-cream text-charcoal selection:bg-chartreuse selection:text-forest overflow-hidden">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-10 h-10 rounded-full bg-forest flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-chartreuse opacity-20 rounded-full blur-md group-hover:opacity-40 transition-opacity" />
            <div className="w-4 h-4 rounded-full bg-chartreuse relative z-10" />
          </Link>
          <Link to="/">
            <span className="text-2xl font-bold text-forest tracking-tight">Radiant Retina</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-charcoal/80">
          <Link to="/screen" className="hover:text-forest transition-colors">Screening</Link>
          <Link to="/how-it-works" className="hover:text-forest transition-colors text-forest font-semibold">How it works</Link>
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

      {/* Hero Header */}
      <section className="relative pt-16 pb-24 px-6 text-center max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-botanical/10 text-botanical px-4 py-2 rounded-full font-bold text-sm mb-6 border border-botanical/20">
            <BrainCircuit className="w-4 h-4" /> The Intelligent Workflow
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-forest mb-6">
            From Image to Action in <span className="text-terracotta">Seconds</span>.
          </h1>
          <p className="text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Radiant Retina transforms standard fundus photography into a clear, actionable clinical insight, blending human empathy with predictive AI.
          </p>
        </motion.div>
      </section>

      {/* Interactive Process Flow */}
      <section className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
        {/* Abstract Background connecting line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cream via-botanical/30 to-cream -translate-x-1/2 -z-10" />

        <div className="space-y-24 md:space-y-32">
          
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
          >
            <div className="flex-1 lg:text-right relative">
              <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-botanical/30 -z-10" />
              <div className="flex items-center lg:justify-end gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-cream-dark text-forest flex items-center justify-center font-bold text-xl lg:order-2 border-4 border-cream z-10 shadow-sm">1</div>
                <h2 className="text-3xl font-bold text-forest">Capture</h2>
              </div>
              <p className="text-lg text-charcoal/70 mb-6 pl-16 lg:pl-0">
                A standard retinal image is captured using any standard fundus camera. The system instantly evaluates image quality—checking contrast, blur, and field-of-view—to ensure reliable clinical assessment.
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-cream-dark relative">
                <div className="absolute top-4 right-4 bg-botanical/10 text-botanical px-3 py-1 rounded-full text-xs font-bold">QUALITY: PASS</div>
                <div className="aspect-square bg-cream rounded-full mb-6 relative flex items-center justify-center overflow-hidden border-8 border-cream-dark">
                  <div className="absolute inset-0 bg-[#D9785B]/10" />
                  <Camera className="w-16 h-16 text-forest/40" />
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 border-[20px] border-botanical/10 rounded-full"
                  />
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-cream-dark rounded-full w-full overflow-hidden">
                    <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-botanical" />
                  </div>
                  <div className="h-2 bg-cream-dark rounded-full w-4/5 overflow-hidden">
                    <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-botanical" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24"
          >
            <div className="flex-1 relative">
              <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-botanical/30 -z-10" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-chartreuse text-forest flex items-center justify-center font-bold text-xl border-4 border-cream z-10 shadow-sm">2</div>
                <h2 className="text-3xl font-bold text-forest">AI Analysis</h2>
              </div>
              <p className="text-lg text-charcoal/70 mb-6 pl-16 lg:pl-0">
                Our deep learning models scan the vascular network. It identifies microaneurysms, hemorrhages, and early pathological signs within seconds, mapping out visual evidence via Grad-CAM overlays.
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <div className="bg-forest p-8 rounded-[2rem] shadow-sm border border-forest-dark relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-chartreuse/10 rounded-full blur-3xl -mt-20 -mr-20" />
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <BrainCircuit className="w-8 h-8 text-chartreuse" />
                  <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full">Processing</span>
                </div>
                
                {/* Abstract Node Network */}
                <div className="h-48 relative z-10 mb-6">
                  <svg viewBox="0 0 200 150" className="w-full h-full">
                    <motion.path 
                      d="M 20 75 Q 60 20, 100 75 T 180 75" 
                      fill="none" 
                      stroke="#D9E66B" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      strokeDasharray="300"
                      initial={{ strokeDashoffset: 300 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.circle cx="100" cy="75" r="6" fill="#D9E66B" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} />
                    <motion.circle cx="100" cy="75" r="16" fill="#D9E66B" opacity="0.2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} />
                    
                    <motion.circle cx="180" cy="75" r="8" fill="#D9785B" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} />
                    <motion.circle cx="180" cy="75" r="24" fill="#D9785B" opacity="0.3" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} />
                  </svg>
                </div>
                
                <div className="bg-forest-dark/50 p-4 rounded-xl relative z-10 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/70">Confidence Score</span>
                    <span className="text-lg font-bold text-chartreuse">94%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: "0%" }} whileInView={{ width: "94%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-chartreuse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
          >
            <div className="flex-1 lg:text-right relative">
              <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-botanical/30 -z-10" />
              <div className="flex items-center lg:justify-end gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-bold text-xl lg:order-2 border-4 border-cream z-10 shadow-[0_0_15px_rgba(217,120,91,0.3)]">3</div>
                <h2 className="text-3xl font-bold text-forest">Empathetic Results</h2>
              </div>
              <p className="text-lg text-charcoal/70 mb-6 pl-16 lg:pl-0">
                Clinical jargon is translated into warm, accessible language. The system provides the clinician with precise pathological data, while generating a friendly, multi-lingual audio summary for the patient.
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-cream-dark relative">
                <div className="bg-lavender/20 p-6 rounded-2xl mb-6 border border-lavender/40">
                  <HeartPulse className="w-8 h-8 text-lavender-dark mb-4" />
                  <p className="text-lg font-medium text-charcoal leading-snug">
                    "Your screening shows changes that should be checked by an eye specialist."
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-lavender-dark flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full translate-x-0.5" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
                    </div>
                    <span className="text-sm font-bold text-lavender-dark">Play Explanation</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-cream-dark/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Stethoscope className="w-5 h-5 text-forest" />
                    <span className="font-bold text-forest text-sm">Clinical Detail</span>
                  </div>
                  <span className="text-xs font-bold text-terracotta bg-terracotta/10 px-2 py-1 rounded-md">DR LEVEL 2</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-forest text-cream py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-botanical/20 rounded-full blur-[100px] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform screening?</h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto mb-10">
            Join health systems deploying Radiant Retina to detect risk earlier, prioritize backlogs, and deliver better patient experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/dashboard" 
              className="bg-chartreuse text-forest px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#cbe04a] transition-colors"
            >
              Explore Dashboard <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/screen" 
              className="bg-forest-dark border border-botanical/30 text-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-botanical/20 transition-colors"
            >
              Run a Simulation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

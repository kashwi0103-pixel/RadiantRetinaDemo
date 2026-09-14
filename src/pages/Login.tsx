import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, UserCircle, HeartPulse, Building2, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Login() {
  const [activeTab, setActiveTab] = useState<'patient' | 'clinician'>('patient');
  const navigate = useNavigate();

  const handlePatientLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/patients');
  };

  const handleClinicianLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-6 selection:bg-chartreuse selection:text-forest relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-botanical/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-forest font-semibold hover:text-forest-dark transition-colors z-20">
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </Link>

      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-xl shadow-cream-dark/50 border border-cream-dark overflow-hidden flex flex-col md:flex-row relative z-10 min-h-[600px]">
        {/* Left Side - Visual */}
        <div className="md:w-5/12 bg-forest text-cream p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark to-forest" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-chartreuse/20 rounded-full blur-3xl mix-blend-overlay" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-chartreuse opacity-40 rounded-full blur-md" />
                <div className="w-4 h-4 rounded-full bg-forest relative z-10" />
              </div>
              <span className="text-2xl font-bold text-cream tracking-tight">Radiant Retina</span>
            </div>
            
            <AnimatePresence mode="wait">
              {activeTab === 'patient' ? (
                <motion.div
                  key="patient-msg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 bg-botanical/30 text-chartreuse px-4 py-2 rounded-full font-bold text-sm mb-2 border border-botanical/40">
                    <HeartPulse className="w-4 h-4" /> Patient Access
                  </div>
                  <h2 className="text-4xl font-bold leading-tight">
                    Your eye health journey, clearly explained.
                  </h2>
                  <p className="text-cream/80 text-lg leading-relaxed">
                    Access your retinal screening results, understand your risk profile, and review personalized care recommendations in a warm, welcoming environment.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="clinician-msg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 bg-terracotta/30 text-cream px-4 py-2 rounded-full font-bold text-sm mb-2 border border-terracotta/40">
                    <Building2 className="w-4 h-4" /> Clinical Access
                  </div>
                  <h2 className="text-4xl font-bold leading-tight">
                    Intelligent screening for modern healthcare.
                  </h2>
                  <p className="text-cream/80 text-lg leading-relaxed">
                    Access regional intelligence, prioritize your patient queue, and view AI-augmented retinal diagnostics to take timely action.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-cream/60 text-sm font-medium mt-16 md:mt-0">
            <ShieldCheck className="w-5 h-5" /> HIPAA Compliant & Secure
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-7/12 p-12 lg:p-16 flex flex-col justify-center">
          <div className="flex bg-cream-dark/40 p-1.5 rounded-full w-fit mb-10 border border-cream-dark/60">
            <button
              onClick={() => setActiveTab('patient')}
              className={cn(
                "px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300",
                activeTab === 'patient' 
                  ? "bg-white text-forest shadow-sm" 
                  : "text-charcoal/60 hover:text-forest hover:bg-white/50"
              )}
            >
              <UserCircle className="w-4 h-4" /> Patient
            </button>
            <button
              onClick={() => setActiveTab('clinician')}
              className={cn(
                "px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300",
                activeTab === 'clinician' 
                  ? "bg-white text-forest shadow-sm" 
                  : "text-charcoal/60 hover:text-forest hover:bg-white/50"
              )}
            >
              <Building2 className="w-4 h-4" /> Clinician
            </button>
          </div>

          <h3 className="text-3xl font-bold text-forest mb-2">
            {activeTab === 'patient' ? "Welcome back" : "Clinician Portal"}
          </h3>
          <p className="text-charcoal/60 mb-8">
            {activeTab === 'patient' 
              ? "Enter your details to view your screening results." 
              : "Sign in to access the regional dashboard."}
          </p>

          <AnimatePresence mode="wait">
            {activeTab === 'patient' ? (
              <motion.form
                key="form-patient"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onSubmit={handlePatientLogin}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">Patient ID</label>
                  <input 
                    type="text" 
                    placeholder="e.g. P-10294"
                    required
                    className="w-full bg-cream-dark/30 border border-cream-dark text-charcoal px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-botanical focus:bg-white transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Maria Garcia"
                    required
                    className="w-full bg-cream-dark/30 border border-cream-dark text-charcoal px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-botanical focus:bg-white transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">Date of Birth</label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-cream-dark/30 border border-cream-dark text-charcoal px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-botanical focus:bg-white transition-all font-medium"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-forest text-cream py-4 rounded-full font-bold text-lg hover:bg-forest-dark transition-all mt-4 flex items-center justify-center gap-2 shadow-sm"
                >
                  Go to Patients <ArrowRight className="w-5 h-5" />
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="form-clinician"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onSubmit={handleClinicianLogin}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="doctor@healthsystem.org"
                    required
                    className="w-full bg-cream-dark/30 border border-cream-dark text-charcoal px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-botanical focus:bg-white transition-all font-medium"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-bold text-forest">Password</label>
                    <a href="#" className="text-sm font-bold text-botanical hover:text-botanical-dark">Forgot?</a>
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    required
                    className="w-full bg-cream-dark/30 border border-cream-dark text-charcoal px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-botanical focus:bg-white transition-all font-medium"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-botanical text-white py-4 rounded-full font-bold text-lg hover:bg-botanical-dark transition-all mt-4 flex items-center justify-center gap-2 shadow-sm"
                >
                  Log in to Dashboard <ArrowRight className="w-5 h-5" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

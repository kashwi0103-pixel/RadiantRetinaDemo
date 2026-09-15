import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="preview" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise-Grade Intelligence</h2>
          <p className="text-lg text-slate-600">
            Clear, actionable screening reports generated in seconds. Empower your clinical staff to make faster, more accurate referral decisions.
          </p>
        </div>
        
        {/* The Mockup Container */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Header/Tracker */}
          <div className="bg-white border-b border-slate-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Patient ID: DR-90214</h3>
                <p className="text-sm text-slate-500">Screening Date: Today, 10:42 AM</p>
              </div>
              
              {/* Status Timeline */}
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="flex flex-col items-center gap-1">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  <span className="text-teal-700 text-xs">Captured</span>
                </div>
                <div className="w-8 h-[2px] bg-teal-200 mb-4"></div>
                <div className="flex flex-col items-center gap-1">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  <span className="text-teal-700 text-xs">Analyzed</span>
                </div>
                <div className="w-8 h-[2px] bg-teal-200 mb-4"></div>
                <div className="flex flex-col items-center gap-1">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  <span className="text-teal-700 text-xs">Report Ready</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4 sm:p-6 grid md:grid-cols-2 gap-6">
            {/* Image & Heatmap */}
            <div className="relative bg-slate-900 rounded-xl aspect-[4/3] overflow-hidden group">
              <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent" />
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-6" preserveAspectRatio="xMidYMid meet">
                <circle cx="50" cy="50" r="45" fill="#f8fafc" opacity="0.1" />
                <path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.8" />
                
                {/* Heatmap highlights */}
                <circle cx="35" cy="40" r="8" fill="#ef4444" opacity="0.4" className="blur-sm" />
                <circle cx="35" cy="40" r="2" fill="#ef4444" opacity="0.9" />
                
                <circle cx="65" cy="55" r="12" fill="#ef4444" opacity="0.3" className="blur-md" />
                <circle cx="65" cy="55" r="3" fill="#ef4444" opacity="0.9" />
                
                <circle cx="50" cy="70" r="6" fill="#eab308" opacity="0.5" className="blur-sm" />
              </svg>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between text-xs text-white/80 font-medium bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg">
                <span>Fundus (OD) - Standard Macula Centered</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" /> Microaneurysms Detected</span>
              </div>
            </div>
            
            {/* Results */}
            <div className="flex flex-col justify-center">
              <div className="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">AI Diagnosis</div>
                <div className="text-3xl font-extrabold text-slate-900 mb-1">Moderate NPDR</div>
                <div className="text-sm text-slate-600 mb-4">Non-Proliferative Diabetic Retinopathy</div>
                
                {/* Severity Scale */}
                <div className="flex gap-1 mb-2">
                  <div className="h-2 flex-1 bg-green-500 rounded-l-full" />
                  <div className="h-2 flex-1 bg-yellow-400" />
                  <div className="h-2 flex-1 bg-orange-500 ring-2 ring-slate-900 ring-offset-2 scale-110 z-10" />
                  <div className="h-2 flex-1 bg-red-500" />
                  <div className="h-2 flex-1 bg-red-700 rounded-r-full" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>None</span>
                  <span>Mild</span>
                  <span className="text-slate-900">Mod</span>
                  <span>Sev</span>
                  <span>Prolif</span>
                </div>
              </div>
              
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 shadow-sm">
                <div className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-2">Recommendation</div>
                <p className="text-teal-900 font-medium mb-4">Refer to Ophthalmologist for complete dilated eye exam within 4-6 weeks.</p>
                <button className="text-sm font-bold text-teal-700 flex items-center gap-1 hover:gap-2 transition-all">
                  Generate Referral Letter <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

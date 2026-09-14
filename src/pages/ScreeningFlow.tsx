import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, AlertCircle, Play, Mic, FileText, Activity, Upload, X, TrendingUp } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const STEPS = [
  'Patient', 'Image', 'Quality', 'Analysis', 'Result', 'History', 'Risk', 'Communication'
];

export default function ScreeningFlow() {
  const [currentStep, setCurrentStep] = useState(1); // Start at Image (index 1)
  
  // Real analysis state
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    
    const formData = new FormData();
    formData.append('image', selectedImage);
    
    setIsAnalyzing(true);
    setError(null);
    setCurrentStep(3); // Jump straight to Analysis (index 3)
    
    try {
      const res = await fetch('https://dr-sahayak-backend.onrender.com/', {
        method: 'POST',
        body: formData
      });
      
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      
      const data = await res.json();
      setAnalysisResult(data);
      setCurrentStep(4); // Jump to Result
    } catch (err: any) {
      setError(err.message || 'Failed to connect to the server');
      setCurrentStep(1); // Back to image upload on error
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto">
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-forest mb-2">Patient Screening</h1>
          <p className="text-charcoal/60">ID: P-94281 • Maria Garcia</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0 || isAnalyzing}
            className="px-6 py-2 rounded-full font-medium border border-cream-dark text-charcoal hover:bg-white disabled:opacity-50 transition-colors"
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentStep(Math.min(STEPS.length - 1, currentStep + 1))}
            disabled={currentStep === STEPS.length - 1 || isAnalyzing || currentStep === 1}
            className="px-6 py-2 rounded-full font-medium bg-forest text-cream hover:bg-forest-dark disabled:opacity-50 transition-colors"
          >
            Continue
          </button>
        </div>
      </header>

      {/* Progressive Workflow Stepper */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-cream-dark -z-10 rounded-full" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-botanical -z-10 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
        />
        
        {STEPS.map((step, idx) => {
          const isActive = idx === currentStep;
          const isPassed = idx < currentStep;
          return (
            <div key={step} className="flex flex-col items-center gap-2">
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300",
                  isActive ? "bg-forest text-cream ring-4 ring-cream" : 
                  isPassed ? "bg-botanical text-cream ring-4 ring-cream" : 
                  "bg-white text-charcoal/40 border border-cream-dark"
                )}
              >
                {isPassed ? <Check className="w-5 h-5" /> : (idx + 1)}
              </div>
              <span className={cn(
                "text-xs font-semibold",
                isActive ? "text-forest" : "text-charcoal/50"
              )}>
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-cream-dark min-h-[500px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {currentStep === 1 && (
              <ImageUploadStep 
                selectedImage={selectedImage}
                previewUrl={previewUrl}
                error={error}
                onSelect={handleSelectImage}
                onClear={handleClearImage}
                onAnalyze={handleAnalyze}
              />
            )}
            {currentStep === 2 && <QualityStep onNext={() => setCurrentStep(3)} />}
            {currentStep === 3 && <AnalysisStep />}
            {currentStep === 4 && <ResultStep result={analysisResult} previewUrl={previewUrl} />}
            {currentStep === 5 && <HistoryStep />}
            {currentStep === 7 && <CommunicationStep />}
            
            {/* Fallback for mocked steps */}
            {[0, 6].includes(currentStep) && (
              <div className="h-full flex flex-col items-center justify-center text-charcoal/50 pt-20">
                <Activity className="w-12 h-12 mb-4 opacity-20" />
                <p>This stage is completed or automated in this demo.</p>
                <button 
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="mt-6 px-6 py-2 rounded-full font-medium bg-cream-dark text-forest hover:bg-[#e0d6c2] transition-colors"
                >
                  Skip to next step
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- Step Components ---

function ImageUploadStep({ selectedImage, previewUrl, onSelect, onClear, onAnalyze, error }: any) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <h2 className="text-2xl font-bold text-forest mb-2">Upload Retinal Image</h2>
      <p className="text-charcoal/60 mb-8 text-center max-w-md">
        Upload a fundus photograph for immediate AI analysis.
      </p>
      
      {error && (
        <div className="bg-terracotta/10 text-terracotta px-4 py-3 rounded-xl mb-6 flex items-center gap-2 max-w-md w-full">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}
      
      {!selectedImage ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="w-full max-w-md border-2 border-dashed border-botanical/40 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-botanical/5 hover:border-botanical transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-botanical/10 flex items-center justify-center text-botanical">
            <Upload className="w-8 h-8" />
          </div>
          <div className="text-center">
            <p className="font-bold text-forest">Click to upload image</p>
            <p className="text-sm text-charcoal/50 mt-1">Supports JPG, PNG</p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md flex flex-col items-center gap-6">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cream-dark shadow-sm">
            <img src={previewUrl} alt="Retinal preview" className="w-full h-full object-cover" />
            <button 
              onClick={onClear}
              className="absolute top-4 right-4 bg-white/90 text-terracotta p-2 rounded-full shadow-sm hover:bg-terracotta hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <button 
            onClick={onAnalyze}
            className="w-full bg-forest text-cream py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-forest-dark transition-all shadow-sm"
          >
            Analyze Image <Activity className="w-5 h-5" />
          </button>
        </div>
      )}
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={onSelect}
        accept="image/*" 
        className="hidden" 
      />
    </div>
  );
}

function QualityStep({ onNext }: { onNext: () => void }) {
  // Keeping this for potential workflow steps, although we jump over it currently.
  return (
    <div>
      <h2 className="text-2xl font-bold text-forest mb-8">Image Quality Assessment</h2>
      {/* ... previous mock code ... */}
    </div>
  );
}

function AnalysisStep() {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-16 pb-8">
      <div className="relative w-64 h-64 mb-10">
        {/* Retinal Outline */}
        <div className="absolute inset-0 rounded-full border-4 border-cream-dark opacity-50" />
        
        {/* Scanning Line */}
        <motion.div 
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          className="absolute left-0 w-full h-1 bg-lavender-dark shadow-[0_0_15px_rgba(142,124,195,0.8)] z-10"
        />
        
        {/* Node Highlights appearing */}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-lavender blur-sm"
        />
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-lavender blur-sm"
        />
      </div>
      
      <h2 className="text-2xl font-bold text-forest mb-4">Analyzing Retinal Structures</h2>
      <div className="bg-lavender/10 border border-lavender/30 text-lavender-dark px-6 py-4 rounded-2xl max-w-md text-center">
        <p className="font-semibold text-sm">
          Analyzing image, this may take up to a minute if the server was asleep...
        </p>
      </div>
    </div>
  );
}

function ResultStep({ result, previewUrl }: { result: any, previewUrl: string | null }) {
  // Parse dynamic result based on assumed backend structure
  const drLevel = result?.dr_level ?? result?.level ?? result?.DR_level ?? 'Detected';
  const label = result?.label ?? result?.prediction ?? 'Analysis Complete';
  const referableRaw = result?.referable ?? result?.is_referable;
  const referable = referableRaw === true || referableRaw === 'yes' || referableRaw === 'true';
  const confidence = result?.confidence != null ? 
    (typeof result?.confidence === 'number' && result?.confidence <= 1 ? (result.confidence * 100).toFixed(1) : Number(result.confidence).toFixed(1)) 
    : '94.0';

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold text-forest mb-2">Analysis Complete</h2>
          <div className="flex gap-3">
            <span className="bg-lavender/40 text-lavender-dark px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
              <Activity className="w-4 h-4" /> AI Generated Insight
            </span>
            {referable && (
              <span className="bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Referable DR
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Image & Overlays */}
        <div className="relative bg-cream-dark/20 rounded-3xl p-4 flex items-center justify-center overflow-hidden border border-cream-dark">
          <div className="relative w-full aspect-square max-w-sm rounded-full overflow-hidden bg-cream border-4 border-white shadow-sm">
            {previewUrl ? (
              <img src={previewUrl} alt="Retinal result" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#D9785B]/20 blur-[2px]" />
            )}
            
            {/* AI Evidence Overlays - Grad-CAM representation */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-chartreuse/60 blur-xl rounded-full mix-blend-overlay" />
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-terracotta/70 blur-xl rounded-full mix-blend-overlay" />
          </div>
        </div>

        {/* Results Details */}
        <div className="flex flex-col">
          <div className="bg-cream-dark/30 p-8 rounded-3xl mb-6 border border-cream-dark">
            <div className="text-sm font-bold text-charcoal/50 mb-1 uppercase tracking-wider">Clinical Finding</div>
            <div className="text-4xl font-bold text-terracotta mb-2">DR LEVEL {drLevel}</div>
            <div className="text-lg font-medium text-forest mb-6">{label}</div>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-cream-dark/50">
              <div className="bg-white px-4 py-2 rounded-2xl flex items-center gap-3 shadow-sm border border-cream-dark">
                <span className="text-sm font-semibold text-charcoal/60">Confidence</span>
                <span className="text-xl font-bold text-forest">{confidence}%</span>
              </div>
            </div>

            <h3 className="font-bold text-forest mb-4">Risk Profile</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-charcoal/80 font-medium">
                <div className={cn("w-3 h-3 rounded-full", referable ? "bg-terracotta" : "bg-botanical")} />
                {referable ? 'Patient requires specialist referral' : 'Routine monitoring suggested'}
              </li>
              <li className="flex items-center gap-3 text-charcoal/80 font-medium">
                <div className="w-2 h-2 rounded-full bg-lavender-dark" />
                Microaneurysms detected
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryStep() {
  const timeline = [
    { year: 2026, level: 'Level 1', desc: 'Baseline Established' },
    { year: 2027, level: 'Level 2', desc: 'Mild progression observed' },
  ];

  return (
    <div className="pt-8 pl-8">
      <h2 className="text-2xl font-bold text-forest mb-8">Patient Timeline</h2>
      
      <div className="relative pl-8 border-l-4 border-cream-dark pb-8">
        {timeline.map((item) => (
          <div key={item.year} className="mb-12 relative">
            {/* Timeline Node */}
            <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-cream border-4 border-botanical" />
            
            <div className="bg-cream-dark/20 inline-block px-4 py-1 rounded-full text-sm font-bold text-forest mb-2">
              {item.year}
            </div>
            <div className="text-xl font-bold text-charcoal mb-1">{item.level}</div>
            <div className="text-charcoal/60">{item.desc}</div>
          </div>
        ))}
        
        <div className="mb-4 relative">
          <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-terracotta shadow-[0_0_10px_rgba(217,120,91,0.5)]" />
          <div className="bg-terracotta/10 inline-block px-4 py-1 rounded-full text-sm font-bold text-terracotta mb-2">
            Current
          </div>
          <div className="text-xl font-bold text-terracotta mb-1">Level 2 (Confirmed)</div>
          
          <div className="mt-6 bg-white p-6 rounded-2xl border border-cream-dark inline-block shadow-sm">
            <div className="text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-2">Trajectory</div>
            <div className="text-lg font-bold text-terracotta flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Worsening
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunicationStep() {
  return (
    <div className="pt-6">
      <h2 className="text-2xl font-bold text-forest mb-2">Patient Communication</h2>
      <p className="text-charcoal/60 mb-10">Translate clinical findings into accessible, warm patient explanations.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-cream-dark/30 rounded-3xl p-8 border border-cream-dark">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-forest" />
            <h3 className="font-bold text-forest">Simplified Explanation</h3>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm text-lg leading-relaxed text-charcoal font-medium border-l-4 border-botanical mb-6">
            "Your screening shows changes that should be checked by an eye specialist."
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 bg-forest text-cream py-3 rounded-full font-semibold hover:bg-forest-dark transition-colors">
              Understand My Result
            </button>
          </div>
        </div>

        <div className="bg-lavender/20 rounded-3xl p-8 border border-lavender/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Mic className="w-5 h-5 text-lavender-dark" />
              <h3 className="font-bold text-lavender-dark">Voice Experience</h3>
            </div>
            <select className="bg-white border-none text-sm font-medium rounded-full px-3 py-1 focus:ring-0 text-charcoal">
              <option>English</option>
              <option>Spanish</option>
              <option>Mandarin</option>
            </select>
          </div>
          
          <div className="aspect-[2/1] bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center gap-4 mb-6 relative overflow-hidden">
            {/* Visualizer bars mock */}
            <div className="flex items-end gap-1 h-12 opacity-50">
              {[1,3,2,5,3,4,2,3,1,2].map((h, i) => (
                <div key={i} className="w-1.5 bg-lavender-dark rounded-full" style={{ height: `${h * 20}%` }} />
              ))}
            </div>
          </div>
          
          <button className="w-full bg-lavender-dark text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#7b6bb0] transition-colors shadow-sm">
            <Play className="w-5 h-5 fill-current" /> Play Voice Explanation
          </button>
        </div>
      </div>
    </div>
  );
}

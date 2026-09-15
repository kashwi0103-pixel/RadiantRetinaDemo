import { Camera, BrainCircuit, FileSignature } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      title: "1. Capture Image",
      description: "Take a standard fundus photograph using any compliant retinal camera."
    },
    {
      icon: BrainCircuit,
      title: "2. AI Analysis",
      description: "DR Sahayak's clinically-validated AI analyzes the image for Diabetic Retinopathy severity in seconds."
    },
    {
      icon: FileSignature,
      title: "3. Instant Report",
      description: "Receive a detailed report with annotated heatmaps and automatic referral recommendations."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How DR Sahayak Works</h2>
          <p className="text-lg text-slate-600">
            A seamless, three-step workflow designed to integrate effortlessly into your existing clinical environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center relative z-10 bg-slate-50">
                <div className="w-24 h-24 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-teal-700">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

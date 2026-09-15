import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What cameras are compatible with DR Sahayak?",
      answer: "DR Sahayak is hardware-agnostic and integrates with most standard fundus cameras, including non-mydriatic desktop and handheld devices used in primary care settings."
    },
    {
      question: "Is internet connectivity required?",
      answer: "While cloud analysis requires a connection, DR Sahayak supports an edge-deployment model allowing for offline screening in remote camps, syncing data once connectivity is restored."
    },
    {
      question: "How accurate is the AI grading?",
      answer: "Our AI model has been clinically validated on over 500,000 diverse retinal images with a sensitivity of 96.8% and specificity of 98.2% for referable diabetic retinopathy."
    },
    {
      question: "Is patient data secure?",
      answer: "Absolutely. DR Sahayak is fully compliant with HIPAA and Indian health data regulations (DPDP Act). All data is encrypted end-to-end and stored securely in localized servers."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

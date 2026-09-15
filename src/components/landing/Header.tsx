import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import eyeLogo from '../../assets/images/eye_logo_1789455749600.jpg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={eyeLogo} alt="DR Sahayak Logo" className="w-10 h-10 object-cover rounded-full shadow-sm" />
          <span className="text-xl font-bold text-slate-900 tracking-tight">DR Sahayak</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-teal-700 transition-colors">How it Works</a>
          <a href="#preview" className="hover:text-teal-700 transition-colors">Platform</a>
          <a href="#testimonials" className="hover:text-teal-700 transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-teal-700 transition-colors">FAQ</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
            Login
          </Link>
          <Link to="/screen" className="bg-teal-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors shadow-sm">
            Book a Demo
          </Link>
        </div>
        
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-lg absolute w-full left-0">
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="font-medium text-slate-600">How it Works</a>
          <a href="#preview" onClick={() => setIsOpen(false)} className="font-medium text-slate-600">Platform</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="font-medium text-slate-600">Testimonials</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="font-medium text-slate-600">FAQ</a>
          <hr className="border-slate-100 my-2" />
          <Link to="/login" className="font-medium text-slate-600">Login</Link>
          <Link to="/screen" className="bg-teal-700 text-white text-center py-3 rounded-lg font-medium">Book a Demo</Link>
        </div>
      )}
    </header>
  );
}

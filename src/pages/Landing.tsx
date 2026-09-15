import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import TrustBar from '../components/landing/TrustBar';
import HowItWorks from '../components/landing/HowItWorks';
import DashboardPreview from '../components/landing/DashboardPreview';
import Testimonials from '../components/landing/Testimonials';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <DashboardPreview />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

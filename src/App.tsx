import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScreeningFlow from './pages/ScreeningFlow';
import RegionalIntelligence from './pages/RegionalIntelligence';
import HealthSystem from './pages/HealthSystem';
import Patients from './pages/Patients';
import LiveVoice from './components/LiveVoice';

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LiveVoice />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/screen" element={<ScreeningFlow />} />
          <Route path="/regional" element={<RegionalIntelligence />} />
          <Route path="/health-system" element={<HealthSystem />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/priority" element={<div className="text-forest text-xl font-medium mt-10">Priority Queue (Mock)</div>} />
          <Route path="/simulation" element={<div className="text-forest text-xl font-medium mt-10">Simulation Sandbox (Mock)</div>} />
          <Route path="/settings" element={<div className="text-forest text-xl font-medium mt-10">Settings (Mock)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

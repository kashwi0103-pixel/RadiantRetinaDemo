import { useState } from 'react';
import { Search, Filter, MoreVertical, Calendar, Activity, Eye, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Patients() {
  const [search, setSearch] = useState('');

  const patients = [
    {
      id: 'P-10294',
      name: 'Maria Garcia',
      dob: '12 May 1982',
      lastScreening: '2026-09-14',
      status: 'Referable DR',
      riskLevel: 'high'
    },
    {
      id: 'P-10295',
      name: 'Robert Chen',
      dob: '03 Aug 1975',
      lastScreening: '2026-09-10',
      status: 'Normal',
      riskLevel: 'low'
    },
    {
      id: 'P-10296',
      name: 'Sarah Jenkins',
      dob: '22 Nov 1968',
      lastScreening: '2026-09-08',
      status: 'Mild NPDR',
      riskLevel: 'medium'
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-forest mb-2">Patient Records</h1>
          <p className="text-charcoal/60">View detailed health records and screening history.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
            <input 
              type="text" 
              placeholder="Search patients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white border border-cream-dark rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-botanical focus:ring-1 focus:ring-botanical w-64 text-charcoal"
            />
          </div>
          <button className="bg-white border border-cream-dark p-2 rounded-full text-charcoal/60 hover:text-forest transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Primary Logged In Patient View */}
      <div className="mb-12 bg-white rounded-3xl p-8 border border-cream-dark shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-cream-dark/50 flex items-center justify-center text-3xl font-bold text-forest border-4 border-white shadow-sm">
              MG
            </div>
            <div>
              <h2 className="text-2xl font-bold text-forest">Maria Garcia</h2>
              <div className="flex items-center gap-3 text-sm text-charcoal/60 mt-1 font-medium">
                <span>ID: P-10294</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cream-dark" />
                <span>DOB: 12 May 1982</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border border-terracotta/20">
              <ShieldAlert className="w-4 h-4" /> Referable DR Detected
            </span>
            <button className="bg-cream-dark/30 hover:bg-cream-dark/50 text-forest p-2 rounded-full transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-cream-dark/20 p-5 rounded-2xl border border-cream-dark">
            <div className="flex items-center gap-2 text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-3">
              <Calendar className="w-4 h-4" /> Latest Screening
            </div>
            <div className="text-lg font-bold text-forest">September 14, 2026</div>
            <div className="text-sm text-charcoal/70 mt-1">AI Analysis Completed</div>
          </div>
          
          <div className="bg-cream-dark/20 p-5 rounded-2xl border border-cream-dark">
            <div className="flex items-center gap-2 text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-3">
              <Activity className="w-4 h-4" /> Current Status
            </div>
            <div className="text-lg font-bold text-terracotta">Level 2 (Confirmed)</div>
            <div className="text-sm text-charcoal/70 mt-1">Specialist Referral Required</div>
          </div>
          
          <Link to="/screen" className="bg-forest text-cream p-5 rounded-2xl flex flex-col justify-between group cursor-pointer hover:bg-forest-dark transition-colors">
            <div className="flex items-center gap-2 text-sm font-bold text-cream/70 uppercase tracking-wider mb-3">
              <Eye className="w-4 h-4" /> View Full Report
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Open screening details</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      <h3 className="text-xl font-bold text-forest mb-6">Directory</h3>
      
      <div className="bg-white rounded-3xl border border-cream-dark overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-cream-dark bg-cream-dark/10">
              <th className="p-5 text-sm font-bold text-charcoal/50 uppercase tracking-wider">Patient</th>
              <th className="p-5 text-sm font-bold text-charcoal/50 uppercase tracking-wider">ID</th>
              <th className="p-5 text-sm font-bold text-charcoal/50 uppercase tracking-wider">Last Screening</th>
              <th className="p-5 text-sm font-bold text-charcoal/50 uppercase tracking-wider">Status</th>
              <th className="p-5 text-sm font-bold text-charcoal/50 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map((patient, i, arr) => (
              <tr key={patient.id} className={i !== arr.length - 1 ? "border-b border-cream-dark/50" : ""}>
                <td className="p-5 font-bold text-forest">{patient.name}</td>
                <td className="p-5 text-charcoal/60 font-medium">{patient.id}</td>
                <td className="p-5 text-charcoal/60 font-medium">{patient.lastScreening}</td>
                <td className="p-5">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                    patient.riskLevel === 'low' ? 'bg-botanical/10 text-botanical border border-botanical/20' :
                    patient.riskLevel === 'medium' ? 'bg-[#D9785B]/10 text-[#D9785B] border border-[#D9785B]/20' :
                    'bg-terracotta/10 text-terracotta border border-terracotta/20'
                  }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="p-5">
                  <button className="text-sm font-bold text-forest hover:text-botanical transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

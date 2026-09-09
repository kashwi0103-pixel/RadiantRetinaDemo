import { Building2, Activity, ArrowRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const capacityData = [
  { month: 'Jan', demand: 1200, capacity: 900 },
  { month: 'Feb', demand: 1800, capacity: 900 },
  { month: 'Mar', demand: 2400, capacity: 900 },
  { month: 'Apr', demand: 3200, capacity: 950 },
  { month: 'May', demand: 4500, capacity: 950 },
  { month: 'Jun', demand: 6400, capacity: 900 },
];

export default function HealthSystem() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-forest mb-2">Health System Capacity</h1>
        <p className="text-charcoal/60">Predictive modeling of referral demand versus specialist availability.</p>
      </header>

      {/* Hero Metric Comparison */}
      <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-cream-dark mb-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="flex-1 text-center md:text-left">
          <div className="text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-2">Referral Demand</div>
          <div className="text-5xl font-bold text-terracotta mb-2">6,400</div>
          <div className="text-charcoal/70 font-medium">High-risk patients requiring review</div>
        </div>
        
        <div className="hidden md:flex flex-col items-center justify-center text-cream-dark px-4">
          <div className="w-px h-12 bg-cream-dark mb-2" />
          <span className="text-sm font-bold text-charcoal/30 uppercase">Versus</span>
          <div className="w-px h-12 bg-cream-dark mt-2" />
        </div>
        
        <div className="flex-1 text-center md:text-right">
          <div className="text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-2">Available Capacity</div>
          <div className="text-5xl font-bold text-botanical mb-2">900</div>
          <div className="text-charcoal/70 font-medium">Monthly specialist review capacity</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-cream-dark">
          <h2 className="text-xl font-bold text-forest mb-6">Projected Backlog Trend</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={capacityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D9785B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D9785B" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorCapacity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6FA66A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6FA66A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAE3D5" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#242622', opacity: 0.6 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#242622', opacity: 0.6 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Area type="monotone" name="Referral Demand" dataKey="demand" stroke="#D9785B" strokeWidth={3} fillOpacity={1} fill="url(#colorDemand)" />
                <Area type="monotone" name="System Capacity" dataKey="capacity" stroke="#6FA66A" strokeWidth={3} fillOpacity={1} fill="url(#colorCapacity)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-terracotta/5 rounded-3xl p-8 border border-terracotta/20 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/10 rounded-full blur-3xl -mr-10 -mt-10" />
          
          <Building2 className="w-10 h-10 text-terracotta mb-6" />
          <h3 className="text-xl font-bold text-forest mb-4">Critical Intervention Required</h3>
          <p className="text-charcoal/80 mb-8 leading-relaxed">
            At the current screening volume and detection rate, the system will exceed review capacity by <strong>711%</strong> this month.
          </p>
          
          <button className="w-full bg-forest text-cream py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-forest-dark transition-colors shadow-sm">
            Simulate Interventions <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

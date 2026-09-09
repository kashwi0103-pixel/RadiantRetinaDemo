import { Users, AlertTriangle, TrendingUp, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const mockActivityData = [
  { name: 'Mon', count: 400 },
  { name: 'Tue', count: 600 },
  { name: 'Wed', count: 800 },
  { name: 'Thu', count: 550 },
  { name: 'Fri', count: 900 },
  { name: 'Sat', count: 200 },
  { name: 'Sun', count: 300 },
];

export default function Dashboard() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-forest mb-2">District Screening Overview</h1>
        <p className="text-charcoal/60">Real-time clinical intelligence and patient risk distribution.</p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <KpiCard 
          title="Screened" 
          value="82,000" 
          subtitle="+2,140 this week"
          icon={Users}
          colorClass="text-botanical"
          bgClass="bg-botanical/10"
        />
        <KpiCard 
          title="High Risk" 
          value="6,400" 
          subtitle="7.8% of screened"
          icon={AlertTriangle}
          colorClass="text-terracotta"
          bgClass="bg-terracotta/10"
        />
        <KpiCard 
          title="Rapid Progression" 
          value="1,200" 
          subtitle="Requires urgent review"
          icon={TrendingUp}
          colorClass="text-terracotta"
          bgClass="bg-terracotta/10"
        />
        <KpiCard 
          title="Pending Referral" 
          value="3,100" 
          subtitle="Awaiting specialist"
          icon={Clock}
          colorClass="text-chartreuse-dark"
          bgClass="bg-chartreuse/20"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-cream-dark">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-forest">Screening Volume</h2>
            <select className="bg-cream border-none text-forest font-medium rounded-full px-4 py-2 text-sm focus:ring-0 cursor-pointer">
              <option>Past 7 Days</option>
              <option>Past 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockActivityData}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6FA66A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6FA66A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAE3D5" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#242622', opacity: 0.6 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#242622', opacity: 0.6 }} 
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                  itemStyle={{ color: '#214E3B', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#6FA66A" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorCount)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Priority Action List */}
        <div className="bg-cream-dark/30 rounded-3xl p-8 border border-cream-dark">
          <h2 className="text-xl font-bold text-forest mb-6">Urgent Actions</h2>
          
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm">
                <div>
                  <div className="font-bold text-forest flex items-center gap-2">
                    Patient #{Math.floor(Math.random() * 9000) + 1000}
                    {i < 3 && <span className="w-2 h-2 rounded-full bg-terracotta" />}
                  </div>
                  <div className="text-sm text-charcoal/60 mt-1">Level {4 - i} • Pending Review</div>
                </div>
                <button className="text-botanical hover:text-botanical-dark font-medium text-sm px-3 py-1 bg-botanical/10 rounded-full transition-colors">
                  Review
                </button>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 rounded-full text-forest font-semibold border-2 border-forest/10 hover:bg-forest/5 transition-colors">
            View Priority Queue
          </button>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, subtitle, icon: Icon, colorClass, bgClass }: { 
  title: string, value: string, subtitle: string, icon: any, colorClass: string, bgClass: string 
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-cream-dark flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl ${bgClass} ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold text-forest mb-1">{value}</div>
        <div className="text-sm font-semibold text-charcoal/80 mb-1">{title}</div>
        <div className="text-xs text-charcoal/50">{subtitle}</div>
      </div>
    </div>
  );
}

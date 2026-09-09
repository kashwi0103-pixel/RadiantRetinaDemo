import { Map, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const regionalData = [
  { name: 'North District', coverage: 85, highRisk: 12 },
  { name: 'East Valley', coverage: 62, highRisk: 28 },
  { name: 'Central City', coverage: 94, highRisk: 8 },
  { name: 'West Hills', coverage: 45, highRisk: 41 },
  { name: 'South Shore', coverage: 78, highRisk: 15 },
];

export default function RegionalIntelligence() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-forest mb-2">Regional Intelligence</h1>
          <p className="text-charcoal/60">Geographical risk distribution and screening coverage.</p>
        </div>
        <div className="bg-cream-dark/50 px-4 py-2 rounded-full text-sm font-bold text-forest border border-cream-dark flex items-center gap-2">
          <Map className="w-4 h-4" /> Map View
        </div>
      </header>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Screening Coverage Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark">
          <h2 className="text-xl font-bold text-forest mb-8">Screening Coverage</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalData} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#242622', opacity: 0.8, fontWeight: 500 }} 
                />
                <Tooltip 
                  cursor={{ fill: '#F7F2E8' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="coverage" radius={[0, 10, 10, 0]} barSize={24}>
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.coverage > 70 ? '#6FA66A' : '#D9E66B'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* High Risk Distribution */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-forest">High-Risk Population (%)</h2>
            <AlertTriangle className="w-5 h-5 text-terracotta opacity-50" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalData} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#242622', opacity: 0.8, fontWeight: 500 }} 
                />
                <Tooltip 
                  cursor={{ fill: '#F7F2E8' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="highRisk" radius={[0, 10, 10, 0]} barSize={24}>
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.highRisk > 25 ? '#D9785B' : (entry.highRisk > 15 ? '#D9E66B' : '#6FA66A')} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Risk Legend */}
      <div className="bg-cream-dark/30 rounded-2xl p-6 border border-cream-dark flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-botanical" />
          <span className="text-sm font-medium text-charcoal/80">Normal / Lower Concern</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chartreuse" />
          <span className="text-sm font-medium text-charcoal/80">Moderate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-terracotta" />
          <span className="text-sm font-medium text-charcoal/80">Critical / High Risk</span>
        </div>
      </div>
    </div>
  );
}

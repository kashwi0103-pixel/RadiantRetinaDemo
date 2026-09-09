import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ScanEye, 
  Users, 
  ListOrdered, 
  Map, 
  Building2, 
  ActivitySquare, 
  Settings 
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Screen Patient', path: '/screen', icon: ScanEye },
    { name: 'Patients', path: '/patients', icon: Users },
    { name: 'Priority Queue', path: '/priority', icon: ListOrdered },
    { name: 'Regional Intelligence', path: '/regional', icon: Map },
    { name: 'Health System', path: '/health-system', icon: Building2 },
    { name: 'Simulation', path: '/simulation', icon: ActivitySquare },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-cream-dark/30 border-r border-cream-dark min-h-screen flex flex-col pt-8">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-chartreuse" />
        </div>
        <span className="text-xl font-bold text-forest tracking-tight">Radiant Retina</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-cream-dark text-forest shadow-sm"
                    : "text-charcoal/70 hover:bg-cream-dark/50 hover:text-forest"
                )
              }
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      
      <div className="p-6">
        <div className="bg-cream-dark/50 p-4 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta font-semibold">
            DR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-forest truncate">Dr. Sarah Chen</p>
            <p className="text-xs text-charcoal/60 truncate">Ophthalmologist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

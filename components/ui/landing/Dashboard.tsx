"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

// --- DUMMY DATA ---
const priceHistory = [
  { date: "2025-07-01", price: 6999 },
  { date: "2025-07-20", price: 2499 },
  { date: "2025-08-01", price: 3499 },
  { date: "2025-08-10", price: 5999 },
  { date: "2025-09-01", price: 4665 },
  { date: "2025-09-05", price: 1799 },
  { date: "2025-09-10", price: 2499 },
  { date: "2025-09-15", price: 1999 },
  { date: "2025-09-20", price: 4999 },
  { date: "2025-10-01", price: 1599 },
  { date: "2025-10-15", price: 3999 },
  { date: "2025-10-20", price: 2799 },
  { date: "2025-10-25", price: 1299 },
  { date: "2025-10-30", price: 3999 },
];

const productDistribution = [
  { name: "Audio", value: 2 },
  { name: "Wearables", value: 1 },
  { name: "Peripherals", value: 2 },
  { name: "Cameras", value: 1 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

// --- ICONS ---
const LayoutDashboardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
);
const TagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-5-5z" /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></svg>
);
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 1-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.09a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 0 1-1.73l.43-.25a2 2 0 0 0 2 0l.15.09a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 0-1-1.72v-.51a2 2 0 0 0 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 0-2 0l-.43-.25a2 2 0 0 0-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
);
const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);
// New Icons for the Stats Cards
const ShoppingBagIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);
const TrendingDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
);
const DollarSignIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);


export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter(); 
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50 text-[#23272a] overflow-hidden">
      
      {/* --- Sidebar --- */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-[#23272a] text-white transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0
        `}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h1 className="text-xl font-bold text-[#f97316]">PriceTracker</h1>
            <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-white"
            title="Close sidebar"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 space-y-2 p-4">
            {/* Dashboard Button */}
            <button 
              onClick={() => router.push('/')} 
              className="w-full flex items-center gap-3 rounded-lg bg-[#f97316] px-4 py-3 text-white shadow-md text-left"
            >
              <LayoutDashboardIcon className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </button>

            {/* Products Button */}
            <button 
              onClick={() => router.push('/ProductCard')} 
              className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors text-left"
            >
              <TagIcon className="h-5 w-5" />
              <span className="font-medium">Products</span>
            </button>

            {/* Settings Button */}
            <button 
              onClick={() => router.push('/settings')} 
              className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors text-left"
            >
              <SettingsIcon className="h-5 w-5" />
              <span className="font-medium">Settings</span>
            </button>
          </nav>
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center text-sm font-bold">AD</div>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-400">admin@tracker.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <div className="flex flex-1 flex-col h-full overflow-hidden">
        
        {/* Mobile Header */}
        <header className="flex items-center justify-between bg-white p-4 shadow-sm md:hidden">
          <h1 className="text-lg font-bold text-[#23272a]">Dashboard</h1>
          <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none"
          title="Open sidebar">
            <MenuIcon className="h-6 w-6" />
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1920px] mx-auto">
            <h1 className="hidden md:block text-3xl font-bold mb-8 text-[#23272a]">
              📊 Price History Dashboard
            </h1>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Card 1: Tracked Products */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between h-32 relative overflow-hidden group">
                    <div className="flex justify-between items-start z-10">
                        <p className="text-gray-500 text-sm font-medium">Tracked Products</p>
                        <ShoppingBagIcon className="text-blue-500 h-5 w-5" />
                    </div>
                    <div className="z-10">
                        <h3 className="text-3xl font-bold text-[#23272a]">4</h3>
                    </div>
                </div>

                {/* Card 2: Avg Price Change */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between h-32 relative overflow-hidden">
                    <div className="flex justify-between items-start z-10">
                        <p className="text-gray-500 text-sm font-medium">Avg Price Change</p>
                        <TrendingDownIcon className="text-emerald-500 h-5 w-5" />
                    </div>
                    <div className="z-10">
                        <h3 className="text-3xl font-bold text-[#23272a]">-57.50 USD</h3>
                    </div>
                </div>

                 {/* Card 3: Products with Drop */}
                 <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between h-32 relative overflow-hidden">
                    <div className="flex justify-between items-start z-10">
                        <p className="text-gray-500 text-sm font-medium">Products with Drop</p>
                        <TrendingDownIcon className="text-emerald-500 h-5 w-5" />
                    </div>
                    <div className="z-10">
                        <h3 className="text-3xl font-bold text-[#23272a]">4</h3>
                    </div>
                </div>

                {/* Card 4: Highest Savings */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between h-32 relative overflow-hidden">
                    <div className="flex justify-between items-start z-10">
                        <p className="text-gray-500 text-sm font-medium">Highest Savings</p>
                        <DollarSignIcon className="text-yellow-500 h-5 w-5" />
                    </div>
                    <div className="z-10">
                        <h3 className="text-3xl font-bold text-[#23272a]">$100</h3>
                    </div>
                </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
              
              {/* Line Chart */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-w-0">
                <h2 className="text-base font-semibold mb-2 text-[#23272a] truncate">Price Trend (7 Days)</h2>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistory} margin={{ top: 5, right: 5, bottom: 20, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="date" 
                        fontSize={10} 
                        angle={-45} 
                        textAnchor="end" 
                        height={60} 
                        tick={{fill: '#666'}}
                      />
                      <YAxis 
                        fontSize={10} 
                        width={40}
                        tick={{fill: '#666'}}
                      />
                      <Tooltip />
                      <Line type="monotone" dataKey="price" stroke="#f97316" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Area Chart */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-w-0">
                <h2 className="text-base font-semibold mb-2 text-[#23272a] truncate">Drop Acceleration</h2>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={priceHistory} margin={{ top: 5, right: 5, bottom: 20, left: 0 }}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="date" 
                        fontSize={10} 
                        angle={-45} 
                        textAnchor="end" 
                        height={60} 
                        tick={{fill: '#666'}}
                      />
                      <YAxis 
                        fontSize={10} 
                        width={40}
                        tick={{fill: '#666'}}
                      />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="price" stroke="#f97316" fillOpacity={1} fill="url(#colorPrice)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-w-0">
                <h2 className="text-base font-semibold mb-2 text-[#23272a] truncate">Daily Price Comparison</h2>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={priceHistory} margin={{ top: 5, right: 5, bottom: 20, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="date" 
                        fontSize={10} 
                        angle={-45} 
                        textAnchor="end" 
                        height={60} 
                        tick={{fill: '#666'}}
                      />
                      <YAxis 
                        fontSize={10} 
                        width={40}
                        tick={{fill: '#666'}}
                      />
                      <Tooltip />
                      <Bar dataKey="price" fill="#ffc658" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-w-0">
                <h2 className="text-base font-semibold mb-2 text-[#23272a] truncate">Category Distribution</h2>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={productDistribution}
                        cx="50%"
                        cy="40%"
                        labelLine={false}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {productDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} iconType="circle"/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50 md:hidden" onClick={toggleSidebar} />
      )}
    </div>
  );
}
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { ArrowUpRight, ArrowDownRight, Briefcase, PieChart as PieIcon, TrendingUp } from "lucide-react";

const allocationData = [
    { name: "Reliance", value: 35 },
    { name: "HDFC Bank", value: 25 },
    { name: "TCS", value: 15 },
    { name: "NIFTY ETF", value: 15 },
    { name: "Cash", value: 10 },
];

const sectorData = [
    { name: "Oil & Gas", value: 35 },
    { name: "FinTech", value: 25 },
    { name: "IT", value: 15 },
    { name: "Index", value: 15 },
    { name: "Other", value: 10 },
];

const COLORS = ["#2DD4BF", "#3B82F6", "#F59E0B", "#EF4444", "#6366F1"];

const holdings = [
    { symbol: "RELIANCE", qty: 45, avg: 2450.50, ltp: 2980.20, pnl: "+21.6%", status: "Bullish" },
    { symbol: "HDFCBANK", qty: 120, avg: 1620.00, ltp: 1450.40, pnl: "-10.46%", status: "Consolidating" },
    { symbol: "TCS", qty: 25, avg: 3800.00, ltp: 4120.50, pnl: "+8.43%", status: "Strong Buy" },
    { symbol: "INFY", qty: 80, avg: 1450.00, ltp: 1720.10, pnl: "+18.62%", status: "Neutral" },
];

export default function PortfolioPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold font-montserrat">Portfolio Intelligence</h1>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">Rebalance</button>
                    <button className="px-4 py-2 bg-teal-500 text-slate-900 rounded-lg text-sm font-bold hover:bg-teal-400 transition-colors">Export Report</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Allocation Pie */}
                <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <PieIcon size={18} className="text-teal-400" />
                        <h3 className="font-bold">Asset Allocation</h3>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={allocationData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {allocationData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "8px" }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        {allocationData.map((entry, index) => (
                            <div key={entry.name} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <span className="text-xs text-slate-400">{entry.name} ({entry.value}%)</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sector Bar Chart */}
                <div className="lg:col-span-2 bg-[#1E293B] border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <TrendingUp size={18} className="text-blue-400" />
                        <h3 className="font-bold">Sector Exposure</h3>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={sectorData}>
                                <XAxis dataKey="name" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis hide />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "8px" }}
                                />
                                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 text-center italic">Heavy concentration in Oil & Gas due to RL agent preference.</p>
                </div>
            </div>

            {/* Holdings Table */}
            <div className="bg-[#1E293B] border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Briefcase size={18} className="text-slate-400" />
                        <h3 className="font-bold">Current Holdings</h3>
                    </div>
                    <span className="text-xs text-slate-500">Last updated: 3:30 PM (NSE Close)</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-900/50 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Symbol</th>
                                <th className="px-6 py-4 font-semibold">Qty</th>
                                <th className="px-6 py-4 font-semibold">Avg. Price</th>
                                <th className="px-6 py-4 font-semibold">LTP</th>
                                <th className="px-6 py-4 font-semibold">P&L</th>
                                <th className="px-6 py-4 font-semibold">Neuro Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {holdings.map((item) => {
                                const isPositive = item.pnl.startsWith("+");
                                return (
                                    <tr key={item.symbol} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-white group-hover:text-teal-400 transition-colors">{item.symbol}</span>
                                                <span className="text-[10px] text-slate-500">NSE</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm">{item.qty}</td>
                                        <td className="px-6 py-4 text-sm">₹{item.avg.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-sm font-medium">₹{item.ltp.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <div className={`flex items-center gap-1 text-sm font-bold ${isPositive ? 'text-teal-400' : 'text-red-400'}`}>
                                                {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                                {item.pnl}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${item.status.includes("Buy") ? "bg-teal-500/10 text-teal-400" :
                                                    item.status.includes("Bullish") ? "bg-emerald-500/10 text-emerald-400" :
                                                        "bg-slate-800 text-slate-400"
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

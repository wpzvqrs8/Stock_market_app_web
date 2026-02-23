"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { ChevronDown, Info, BarChart3, Activity, AlertTriangle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const skewData = [
    { strike: 21000, iv: 18.5 },
    { strike: 21200, iv: 17.2 },
    { strike: 21400, iv: 16.1 },
    { strike: 21600, iv: 15.4 },
    { strike: 21800, iv: 15.0 },
    { strike: 22000, iv: 15.8 },
    { strike: 22200, iv: 16.5 },
    { strike: 22400, iv: 17.8 },
];

const optionChain = [
    { strike: 21600, c_oi: "1.2M", c_iv: 15.2, c_p: 245.50, p_p: 12.30, p_iv: 16.8, p_oi: "0.4M" },
    { strike: 21700, c_oi: "0.8M", c_iv: 14.8, c_p: 168.20, p_p: 25.40, p_iv: 16.2, p_oi: "0.6M" },
    { strike: 21800, c_oi: "2.1M", c_iv: 14.5, c_p: 102.40, p_p: 54.10, p_iv: 15.8, p_oi: "1.1M" },
    { strike: 21900, c_oi: "1.5M", c_iv: 14.3, c_p: 45.20, p_p: 112.50, p_iv: 15.5, p_oi: "1.8M" },
    { strike: 22000, c_oi: "3.2M", c_iv: 14.4, c_p: 12.80, p_p: 198.40, p_iv: 15.6, p_oi: "2.5M" },
];

export default function OptionsPage() {
    const [activeTab, setActiveTab] = useState("chain");

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold font-montserrat tracking-tight text-white">Options Intelligence</h1>
                    <div className="px-3 py-1 bg-slate-800 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-700 transition-colors">
                        <span className="text-sm font-bold">NIFTY 28 MAR</span>
                        <ChevronDown size={14} className="text-slate-500" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex bg-slate-800 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab("chain")}
                            className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-all", activeTab === "chain" ? "bg-slate-700 text-white shadow-sm" : "text-slate-500 hover:text-slate-300")}
                        >
                            Chain
                        </button>
                        <button
                            onClick={() => setActiveTab("vol")}
                            className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-all", activeTab === "vol" ? "bg-slate-700 text-white shadow-sm" : "text-slate-500 hover:text-slate-300")}
                        >
                            Volatility Skew
                        </button>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-teal-400 transition-colors">
                        <Info size={18} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <MetricCard icon={BarChart3} label="Call OI (PCR)" value="0.82" status="Neutral" />
                <MetricCard icon={Activity} label="ATM IV" value="14.5%" status="Expanding" />
                <MetricCard icon={AlertTriangle} label="IV Anomaly" value="3 Strikes" status="Detected" color="text-orange-400" />
                <MetricCard icon={TrendingUp} label="Expected Move" value="±245 pts" status="Normal Range" />
            </div>

            {activeTab === "chain" ? (
                <div className="bg-[#1E293B] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-900 border-b border-slate-800">
                                <th colSpan={3} className="px-6 py-3 text-[10px] font-bold text-center text-teal-400 uppercase tracking-widest bg-teal-400/5">Call Options</th>
                                <th className="px-4 py-3 text-[10px] font-black text-center text-white uppercase tracking-widest bg-slate-800">Strike</th>
                                <th colSpan={3} className="px-6 py-3 text-[10px] font-bold text-center text-red-400 uppercase tracking-widest bg-red-400/5">Put Options</th>
                            </tr>
                            <tr className="text-[10px] text-slate-500 uppercase font-black border-b border-slate-800">
                                <th className="px-6 py-3 text-center">OI</th>
                                <th className="px-6 py-3 text-center">IV</th>
                                <th className="px-6 py-3 text-center">LTP</th>
                                <th className="px-4 py-3 bg-slate-800/50 text-center">-</th>
                                <th className="px-6 py-3 text-center">LTP</th>
                                <th className="px-6 py-3 text-center">IV</th>
                                <th className="px-6 py-3 text-center">OI</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {optionChain.map((row) => (
                                <tr key={row.strike} className="hover:bg-slate-800/20 transition-colors">
                                    <td className="px-6 py-3 text-xs font-medium text-center text-slate-300">{row.c_oi}</td>
                                    <td className="px-6 py-3 text-xs font-medium text-center text-slate-300">{row.c_iv}%</td>
                                    <td className="px-6 py-3 text-xs font-bold text-center text-white">₹{row.c_p}</td>
                                    <td className="px-4 py-3 bg-slate-800/30 text-sm font-black text-center text-teal-400 border-x border-slate-800/50">{row.strike}</td>
                                    <td className="px-6 py-3 text-xs font-bold text-center text-white">₹{row.p_p}</td>
                                    <td className="px-6 py-3 text-xs font-medium text-center text-slate-300">{row.p_iv}%</td>
                                    <td className="px-6 py-3 text-xs font-medium text-center text-slate-300">{row.p_oi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-8 h-[450px]">
                    <div className="mb-8">
                        <h3 className="font-bold text-lg">Volatility Skew Analytics</h3>
                        <p className="text-xs text-slate-500">Implied Volatility across strike prices</p>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={skewData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                            <XAxis dataKey="strike" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "8px" }}
                            />
                            <Line type="monotone" dataKey="iv" stroke="#2DD4BF" strokeWidth={3} dot={{ fill: '#2DD4BF', r: 4 }} activeDot={{ r: 6, fill: '#FFFFFF' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}

function MetricCard({ icon: Icon, label, value, status, color = "text-teal-400" }: any) {
    return (
        <div className="bg-[#1E293B] border border-slate-800 p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                    <Icon size={18} className="text-slate-400" />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
            </div>
            <div className="flex items-baseline justify-between">
                <span className="text-xl font-black text-white">{value}</span>
                <span className={cn("text-[10px] font-bold uppercase", color)}>{status}</span>
            </div>
        </div>
    );
}

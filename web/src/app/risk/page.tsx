"use client";

import { ShieldAlert, Activity, Globe, Zap, AlertTriangle, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const crashHistory = [
    { date: "Feb 01", prob: 0.12 },
    { date: "Feb 05", prob: 0.08 },
    { date: "Feb 10", prob: 0.05 },
    { date: "Feb 15", prob: 0.15 },
    { date: "Feb 20", prob: 0.04 },
    { date: "Feb 23", prob: 0.05 },
];

export default function RiskPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold font-montserrat tracking-tight text-white">Risk Intelligence & Macro</h1>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 bg-slate-800 px-3 py-1.5 rounded-full uppercase tracking-tighter">
                    <Globe size={12} className="text-blue-400" />
                    Global Influence: Neutral
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Regime Gauge */}
                <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-8 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-8 self-start">
                        <Activity size={18} className="text-teal-400" />
                        <h3 className="font-bold">Market Regime</h3>
                    </div>

                    <div className="relative w-64 h-32 overflow-hidden mb-6">
                        <div className="absolute w-64 h-64 border-[16px] border-slate-800 rounded-full" />
                        <div
                            className="absolute w-64 h-64 border-[16px] border-teal-500 rounded-full rotate-[120deg]"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
                        />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <span className="text-2xl font-black text-white">BULLISH</span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase">Expanding Phase</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 w-full mt-4">
                        <div className="p-2 bg-slate-900 rounded-lg text-center border border-white/5">
                            <p className="text-[10px] text-slate-500 mb-1">Confidence</p>
                            <p className="text-sm font-bold text-white">88%</p>
                        </div>
                        <div className="p-2 bg-slate-900 rounded-lg text-center border border-white/5">
                            <p className="text-[10px] text-slate-500 mb-1">Duration</p>
                            <p className="text-sm font-bold text-white">12d</p>
                        </div>
                        <div className="p-2 bg-slate-900 rounded-lg text-center border border-white/5">
                            <p className="text-[10px] text-slate-500 mb-1">Stability</p>
                            <p className="text-sm font-bold text-white">High</p>
                        </div>
                    </div>
                </div>

                {/* Crash Probability */}
                <div className="lg:col-span-2 bg-[#1E293B] border border-slate-800 rounded-2xl p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <AlertTriangle size={18} className="text-orange-400" />
                            <h3 className="font-bold">Crash Probability Index</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-black text-white">4.2%</span>
                            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Low Risk</p>
                        </div>
                    </div>

                    <div className="flex-1 h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={crashHistory}>
                                <defs>
                                    <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "8px" }}
                                />
                                <Area type="monotone" dataKey="prob" stroke="#F59E0B" strokeWidth={3} fillOpacity={1} fill="url(#riskGradient)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-4 italic">Tail risk measured across 100,000 Monte Carlo simulations using India macro vectors.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MacroCard label="RBI Repo Rate" value="6.50%" status="Unchanged" date="23 Feb" />
                <MacroCard label="India 10Y Yield" value="7.08%" status="-0.02" date="Today" />
                <MacroCard label="USD/INR" value="83.12" status="+0.05" date="Real-time" />
            </div>

            <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-4 flex gap-4 items-start">
                <ShieldAlert size={20} className="text-orange-400 mt-1 shrink-0" />
                <div>
                    <h4 className="text-sm font-bold text-orange-400 mb-1">Attention Required: Negative Correlation Spike</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Divergence between Banking index and broader NIFTY is increasing. RL agent has moved 5% allocation from BANKNIFTY high-beta to Defensive Pharma sector.
                    </p>
                </div>
            </div>
        </div>
    );
}

function MacroCard({ label, value, status, date }: any) {
    return (
        <div className="bg-[#1E293B] border border-slate-800 p-5 rounded-2xl group hover:border-slate-700 transition-colors">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{label}</p>
            <div className="flex items-baseline justify-between">
                <span className="text-2xl font-black text-white">{value}</span>
                <div className="text-right">
                    <p className="text-[10px] font-bold text-blue-400">{status}</p>
                    <p className="text-[8px] text-slate-600 uppercase font-black">{date}</p>
                </div>
            </div>
        </div>
    );
}

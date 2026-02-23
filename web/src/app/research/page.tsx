"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Search, Play, Save, History, BarChart2, Brain, CheckCircle2 } from "lucide-react";

const backtestResults = [
    { date: "2024-01", return: 5.2 },
    { date: "2024-02", return: 12.8 },
    { date: "2024-03", return: 8.4 },
    { date: "2024-04", return: 15.6 },
    { date: "2024-05", return: 22.1 },
    { date: "2024-06", return: 19.5 },
];

const featureImportance = [
    { name: "Options OI", value: 45 },
    { name: "Global Cues", value: 25 },
    { name: "VIX Skew", value: 15 },
    { name: "RSI Divergence", value: 10 },
    { name: "Sentiment", value: 5 },
];

const COLORS = ["#2DD4BF", "#3B82F6", "#F59E0B", "#EF4444", "#6366F1"];

export default function ResearchPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold font-montserrat tracking-tight text-white">Research Lab & Backtesting</h1>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
                        <History size={16} />
                        Recent Jobs
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-slate-900 rounded-lg text-sm font-bold hover:bg-teal-400 transition-colors">
                        <Save size={16} />
                        Save Strategy
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Strategy Config */}
                <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                        <Search size={18} className="text-slate-400" />
                        <h3 className="font-bold">Backtest Config</h3>
                    </div>

                    <div className="space-y-4 flex-1">
                        <div>
                            <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Baseline Symbol</label>
                            <select className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-teal-500/50 outline-none">
                                <option>NIFTY 50</option>
                                <option>BANKNIFTY</option>
                                <option>FINNIFTY</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">AI Model Architecture</label>
                            <select className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-teal-500/50 outline-none">
                                <option>Temporal Fusion Transf.</option>
                                <option>PPO Agent (v2.4)</option>
                                <option>LSTM Sentiment Fusion</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Start Date</label>
                                <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white outline-none" defaultValue="2024-01-01" />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">End Date</label>
                                <input type="date" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white outline-none" defaultValue="2024-06-30" />
                            </div>
                        </div>
                    </div>

                    <button className="mt-8 w-full py-3 bg-teal-500 text-slate-900 rounded-xl font-black text-sm flex items-center justify-center gap-2 hover:bg-teal-400 shadow-lg shadow-teal-500/10">
                        <Play size={18} fill="currentColor" />
                        RUN SIMULATION
                    </button>
                </div>

                {/* Backtest curve */}
                <div className="lg:col-span-2 bg-[#1E293B] border border-slate-800 rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <BarChart2 size={18} className="text-teal-400" />
                            <h3 className="font-bold">Strategy Returns (Cumulative)</h3>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-right">
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Sharpe</p>
                                <p className="text-lg font-black text-white">2.45</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Max DD</p>
                                <p className="text-lg font-black text-red-400">-5.2%</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={backtestResults}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                <XAxis dataKey="date" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "8px" }} />
                                <Line type="monotone" dataKey="return" stroke="#2DD4BF" strokeWidth={4} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Feature Importance */}
                <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-8 flex items-center">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Brain size={18} className="text-indigo-400" />
                            <h3 className="font-bold">Feature Importance</h3>
                        </div>
                        <div className="space-y-4">
                            {featureImportance.map((feature, i) => (
                                <div key={feature.name}>
                                    <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                                        <span className="text-slate-400">{feature.name}</span>
                                        <span className="text-white">{feature.value}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${feature.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-48 h-48 ml-8">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={featureImportance} dataKey="value" innerRadius={40} outerRadius={60} stroke="none">
                                    {featureImportance.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Model Logs */}
                <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-8 overflow-hidden">
                    <div className="flex items-center gap-2 mb-6 text-slate-400">
                        <CheckCircle2 size={18} />
                        <h3 className="font-bold">Simulation Logs</h3>
                    </div>
                    <div className="space-y-3 font-mono text-[10px]">
                        <p className="text-emerald-400">[INFO] Loaded historical data for symbols: NIFTY, BANKNIFTY</p>
                        <p className="text-blue-400">[SYNC] Fetching volatility surface for 28 MAR 2026 expiry</p>
                        <p className="text-slate-500">[AI] Running Temporal Fusion Transformer inference...</p>
                        <p className="text-slate-500">[AI] Weights updated: Attention focused on OI Skew</p>
                        <p className="text-emerald-400 font-bold">[SUCCESS] Simulation completed in 4.2 seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

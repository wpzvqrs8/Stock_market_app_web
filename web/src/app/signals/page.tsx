"use client";

import { Zap, TrendingUp, TrendingDown, Target, Clock, Filter, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const topSignal = {
    symbol: "RELIANCE",
    type: "Strong Buy",
    confidence: 94,
    price: 2980.20,
    target: 3150.00,
    stopLoss: 2890.00,
    rationale: "Bullish divergence in RSI on 4H chart combined with high Options OI concentration at 3000 Strike. Institutional buying detected in dark pools.",
    tags: ["Options OI", "Price Action", "FII Entry"]
};

const otherSignals = [
    { symbol: "HDFCBANK", type: "Accumulate", confidence: 82, time: "2h ago", sentiment: "Bullish" },
    { symbol: "TCS", type: "Hold", confidence: 65, time: "4h ago", sentiment: "Neutral" },
    { symbol: "AXISBANK", type: "Sell", confidence: 78, time: "5h ago", sentiment: "Bearish" },
    { symbol: "SUNPHARMA", type: "Strong Buy", confidence: 89, time: "1d ago", sentiment: "Strong Bullish" },
];

export default function SignalsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold font-montserrat">NeuroSignals Intelligence</h1>
                <div className="flex gap-2">
                    <button className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                        <Filter size={18} />
                    </button>
                    <button className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">History</button>
                </div>
            </div>

            {/* Top Signal Hero */}
            <div className="bg-gradient-to-br from-teal-500/10 via-slate-900 to-slate-900 border border-teal-500/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] -mr-32 -mt-32" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="px-2 py-1 bg-teal-500/20 text-teal-400 text-[10px] font-bold rounded uppercase tracking-wider">Top AI Pick</div>
                            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                                <Clock size={12} />
                                LIVE UPDATING
                            </div>
                        </div>
                        <h2 className="text-4xl font-bold mb-2">{topSignal.symbol}</h2>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-2xl font-bold text-teal-400">{topSignal.type}</span>
                            <div className="h-6 w-[1px] bg-slate-800" />
                            <div className="flex items-center gap-1">
                                <Target size={18} className="text-slate-500" />
                                <span className="text-sm font-medium text-slate-400">Target: ₹{topSignal.target}</span>
                            </div>
                        </div>

                        <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl mb-6">
                            <p className="text-sm text-slate-300 leading-relaxed italic">
                                "{topSignal.rationale}"
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {topSignal.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] rounded-md border border-slate-700">#{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="transparent"
                                    className="text-slate-800"
                                />
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="88"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="transparent"
                                    strokeDasharray={2 * Math.PI * 88}
                                    strokeDashoffset={2 * Math.PI * 88 * (1 - topSignal.confidence / 100)}
                                    strokeLinecap="round"
                                    className="text-teal-400"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-black">{topSignal.confidence}%</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase">Confidence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Signals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherSignals.map((signal) => (
                    <div key={signal.symbol} className="bg-[#1E293B] border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-col">
                                <span className="font-bold text-white tracking-tight">{signal.symbol}</span>
                                <span className="text-[10px] text-slate-500 uppercase">{signal.time}</span>
                            </div>
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center",
                                signal.type === "Sell" ? "bg-red-500/10 text-red-400" : "bg-teal-500/10 text-teal-400"
                            )}>
                                {signal.type === "Sell" ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-slate-400">Neuro Confidence</span>
                                <span className="text-xs font-bold text-white">{signal.confidence}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className={cn("h-full rounded-full", signal.confidence > 80 ? "bg-teal-400" : "bg-blue-400")}
                                    style={{ width: `${signal.confidence}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className={cn(
                                "text-[10px] font-bold px-1.5 py-0.5 rounded uppercase",
                                signal.sentiment === "Bullish" ? "text-teal-400" : signal.sentiment === "Bearish" ? "text-red-400" : "text-slate-400"
                            )}>
                                {signal.sentiment}
                            </span>
                            <button className="text-slate-500 group-hover:text-teal-400 transition-colors">
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

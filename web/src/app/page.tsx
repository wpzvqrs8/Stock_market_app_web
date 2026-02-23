"use client";

import { useState, useEffect } from "react";

import {
  TrendingUp,
  TrendingDown,
  Zap,
  ShieldAlert,
  Activity,
  ArrowUpRight,
  Newspaper
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const portfolioData = [
  { name: "09:00", value: 21500 },
  { name: "10:00", value: 21650 },
  { name: "11:00", value: 21600 },
  { name: "12:00", value: 21780 },
  { name: "13:00", value: 21850 },
  { name: "14:00", value: 21820 },
  { name: "15:00", value: 21910 },
];

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="animate-pulse space-y-6" />;
  }

  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="NIFTY 50" value="21,910.75" change="+0.82%" trend="up" />
        <StatCard title="BANKNIFTY" value="46,580.20" change="-0.15%" trend="down" />
        <StatCard title="INDIA VIX" value="15.42" change="-2.4%" trend="up" reverse />
        <StatCard title="Portfolio Value" value="₹12.45L" change="+1.2%" trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-[#1E293B] rounded-2xl border border-slate-800 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-montserrat font-bold text-lg">Portfolio Performance</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-800 rounded-md text-xs font-medium text-slate-400">1D</span>
              <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-md text-xs font-medium">1W</span>
              <span className="px-3 py-1 bg-slate-800 rounded-md text-xs font-medium text-slate-400">1M</span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2DD4BF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2DD4BF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1E293B", border: "1px solid #334155", borderRadius: "8px" }}
                  itemStyle={{ color: "#2DD4BF" }}
                />
                <Area type="monotone" dataKey="value" stroke="#2DD4BF" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insight Sidebar */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-teal-400" size={20} />
              <h3 className="font-bold">Next AI Signal</h3>
            </div>
            <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 mb-4">
              <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Recommended Action</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-teal-400">ACCUMULATE</span>
                <span className="px-2 py-0.5 bg-teal-500/20 text-teal-400 text-[10px] font-bold rounded uppercase">Strong Confidence</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Institutional divergence detected in <span className="text-white font-medium">HDFC BANK</span>. IV mean reversion likely in next 48h.
            </p>
          </div>

          <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShieldAlert className="text-orange-400" size={20} />
                <h3 className="font-bold text-sm">Market Regime</h3>
              </div>
              <Activity className="text-slate-600" size={16} />
            </div>
            <div className="relative h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
              <div className="absolute left-0 top-0 h-full w-[70%] bg-gradient-to-r from-teal-500 to-emerald-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-tighter">Expanding Bull</span>
              <span className="text-[10px] text-slate-500">70.4% Confidence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1E293B] rounded-2xl border border-slate-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold flex items-center gap-2">
              <Newspaper size={18} className="text-slate-400" />
              Latest Sentiment
            </h3>
            <button className="text-xs text-teal-400 hover:underline">View Feed</button>
          </div>
          <div className="space-y-3">
            <NewsTile title="RBI Monetary Policy: Stability signals for Banks" sentiment="positive" time="15m ago" />
            <NewsTile title="FII/DII Data: Net buyers in cash segment" sentiment="positive" time="1h ago" />
            <NewsTile title="Global Cues: Inflation data exceeds consensus" sentiment="negative" time="2h ago" />
          </div>
        </div>

        <div className="bg-[#1E293B] rounded-2xl border border-slate-800 p-6 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700">
            <TrendingUp size={32} className="text-teal-400" />
          </div>
          <h3 className="font-bold text-lg mb-2">Options Intelligence</h3>
          <p className="text-sm text-slate-400 max-w-[280px] mb-6">
            Analyze 3D IV Surface and OI Imbalance in real-time.
          </p>
          <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 transition-colors rounded-full text-sm font-semibold flex items-center gap-2">
            Open Options Lab
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, trend, reverse = false }: any) {
  const isUp = trend === "up";
  const colorClass = isUp ? "text-teal-400" : "text-red-400";
  const Icon = isUp ? TrendingUp : TrendingDown;

  return (
    <div className="bg-[#1E293B] p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group">
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">{title}</p>
      <div className="flex items-end justify-between">
        <h4 className="text-2xl font-bold tracking-tight">{value}</h4>
        <div className={cn("flex items-center gap-1 text-sm font-bold", colorClass)}>
          <Icon size={14} />
          {change}
        </div>
      </div>
    </div>
  );
}

function NewsTile({ title, sentiment, time }: any) {
  const bgColor = sentiment === "positive" ? "bg-teal-500/10 text-teal-400" : "bg-red-500/10 text-red-400";
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700">
      <div className={cn("w-2 h-2 rounded-full", sentiment === "positive" ? "bg-teal-500" : "bg-red-500")} />
      <div className="flex-1">
        <p className="text-sm font-medium leading-snug line-clamp-1">{title}</p>
        <span className="text-[10px] text-slate-500 tracking-wide font-medium uppercase">{time}</span>
      </div>
      <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter", bgColor)}>
        {sentiment}
      </span>
    </div>
  );
}

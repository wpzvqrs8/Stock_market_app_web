"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Briefcase,
    Zap,
    ShieldAlert,
    Search,
    BarChart3,
    Settings,
    Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/" },
    { name: "Portfolio", icon: Briefcase, href: "/portfolio" },
    { name: "AI Signals", icon: Zap, href: "/signals" },
    { name: "Options Lab", icon: BarChart3, href: "/options" },
    { name: "Risk Alert", icon: ShieldAlert, href: "/risk" },
    { name: "Research", icon: Search, href: "/research" },
    { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <aside className="w-64 bg-[#1E293B] border-r border-slate-800" />;
    }


    return (
        <aside className="w-64 bg-[#1E293B] border-r border-slate-800 flex flex-col">
            <div className="p-6 flex items-center gap-3" suppressHydrationWarning>
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-slate-900 shadow-lg shadow-teal-500/20">
                    <Brain size={24} />
                </div>
                <span className="font-montserrat font-bold text-lg tracking-tight text-white">
                    NEUROQUANT
                </span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                                isActive
                                    ? "bg-slate-800 text-teal-400 border border-slate-700 shadow-inner"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                            )}
                        >
                            <item.icon size={20} className={cn(
                                "transition-colors",
                                isActive ? "text-teal-400" : "group-hover:text-slate-200"
                            )} />
                            <span className="font-medium">{item.name}</span>
                            {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
                    <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">Market Status</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-sm font-semibold">NSE CLOSED</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

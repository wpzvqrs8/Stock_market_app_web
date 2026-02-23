"use client";

import { useState, useEffect } from "react";
import { Bell, User, Search as SearchIcon } from "lucide-react";

export default function Topbar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <header className="h-16 border-b border-slate-800 bg-[#0F172A]/80 sticky top-0 z-10" />;
    }

    return (
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-[#0F172A]/80 backdrop-blur-md sticky top-0 z-10">
            <div className="relative w-96">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                    type="text"
                    placeholder="Search symbols, news..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-teal-500/50 transition-colors placeholder:text-slate-600"
                />
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-slate-800 text-slate-400 transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#0F172A]" />
                </button>
                <div className="h-8 w-[1px] bg-slate-800 mx-2" />
                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold leading-tight">Quant Analyst</p>
                        <p className="text-xs text-slate-500">Premium Plan</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 flex items-center justify-center border border-slate-700 cursor-pointer hover:border-teal-500/50 transition-colors">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
}

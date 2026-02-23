"use client";

import { User, Key, Bell, Shield, Smartphone, Globe, Save } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-10">
            <div>
                <h1 className="text-2xl font-bold font-montserrat tracking-tight text-white mb-2">Account Settings</h1>
                <p className="text-sm text-slate-500">Manage your profile, broker integration and security preferences.</p>
            </div>

            {/* Profile Section */}
            <section className="bg-[#1E293B] border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                    <User size={20} className="text-teal-400" />
                    <h3 className="font-bold">Personal Profile</h3>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-slate-800 rounded-full border-2 border-slate-700 flex items-center justify-center text-2xl font-bold text-teal-400">
                            JD
                        </div>
                        <button className="text-xs font-bold text-teal-400 hover:text-teal-300">Change Photo</button>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Full Name</label>
                            <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white" defaultValue="John Doe" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Email Address</label>
                            <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white" defaultValue="john@neuroquant.in" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Broker Section */}
            <section className="bg-[#1E293B] border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                    <Key size={20} className="text-blue-400" />
                    <h3 className="font-bold">Broker Integration (NSE/BSE)</h3>
                </div>
                <div className="p-8 space-y-6">
                    <BrokerRow name="Zerodha Kite" status="Connected" />
                    <BrokerRow name="Upstox API" status="Disconnected" />
                    <BrokerRow name="Angel One" status="Not Configured" />

                    <div className="pt-6 border-t border-slate-800">
                        <label className="text-[10px] font-bold text-slate-500 uppercase block mb-2">Manual API Secret</label>
                        <div className="flex gap-2">
                            <input type="password" placeholder="sk_live_****************" className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white font-mono" />
                            <button className="px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold hover:bg-slate-700">Validate</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notifications */}
            <section className="bg-[#1E293B] border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                    <Bell size={20} className="text-orange-400" />
                    <h3 className="font-bold">Notification Preferences</h3>
                </div>
                <div className="p-8 space-y-4">
                    <ToggleRow icon={Smartphone} label="Web Push Notifications" description="Receive real-time trading signals via browser" active />
                    <ToggleRow icon={Globe} label="Email Daily Summary" description="A deep analysis report of NIFTY outlook" active={false} />
                    <ToggleRow icon={Shield} label="Security Alerts" description="Login attempts and API key changes" active />
                </div>
            </section>

            <div className="flex justify-end pt-4">
                <button className="flex items-center gap-2 px-8 py-3 bg-teal-500 text-slate-900 rounded-xl font-black text-sm hover:bg-teal-400 shadow-lg shadow-teal-500/20">
                    <Save size={18} />
                    SAVE ALL CHANGES
                </button>
            </div>
        </div>
    );
}

function BrokerRow({ name, status }: any) {
    const isConnected = status === "Connected";
    return (
        <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-white/5">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center font-bold text-xs">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-bold text-white uppercase tracking-tight">{name}</p>
                    <p className={`text-[10px] font-bold uppercase ${isConnected ? 'text-teal-400' : 'text-slate-500'}`}>{status}</p>
                </div>
            </div>
            <button className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase ${isConnected ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' : 'bg-teal-500 text-slate-900 hover:bg-teal-400'}`}>
                {isConnected ? 'Disconnect' : 'Connect Now'}
            </button>
        </div>
    );
}

function ToggleRow({ icon: Icon, label, description, active }: any) {
    return (
        <div className="flex items-center justify-between py-2">
            <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-slate-900 rounded-lg border border-white/5">
                    <Icon size={16} className="text-slate-400" />
                </div>
                <div>
                    <p className="text-sm font-bold text-white">{label}</p>
                    <p className="text-xs text-slate-500">{description}</p>
                </div>
            </div>
            <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${active ? 'bg-teal-500' : 'bg-slate-800'}`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`} />
            </div>
        </div>
    );
}

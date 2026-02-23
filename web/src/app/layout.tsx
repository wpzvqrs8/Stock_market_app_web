import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "NeuroQuant India | AI Trading Intelligence",
  description: "Advanced AI trading insights for NSE/BSE markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0F172A] text-slate-200 antialiased`} suppressHydrationWarning>
        <div className="flex min-h-screen bg-[#0F172A]">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="flex-1 p-6 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

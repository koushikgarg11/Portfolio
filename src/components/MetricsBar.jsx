import React from "react";
import { metrics } from "../data/portfolioData";
import { TrendingUp, Database, Award, ShieldAlert, Zap } from "lucide-react";

export default function MetricsBar() {
  const icons = [Database, TrendingUp, ShieldAlert, Award, Zap];

  return (
    <section className="relative z-20 -mt-4 mb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {metrics.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="group relative p-4 sm:p-5 rounded-2xl bg-[#091122]/80 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {item.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 leading-tight">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug font-medium">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

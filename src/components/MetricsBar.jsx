import React from 'react';
import { keyMetrics } from '../data/portfolioData';
import { TrendingUp, ShieldCheck, Zap, Award, Database } from 'lucide-react';

const icons = [TrendingUp, ShieldCheck, Zap, Award, Database];

export default function MetricsBar() {
  return (
    <section className="relative border-y border-white/10 bg-[#070d18]/60 px-5 py-12 sm:px-8 backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {keyMetrics.map((metric, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.04]"
              >
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Icon size={16} />
                </div>
                <div className="text-2xl font-black tracking-tight text-white sm:text-3xl bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-cyan-300/90 tracking-wide">
                  {metric.label}
                </div>
                <div className="mt-1 text-[11px] text-slate-500 line-clamp-1">
                  {metric.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

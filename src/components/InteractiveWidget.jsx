import React, { useState } from 'react';
import { Calculator, Sparkles, RefreshCw, Layers } from 'lucide-react';

export default function InteractiveWidget() {
  const [annualDemand, setAnnualDemand] = useState(2400);
  const [orderCost, setOrderCost] = useState(500);
  const [holdingCost, setHoldingCost] = useState(50);
  const [leadTimeDays, setLeadTimeDays] = useState(14);

  // Formulas
  // EOQ = sqrt((2 * D * S) / H)
  const eoq = Math.round(Math.sqrt((2 * annualDemand * orderCost) / holdingCost));
  // Lead time demand = (D / 365) * Lead Time
  const leadTimeDemand = Math.round((annualDemand / 365) * leadTimeDays);
  // Safety stock at 95% service level (~1.65 std dev assuming 3 days variance)
  const safetyStock = Math.round(1.65 * (annualDemand / 365) * 3);
  // Reorder Point = Lead Time Demand + Safety Stock
  const reorderPoint = leadTimeDemand + safetyStock;
  // Total Annual Orders = D / EOQ
  const annualOrders = (annualDemand / eoq).toFixed(1);

  const resetDefaults = () => {
    setAnnualDemand(2400);
    setOrderCost(500);
    setHoldingCost(50);
    setLeadTimeDays(14);
  };

  return (
    <section className="border-t border-white/10 bg-[#070d18] px-5 py-20 sm:px-8 relative">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/[0.05] via-blue-500/[0.02] to-violet-500/[0.05] p-6 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                <Calculator size={16} />
                <span>INTERACTIVE DEMO</span>
              </div>
              <h3 className="mt-1 text-2xl font-bold text-white">
                Live Inventory Model & EOQ Calculator
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Interactive simulation demonstrating mathematical inventory optimization, Safety Stock calculation, and Reorder Point algorithms.
              </p>
            </div>
            <button
              onClick={resetDefaults}
              className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <RefreshCw size={13} />
              Reset Inputs
            </button>
          </div>

          {/* Calculator Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] items-center">
            {/* Input Sliders */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                  <span>Annual Demand (Units / Year)</span>
                  <span className="text-cyan-300 font-mono text-sm">{annualDemand.toLocaleString()} units</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={annualDemand}
                  onChange={(e) => setAnnualDemand(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                  <span>Order Cost per Batch (S)</span>
                  <span className="text-cyan-300 font-mono text-sm">₹{orderCost}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={orderCost}
                  onChange={(e) => setOrderCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                  <span>Holding Cost per Unit / Year (H)</span>
                  <span className="text-cyan-300 font-mono text-sm">₹{holdingCost}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={holdingCost}
                  onChange={(e) => setHoldingCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                  <span>Supplier Lead Time (Days)</span>
                  <span className="text-cyan-300 font-mono text-sm">{leadTimeDays} days</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="45"
                  step="1"
                  value={leadTimeDays}
                  onChange={(e) => setLeadTimeDays(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

            {/* Computed Output Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-center">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200 block">
                  Economic Order Qty (EOQ)
                </span>
                <span className="mt-1 text-2xl sm:text-3xl font-black text-white font-mono block">
                  {eoq} <span className="text-xs font-normal text-cyan-200">units</span>
                </span>
                <span className="text-[10px] text-cyan-200/80 mt-1 block">Optimal batch per cycle</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Reorder Point (ROP)
                </span>
                <span className="mt-1 text-2xl sm:text-3xl font-black text-amber-300 font-mono block">
                  {reorderPoint} <span className="text-xs font-normal text-slate-400">units</span>
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block">Trigger when stock drops here</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Safety Stock (Buffer)
                </span>
                <span className="mt-1 text-xl sm:text-2xl font-black text-emerald-400 font-mono block">
                  {safetyStock} <span className="text-xs font-normal text-slate-400">units</span>
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block">95% Service Level Guard</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Procurement Frequency
                </span>
                <span className="mt-1 text-xl sm:text-2xl font-black text-violet-300 font-mono block">
                  ~{annualOrders} <span className="text-xs font-normal text-slate-400">orders/yr</span>
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block">Scheduled batch cycles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

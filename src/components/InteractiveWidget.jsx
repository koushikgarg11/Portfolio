import React, { useState } from "react";
import { Sliders, Calculator, Sparkles, CheckCircle2, TrendingUp, RefreshCw } from "lucide-react";

export default function InteractiveWidget() {
  const [demand, setDemand] = useState(2400);
  const [orderCost, setOrderCost] = useState(500);
  const [holdingCost, setHoldingCost] = useState(50);
  const [leadTime, setLeadTime] = useState(14);
  const [demandStd, setDemandStd] = useState(5);

  // Mathematical Calculations
  const eoq = Math.round(Math.sqrt((2 * demand * orderCost) / holdingCost));
  const dailyDemand = demand / 365;
  const leadTimeDemand = Math.round(dailyDemand * leadTime);
  const zScore = 1.65; // 95% Service Level
  const safetyStock = Math.round(zScore * Math.sqrt(leadTime) * demandStd);
  const reorderPoint = leadTimeDemand + safetyStock;
  const ordersPerYear = (demand / eoq).toFixed(1);
  const totalAnnualCost = Math.round(
    (demand / eoq) * orderCost + (eoq / 2) * holdingCost
  );

  return (
    <section id="calculator" className="py-20 relative bg-[#040811]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            <span className="w-8 h-[2px] bg-cyan-400" />
            Live Mathematical Simulation
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Inventory & Replenishment Optimizer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Test the mathematical inventory optimization algorithms (EOQ, Safety Stock, Reorder Point) engineered for Taiwal Enterprises.
          </p>
        </div>

        {/* Optimizer Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#091122]/95 border border-slate-800 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white">Input Procurement Parameters</span>
                </div>
                <button
                  onClick={() => {
                    setDemand(2400);
                    setOrderCost(500);
                    setHoldingCost(50);
                    setLeadTime(14);
                    setDemandStd(5);
                  }}
                  className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset Defaults
                </button>
              </div>

              {/* Slider 1: Demand */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Annual Demand (Units / Year)</span>
                  <span className="font-mono font-bold text-cyan-300">{demand.toLocaleString()} units</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={demand}
                  onChange={(e) => setDemand(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Slider 2: Order Cost */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Order Cost per Batch (₹)</span>
                  <span className="font-mono font-bold text-cyan-300">₹{orderCost}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={orderCost}
                  onChange={(e) => setOrderCost(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Slider 3: Holding Cost */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Annual Holding Cost / Unit (₹)</span>
                  <span className="font-mono font-bold text-cyan-300">₹{holdingCost}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={holdingCost}
                  onChange={(e) => setHoldingCost(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Slider 4: Lead Time */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Supplier Lead Time (Days)</span>
                  <span className="font-mono font-bold text-cyan-300">{leadTime} Days</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="45"
                  step="1"
                  value={leadTime}
                  onChange={(e) => setLeadTime(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Slider 5: Demand Std Dev */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">Daily Demand Volatility / StdDev</span>
                  <span className="font-mono font-bold text-cyan-300">±{demandStd} units</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={demandStd}
                  onChange={(e) => setDemandStd(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Right Output: Mathematical Results Grid */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-2xl bg-[#060b14] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                    Optimized Policy Outputs
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    95% Service Level
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {/* EOQ */}
                  <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-left">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Economic Order Qty</div>
                    <div className="text-2xl font-black text-cyan-300 mt-1">{eoq}</div>
                    <div className="text-[10px] text-cyan-400/80 mt-0.5">Units / Batch (EOQ)</div>
                  </div>

                  {/* ROP */}
                  <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-left">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Reorder Point (ROP)</div>
                    <div className="text-2xl font-black text-amber-300 mt-1">{reorderPoint}</div>
                    <div className="text-[10px] text-amber-400/80 mt-0.5">Trigger Threshold (Units)</div>
                  </div>

                  {/* Safety Stock */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-left">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Safety Stock Buffer</div>
                    <div className="text-2xl font-black text-emerald-300 mt-1">{safetyStock}</div>
                    <div className="text-[10px] text-emerald-400/80 mt-0.5">Buffer Units (Z=1.65)</div>
                  </div>

                  {/* Orders per year */}
                  <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-left">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Procurement Cycles</div>
                    <div className="text-2xl font-black text-purple-300 mt-1">~{ordersPerYear}</div>
                    <div className="text-[10px] text-purple-400/80 mt-0.5">Orders / Year</div>
                  </div>
                </div>

                {/* Total Cost Summary */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Estimated Total Annual Holding + Ordering Cost:</span>
                  <span className="font-mono font-bold text-white text-sm">₹{totalAnnualCost.toLocaleString()}</span>
                </div>
              </div>

              {/* Actionable Strategy Note */}
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-left text-xs text-slate-300 space-y-1">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Procurement Execution Rule:
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  Whenever on-hand stock drops to <strong className="text-white">{reorderPoint} units</strong>, immediately issue a purchase order for <strong className="text-white">{eoq} units</strong>. With a {leadTime}-day lead time, new inventory arrives exactly as safety stock buffer begins protecting against stockout.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

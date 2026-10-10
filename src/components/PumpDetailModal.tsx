import React from 'react';
import { PumpModel } from '../types/pump';
import { 
  X, 
  CheckCircle as CheckCircle2, 
  Pulse as Activity, 
  Drop as Droplet,
  Wrench,
  Gauge,
  Stack as Layers,
  Lightning as Zap,
  ArrowCircleUp as ArrowUpCircle
} from '@phosphor-icons/react';
import { WhatsAppButton } from './WhatsAppButton';
import { getPumpImage } from '../data/pumpsData';

interface PumpDetailModalProps {
  pump: PumpModel | null;
  onClose: () => void;
}

export const PumpDetailModal: React.FC<PumpDetailModalProps> = ({ pump, onClose }) => {
  if (!pump) return null;
  const cardImage = getPumpImage(pump);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 animate-fadeIn my-8">
        {/* Modal Header in Brand Dark Slate */}
        <div className="bg-[#080d16] text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 border border-white/20 shrink-0 shadow-lg">
              <img
                src={cardImage}
                alt={pump.model}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="px-3 py-0.5 rounded-full text-xs font-black bg-red-500/20 text-red-300 border border-red-500/40 uppercase">
                  {pump.series}
                </span>
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40 uppercase flex items-center gap-1">
                  <Droplet className="w-3 h-3 fill-current" /> {pump.category} Series
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{pump.model}</h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                SuperFlow Submersible Pump Set • {pump.phase} • Nominal Outlet: {pump.outlet}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-[11px] font-extrabold uppercase text-slate-400 block">Power Rating</span>
              <span className="text-base font-black text-slate-900">{pump.hp} HP / {pump.kw} kW</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-[11px] font-extrabold uppercase text-slate-400 block">Total Stages</span>
              <span className="text-base font-black text-slate-900">{pump.stages} STG</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-[11px] font-extrabold uppercase text-slate-400 block">Operating Head</span>
              <span className="text-base font-black text-red-600">{pump.headRange || 'Standard Head'}</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-[11px] font-extrabold uppercase text-slate-400 block">Rated Speed</span>
              <span className="text-base font-black text-slate-900">{pump.speed || '2800 RPM'}</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 bg-red-50/70 rounded-2xl border border-red-200/80 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-red-900">Catalog Price (INR)</span>
              <div className="flex items-baseline gap-4 mt-1">
                {pump.price1Phase && (
                  <div>
                    <span className="text-xs text-slate-600 mr-1 font-semibold">1 Phase:</span>
                    <span className="text-xl font-black text-slate-900">₹{pump.price1Phase.toLocaleString('en-IN')}/-</span>
                  </div>
                )}
                {pump.price2Phase && (
                  <div>
                    <span className="text-xs text-slate-600 mr-1 font-semibold">2 Phase:</span>
                    <span className="text-xl font-black text-slate-900">₹{pump.price2Phase.toLocaleString('en-IN')}/-</span>
                  </div>
                )}
                {pump.price3Phase && (
                  <div>
                    <span className="text-xs text-slate-600 mr-1 font-semibold">3 Phase:</span>
                    <span className="text-xl font-black text-slate-900">₹{pump.price3Phase.toLocaleString('en-IN')}/-</span>
                  </div>
                )}
              </div>
            </div>
            <WhatsAppButton modelName={pump.model} text="Request Official Quotation" />
          </div>

          {/* Flow Matrix Table */}
          {pump.flowData && (
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-600" />
                Discharge (LPM) vs Head (Meters) Performance Matrix
              </h4>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-black border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-3.5 bg-slate-200/70">Discharge (LPM)</th>
                      {Object.keys(pump.flowData).map((lpm) => (
                        <th key={lpm} className="py-3 px-3 text-center bg-sky-50 text-sky-950 font-black">
                          {lpm} LPM
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="py-3 px-3.5 font-bold text-slate-800 bg-slate-50">Head (Meters)</td>
                      {Object.values(pump.flowData).map((head, idx) => (
                        <td key={idx} className="py-3 px-3 text-center font-extrabold text-red-600">
                          {head} m
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Material of Construction */}
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-red-600" />
              Standard Materials of Construction (MOC)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
              <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between border border-slate-200">
                <span className="text-slate-500 font-semibold">Motor Shaft:</span>
                <span className="font-bold text-slate-900">Stainless Steel AISI 410</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between border border-slate-200">
                <span className="text-slate-500 font-semibold">Motor Body:</span>
                <span className="font-bold text-slate-900">Stainless Steel AISI 202</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between border border-slate-200">
                <span className="text-slate-500 font-semibold">Impeller / Bowl:</span>
                <span className="font-bold text-slate-900">Glass Filled Polymer GF30 / SS410</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between border border-slate-200">
                <span className="text-slate-500 font-semibold">Thrust Bearing:</span>
                <span className="font-bold text-slate-900">Carbon v/s SS / Silicon Carbide</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between border border-slate-200">
                <span className="text-slate-500 font-semibold">Copper Winding:</span>
                <span className="font-bold text-slate-900">99.9% EC Grade Copper Wire</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between border border-slate-200">
                <span className="text-slate-500 font-semibold">Casting Parts:</span>
                <span className="font-bold text-slate-900">CI FG:200 CED Coated</span>
              </div>
            </div>
          </div>

          {/* Salient Features */}
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Droplet className="w-4 h-4 text-emerald-600 fill-current" />
              Salient Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>CNC Machined components for consistent quality performance</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Epoxy coated rotors for corrosion-free hygiene and longevity</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Wide voltage tolerance engineered for Indian rural power grids</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>100% factory submerged load tested prior to packaging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Close
          </button>
          <WhatsAppButton modelName={pump.model} text="Inquire via WhatsApp" />
        </div>
      </div>
    </div>
  );
};

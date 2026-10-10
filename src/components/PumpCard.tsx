import React from 'react';
import { Link } from 'react-router-dom';
import { PumpModel } from '../types/pump';
import { 
  Zap, 
  ArrowUpRight, 
  Layers, 
  Droplet, 
  CheckCircle2, 
  FileText,
  Activity
} from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { getPumpImage } from '../data/pumpsData';

interface PumpCardProps {
  pump: PumpModel;
  onSelect?: (pump: PumpModel) => void;
}

export const PumpCard: React.FC<PumpCardProps> = ({ pump }) => {
  const displayPrice = pump.price1Phase || pump.price3Phase || pump.price2Phase;
  const cardImage = getPumpImage(pump);

  return (
    <div className="bg-white rounded-[28px] border-2 border-slate-300 hover:border-red-500 shadow-sm hover:shadow-[0_20px_45px_rgba(220,38,38,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden group relative hover:-translate-y-1">
      
      {/* Top Floating Badge Bar */}
      <div className="p-4 pb-2.5 flex items-center justify-between gap-2 z-10">
        {/* Series Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200/70 text-[10px] font-black uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          <span>{pump.series}</span>
        </div>

        {/* Power HP Pill */}
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950 text-white font-mono font-bold text-xs shadow-xs">
          <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{pump.hp} HP <span className="text-slate-400 font-normal text-[10px]">({pump.kw} kW)</span></span>
        </div>
      </div>

      {/* Hero Visual Spotlight Window */}
      <div className="mx-4 relative h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/60 shadow-inner group/img">
        <img
          src={cardImage}
          alt={pump.model}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 brightness-95"
        />

        {/* Bottom Floating Metadata on Visual */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-bold">
          <span className="bg-sky-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-sky-400/30 text-sky-200 flex items-center gap-1">
            <Droplet className="w-3 h-3 text-sky-400" />
            <span>{pump.category} {pump.category === 'Openwell' ? 'Submersible' : 'Borewell'}</span>
          </span>
          <span className="bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10 text-red-300 font-mono">
            {pump.phase}
          </span>
        </div>
      </div>

      {/* Card Body Information */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        
        {/* Model Title & Outlet */}
        <div className="space-y-1">
          <Link to={`/product/${pump.id}`} className="flex items-center justify-between group/link">
            <h3 className="text-xl font-black text-slate-900 group-hover/link:text-red-600 transition-colors tracking-tight font-mono">
              {pump.model}
            </h3>
            <div className="w-7 h-7 rounded-full bg-slate-100 group-hover/link:bg-red-600 group-hover/link:text-white flex items-center justify-center text-slate-500 transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
            <Droplet className="w-3.5 h-3.5 text-sky-500 shrink-0" />
            <span>Delivery Outlet: <strong className="text-slate-800 font-bold">{pump.outlet}</strong></span>
          </p>
        </div>

        {/* 3-Capsule Micro-Metrics Matrix */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-slate-50 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-slate-200 text-center">
          {/* Head */}
          <div className="space-y-0.5 border-r border-slate-200/80 pr-1">
            <span className="text-[9px] uppercase font-black text-sky-600 tracking-wider block">
              Head Range
            </span>
            <span className="font-black text-slate-900 text-[11px] sm:text-xs block font-mono">
              {pump.headRange ? pump.headRange.replace(/Mtr|Meters/gi, 'm').replace(/\s*-\s*/g, '–') : 'Standard'}
            </span>
          </div>

          {/* Flow */}
          <div className="space-y-0.5 border-r border-slate-200/80 px-1">
            <span className="text-[9px] uppercase font-black text-sky-600 tracking-wider block">
              Max Flow
            </span>
            <span className="font-black text-slate-900 text-[11px] sm:text-xs block font-mono">
              {pump.dischargeRange ? pump.dischargeRange.replace(/LPM/gi, '').trim() + ' LPM' : 'High LPM'}
            </span>
          </div>

          {/* Stages */}
          <div className="space-y-0.5 pl-1">
            <span className="text-[9px] uppercase font-black text-emerald-600 tracking-wider block">
              Stages
            </span>
            <span className="font-black text-slate-900 text-[11px] sm:text-xs block font-mono">
              {pump.stages} STG
            </span>
          </div>
        </div>

        {/* Engineering Badges */}
        <div className="flex items-center gap-2 text-[11px] text-slate-600 font-semibold pt-0.5">
          <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>99.9% EC Copper</span>
          </div>
          <div className="flex items-center gap-1 text-sky-700 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-md text-[10px] font-bold">
            <Activity className="w-3 h-3 text-sky-600 shrink-0" />
            <span>Balanced Rotor</span>
          </div>
        </div>

      </div>

      {/* Card Footer: Pricing & Actions */}
      <div className="p-5 pt-0 space-y-3.5">
        
        {/* Pricing Strip */}
        <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">
              Ex-Factory Price
            </span>
            {displayPrice ? (
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-mono">
                  ₹{displayPrice.toLocaleString('en-IN')}/-
                </span>
                <span className="text-[10px] text-slate-400 font-bold">(Ex-GST)</span>
              </div>
            ) : (
              <span className="text-xs font-bold text-slate-600">Price On Request</span>
            )}
          </div>

          {pump.price3Phase && pump.price1Phase && (
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 font-mono">
              3-Ph: ₹{pump.price3Phase.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Dual High-Impact Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/product/${pump.id}`}
            className="py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-full transition-all border border-slate-300 hover:border-slate-400 text-center shadow-2xs flex items-center justify-center gap-1.5"
          >
            <span>Specs Sheet</span>
            <FileText className="w-3.5 h-3.5 text-slate-500" />
          </Link>

          <WhatsAppButton 
            modelName={pump.model} 
            text="Get Quote" 
            className="text-xs py-2.5 px-3 rounded-full shadow-sm w-full justify-center"
          />
        </div>

      </div>

    </div>
  );
};

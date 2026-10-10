import React from 'react';
import { Link } from 'react-router-dom';
import { PumpModel } from '../types/pump';
import { 
  Lightning as Zap, 
  ArrowUpRight, 
  Stack as Layers, 
  Drop as Droplet, 
  CheckCircle as CheckCircle2, 
  FileText,
  Pulse as Activity
} from '@phosphor-icons/react';
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
    <div className="bg-white rounded-[3px] border border-slate-300 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Floating Badge Bar */}
      <div className="p-4 pb-2.5 flex items-center justify-between gap-2">
        {/* Series Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] bg-red-50 text-red-600 border border-red-200 text-[11px] font-bold uppercase tracking-wider">
          <span>{pump.series}</span>
        </div>

        {/* Power HP Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] bg-[#0c192c] text-white font-bold text-[11px]">
          <Zap weight="fill" className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{pump.hp} HP</span>
        </div>
      </div>

      {/* Hero Visual Spotlight Window */}
      <div className="mx-4 relative h-40 rounded-[3px] overflow-hidden bg-slate-950 border border-slate-200 group/img">
        <img
          src={cardImage}
          alt={pump.model}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 brightness-95"
        />

        {/* Bottom Floating Metadata on Visual */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-bold">
          <span className="bg-slate-900/90 px-2 py-0.5 rounded-[3px] border border-white/10 text-sky-200 flex items-center gap-1">
            <Droplet className="w-3 h-3 text-sky-400" />
            <span>{pump.category} {pump.category === 'Openwell' ? 'Submersible' : 'Borewell'}</span>
          </span>
          <span className="bg-slate-900/90 px-2 py-0.5 rounded-[3px] border border-white/10 text-slate-200">
            {pump.phase}
          </span>
        </div>
      </div>

      {/* Card Body Information */}
      <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between">
        
        {/* Model Title & Outlet */}
        <div>
          <Link to={`/product/${pump.id}`} className="flex items-center justify-between group/link">
            <h3 className="text-lg font-bold text-slate-900 group-hover/link:text-red-600 transition-colors tracking-tight">
              {pump.model}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-red-600 transition-colors" />
          </Link>

          <p className="text-xs text-slate-500 font-normal mt-0.5">
            Category: <strong className="font-semibold text-slate-800">{pump.category} ({pump.phase})</strong>
          </p>
        </div>

        {/* 3-Column Micro-Metrics Matrix */}
        <div className="grid grid-cols-3 divide-x divide-slate-200/80 bg-[#f8fafc] p-2.5 rounded-[3px] border border-cyan-100/70 text-center">
          {/* Head */}
          <div className="px-1">
            <span className="text-[10px] uppercase font-bold text-[#0284c7] tracking-wider block">
              HEAD
            </span>
            <span className="font-bold text-slate-800 text-xs block mt-0.5 truncate">
              {pump.headRange ? pump.headRange.replace(/Mtr|Meters/gi, 'm').replace(/\s*-\s*/g, '–') : '10–46 m'}
            </span>
          </div>

          {/* Flow */}
          <div className="px-1">
            <span className="text-[10px] uppercase font-bold text-[#0284c7] tracking-wider block">
              FLOW
            </span>
            <span className="font-bold text-slate-800 text-xs block mt-0.5 truncate">
              {pump.dischargeRange ? pump.dischargeRange.replace(/LPM/gi, '').replace(/\s*-\s*/g, '–').trim() : '68–15'}
            </span>
          </div>

          {/* Stages */}
          <div className="px-1">
            <span className="text-[10px] uppercase font-bold text-[#10b981] tracking-wider block">
              STAGES
            </span>
            <span className="font-bold text-slate-800 text-xs block mt-0.5 truncate">
              {pump.stages} STG
            </span>
          </div>
        </div>

        {/* Engineering Badges */}
        <div className="flex items-center gap-2 text-[11px] text-slate-600 font-semibold">
          <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-[3px] text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>99.9% EC Copper</span>
          </div>
          <div className="flex items-center gap-1 text-sky-700 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-[3px] text-[10px] font-bold">
            <Activity className="w-3 h-3 text-sky-600 shrink-0" />
            <span>Dynamic Rotor</span>
          </div>
        </div>

      </div>

      {/* Card Footer: Pricing & Actions */}
      <div className="p-4 sm:p-5 pt-0 space-y-3">
        
        {/* Pricing Strip */}
        <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
              Ex-Factory Price
            </span>
            {displayPrice ? (
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  ₹{displayPrice.toLocaleString('en-IN')}/-
                </span>
                <span className="text-[10px] text-slate-400 font-normal">(Ex-GST)</span>
              </div>
            ) : (
              <span className="text-xs font-semibold text-slate-600">Price On Request</span>
            )}
          </div>

          {pump.price3Phase && pump.price1Phase && (
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-[3px] border border-slate-200 font-mono">
              3-Ph: ₹{pump.price3Phase.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/product/${pump.id}`}
            className="py-2.5 px-3 text-xs font-bold text-white bg-[#0c192c] hover:bg-slate-800 rounded-[3px] transition-colors text-center flex items-center justify-center gap-1.5"
          >
            <FileText weight="bold" className="w-3.5 h-3.5" />
            <span>Specs</span>
          </Link>

          <WhatsAppButton 
            modelName={pump.model} 
            text="WhatsApp" 
            className="!py-2.5 !px-3 !bg-[#00a859] hover:!bg-[#008f4c] text-white text-xs font-bold !rounded-[3px] !shadow-none flex items-center justify-center gap-1.5 transition-colors"
          />
        </div>

      </div>

    </div>
  );
};

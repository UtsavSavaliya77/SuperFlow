import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ALL_PUMPS } from '../data/pumpsData';
import { PumpModel } from '../types/pump';
import { 
  Search, 
  Sliders, 
  Zap, 
  Droplet, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Filter, 
  Gauge,
  Phone,
  RotateCcw
} from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface PumpSelectorProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const PumpSelector: React.FC<PumpSelectorProps> = ({
  title = "Smart Technical Pump Selector",
  subtitle = "Find the exact submersible pump model matched to your borewell depth and water discharge requirements.",
  compact = false
}) => {
  const [selectedBorewell, setSelectedBorewell] = useState<string>('all');
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [minHead, setMinHead] = useState<number>(0);
  const [minLpm, setMinLpm] = useState<number>(0);
  const [selectedHp, setSelectedHp] = useState<string>('all');

  // Filter matching pumps
  const matchingPumps = useMemo(() => {
    return ALL_PUMPS.filter((p) => {
      // Borewell filter
      if (selectedBorewell !== 'all') {
        if (selectedBorewell === 'V-3' && p.category !== 'V-3') return false;
        if (selectedBorewell === 'V-4' && p.category !== 'V-4') return false;
        if (selectedBorewell === 'V-6' && p.category !== 'V-6') return false;
        if (selectedBorewell === 'Openwell' && p.category !== 'Openwell') return false;
      }

      // Phase filter
      if (selectedPhase !== 'all') {
        if (selectedPhase === 'Single Phase' && p.phase !== 'Single Phase' && p.phase !== 'Multi-Phase') return false;
        if (selectedPhase === 'Three Phase' && p.phase !== 'Three Phase' && p.phase !== 'Multi-Phase') return false;
      }

      // HP filter
      if (selectedHp !== 'all') {
        const hp = p.hp;
        if (selectedHp === '0.5-2' && (hp < 0.5 || hp > 2)) return false;
        if (selectedHp === '3-5' && (hp < 3 || hp > 5)) return false;
        if (selectedHp === '6-25' && hp < 6) return false;
      }

      // Head filter: parse max head from headRange e.g. "10-90 Mtr" or "50-434 Mtr"
      if (minHead > 0) {
        const match = p.headRange.match(/(\d+)\s*-\s*(\d+)/);
        if (match) {
          const maxH = parseInt(match[2], 10);
          if (maxH < minHead) return false;
        }
      }

      // Flow filter: parse max LPM from dischargeRange e.g. "20-140 LPM" or "300-1625 LPM"
      if (minLpm > 0) {
        const match = p.dischargeRange.match(/(\d+)\s*-\s*(\d+)/);
        if (match) {
          const maxF = parseInt(match[2], 10);
          if (maxF < minLpm) return false;
        }
      }

      return true;
    }).slice(0, 6); // Top 6 matches
  }, [selectedBorewell, selectedPhase, minHead, minLpm, selectedHp]);

  const handleReset = () => {
    setSelectedBorewell('all');
    setSelectedPhase('all');
    setMinHead(0);
    setMinLpm(0);
    setSelectedHp('all');
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-300 shadow-xl overflow-hidden">
      {/* Selector Header Bar */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 border-b-2 border-red-600 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal max-w-2xl">
              {subtitle}
            </p>
          </div>

          <button
            onClick={handleReset}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Criteria</span>
          </button>
        </div>
      </div>

      {/* Control Filters Form */}
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          
          {/* 1. Borewell / Type */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-red-600" />
              <span>Pump Type / Bore</span>
            </label>
            <select
              value={selectedBorewell}
              onChange={(e) => setSelectedBorewell(e.target.value)}
              className="w-full bg-white border-2 border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-red-600 transition-colors shadow-xs"
            >
              <option value="all">All Borewell & Openwell</option>
              <option value="V-4">4" V-4 Borewell Submersible</option>
              <option value="V-6">6" V-6 Heavy Borewell</option>
              <option value="V-3">3" V-3 Slim Borewell</option>
              <option value="Openwell">Openwell (Sump / Tank / Lake)</option>
            </select>
          </div>

          {/* 2. Power HP */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Motor Power (HP)</span>
            </label>
            <select
              value={selectedHp}
              onChange={(e) => setSelectedHp(e.target.value)}
              className="w-full bg-white border-2 border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-red-600 transition-colors shadow-xs"
            >
              <option value="all">All Power Ratings</option>
              <option value="0.5-2">0.5 HP – 2.0 HP (Small/Domestic)</option>
              <option value="3-5">3.0 HP – 5.0 HP (Agriculture/Farms)</option>
              <option value="6-25">6.0 HP – 25.0 HP (High Head/Industrial)</option>
            </select>
          </div>

          {/* 3. Power Phase */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-emerald-600" />
              <span>Electrical Supply</span>
            </label>
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="w-full bg-white border-2 border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-red-600 transition-colors shadow-xs"
            >
              <option value="all">Any Phase (1-Ph / 3-Ph)</option>
              <option value="Single Phase">Single Phase (220V 50Hz)</option>
              <option value="Three Phase">Three Phase (415V 50Hz)</option>
            </select>
          </div>

          {/* 4. Min Head (Meters) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-sky-600" />
                <span>Min Head: {minHead > 0 ? `${minHead}m (${Math.round(minHead * 3.28)} ft)` : 'Any'}</span>
              </label>
            </div>
            <input
              type="range"
              min="0"
              max="400"
              step="20"
              value={minHead}
              onChange={(e) => setMinHead(Number(e.target.value))}
              className="w-full accent-red-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-600 font-bold">
              <span>0m</span>
              <span>150m</span>
              <span>300m</span>
              <span>400m+</span>
            </div>
          </div>

          {/* 5. Min Flow LPM */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-sky-600" />
                <span>Min Flow: {minLpm > 0 ? `${minLpm} LPM` : 'Any'}</span>
              </label>
            </div>
            <input
              type="range"
              min="0"
              max="1500"
              step="50"
              value={minLpm}
              onChange={(e) => setMinLpm(Number(e.target.value))}
              className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-600 font-bold">
              <span>0 LPM</span>
              <span>500 LPM</span>
              <span>1000 LPM</span>
              <span>1500+</span>
            </div>
          </div>

        </div>
      </div>

      {/* Selector Results Grid */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
              {matchingPumps.length} Verified Matching Pump Configurations Found
            </span>
          </div>

          <Link
            to={`/products?category=${selectedBorewell !== 'all' ? selectedBorewell : ''}`}
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 group"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {matchingPumps.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 p-8 space-y-3">
            <Filter className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-800">No exact pump matched these specific criteria</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try adjusting your Head or Discharge sliders, or contact our Padvala factory engineering team for custom staging solutions.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {matchingPumps.map((pump) => (
              <div 
                key={pump.id}
                className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-300 hover:border-red-600 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Header info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-[10px] font-black uppercase tracking-wide">
                      {pump.series}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white font-mono font-bold text-[11px] flex items-center gap-1 shadow-xs">
                      <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>{pump.hp} HP</span>
                    </span>
                  </div>

                  <div>
                    <Link to={`/product/${pump.id}`} className="block group/link">
                      <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover/link:text-red-600 transition-colors font-mono tracking-tight">
                        {pump.model}
                      </h4>
                    </Link>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Category: <strong className="text-slate-700">{pump.category} ({pump.phase})</strong>
                    </p>
                  </div>

                  {/* Spec Strip: Properly Formatted & Responsive */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-slate-50 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-slate-200 text-center">
                    <div className="border-r border-slate-200/80 pr-1">
                      <span className="text-[9px] sm:text-[10px] font-black text-sky-600 uppercase tracking-wider block">
                        Head
                      </span>
                      <span className="text-[11px] sm:text-xs font-black text-slate-900 font-mono block mt-0.5">
                        {pump.headRange ? pump.headRange.replace(/Mtr|Meters/gi, 'm').replace(/\s*-\s*/g, '–') : 'Standard'}
                      </span>
                    </div>

                    <div className="border-r border-slate-200/80 px-1">
                      <span className="text-[9px] sm:text-[10px] font-black text-sky-600 uppercase tracking-wider block">
                        Flow
                      </span>
                      <span className="text-[11px] sm:text-xs font-black text-slate-900 font-mono block mt-0.5">
                        {pump.dischargeRange ? pump.dischargeRange.replace(/LPM/gi, '').trim() + ' LPM' : 'High Flow'}
                      </span>
                    </div>

                    <div className="pl-1">
                      <span className="text-[9px] sm:text-[10px] font-black text-emerald-600 uppercase tracking-wider block">
                        Stages
                      </span>
                      <span className="text-[11px] sm:text-xs font-black text-slate-900 font-mono block mt-0.5">
                        {pump.stages} STG
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons: Equal Width Responsive 2-Button Grid */}
                <div className="pt-3.5 mt-3.5 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <Link
                    to={`/product/${pump.id}`}
                    className="py-2.5 px-2 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-xs font-black transition-colors text-center flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span>View Specs</span>
                  </Link>

                  <WhatsAppButton
                    message={`Hello SuperFlow, I am looking for quotation and technical details for model: ${pump.model} (${pump.hp} HP, ${pump.stages} Stage). Please send catalog & ex-factory pricing.`}
                    text="WhatsApp"
                    className="py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-xs justify-center"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

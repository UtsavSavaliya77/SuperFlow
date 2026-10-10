import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ALL_PUMPS } from '../data/pumpsData';
import { PumpModel } from '../types/pump';
import { 
  MagnifyingGlass as Search, 
  Lightning as Zap, 
  Drop as Droplet, 
  ArrowRight, 
  Stack as Layers, 
  Funnel as Filter, 
  Gauge,
  ArrowCounterClockwise as RotateCcw,
  CaretDown,
  Check,
  X,
  SlidersHorizontal,
  FileText
} from '@phosphor-icons/react';
import { WhatsAppButton } from './WhatsAppButton';

interface Select2Option {
  value: string;
  label: string;
  sublabel?: string;
}

interface Select2Props {
  label: string;
  icon: React.ElementType;
  iconColor: string;
  value: string;
  options: Select2Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

// Custom Select2 Interactive Dropdown Component
const Select2: React.FC<Select2Props> = ({
  label,
  icon: Icon,
  iconColor,
  value,
  options,
  onChange,
  placeholder = 'Select option'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((o) => o.value === value) || options[0];

  // Filter options based on internal search
  const filteredOptions = useMemo(() => {
    if (!searchTerm.trim()) return options;
    const term = searchTerm.toLowerCase();
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(term) ||
        (o.sublabel && o.sublabel.toLowerCase().includes(term))
    );
  }, [options, searchTerm]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="space-y-1.5 relative" ref={dropdownRef}>
      <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
          <span>{label}</span>
        </span>
        {value !== 'all' && (
          <span className="text-[10px] text-red-600 font-bold lowercase">Active</span>
        )}
      </label>

      {/* Select2 Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border-2 rounded-[3px] px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
          isOpen
            ? 'border-red-600 ring-2 ring-red-500/20 text-slate-900'
            : value !== 'all'
            ? 'border-red-400 bg-red-50/30 text-slate-900'
            : 'border-slate-300 hover:border-slate-400 text-slate-800'
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate pr-2">{selectedOption ? selectedOption.label : placeholder}</span>
        <CaretDown
          className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
            isOpen ? 'rotate-180 text-red-600' : ''
          }`}
        />
      </button>

      {/* Select2 Floating Searchable Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-white border-2 border-slate-300 rounded-[3px] overflow-hidden animate-fadeIn">
          {/* Internal Search Input */}
          <div className="p-2 border-b border-slate-200 bg-slate-50">
            <div className="relative flex items-center">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type to filter..."
                className="w-full bg-white border border-slate-300 rounded-[3px] pl-8 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-red-600"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Options List */}
          <ul className="max-h-56 overflow-y-auto divide-y divide-slate-100 py-1" role="listbox">
            {filteredOptions.length === 0 ? (
              <li className="p-3 text-center text-xs text-slate-400 font-medium">
                No matching option
              </li>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <li
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={`px-3.5 py-2.5 text-xs font-bold cursor-pointer transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-red-600 text-white font-black'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-red-600'
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <div>
                      <span className="block leading-snug">{opt.label}</span>
                      {opt.sublabel && (
                        <span
                          className={`text-[10px] block mt-0.5 ${
                            isSelected ? 'text-white/80' : 'text-slate-400'
                          }`}
                        >
                          {opt.sublabel}
                        </span>
                      )}
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-white shrink-0 ml-2" />}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

interface PumpSelectorProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const PumpSelector: React.FC<PumpSelectorProps> = ({
  title = "Technical Pump Selector & Model Finder",
  subtitle = "Filter by borewell diameter, required head depth, and flow discharge to find the optimal pump configuration."
}) => {
  const [selectedBorewell, setSelectedBorewell] = useState<string>('all');
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [minHead, setMinHead] = useState<number>(0);
  const [minLpm, setMinLpm] = useState<number>(0);
  const [selectedHp, setSelectedHp] = useState<string>('all');

  // Select2 Options Definitions
  const borewellOptions: Select2Option[] = [
    { value: 'all', label: 'All Borewell & Openwell', sublabel: 'Complete spectrum of models' },
    { value: 'V-4', label: '4" V-4 Borewell Submersible', sublabel: '100mm casing farm borewells' },
    { value: 'V-6', label: '6" V-6 Heavy Borewell', sublabel: '150mm industrial high discharge' },
    { value: 'V-3', label: '3" V-3 Slim Borewell', sublabel: '75mm narrow domestic casing' },
    { value: 'Openwell', label: 'Openwell Sets', sublabel: 'Sump, lake & canal submersible' }
  ];

  const hpOptions: Select2Option[] = [
    { value: 'all', label: 'All Power Ratings (HP)', sublabel: 'From 0.5 HP to 25.0 HP' },
    { value: '0.5-2', label: '0.5 HP – 2.0 HP', sublabel: 'Small farms & domestic overhead tanks' },
    { value: '3-5', label: '3.0 HP – 5.0 HP', sublabel: 'Agricultural sprinkler & drip irrigation' },
    { value: '6-25', label: '6.0 HP – 25.0 HP', sublabel: 'High-head heavy industrial pumping' }
  ];

  const phaseOptions: Select2Option[] = [
    { value: 'all', label: 'Any Electrical Phase', sublabel: 'Single & Three Phase supply' },
    { value: 'Single Phase', label: 'Single Phase (220V 50Hz)', sublabel: 'Standard domestic & 220V agri' },
    { value: 'Three Phase', label: 'Three Phase (415V 50Hz)', sublabel: 'Heavy agricultural & industrial power' }
  ];

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

      // Head filter
      if (minHead > 0) {
        const match = p.headRange.match(/(\d+)\s*-\s*(\d+)/);
        if (match) {
          const maxH = parseInt(match[2], 10);
          if (maxH < minHead) return false;
        }
      }

      // Flow filter
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

  const activeFiltersCount = 
    (selectedBorewell !== 'all' ? 1 : 0) +
    (selectedPhase !== 'all' ? 1 : 0) +
    (selectedHp !== 'all' ? 1 : 0) +
    (minHead > 0 ? 1 : 0) +
    (minLpm > 0 ? 1 : 0);

  const handleReset = () => {
    setSelectedBorewell('all');
    setSelectedPhase('all');
    setMinHead(0);
    setMinLpm(0);
    setSelectedHp('all');
  };

  return (
    <div className="bg-white rounded-[3px] border-2 border-slate-300 overflow-hidden">
      
      {/* Top Header Command Banner */}
      <div className="bg-[#080d16] text-white p-6 sm:p-8 border-b-2 border-red-600 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-[3px]">
              <span>Hydraulic Selector Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sans">
              {title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal max-w-2xl">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {activeFiltersCount > 0 && (
              <span className="px-2.5 py-1 bg-slate-800 text-red-400 border border-red-500/30 text-xs font-bold rounded-[3px]">
                {activeFiltersCount} Active Filters
              </span>
            )}
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[3px] bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all border border-slate-700 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Criteria</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2-Column Main Selector Layout: Left Filterbar, Right Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        
        {/* =========================================================================
            LEFT COLUMN: Technical Filter Console (Select2 Dropdowns & Range Sliders)
            ========================================================================= */}
        <div className="lg:col-span-3 p-6 sm:p-7 bg-slate-50 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-red-600" />
              <span>Filter Console</span>
            </h3>
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="text-[11px] font-bold text-red-600 hover:text-red-700 cursor-pointer"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="space-y-4">
            {/* 1. Pump Type Select2 */}
            <Select2
              label="Pump Type / Bore Size"
              icon={Layers}
              iconColor="text-red-600"
              value={selectedBorewell}
              options={borewellOptions}
              onChange={setSelectedBorewell}
            />

            {/* 2. Motor Power HP Select2 */}
            <Select2
              label="Motor Power Rating (HP)"
              icon={Zap}
              iconColor="text-amber-500"
              value={selectedHp}
              options={hpOptions}
              onChange={setSelectedHp}
            />

            {/* 3. Electrical Supply Select2 */}
            <Select2
              label="Electrical Supply Phase"
              icon={Gauge}
              iconColor="text-emerald-600"
              value={selectedPhase}
              options={phaseOptions}
              onChange={setSelectedPhase}
            />

            {/* 4. Minimum Head Range Slider */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="flex justify-between items-center text-xs font-black text-slate-900 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-sky-600" />
                  <span>Required Head</span>
                </span>
                <span className="text-red-600 font-mono font-bold lowercase">
                  {minHead > 0 ? `${minHead}m (${Math.round(minHead * 3.28)} ft)` : 'Any Head'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="400"
                step="20"
                value={minHead}
                onChange={(e) => setMinHead(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer h-2 bg-slate-200 rounded-[3px]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                <span>0m</span>
                <span>150m</span>
                <span>300m</span>
                <span>400m+</span>
              </div>
            </div>

            {/* 5. Minimum Flow LPM Slider */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="flex justify-between items-center text-xs font-black text-slate-900 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Droplet className="w-3.5 h-3.5 text-sky-600" />
                  <span>Discharge Flow</span>
                </span>
                <span className="text-sky-600 font-mono font-bold lowercase">
                  {minLpm > 0 ? `${minLpm} LPM` : 'Any Flow'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1500"
                step="50"
                value={minLpm}
                onChange={(e) => setMinLpm(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-[3px]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                <span>0 LPM</span>
                <span>500 LPM</span>
                <span>1000 LPM</span>
                <span>1500+</span>
              </div>
            </div>
          </div>

          {/* Sizing Help Box */}
          <div className="p-3.5 bg-white border border-slate-200 rounded-[3px] space-y-1.5 text-xs text-slate-600">
            <span className="font-black text-slate-900 block">Need custom staging?</span>
            <p className="text-[11px] leading-relaxed">
              Our Padvala factory engineering team provides direct hydraulic curve calculations for complex high-head well depths.
            </p>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: Matching Model Cards Showcase
            ========================================================================= */}
        <div className="lg:col-span-9 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
          
          {/* Results Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 animate-pulse rounded-[3px]" />
              <span className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                {matchingPumps.length} Matching Pump Sets Found
              </span>
            </div>

            <Link
              to={`/products?category=${selectedBorewell !== 'all' ? selectedBorewell : ''}`}
              className="text-xs font-black text-red-600 hover:text-red-700 flex items-center gap-1 group w-fit"
            >
              <span>View Full Catalog Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid */}
          {matchingPumps.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-[3px] border-2 border-dashed border-slate-300 p-8 space-y-3">
              <Filter className="w-10 h-10 text-slate-400 mx-auto" />
              <h4 className="text-base font-black text-slate-800">No exact pump matched these specific criteria</h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try adjusting your Head or Discharge sliders, or reset the Select2 dropdown filters to view standard models.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] bg-red-600 text-white font-black text-xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {matchingPumps.map((pump) => {
                const formattedHead = pump.headRange
                  ? pump.headRange.replace(/Mtr|Meters/gi, 'm').replace(/\s*-\s*/g, '–').trim()
                  : '10–46 m';
                const formattedFlow = pump.dischargeRange
                  ? pump.dischargeRange.replace(/LPM/gi, '').replace(/\s*-\s*/g, '–').trim()
                  : '68–15';
                const seriesLabel = pump.series 
                  ? pump.series.toUpperCase() 
                  : `${pump.category} HIGH HEAD`;

                return (
                  <div 
                    key={pump.id}
                    className="bg-white rounded-[3px] border border-slate-300 hover:border-slate-400 p-4 sm:p-5 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-[3px] bg-red-50/70 text-red-600 border border-red-200 text-[11px] font-bold uppercase tracking-wider truncate max-w-[140px]">
                          {seriesLabel}
                        </span>
                        <span className="px-2.5 py-1 rounded-[3px] bg-[#0c192c] text-white font-bold text-[11px] inline-flex items-center gap-1.5 shrink-0">
                          <Zap weight="fill" className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span>{pump.hp} HP</span>
                        </span>
                      </div>

                      {/* Model Title & Category */}
                      <div className="mt-3">
                        <Link to={`/product/${pump.id}`} className="block group/link">
                          <h4 className="text-xl font-bold text-slate-900 group-hover/link:text-red-600 transition-colors tracking-tight">
                            {pump.model}
                          </h4>
                        </Link>
                        <p className="text-xs text-slate-500 font-normal mt-1">
                          Category: <strong className="font-semibold text-slate-800">{pump.category} ({pump.phase})</strong>
                        </p>
                      </div>

                      {/* Spec Matrix Box */}
                      <div className="my-4 bg-[#f8fafc] border border-cyan-100/70 rounded-[3px] py-2.5 px-3">
                        <div className="grid grid-cols-3 divide-x divide-slate-200/80 text-center">
                          <div className="px-1">
                            <span className="text-[10px] font-bold text-[#0284c7] uppercase tracking-wider block">
                              HEAD
                            </span>
                            <span className="text-xs font-bold text-slate-800 block mt-0.5 truncate" title={pump.headRange || ''}>
                              {formattedHead}
                            </span>
                          </div>

                          <div className="px-1">
                            <span className="text-[10px] font-bold text-[#0284c7] uppercase tracking-wider block">
                              FLOW
                            </span>
                            <span className="text-xs font-bold text-slate-800 block mt-0.5 truncate" title={pump.dischargeRange || ''}>
                              {formattedFlow}
                            </span>
                          </div>

                          <div className="px-1">
                            <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-wider block">
                              STAGES
                            </span>
                            <span className="text-xs font-bold text-slate-800 block mt-0.5 truncate">
                              {pump.stages} STG
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid md:grid-cols-2 gap-2.5 pt-1">
                      <Link
                        to={`/product/${pump.id}`}
                        className="py-2.5 px-3 rounded-[3px] bg-[#0c192c] hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                      >
                        <FileText weight="bold" className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </Link>

                      <WhatsAppButton
                        message={`Hello SuperFlow, I am looking for quotation and technical details for model: ${pump.model} (${pump.hp} HP, ${pump.stages} Stage). Please send catalog & ex-factory pricing.`}
                        text="WhatsApp"
                        className="!py-2.5 !px-3 !bg-[#00a859] hover:!bg-[#008f4c] text-white text-xs font-bold !rounded-[3px] !shadow-none flex items-center justify-center gap-1.5 transition-colors"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Prompt Strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>Showing top verified matches. Over 150+ configurations available in full catalog.</span>
            <Link
              to="/products"
              className="text-red-600 hover:text-red-700 font-black uppercase tracking-wider text-[11px] shrink-0"
            >
              Browse 150+ Catalog →
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

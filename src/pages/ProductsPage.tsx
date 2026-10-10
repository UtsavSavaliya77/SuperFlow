import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ALL_PUMPS, CATEGORIES } from '../data/pumpsData';
import { PumpCard } from '../components/PumpCard';
import { PumpSelector } from '../components/PumpSelector';
import RevealOnScroll from '../components/RevealOnScroll';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { 
  MagnifyingGlass as Search, 
  ArrowCounterClockwise as RotateCcw, 
  Funnel as ListFilter,
  Package as PackageCheck,
  CaretRight as ChevronRight,
  CaretDown as ChevronDown,
  Funnel as Filter,
  X,
  SquaresFour as LayoutGrid,
  List,
  SlidersHorizontal,
  Stack as Layers,
  Lightning as Zap,
  Drop as Droplet,
  CheckCircle as CheckCircle2,
  FileText,
  ArrowUpRight
} from '@phosphor-icons/react';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialSeries = searchParams.get('series') || 'all';
  const initialSearch = searchParams.get('search') || searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSeries, setSelectedSeries] = useState<string>(initialSeries);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedHp, setSelectedHp] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [showFinder, setShowFinder] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sync state whenever URL searchParams change
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    const ser = searchParams.get('series') || 'all';
    const q = searchParams.get('search') || searchParams.get('q') || '';
    setSelectedCategory(cat);
    setSelectedSeries(ser);
    setSearchQuery(q);
  }, [searchParams]);

  // Available series options based on selected category
  const availableSeries = useMemo(() => {
    if (selectedCategory === 'all') {
      const set = new Set<string>();
      ALL_PUMPS.forEach((p) => set.add(p.series));
      return Array.from(set);
    }
    const set = new Set<string>();
    ALL_PUMPS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase()).forEach((p) => set.add(p.series));
    return Array.from(set);
  }, [selectedCategory]);

  // Filtered and sorted pumps
  const filteredPumps = useMemo(() => {
    return ALL_PUMPS.filter((pump) => {
      // Search term
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesModel = pump.model.toLowerCase().includes(query);
        const matchesSeries = pump.series.toLowerCase().includes(query);
        const matchesCategory = pump.category.toLowerCase().includes(query);
        if (!matchesModel && !matchesSeries && !matchesCategory) return false;
      }

      // Category
      if (selectedCategory !== 'all' && pump.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Series
      if (selectedSeries !== 'all' && pump.series.toLowerCase() !== selectedSeries.toLowerCase()) {
        return false;
      }

      // Phase
      if (selectedPhase !== 'all') {
        if (selectedPhase === 'Single Phase' && pump.phase !== 'Single Phase' && pump.phase !== 'Multi-Phase') return false;
        if (selectedPhase === 'Three Phase' && pump.phase !== 'Three Phase' && pump.phase !== 'Multi-Phase') return false;
        if (selectedPhase === 'Two Phase' && pump.phase !== 'Two Phase' && !pump.price2Phase) return false;
      }

      // HP
      if (selectedHp !== 'all') {
        const hp = pump.hp;
        if (selectedHp === '0.5-1.5' && (hp < 0.5 || hp > 1.5)) return false;
        if (selectedHp === '2-5' && (hp < 2 || hp > 5)) return false;
        if (selectedHp === '6-25' && hp < 6) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        const priceA = a.price1Phase || a.price3Phase || 0;
        const priceB = b.price1Phase || b.price3Phase || 0;
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = a.price1Phase || a.price3Phase || 0;
        const priceB = b.price1Phase || b.price3Phase || 0;
        return priceB - priceA;
      }
      if (sortBy === 'hp-asc') return a.hp - b.hp;
      if (sortBy === 'hp-desc') return b.hp - a.hp;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedSeries, selectedPhase, selectedHp, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSeries('all');
    setSelectedPhase('all');
    setSelectedHp('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedSeries !== 'all') count++;
    if (selectedPhase !== 'all') count++;
    if (selectedHp !== 'all') count++;
    return count;
  }, [selectedCategory, selectedSeries, selectedPhase, selectedHp]);

  const categoryCards = [
    { id: 'all', label: 'All Spectrum', sub: '150+ Models', badge: 'Complete Range' },
    { id: 'V-4', label: '4" V-4 Borewell', sub: '120+ Models', badge: 'Flagship Agri & Solar' },
    { id: 'V-6', label: '6" V-6 Heavy', sub: '80+ Models', badge: 'High Head & Flow' },
    { id: 'V-3', label: '3" V-3 Slim', sub: '16+ Models', badge: 'Deep Domestic' },
    { id: 'Openwell', label: 'Openwell Series', sub: '30+ Models', badge: 'Sump & Canal' },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 sm:pb-24">
      
      {/* Full-Bleed Cinematic Hero Header Section */}
      <section className="relative bg-[#080d16] text-white border-b-2 border-red-600 overflow-hidden w-full">
        <img
          src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
          alt="SuperFlow Submersible Pumps Precision Engineering"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#080d16]/85 pointer-events-none" />
        {/* <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 space-y-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">Products Spectrum</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            SuperFlow Submersible Pump Catalog
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Precision-engineered V-3 to V-9 deep borewell submersible pumps and Openwell pump sets. Built with 100% EC grade copper, stainless steel shafts, and sand-resistant hydraulic components.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Smart Finder Toggle Drawer Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowFinder(!showFinder)}
            className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <SlidersHorizontal className="w-3 h-3 text-red-400" />
            <span>{showFinder ? 'Hide Smart Pump Finder' : 'Open Smart Pump Selector'}</span>
          </button>

          {/* Grid vs Table View Mode Switcher */}
          <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl border border-slate-300">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
              title="Grid Card View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
              title="Industrial Table View"
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Spec Table</span>
            </button>
          </div>
        </div>

        {/* Collapsible Pump Selector */}
        {showFinder && (
          <RevealOnScroll animation="fade-up">
            <PumpSelector
              title="Technical Pump Matching Tool"
              subtitle="Filter through the entire SuperFlow range by head height and discharge volume."
            />
          </RevealOnScroll>
        )}

        {/* Compact Search & Toggleable Filter Bar */}
        <RevealOnScroll animation="fade-up">
          <div className="bg-white p-4 sm:p-5 rounded-3xl border-2 border-slate-300 shadow-sm space-y-4">
            
            {/* Top Minimalist Control Row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 150+ models, series, or keywords (e.g. Turbo, RM3, V-6)..."
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:border-red-600 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 rounded-full"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Right Action Controls: Filter Button, Sort Dropdown, Reset */}
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap sm:flex-nowrap">
                
                {/* 🎯 Primary Filter Toggle Button */}
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                    isFilterOpen || activeFilterCount > 0
                      ? 'bg-slate-900 text-white border-red-600 shadow-md'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 hover:border-slate-400'
                  }`}
                >
                  <SlidersHorizontal className={`w-4 h-4 ${isFilterOpen || activeFilterCount > 0 ? 'text-red-400' : 'text-slate-600'}`} />
                  <span>Filters</span>
                  {activeFilterCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black">
                      {activeFilterCount}
                    </span>
                  )}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isFilterOpen ? 'rotate-180 text-red-400' : 'text-slate-400'}`} />
                </button>

                {/* Sort By Dropdown */}
                <div className="flex items-center gap-1.5 text-xs bg-slate-50 px-3 py-1.5 rounded-2xl border-2 border-slate-200 flex-1 sm:flex-initial">
                  <span className="text-slate-500 font-bold shrink-0 hidden sm:inline">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer text-xs w-full sm:w-auto"
                  >
                    <option value="featured">Featured Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="hp-asc">HP: Low to High</option>
                    <option value="hp-desc">HP: High to Low</option>
                  </select>
                </div>

                {/* Reset Button */}
                {(activeFilterCount > 0 || searchQuery !== '' || sortBy !== 'featured') && (
                  <button
                    onClick={handleReset}
                    className="p-2.5 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-colors cursor-pointer border-2 border-slate-200 hover:border-red-200 shrink-0"
                    title="Reset all filters"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

            {/* Active Filter Badges Strip (Quick Dismiss) */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
                  Active Filters:
                </span>

                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold">
                    <span>Category: {selectedCategory}</span>
                    <button onClick={() => { setSelectedCategory('all'); setSelectedSeries('all'); }} className="hover:text-red-900 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedSeries !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold">
                    <span>Series: {selectedSeries}</span>
                    <button onClick={() => setSelectedSeries('all')} className="hover:text-sky-900 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedPhase !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                    <span>Phase: {selectedPhase}</span>
                    <button onClick={() => setSelectedPhase('all')} className="hover:text-amber-900 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedHp !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                    <span>Power: {selectedHp} HP</span>
                    <button onClick={() => setSelectedHp('all')} className="hover:text-emerald-900 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-red-600 hover:text-red-700 underline ml-2 cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* 🔽 Expandable Filter Drawer Panel */}
            {isFilterOpen && (
              <div className="pt-4 border-t-2 border-slate-200 space-y-5 animate-fade-in">
                
                {/* 3 Dropdowns Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  
                  {/* Category Filter */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                      Borewell Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setSelectedSeries('all');
                      }}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-red-600 shadow-xs"
                    >
                      <option value="all">All Borewell Categories</option>
                      <option value="V-3">3" V-3 Submersible</option>
                      <option value="V-4">4" V-4 Submersible</option>
                      <option value="V-5">5" V-5 Mix Flow</option>
                      <option value="V-6">6" V-6 Heavy Duty</option>
                      <option value="Openwell">Openwell Submersible</option>
                    </select>
                  </div>

                  {/* Phase Filter */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                      Power Supply Phase
                    </label>
                    <select
                      value={selectedPhase}
                      onChange={(e) => setSelectedPhase(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-red-600 shadow-xs"
                    >
                      <option value="all">All Power Phases</option>
                      <option value="Single Phase">Single Phase (220V)</option>
                      <option value="Three Phase">Three Phase (415V)</option>
                    </select>
                  </div>

                  {/* HP Rating Filter */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                      Motor Rating (HP)
                    </label>
                    <select
                      value={selectedHp}
                      onChange={(e) => setSelectedHp(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-red-600 shadow-xs"
                    >
                      <option value="all">All Power Ratings</option>
                      <option value="0.5-1.5">0.5 HP – 1.5 HP (Small/Domestic)</option>
                      <option value="2-5">2.0 HP – 5.0 HP (Farm Irrigation)</option>
                      <option value="6-25">6.0 HP – 25.0 HP (Industrial & Deep)</option>
                    </select>
                  </div>
                </div>

                {/* Sub-Series Filter Pills */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <ListFilter className="w-3.5 h-3.5 text-red-600" />
                    <span>Filter By Series Lineup ({availableSeries.length} Available):</span>
                  </span>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      onClick={() => setSelectedSeries('all')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        selectedSeries === 'all'
                          ? 'bg-red-600 text-white border-red-600 shadow-xs'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      All Series ({ALL_PUMPS.length})
                    </button>
                    {availableSeries.map((series) => (
                      <button
                        key={series}
                        onClick={() => setSelectedSeries(series)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          selectedSeries === series
                            ? 'bg-red-600 text-white border-red-600 shadow-xs'
                            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {series}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bottom Filter Controls Action Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-slate-500">
                    <strong className="text-slate-900">{filteredPumps.length}</strong> matching models configured
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Reset Filters
                    </button>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-all shadow-md shadow-red-600/20 cursor-pointer"
                    >
                      Apply & Close
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>
        </RevealOnScroll>

        {/* Results Metadata Summary */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Showing <strong className="text-slate-900">{filteredPumps.length}</strong> configured pump models</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">Padvala, Rajkot Factory Quality Standard IS:8034</span>
        </div>

        {/* Product Rendering: Grid vs Table View */}
        {filteredPumps.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPumps.map((pump, idx) => (
                <RevealOnScroll key={pump.id} animation="fade-up" delay={(idx % 6) * 50} className="h-full">
                  <PumpCard pump={pump} />
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            /* High-Performance Industrial Spec Table (Benchmarked after Texmo Aqua & Falcon) */
            <div className="bg-white rounded-3xl border-2 border-slate-300 overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white font-black uppercase text-[11px] tracking-wider border-b-2 border-red-600">
                    <tr>
                      <th className="p-4 pl-6">Model Number</th>
                      <th className="p-4">Power (HP / kW)</th>
                      <th className="p-4">Stages</th>
                      <th className="p-4">Head Range (Meters)</th>
                      <th className="p-4">Discharge (LPM)</th>
                      <th className="p-4">Phase / Outlet</th>
                      <th className="p-4">Ex-Factory Price</th>
                      <th className="p-4 pr-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredPumps.map((pump, idx) => {
                      const displayPrice = pump.price1Phase || pump.price3Phase || pump.price2Phase;
                      return (
                        <tr
                          key={pump.id}
                          className="hover:bg-red-50/40 transition-colors group"
                        >
                          <td className="p-4 pl-6 font-mono font-black text-slate-900">
                            <Link to={`/product/${pump.id}`} className="hover:text-red-600 transition-colors flex items-center gap-1.5">
                              <span>{pump.model}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600" />
                            </Link>
                            <span className="text-[10px] text-slate-500 font-bold block">{pump.series}</span>
                          </td>
                          <td className="p-4 font-mono font-bold text-slate-800">
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 font-mono font-black text-slate-900">
                              {pump.hp} HP
                            </span>
                            <span className="text-slate-400 text-[11px] ml-1">({pump.kw} kW)</span>
                          </td>
                          <td className="p-4 font-mono font-bold text-slate-700">
                            {pump.stages} STG
                          </td>
                          <td className="p-4 font-mono font-bold text-sky-700">
                            {pump.headRange}
                          </td>
                          <td className="p-4 font-mono font-bold text-sky-700">
                            {pump.dischargeRange}
                          </td>
                          <td className="p-4 text-xs font-semibold text-slate-600">
                            <div>{pump.phase}</div>
                            <div className="text-[10px] text-slate-400 font-bold">Outlet: {pump.outlet}</div>
                          </td>
                          <td className="p-4 font-mono font-black text-slate-900">
                            {displayPrice ? `₹${displayPrice.toLocaleString('en-IN')}/-` : 'On Request'}
                          </td>
                          <td className="p-4 pr-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Link
                                to={`/product/${pump.id}`}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-red-600 text-white font-bold text-xs transition-colors"
                              >
                                Specs
                              </Link>
                              <WhatsAppButton
                                message={`Inquiry for SuperFlow model ${pump.model} (${pump.hp} HP).`}
                                label="Inquire"
                                variant="compact"
                                className="py-1.5 px-3 rounded-lg text-xs"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-300 space-y-4">
            <p className="text-slate-700 font-bold text-base">
              No pump models match your current filter selections.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

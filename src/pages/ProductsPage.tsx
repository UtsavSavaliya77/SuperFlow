import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ALL_PUMPS, CATEGORIES } from '../data/pumpsData';
import { PumpCard } from '../components/PumpCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  Search, 
  RotateCcw, 
  ListFilter,
  PackageCheck,
  ChevronRight
} from 'lucide-react';

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

  // Sync state whenever URL searchParams change (e.g. from Applications page clicks)
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

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-20 lg:pb-24">
      
      {/* Full-Bleed Cinematic Hero Header Section */}
      <section className="relative bg-[#080d16] text-white border-b border-slate-800 overflow-hidden w-full">
        {/* Background Image with Solid Dark Overlay */}
        <img
          src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
          alt="SuperFlow Submersible Pumps Precision Engineering"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#080d16]/85 pointer-events-none" />

        {/* Top Accent Line flush with fixed header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 space-y-4 max-w-3xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">Products</span>
          </nav>

          <span className="text-red-400 font-black text-xs uppercase tracking-widest block">
            Royal Manufacture • SuperFlow Product Spectrum
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Our Products
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Explore our complete range of precision-engineered V-3 to V-9 Borewell submersible pumps and Openwell pump sets with full technical specifications.
          </p>
        </div>
      </section>

      {/* Main Content Area: Filters + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Main Filter & Search Bar */}
        <RevealOnScroll animation="fade-up">
          <div className="bg-white p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {/* Search Input */}
              <div className="relative lg:col-span-2">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by model name (e.g. RM-42020, Turbo, V-6)..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSeries('all');
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">All Categories</option>
                  <option value="V-3">V-3 Submersible (3" Bore)</option>
                  <option value="V-4">V-4 Submersible (4" Bore)</option>
                  <option value="V-5">V-5 Mix Flow (5" Bore)</option>
                  <option value="V-6">V-6 Heavy Duty (6" Bore)</option>
                  <option value="Openwell">Horizontal / Openwell</option>
                </select>
              </div>

              {/* Phase Filter */}
              <div>
                <select
                  value={selectedPhase}
                  onChange={(e) => setSelectedPhase(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">All Power Phases</option>
                  <option value="Single Phase">Single Phase (160V-230V)</option>
                  <option value="Three Phase">Three Phase (350V-415V)</option>
                </select>
              </div>

              {/* HP Rating Filter */}
              <div>
                <select
                  value={selectedHp}
                  onChange={(e) => setSelectedHp(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">All Power Ratings</option>
                  <option value="0.5-1.5">0.5 HP - 1.5 HP</option>
                  <option value="2-5">2.0 HP - 5.0 HP</option>
                  <option value="6-25">6.0 HP - 25.0 HP</option>
                </select>
              </div>
            </div>

            {/* Secondary Sub-Series Filter & Sort Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
              
              {/* Mobile View: Select Dropdown for Series */}
              <div className="flex sm:hidden items-center gap-2.5 w-full">
                <span className="text-xs font-bold text-slate-500 shrink-0 flex items-center gap-1">
                  <ListFilter className="w-3.5 h-3.5 text-red-500" /> Series:
                </span>
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">All Series</option>
                  {availableSeries.map((series) => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop & Tablet View: Interactive Pills */}
              <div className="hidden sm:flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
                  <ListFilter className="w-3.5 h-3.5 text-red-500" /> Series:
                </span>
                <button
                  onClick={() => setSelectedSeries('all')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedSeries === 'all'
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Series
                </button>
                {availableSeries.map((series) => (
                  <button
                    key={series}
                    onClick={() => setSelectedSeries(series)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedSeries === series
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {series}
                  </button>
                ))}
              </div>

              {/* Sort & Reset Actions */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                <div className="flex items-center gap-1.5 text-xs flex-1 sm:flex-initial">
                  <span className="text-slate-500 font-bold shrink-0">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 sm:py-1 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="featured">Featured Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="hp-asc">HP: Low to High</option>
                    <option value="hp-desc">HP: High to Low</option>
                  </select>
                </div>

                <button
                  onClick={handleReset}
                  className="p-2 sm:p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer border border-slate-200 sm:border-transparent shrink-0"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Results Count */}
        <RevealOnScroll animation="fade-up">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>Showing {filteredPumps.length} pump models</span>
            <span>Click "Full Specs" for performance curve and MOC</span>
          </div>
        </RevealOnScroll>

        {/* Pumps Grid */}
        {filteredPumps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPumps.map((pump, idx) => (
              <RevealOnScroll key={pump.id} animation="fade-up" delay={(idx % 6) * 60} className="h-full">
                <PumpCard pump={pump} />
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 space-y-4">
            <p className="text-slate-600 font-bold text-base">
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

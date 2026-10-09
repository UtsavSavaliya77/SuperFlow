import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown,
  Wheat, 
  Building2, 
  SunMedium, 
  Factory, 
  Trees, 
  Droplet, 
  CheckCircle2, 
  Phone, 
  Sparkles, 
  Gauge, 
  Activity, 
  Waves, 
  ShieldCheck, 
  Zap, 
  Maximize2,
  Minimize2,
  ArrowUpRight
} from 'lucide-react';

interface SectorDrawer {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  image: string;
  desc: string;
  headRange: string;
  dischargeRange: string;
  boreSize: string;
  voltage: string;
  keyAdvantages: {
    title: string;
    desc: string;
  }[];
  recommendedSeries: {
    name: string;
    type: string;
    link: string;
  }[];
  sectorLink: string;
}

const SECTOR_DRAWERS: SectorDrawer[] = [
  {
    id: 'agriculture',
    num: '01',
    title: 'Agriculture & Farm Irrigation',
    subtitle: 'Deep Borewells, Micro-Drip Networks & High Acreage Lifting',
    badge: '160V Low Voltage Certified',
    icon: Wheat,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
    desc: 'Engineered specifically for Indian agricultural realities. Delivers continuous water discharge even during severe rural voltage drops (down to 160V) with sand-resistant impellers that prevent clogging in deep farm borewells across Gujarat, Rajasthan, and central India.',
    headRange: '30m – 434m (100 - 1400+ Ft)',
    dischargeRange: '60 – 1,625 LPM',
    boreSize: '4" (100mm) & 6" (150mm) Bore',
    voltage: '160V – 240V AC Single & Three Phase',
    keyAdvantages: [
      { title: '160V Low Voltage Resilience', desc: 'Heavy copper stator winding prevents overheating during rural power fluctuations.' },
      { title: 'Sand-Resistant Impellers', desc: 'Glass-filled Noryl and bronze components resist abrasion in sandy borewells.' },
      { title: 'Continuous S1 Duty Cycle', desc: 'Built for 12+ hours uninterrupted daily irrigation across high acreage crops.' }
    ],
    recommendedSeries: [
      { name: 'V-4 Turbo (Low Volt)', type: '4" Low Voltage', link: '/products?category=V-4&series=Turbo%20(Low%20Volt)' },
      { name: 'V-6 Q-Type Mix Flow', type: '6" High Flow', link: '/products?category=V-6&series=Q-Type%20Mix%20Flow' },
      { name: 'V-6 Primium 50 Feet SS', type: '6" Deep Bore', link: '/products?category=V-6&series=Primium%2050%20Feet%20SS' },
      { name: 'V-9 Heavy Openwell', type: 'Canal Openwell', link: '/products?category=Openwell&series=V-9%20Heavy%20Openwell' }
    ],
    sectorLink: '/products?category=V-4'
  },
  {
    id: 'domestic',
    num: '02',
    title: 'Domestic & Multi-Story Buildings',
    subtitle: 'High-Rise Apartments, Residential Societies & Overhead Storage',
    badge: 'Whisper-Quiet Water Lubrication',
    icon: Building2,
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-50',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    desc: 'High-pressure silent hydraulic solutions designed to push drinking water effortlessly to multi-story rooftop tanks with pure food-grade CED internal protection and zero mechanical vibration.',
    headRange: '10m – 120m (30 - 400 Ft)',
    dischargeRange: '20 – 220 LPM',
    boreSize: '3" (75mm) & 4" (100mm) Bore',
    voltage: '180V – 230V AC Single Phase',
    keyAdvantages: [
      { title: 'Whisper-Quiet Water Rotor', desc: '100% water-lubricated motor eliminates noisy bearings and vibration in residential sumps.' },
      { title: 'Food-Grade CED Coating', desc: 'Non-toxic anti-corrosive internal coating ensures safe, rust-free drinking water.' },
      { title: 'Multi-Floor Pressure Staging', desc: 'Multi-stage impellers effortlessly reach 10+ floor rooftop tanks on single-phase power.' }
    ],
    recommendedSeries: [
      { name: 'V-3 High Head', type: '3" Narrow Bore', link: '/products?category=V-3&series=V-3%20High%20Head' },
      { name: 'V-4 Primium Series', type: '4" High Head', link: '/products?category=V-4&series=Primium' },
      { name: 'V-4 Nano Series', type: '4" Compact Flow', link: '/products?category=V-4&series=Nano' },
      { name: 'V-4 Magic Series', type: '4" Booster', link: '/products?category=V-4&series=Magic' }
    ],
    sectorLink: '/products?category=V-4'
  },
  {
    id: 'solar',
    num: '03',
    title: 'Solar Water Pumping Solutions',
    subtitle: 'Off-Grid Farmlands, Solar Arrays & PM-KUSUM Scheme Setups',
    badge: '100% Solar VFD Compatible',
    icon: SunMedium,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    desc: 'High electrical efficiency motors paired with low starting torque dynamics, ensuring early morning startup and sustained high-output water extraction from sunrise to sunset on solar photovoltaic arrays.',
    headRange: '20m – 250m (65 - 820 Ft)',
    dischargeRange: '50 – 500 LPM',
    boreSize: '3", 4" & 6" Borewell',
    voltage: 'Variable AC via Solar VFD Inverter',
    keyAdvantages: [
      { title: 'Low Starting Torque', desc: 'Starts extracting water in early morning low-radiation sunlight without motor stalling.' },
      { title: 'IE3 Efficiency Class', desc: 'High electrical conversion efficiency maximizes peak kilowatt output from solar panels.' },
      { title: 'Zero Power Bills', desc: 'Complete off-grid independence eliminates recurring electricity and diesel expenses.' }
    ],
    recommendedSeries: [
      { name: 'V-3 Solar Series', type: '3" Solar Well', link: '/products?category=V-3' },
      { name: 'V-4 Turbo (Low Volt)', type: '4" Solar High Torque', link: '/products?category=V-4&series=Turbo%20(Low%20Volt)' },
      { name: 'V-4 Primium Series', type: '4" Deep Solar Well', link: '/products?category=V-4&series=Primium' }
    ],
    sectorLink: '/products?category=V-3'
  },
  {
    id: 'industrial',
    num: '04',
    title: 'Industrial Dewatering & Mining',
    subtitle: 'Factory Cooling Towers, Heavy Mine Dewatering & Construction Basements',
    badge: 'SS304 Investment Casting Bowls',
    icon: Factory,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
    desc: 'Heavy-duty stainless steel and cast iron pump sets engineered to handle severe mechanical stress, abrasive particles, and massive continuous discharge volumes under high dynamic pressures up to 434 meters.',
    headRange: '12m – 434m (40 - 1424 Ft)',
    dischargeRange: '150 – 1,625 LPM',
    boreSize: '6" (150mm) Bore & Industrial Sumps',
    voltage: '415V Three Phase 50Hz AC',
    keyAdvantages: [
      { title: 'SS304 Casting Bowls', desc: 'Corrosion-proof stainless steel bowls maintain hydraulic integrity against abrasive industrial slurry.' },
      { title: 'Silicon Carbide Bearings', desc: 'Heavy-duty thrust pads handle extreme axial downthrust in ultra-deep continuous dewatering.' },
      { title: 'SS Water Jacket Cooling', desc: 'Rapid heat dissipation maintains safe winding temperatures in round-the-clock cooling tower duty.' }
    ],
    recommendedSeries: [
      { name: 'V-6 Primium 50 Feet SS', type: '6" Heavy SS Deep', link: '/products?category=V-6&series=Primium%2050%20Feet%20SS' },
      { name: 'V-6 Primium Jacket', type: '6" Jacket Cooled', link: '/products?category=V-6&series=Primium%20Jacket' },
      { name: 'V-6 Q-Type Mix Flow', type: '6" High Discharge', link: '/products?category=V-6&series=Q-Type%20Mix%20Flow' }
    ],
    sectorLink: '/products?category=V-6'
  },
  {
    id: 'gardens',
    num: '05',
    title: 'Parks, Fountains & Public Utilities',
    subtitle: 'Municipal Parks, Decorative Water Fountains & Community Sumps',
    badge: '100% Self-Priming Submerged',
    icon: Trees,
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-50',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
    desc: 'Submerged openwell and vertical pump systems that operate completely underwater, eliminating external priming hassles, suction piping air locks, and above-ground mechanical motor noise in public recreation spaces.',
    headRange: '10m – 54m (30 - 180 Ft)',
    dischargeRange: '20 – 1,500 LPM',
    boreSize: 'Open Sump / Tank / Canal / River',
    voltage: '180V – 415V AC Single & Three Phase',
    keyAdvantages: [
      { title: 'Submerged Self-Priming', desc: 'Completely submerged in sumps, eliminating priming pumps, foot-valves, and air leakages.' },
      { title: 'Silent Underwater Duty', desc: 'Zero mechanical motor noise above ground, ideal for public parks, hotels, and fountain sumps.' },
      { title: 'High Volume Volute', desc: 'Massive water throughput for spectacular high-velocity fountain jets and landscape sprinklers.' }
    ],
    recommendedSeries: [
      { name: 'V-7 Horizontal SS', type: 'Horizontal Openwell', link: '/products?category=Openwell&series=V-7%20Horizontal%20SS' },
      { name: 'V-9 Heavy Openwell', type: 'Heavy Duty Openwell', link: '/products?category=Openwell&series=V-9%20Heavy%20Openwell' },
      { name: 'V-3 High Head', type: 'Vertical Fountain Pump', link: '/products?category=V-3&series=V-3%20High%20Head' },
      { name: 'V-4 Nano Series', type: 'Compact Sump Booster', link: '/products?category=V-4&series=Nano' }
    ],
    sectorLink: '/products?category=Openwell'
  }
];

export const ApplicationsPage: React.FC = () => {
  // Enforce single open drawer at a time (when one opens, previous closes)
  const [activeDrawerId, setActiveDrawerId] = useState<string | null>('agriculture');

  const toggleDrawer = (id: string) => {
    setActiveDrawerId((prev) => {
      const isOpening = prev !== id;
      if (isOpening) {
        // Smoothly anchor the opened drawer in the viewport so it never jumps off-screen
        setTimeout(() => {
          const el = document.getElementById(`sector-drawer-${id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 60);
        return id;
      }
      return null;
    });
  };

  const handlePillClick = (id: string) => {
    setActiveDrawerId(id);
    setTimeout(() => {
      const el = document.getElementById(`sector-drawer-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 60);
  };

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-20 lg:pb-24">
      
      {/* Full-Bleed Cinematic Hero Header Section */}
      <section className="relative bg-[#080d16] text-white border-b border-slate-800 overflow-hidden w-full">
        {/* Background Image with Solid Dark Overlay */}
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
          alt="SuperFlow Submersible Pumps Agricultural & Industrial Applications"
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
            <span className="text-white font-bold">Applications</span>
          </nav>

          <span className="text-red-400 font-black text-xs uppercase tracking-widest block">
            Royal Manufacture • Precision Hydraulic Versatility
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Applications & Sectors
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Explore purpose-engineered submersible pump solutions powering agriculture, multi-story residential buildings, industrial dewatering, solar setups, and public infrastructure across India.
          </p>
        </div>
      </section>

      {/* Main Expandable Accordion Workplace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Accordion Controls Bar */}
        <RevealOnScroll animation="fade-up">
          <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-4 sm:p-5 rounded-[24px] border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5 pl-1">
                <Droplet className="w-4 h-4 text-red-600" />
                5 Industry Sectors
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">|</span>
              <span className="text-xs text-slate-600 font-medium hidden sm:inline">
                Select any sector to inspect full hydraulic specs & pump compatibility
              </span>
            </div>

            {/* Quick Sector Select Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {SECTOR_DRAWERS.map((s) => {
                const isSelected = activeDrawerId === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handlePillClick(s.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {s.num}. {s.title.split('&')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Expandable Accordion Drawers List */}
        <div className="space-y-4">
          {SECTOR_DRAWERS.map((sector, idx) => {
            const IconComponent = sector.icon;
            const isOpen = activeDrawerId === sector.id;

            return (
              <RevealOnScroll key={sector.id} animation="fade-up" delay={idx * 70}>
                <div
                  id={`sector-drawer-${sector.id}`}
                  className={`bg-white rounded-[28px] border transition-all duration-300 overflow-hidden scroll-mt-28 ${
                    isOpen
                      ? 'border-red-500 shadow-xl ring-2 ring-red-500/10'
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {/* Accordion Clickable Header */}
                  <button
                    type="button"
                    onClick={() => toggleDrawer(sector.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none transition-colors hover:bg-slate-50/70"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      
                      {/* Sector Code Number Squircle */}
                      <div className={`w-11 h-11 rounded-2xl shrink-0 flex items-center justify-center font-black text-sm transition-colors ${
                        isOpen
                          ? 'bg-red-600 text-white shadow-md'
                          : `${sector.iconBg} ${sector.iconColor} border border-slate-200/80`
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Sector Title & Tagline */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-black uppercase tracking-wider text-red-600">
                            Sector {sector.num}
                          </span>
                          <span className="text-[11px] font-bold text-slate-400 hidden sm:inline">•</span>
                          <span className="text-[11px] font-bold text-slate-600 hidden sm:inline">
                            {sector.badge}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-xl font-black text-slate-900 tracking-tight leading-snug truncate">
                          {sector.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium truncate pt-0.5 hidden md:block">
                          {sector.subtitle}
                        </p>
                      </div>

                    </div>

                    {/* Right Metrics Snippet & Chevron */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden lg:flex items-center gap-3 text-xs bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200/80">
                        <span className="text-slate-600 font-bold flex items-center gap-1">
                          <Gauge className="w-3.5 h-3.5 text-red-600" /> {sector.headRange.split('(')[0]}
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-slate-600 font-bold flex items-center gap-1">
                          <Activity className="w-3.5 h-3.5 text-emerald-600" /> {sector.dischargeRange}
                        </span>
                      </div>

                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 ${
                        isOpen
                          ? 'bg-red-50 text-red-600 rotate-180'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Drawer Body with Smooth Downward CSS Transition */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 bg-white">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
                          
                          {/* Left Side: Photo Showcase & Parameter Envelope (5 cols) */}
                          <div className="lg:col-span-5 space-y-4">
                            <div className="h-56 sm:h-64 rounded-2xl overflow-hidden relative border border-slate-200 shadow-sm group bg-[#080d16]">
                              <img
                                src={sector.image}
                                alt={sector.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                              />
                              <div className="absolute inset-0 bg-[#080d16]/40"></div>
                              
                              <div className="absolute top-3 left-3">
                                <span className="px-3 py-1 rounded-md bg-[#080d16]/90 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider border border-white/20">
                                  {sector.badge}
                                </span>
                              </div>
                            </div>

                            {/* Technical Parameters Matrix Box */}
                            <div className="p-4 bg-[#080d16] text-white rounded-2xl border border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3">
                              <div className="space-y-0.5">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block flex items-center gap-1">
                                  <Gauge className="w-3 h-3 text-red-400" /> Head Range
                                </span>
                                <span className="text-xs font-black text-white truncate block">{sector.headRange.split('(')[0]}</span>
                              </div>

                              <div className="space-y-0.5 border-l border-slate-800 pl-3">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block flex items-center gap-1">
                                  <Activity className="w-3 h-3 text-emerald-400" /> Max Flow
                                </span>
                                <span className="text-xs font-black text-white truncate block">{sector.dischargeRange}</span>
                              </div>

                              <div className="space-y-0.5 border-l border-slate-800 pl-3 col-span-2 sm:col-span-1">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block flex items-center gap-1">
                                  <Waves className="w-3 h-3 text-sky-400" /> Bore Size
                                </span>
                                <span className="text-xs font-black text-white truncate block">{sector.boreSize.split('&')[0]}</span>
                              </div>
                            </div>
                          </div>

                          {/* Right Side: Narrative, Engineering Strengths & Series (7 cols) */}
                          <div className="lg:col-span-7 space-y-6">
                            
                            {/* Narrative */}
                            <div className="space-y-2">
                              <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block">
                                Application Engineering Profile
                              </span>
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                {sector.desc}
                              </p>
                            </div>

                            {/* 3 Key Engineering Advantages */}
                            <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                              <span className="text-[11px] font-black uppercase tracking-wider text-slate-900 block flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-red-600" />
                                SuperFlow Hydraulic Engineering Strengths:
                              </span>
                              <div className="space-y-2">
                                {sector.keyAdvantages.map((adv, aIdx) => (
                                  <div key={aIdx} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <div className="text-xs">
                                      <strong className="text-slate-900 font-bold">{adv.title}: </strong>
                                      <span className="text-slate-600 font-normal">{adv.desc}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Compatible Pump Series Chips */}
                            <div className="space-y-2">
                              <span className="text-[11px] font-black uppercase tracking-wider text-slate-900 block">
                                Recommended SuperFlow Pump Series:
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {sector.recommendedSeries.map((series, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    to={series.link}
                                    className="p-3 bg-white hover:bg-red-50/50 hover:border-red-300 rounded-xl border border-slate-200 transition-all flex items-center justify-between gap-2 group/chip shadow-2xs"
                                  >
                                    <div>
                                      <h5 className="text-xs font-black text-slate-900 group-hover/chip:text-red-600 transition-colors">
                                        {series.name}
                                      </h5>
                                      <span className="text-[10px] text-slate-500 font-medium block">
                                        {series.type}
                                      </span>
                                    </div>
                                    <div className="w-6 h-6 rounded-lg bg-slate-100 group-hover/chip:bg-red-600 group-hover/chip:text-white flex items-center justify-center shrink-0 transition-colors">
                                      <ArrowUpRight className="w-3.5 h-3.5" />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons Row */}
                            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                              <Link
                                to={sector.sectorLink}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#080d16] hover:bg-red-600 text-white font-bold text-xs rounded-xl transition-colors shadow-md"
                              >
                                <span>Browse Sector Models</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>

                              <WhatsAppButton
                                text="Request Sector Quote"
                                message={`Hello SuperFlow Pumps, I am interested in pumps for ${sector.title}. Please provide models and pricing.`}
                                className="text-xs py-2.5 px-4"
                              />
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom Engineering Consultation CTA */}
        <RevealOnScroll animation="scale-up">
          <div className="bg-[#080d16] rounded-[32px] p-8 sm:p-12 border border-slate-800 text-white relative overflow-hidden shadow-2xl mt-8">
            {/* Animated Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
              <div className="animate-beam-slide bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Narrative & 4 Technical Feature Pills (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
              
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    Need Exact Hydraulic Sizing for Your Site?
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal max-w-xl">
                    Our factory engineers in Padvala, Rajkot calculate exact dynamic head loss, optimal LPM discharge requirements, voltage drop, and solar VFD compatibility tailored to your bore depth.
                  </p>
                </div>
              </div>

              {/* Right Action Box (5 cols) */}
              <div className="lg:col-span-5 bg-slate-900/90 p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-400 block">Factory Technical Desk</span>
                    <span className="text-xs font-bold text-white">Padvala, Rajkot, Gujarat</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full py-3.5 px-5 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact Engineering Desk</span>
                  </Link>

                  <WhatsAppButton
                    text="Direct WhatsApp Sizing"
                    message="Hello SuperFlow Pumps, I need hydraulic sizing assistance for my borewell / project."
                    className="w-full text-xs py-3.5 px-5"
                  />
                </div>

                <p className="text-[11px] text-slate-400 text-center font-medium">
                  Direct factory technical support • No middleman markups
                </p>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

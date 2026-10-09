import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CATEGORIES, 
  ALL_PUMPS, 
  COMPANY_INFO, 
  APPLICATIONS_DATA 
} from '../data/pumpsData';
import { PumpModel } from '../types/pump';
import { PumpCard } from '../components/PumpCard';
import { PumpDetailModal } from '../components/PumpDetailModal';
import { WhatsAppButton } from '../components/WhatsAppButton';
import AccordionGallery from '../components/AccordionGallery';
import BorderGlow from '../components/BorderGlow';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ShieldCheck, 
  Award, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Gauge, 
  Factory,
  PackageCheck,
  Send,
  Leaf,
  Droplet,
  ArrowUpCircle,
  Sparkles,
  ChevronRight,
  Phone,
  Check
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedPump, setSelectedPump] = useState<PumpModel | null>(null);
  const [activeTechTab, setActiveTechTab] = useState(0);

  // Top 3–6 running models for reference
  const topRunningPumps = [
    ALL_PUMPS.find((p) => p.model === 'RM3-20510') || ALL_PUMPS[0],
    ALL_PUMPS.find((p) => p.category === 'V-4' && p.hp === 3) || ALL_PUMPS[4],
    ALL_PUMPS.find((p) => p.category === 'V-6' && p.hp >= 7.5) || ALL_PUMPS[8],
    ALL_PUMPS.find((p) => p.model === 'RM3-207515') || ALL_PUMPS[1],
    ALL_PUMPS.find((p) => p.category === 'V-4' && p.hp === 5) || ALL_PUMPS[6],
    ALL_PUMPS.find((p) => p.category === 'Openwell') || ALL_PUMPS[3],
  ].filter(Boolean) as PumpModel[];

  const sectorsData = [
    {
      id: 'agri',
      title: 'Agriculture & Farm Irrigation',
      shortLabel: 'Agriculture & Farms',
      tagline: 'Deep borewell irrigation for drip, sprinkler & flood crops',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
      tag: '160V Low Voltage Duty',
      accentColor: 'text-emerald-400',
      accentBg: 'bg-emerald-500/10',
      accentBorder: 'border-emerald-500/30',
      activeBtnStyle: 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 border-emerald-500',
      desc: 'Engineered to withstand rural voltage drops down to 160V. Delivers massive flow discharge for cotton, groundnut, sugarcane, and multi-acre farm networks without motor burnout.',
      stats: [
        { label: 'Max Head Range', value: '434 Meters' },
        { label: 'Flow Discharge', value: '1,625 LPM' },
        { label: 'Voltage Band', value: '160V – 240V' }
      ],
      recommendedSeries: ['V-4 Turbo Low Volt', 'V-5 Mix Flow', 'V-6 Heavy Duty', 'V-9 Openwell'],
      link: '/products?category=V-4'
    },
    {
      id: 'domestic',
      title: 'Domestic & Multi-Story Buildings',
      shortLabel: 'High-Rise & Residential',
      tagline: 'High head pressure delivery for apartments and sumps',
      icon: Droplet,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      tag: 'High Head Pressure',
      accentColor: 'text-sky-400',
      accentBg: 'bg-sky-500/10',
      accentBorder: 'border-sky-500/30',
      activeBtnStyle: 'bg-sky-600 text-white shadow-lg shadow-sky-600/20 border-sky-500',
      desc: 'Slim 3" and 4" borewell pumps designed for silent operation in residential colonies, high-rise apartment overhead tanks, and underground sump pressure boosting.',
      stats: [
        { label: 'Booster Pressure', value: '25+ Bar' },
        { label: 'Borewell Size', value: '3" & 4" Slim' },
        { label: 'Acoustic Level', value: '< 45 dB Silent' }
      ],
      recommendedSeries: ['V-3 Slim High Head', 'V-4 Primium SS', 'V-4 Nano Series', 'Horizontal Openwell'],
      link: '/products?category=V-3'
    },
    {
      id: 'solar',
      title: 'Solar Powered Pumping Systems',
      shortLabel: 'Solar Clean Energy',
      tagline: 'VFD inverter drives for daytime irrigation with zero electricity bills',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      tag: 'Zero Grid Power',
      accentColor: 'text-amber-400',
      accentBg: 'bg-amber-500/10',
      accentBorder: 'border-amber-500/30',
      activeBtnStyle: 'bg-amber-600 text-white shadow-lg shadow-amber-600/20 border-amber-500',
      desc: 'High electrical efficiency motors optimized for solar variable frequency drives (VFD). Operates smoothly from early morning low-radiation until evening twilight.',
      stats: [
        { label: 'Drive Type', value: '100% VFD Ready' },
        { label: 'Starting Surge', value: 'Soft Inrush' },
        { label: 'Motor Class', value: 'Premium IE3' }
      ],
      recommendedSeries: ['V-3 Solar Series', 'V-4 Turbo Solar', 'V-7 Solar Openwell'],
      link: '/products?category=V-4'
    },
    {
      id: 'industrial',
      title: 'Industrial & Mine Dewatering',
      shortLabel: 'Heavy Industry & Mining',
      tagline: 'Rugged stainless steel construction for abrasive slurry and cooling plants',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      tag: 'Heavy Duty 24/7',
      accentColor: 'text-red-400',
      accentBg: 'bg-red-500/10',
      accentBorder: 'border-red-500/30',
      activeBtnStyle: 'bg-red-600 text-white shadow-lg shadow-red-600/20 border-red-500',
      desc: 'Built with SS304 investment castings, CED coated cast iron, and silicon carbide bearings to handle sand, abrasive solids, factory cooling water, and construction site sumps.',
      stats: [
        { label: 'Power Range', value: 'Up to 25 HP' },
        { label: 'Bowl MOC', value: 'SS304 Casting' },
        { label: 'Duty Cycle', value: '24/7 Continuous' }
      ],
      recommendedSeries: ['V-6 Primium SS', 'V-6 Dilux Mix Flow', 'V-9 Heavy Openwell'],
      link: '/products?category=V-6'
    }
  ];

  const techFeatures = [
    {
      id: 'voltage',
      icon: Zap,
      tabLabel: '160V Wide Voltage',
      tag: 'Wide Voltage Tech',
      accentColor: 'text-red-600',
      accentBg: 'bg-red-50',
      accentBorder: 'border-red-200',
      activeTabStyle: 'bg-red-600 text-white shadow-md shadow-red-600/20',
      title: 'Continuous High-Discharge Pumping at 160V Low Voltage',
      description: 'Engineered with 99.9% pure electrolytic dual-coated copper wire and specialized CRGO low-loss electrical steel laminations. Eliminates motor burnout during heavy agricultural voltage dips.',
      badges: ['99.9% Pure EC Copper', '160V – 240V Operating Band', 'Class "F" / "H" Insulation', 'Zero Overheating'],
      liveStatus: 'Voltage Defense: 160V Stable Operation'
    },
    {
      id: 'cnc',
      icon: Cpu,
      tabLabel: 'CNC Precision',
      tag: 'Micron Precision',
      accentColor: 'text-sky-600',
      accentBg: 'bg-sky-50',
      accentBorder: 'border-sky-200',
      activeTabStyle: 'bg-sky-600 text-white shadow-md shadow-sky-600/20',
      title: 'Precision-Turned Stainless Steel Shafts & Balanced Rotors',
      description: 'Every rotor and SS-410 shaft undergoes multi-axis CNC lathe turning and computerized dynamic balancing, eliminating radial vibration for whisper-silent 50,000+ hour operational lifespan.',
      badges: ['< 0.02mm Runout Tolerance', '50,000+ Hrs Operational Life', 'SS 410 / 304 Grade', 'Vibration-Free Running'],
      liveStatus: 'Dynamic Balancing: Zero Radial Vibration'
    },
    {
      id: 'ced',
      icon: ShieldCheck,
      tabLabel: 'Anti-Rust CED Shield',
      tag: 'Corrosion Defense',
      accentColor: 'text-emerald-600',
      accentBg: 'bg-emerald-50',
      accentBorder: 'border-emerald-200',
      activeTabStyle: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20',
      title: 'Cathodic Electrodeposition & Sand-Resistant Bushings',
      description: 'Uniform electrodeposition coating coats all cast iron surfaces inside and outside, shielding against abrasive sand wear, aggressive borewell salinity, and heavy scale formation.',
      badges: ['Multi-Layer CED Coating', 'Sand-Resistant NBR Bushings', 'Saline & Acid Resistant', 'Anti-Scale Surface'],
      liveStatus: 'Corrosion Protection: 100% Rust & Sand Proof'
    },
    {
      id: 'testing',
      icon: Factory,
      tabLabel: '100% Hydro Testing',
      tag: 'Zero-Defect Quality',
      accentColor: 'text-amber-600',
      accentBg: 'bg-amber-50',
      accentBorder: 'border-amber-200',
      activeTabStyle: 'bg-amber-600 text-white shadow-md shadow-amber-600/20',
      title: 'Every Single Pump Set 100% Submerged & Computer Tested',
      description: 'Before dispatch from our Padvala, Rajkot plant, every single pump set is submerged in automated testing tanks to verify real-time LPM discharge, total head height, and dielectric insulation.',
      badges: ['IS 8034 / IS 14220 BIS ISI', 'ISO 9001:2008 Certified', 'Computerized Flow & Head Bench', 'Zero Dispatch Defects'],
      liveStatus: 'Hydrostatic Bench: 100% Submerged Performance Pass'
    }
  ];

  // Featured pump range card items with 4 distinct series
  const featuredRangeCards = [
    {
      id: 'V-4',
      title: 'V-4 Submersible Pumps',
      categoryTag: '4" Borewell Series',
      image: '/images/2.jpg',
      link: '/products?category=V-4',
      modelCount: '120+ Configurations'
    },
    {
      id: 'V-6',
      title: 'V-6 Heavy Duty Pumps',
      categoryTag: '6" Industrial & Farm',
      image: '/images/1.jpg',
      link: '/products?category=V-6',
      modelCount: '80+ Configurations'
    },
    {
      id: 'V-3',
      title: 'V-3 Slim Borewell Series',
      categoryTag: '3" Domestic & Garden',
      image: '/images/1.jpg',
      link: '/products?category=V-3',
      modelCount: '16+ Configurations'
    },
    {
      id: 'Openwell',
      title: 'Openwell Submersibles',
      categoryTag: 'Sump & River Pumping',
      image: '/images/3.jpg',
      link: '/products?category=Openwell',
      modelCount: '30+ Configurations'
    },
  ];

  // Curated featured pumps across multiple series for the continuous marquee ticker
  const marqueePumps = [
    ALL_PUMPS.find((p) => p.model === 'RM3-20510') || ALL_PUMPS[0],
    ALL_PUMPS.find((p) => p.model === 'RM3-207515') || ALL_PUMPS[1],
    ALL_PUMPS.find((p) => p.model === 'RM3-2120') || ALL_PUMPS[2],
    ALL_PUMPS.find((p) => p.category === 'V-4' && p.hp === 3) || ALL_PUMPS[5],
    ALL_PUMPS.find((p) => p.category === 'V-4' && p.hp === 5) || ALL_PUMPS[7],
    ALL_PUMPS.find((p) => p.category === 'V-6' && p.hp >= 7.5) || ALL_PUMPS[10],
    ALL_PUMPS.find((p) => p.category === 'Openwell') || ALL_PUMPS[4],
  ].filter(Boolean) as PumpModel[];

  return (
    <div className="space-y-16 sm:space-y-20 overflow-x-hidden w-full max-w-full">
      {/* Clean Immersive Video Hero Section */}
      <section className="relative overflow-hidden w-full min-h-[520px] sm:min-h-[580px] flex items-center justify-center text-white border-b border-slate-800">
        {/* Background Video Layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none filter brightness-70"
        >
          <source
            src="/videos/Seasonal_Layering_clean.mp4"
            type="video/mp4"
          />
        </video>

        {/* Clean Neutral Dark Backdrop Overlay */}
        <div className="absolute inset-0 bg-slate-950/60 z-10" />

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-14 sm:py-18 space-y-5">
         
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-sm">
            High-Performance Submersible Pumps <span className="text-red-500">
              For Continuous Water Flow
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Borewell submersibles, mix flow hydraulics, and openwell pump sets manufactured by <strong className="text-white font-bold">Royal Manufacture</strong> in Rajkot, Gujarat. Built for deep head pumping, low-voltage tolerance, and 25+ years of trusted engineering.
          </p>

          {/* Exactly Two Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              <PackageCheck className="w-4 h-4" />
              <span>Explore Products Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <WhatsAppButton text="Inquire on WhatsApp" className="py-3 px-5 text-xs sm:text-sm rounded-xl" />
          </div>
        </div>
      </section>

      {/* Unique Card Design Section (Styled precisely after the uploaded reference) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-600 text-[11px] font-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Core Product Spectrum</span>
                </div>
              {/* <Sparkles className="w-3.5 h-3.5" />
              <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-1">
                Core Product Spectrum
              </span> */}
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Featured Pump Ranges
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>View All Series in Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Interactive Responsive Grid with BorderGlow Mesh Lighting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRangeCards.map((card, idx) => (
            <RevealOnScroll key={card.id} animation="fade-up" delay={idx * 100} className="h-full">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="0 85 55"
                backgroundColor="#ffffff"
                borderRadius={32}
                glowRadius={35}
                glowIntensity={1.2}
                coneSpread={28}
                colors={['#ef4444', '#dc2626', '#b91c1c']}
                className="h-full"
              >
                <div className="flex flex-col justify-between h-full group relative overflow-hidden">
                  {/* Upper Visual with Soft Fade-to-White */}
                  <div className="relative h-60 overflow-hidden bg-slate-950">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Soft Bottom-to-Top White Gradient Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/35 to-black/30" />
                  </div>

                  {/* Lower Content */}
                  <div className="p-6 pt-0 md:pt-4 -mt-8 relative z-20 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-red-600 tracking-wider">
                          {card.categoryTag}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          {card.modelCount}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors leading-tight">
                        {card.title}
                      </h3>
                    </div>

                    {/* Dual Pill Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                      <Link
                        to={card.link}
                        className="px-4 py-2.5 w-full bg-slate-950 hover:bg-red-600 text-white font-bold text-xs rounded-full shadow-sm transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-1.5 text-center"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to="/contact"
                        className="px-4 py-2.5 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-bold text-xs rounded-full shadow-2xs transition-colors w-full text-center"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Engineering Excellence - Unique Interactive Tech Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-up">
          <div className="bg-white rounded-[32px] border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
            
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-600 text-[11px] font-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SuperFlow Engineering DNA</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Precision Quality Benchmarks
                </h2>
              </div>

              {/* Certifications Badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-600">
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ISO 9001:2008
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" /> BIS ISI IS:8034 / IS:14220
                </span>
              </div>
            </div>

            {/* Interactive Tab Switcher Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-6">
              {techFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                const isActive = activeTechTab === idx;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveTechTab(idx)}
                    className={`px-4 py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-300 text-left cursor-pointer border ${
                      isActive
                        ? feat.activeTabStyle + ' border-transparent'
                        : 'bg-slate-50 hover:bg-slate-100/80 text-slate-700 border-slate-200/70 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-white/20 text-white' : feat.accentBg + ' ' + feat.accentColor
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="truncate">{feat.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Showcase Box */}
            {(() => {
              const current = techFeatures[activeTechTab];
              const Icon = current.icon;
              return (
                <div className="bg-[#080d16] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden border border-slate-800 shadow-inner">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                    
                    {/* Left Column (Details & Spec Badges) */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest text-red-400">
                          {current.tag}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-xs text-slate-400">Manufactured in Rajkot</span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                        {current.title}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                        {current.description}
                      </p>

                      {/* Spec Chips */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {current.badges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-white font-medium text-xs flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (Live Status Indicator Card) */}
                    <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl p-4.5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 uppercase font-bold text-[10px] tracking-wider">
                          Live Standard
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Verified
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-white flex items-start gap-2 pt-1">
                        <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-red-400" />
                        </div>
                        <span className="leading-snug">{current.liveStatus}</span>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                        <Link
                          to="/quality"
                          className="text-xs font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1 transition-colors"
                        >
                          <span>View ISO Testing Lab</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })()}

          </div>
        </RevealOnScroll>
      </section>

      {/* Featured Pumps Showcase - Clean Crisp White Technical Product Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[36px] border border-slate-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.06)] space-y-8 relative overflow-hidden">
          
          {/* Header Bar */}
          <RevealOnScroll animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-600 text-[11px] font-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Certified SuperFlow Lineup • Rajkot Facility</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Featured Submersible Pump Sets
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-normal mt-1">
                  Heavy-duty deep borewell & openwell pump sets engineered for continuous agricultural, industrial, and high-rise delivery.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-4 py-2 rounded-full transition-colors border border-red-100/80 shrink-0"
              >
                <span>View All 150+ Models</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>

          {/* 4 Crisp White Technical Spec Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'V-4',
                title: 'V-4 Borewell Series',
                subtitle: 'India\'s Most Trusted 4" Series',
                tag: '4" Borewell',
                models: '120+ Models',
                image: '/images/2.jpg',
                power: '0.50 – 7.5 HP',
                head: '10 – 388 Meters',
                flow: '455 – 10 LPM',
                voltage: '160V – 240V Low Volt',
                link: '/products?category=V-4',
                feature: '160V Turbo Low Voltage Tech'
              },
              {
                id: 'V-6',
                title: 'V-6 Heavy Duty Series',
                subtitle: '6" Industrial & Farm Powerhouse',
                tag: '6" Heavy Duty',
                models: '80+ Models',
                image: '/images/1.jpg',
                power: '3.0 – 25.0 HP',
                head: '12 – 434 Meters',
                flow: '1,625 – 60 LPM',
                voltage: 'Three Phase 415V',
                link: '/products?category=V-6',
                feature: 'SS304 Investment Castings'
              },
              {
                id: 'V-3',
                title: 'V-3 Slim High Head',
                subtitle: 'Slim 3" Domestic Solution',
                tag: '3" Narrow Bore',
                models: '16+ Models',
                image: '/images/1.jpg',
                power: '0.50 – 1.5 HP',
                head: '10 – 100 Meters',
                flow: '110 – 15 LPM',
                voltage: 'Single Phase 230V',
                link: '/products?category=V-3',
                feature: 'Sand-Resistant Glass Noryl'
              },
              {
                id: 'Openwell',
                title: 'Openwell Submersibles',
                subtitle: '100% Self-Priming Sump Sets',
                tag: 'Open Sump & Canal',
                models: '40+ Models',
                image: '/images/3.jpg',
                power: '0.50 – 10.0 HP',
                head: '10 – 54 Meters',
                flow: '1,500 – 20 LPM',
                voltage: 'Single & Three Phase',
                link: '/products?category=Openwell',
                feature: 'Zero Suction Loss Design'
              }
            ].map((series, sIdx) => (
              <RevealOnScroll key={series.id} animation="fade-up" delay={sIdx * 90} className="h-full">
                <div
                  className="bg-white rounded-3xl border-2 border-slate-200/80 hover:border-red-600 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(220,38,38,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
                >
                  {/* Top Product Visual Area */}
                  <div className="relative h-48 bg-slate-950 overflow-hidden flex items-center justify-center">
                    <img
                      src={series.image}
                      alt={series.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-600 text-white shadow-md">
                        {series.tag}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-900 shadow-sm backdrop-blur-md border border-slate-200">
                        {series.models}
                      </span>
                    </div>
                  </div>

                  {/* Card Body: Title & Detailed Spec Table */}
                  <div className="p-5 space-y-4">
                    {/* Title & Tagline */}
                    <div className="space-y-0.5">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight font-mono">
                        {series.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium line-clamp-1">
                        {series.subtitle}
                      </p>
                    </div>

                    {/* Detailed Technical Spec Table */}
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Power Rating</span>
                        <span className="font-black text-slate-900">{series.power}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Operating Head</span>
                        <span className="font-black text-slate-900 font-mono">{series.head}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Flow Discharge</span>
                        <span className="font-black text-slate-900 font-mono">{series.flow}</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Voltage Duty</span>
                        <span className="font-bold text-red-600">{series.voltage}</span>
                      </div>
                    </div>

                    {/* Key Materials / Checkpoint */}
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 pt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{series.feature}</span>
                    </div>
                  </div>

                  {/* Card Footer: Action Button */}
                  <div className="p-5 pt-0">
                    <Link
                      to={series.link}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#080d16] hover:bg-red-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm group/btn"
                    >
                      <span>Explore {series.models}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* Applications Showcase - React Bits <AccordionGallery /> Interactive Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[36px] border border-slate-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.06)] space-y-8 relative overflow-hidden">
          
          {/* Header Bar */}
          <RevealOnScroll animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-600 text-[11px] font-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Versatile Pumping Solutions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Serving Diverse Sectors & Environments
                </h2>
              </div>

              <Link
                to="/applications"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-4 py-2 rounded-full transition-colors border border-red-100/80 shrink-0"
              >
                <span>View All Applications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>

          {/* DESKTOP VIEW: React Bits <AccordionGallery /> (Preserved strictly as-is) */}
          <div className="hidden lg:block w-full">
            <RevealOnScroll animation="fade-up" delay={100}>
              <AccordionGallery
                items={sectorsData.map((sec) => ({
                  image: sec.image,
                  label: sec.title,
                  shortLabel: sec.shortLabel,
                  tag: sec.tag,
                  tagline: sec.tagline,
                  desc: sec.desc,
                  stats: sec.stats,
                  recommendedSeries: sec.recommendedSeries,
                  link: sec.link,
                  icon: sec.icon,
                  alt: sec.title
                }))}
                defaultIndex={0}
                height={530}
                gap={14}
                radius={28}
                expandRatio={0.60}
                accentColor="#dc2626"
                overlayColor="#080d16"
                textColor="#ffffff"
                trigger="hover"
                parallax={0.4}
                tilt={5}
                grayscale={false}
              />
            </RevealOnScroll>
          </div>

          {/* MOBILE & TABLET VIEW: Direct Standalone Sector Cards (No accordion expanding) */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {sectorsData.map((sec, idx) => {
                const IconComponent = sec.icon;

                return (
                  <RevealOnScroll key={sec.id} animation="fade-up" delay={idx * 80}>
                    <div
                      className="bg-[#080d16] rounded-[28px] overflow-hidden border border-slate-800 shadow-xl relative min-h-[460px] flex flex-col justify-between p-6 sm:p-7 text-white group"
                    >
                      {/* Background Image Layer */}
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="absolute inset-0 w-full h-full object-cover z-0 brightness-70 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30 z-10" />

                      {/* Top Floating Badges */}
                      <div className="relative z-20 flex items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080d16]/90 border border-white/20 backdrop-blur-md shadow-sm">
                          <IconComponent className="w-3.5 h-3.5 text-red-400" />
                          <span className="text-[10px] font-black uppercase tracking-wider text-white">
                            {sec.tag}
                          </span>
                        </div>

                        <span className="text-[10px] font-bold text-slate-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                          Sector 0{idx + 1}
                        </span>
                      </div>

                      {/* Bottom Content Area */}
                      <div className="relative z-20 space-y-4 pt-10">
                        {/* Red Accent Stripe & Main Title */}
                        <div className="space-y-1">
                          <div className="w-8 h-1 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                            {sec.title}
                          </h3>
                          {sec.tagline && (
                            <p className="text-xs text-slate-300 font-medium line-clamp-1">
                              {sec.tagline}
                            </p>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                          {sec.desc}
                        </p>

                        {/* 3-Column Performance Stats Matrix */}
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          {sec.stats.map((st, sIdx) => (
                            <div
                              key={sIdx}
                              className="bg-slate-950/80 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-center"
                            >
                              <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider truncate">
                                {st.label}
                              </span>
                              <span className="text-xs font-black text-white mt-0.5 block truncate">
                                {st.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Recommended Series & Action Row */}
                        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
                          <div className="flex flex-wrap gap-1">
                            {sec.recommendedSeries.slice(0, 2).map((s, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-md text-white text-[10px] font-bold border border-white/10"
                              >
                                {s}
                              </span>
                            ))}
                          </div>

                          <Link
                            to={sec.link}
                            className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 shadow-md transition-colors w-full sm:w-auto ml-auto"
                          >
                            <span>Explore Series</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                      </div>

                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Dealership Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <RevealOnScroll animation="scale-up">
          <div className="bg-[#080d16] rounded-[36px] p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Column: Heading, Subtitle & 3 Micro-Stats */}
            <div className="space-y-5 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Dealership & Bulk Supply</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Join India's Fastest Growing Submersible Pump Dealer Network
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Manufactured at Padvala, Rajkot with 100% in-house CNC machining, dual-coated copper winding, and certified BIS ISI benchmarks.
              </p>

              {/* 3 Sleek Micro-Stat Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>25+ Years Experience</span>
                </span>

                <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold flex items-center gap-2">
                  <Factory className="w-3.5 h-3.5 text-red-400" />
                  <span>Direct Factory Pricing</span>
                </span>

                <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  <span>48-Hour Fast Dispatch</span>
                </span>
              </div>
            </div>

            {/* Right Column: Dual Action Pills + Plant Hotline */}
            <div className="flex flex-col items-center sm:items-end gap-3.5 shrink-0 relative z-10 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-black rounded-full transition-all hover:scale-105 shadow-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Dealership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton 
                  text="Direct WhatsApp Inquiry" 
                  className="w-full sm:w-auto py-3.5 px-6 text-xs sm:text-sm rounded-full shadow-lg" 
                />
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold pt-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Plant Sales Desk: <strong className="text-white">{COMPANY_INFO.phone}</strong></span>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </section>

      {/* Detail Modal */}
      <PumpDetailModal pump={selectedPump} onClose={() => setSelectedPump(null)} />
    </div>
  );
};

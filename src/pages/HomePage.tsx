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
import { PumpSelector } from '../components/PumpSelector';
import AccordionGallery from '../components/AccordionGallery';
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
  ChevronRight,
  Phone,
  Check,
  SlidersHorizontal,
  Flame,
  Globe,
  Settings,
  ArrowUpRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedPump, setSelectedPump] = useState<PumpModel | null>(null);

  const divisionData: Record<string, {
    id: string;
    title: string;
    subtitle: string;
    boreSize: string;
    powerRange: string;
    headMax: string;
    flowMax: string;
    modelCount: string;
    image: string;
    description: string;
    seriesList: string[];
    highlights: string[];
    link: string;
    badge: string;
  }> = {
    'V-4': {
      id: 'V-4',
      title: '4" V-4 Submersible Borewell Pumps',
      subtitle: 'Flagship deep well extraction for multi-acre farm irrigation, solar arrays, and high-flow networks.',
      boreSize: '4" (100mm) Borewell',
      powerRange: '0.5 HP – 7.5 HP (0.37 kW – 5.5 kW)',
      headMax: 'Up to 350 Meters (1,150 Ft)',
      flowMax: 'Up to 520 LPM High Flow',
      modelCount: '120+ Configurations',
      image: '/images/2.jpg',
      description: 'Our flagship 4" series available in Primium, Nano, Magic, and Turbo (Low-Voltage 160V) configurations. Built with 100% EC grade pure copper and sand-resistant Noryl impellers to eliminate motor burnout during rural power dips.',
      seriesList: ['Turbo (Low Volt 160V)', 'Primium SS-304', 'Nano Series', 'Magic Booster', 'Primium Q-Type CI'],
      highlights: ['160V Turbo Low-Voltage Protection', 'Sand-Resistant Glass-Filled Noryl', 'Class F & H Synthetic Insulation', 'Single (220V) & Three Phase (415V)'],
      link: '/products?category=V-4',
      badge: '4" Borewell Flagship'
    },
    'V-6': {
      id: 'V-6',
      title: '6" V-6 Heavy Duty Borewell Pumps',
      subtitle: 'Industrial and high-acreage agricultural high-discharge powerhouse for extreme borewell depths.',
      boreSize: '6" (150mm) Borewell',
      powerRange: '3.0 HP – 25.0 HP (2.2 kW – 18.5 kW)',
      headMax: 'Up to 434 Meters (1,420+ Ft)',
      flowMax: 'Up to 1,625 LPM Discharge',
      modelCount: '80+ Configurations',
      image: '/images/1.jpg',
      description: 'Built with SS-304 investment casting bowls, precision CNC ground SS-410 shafts, premium Silicon Carbide bearings, and heavy-duty radial/mix flow impellers for extreme borewell depths and high-volume agricultural pumping.',
      seriesList: ['Primium 50 Feet SS', 'Q-Type Mix Flow', 'Dilux Radial & Mix', 'Primium Jacket SS'],
      highlights: ['SS-304 Investment Castings', 'Silicon Carbide Sand-Proof Bearings', '1,625 Peak LPM High Discharge', '24/7 Continuous S1 Industrial Duty'],
      link: '/products?category=V-6',
      badge: '6" High Discharge'
    },
    'V-3': {
      id: 'V-3',
      title: '3" V-3 Slim Borewell Series',
      subtitle: 'Ultra-compact high-head multi-stage staging engineered for narrow 3" domestic casing wells.',
      boreSize: '3" (75mm) Borewell',
      powerRange: '0.5 HP – 2.0 HP (0.37 kW – 1.5 kW)',
      headMax: 'Up to 120 Meters (400 Ft)',
      flowMax: 'Up to 140 LPM Pressure Flow',
      modelCount: '16+ Configurations',
      image: '/images/1.jpg',
      description: 'Engineered for narrow 3" casing borewells and multi-story residential buildings. Offers whisper-silent water-lubricated operation with multi-stage impellers capable of pushing drinking water to 10+ floor rooftop tanks.',
      seriesList: ['V-3 High Head', 'V-3 Slim Solar', 'V-3 Multi-Stage Booster'],
      highlights: ['Ultra-Slim 75mm Outer Diameter', 'Whisper-Quiet < 45 dB Operation', 'Food-Grade CED Internal Rust Shield', 'High-Efficiency Single-Phase AC'],
      link: '/products?category=V-3',
      badge: '3" Slim Domestic'
    },
    'Openwell': {
      id: 'Openwell',
      title: 'Horizontal & Vertical Openwell Sets',
      subtitle: '100% submerged underwater sets for open agricultural wells, sumps, and river canal pumping.',
      boreSize: 'Open Sump / Canal / Tank',
      powerRange: '0.5 HP – 10.0 HP (0.37 kW – 7.5 kW)',
      headMax: 'Up to 54 Meters (180 Ft)',
      flowMax: 'Up to 1,500 LPM Bulk Flow',
      modelCount: '40+ Configurations',
      image: '/images/3.jpg',
      description: 'Operates completely submerged underwater inside sumps, open agricultural wells, and river canals. Completely eliminates suction piping, foot-valve maintenance, and priming failures with heavy CED anti-corrosion protection.',
      seriesList: ['Horizontal Openwell', 'V-7 Horizontal SS/CI', 'V-9 Heavy Openwell', 'Vertical Openwell'],
      highlights: ['100% Submerged Self-Priming', 'Zero Suction Lift Loss', 'Multi-Layer Anti-Rust CED Coat', 'Canal & Flood Irrigation Staging'],
      link: '/products?category=Openwell',
      badge: 'Sump & Canal Series'
    }
  };

  // Top running models for the curated showcase
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
      tagline: 'Deep borewell irrigation for drip, sprinkler & high acreage crops',
      icon: Leaf,
      image: '/images/Unleashing the Power of Water Pumps_ How They Work and Their Applications.jpg',
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
      image: '/images/Booster Pump Stations in High-Rise Buildings_ Why Proper Design Matters.jpg',
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
      image: '/images/SOLAR WATER PUMP.jpg',
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
      image: '/images/Mining dewatering pumps _ Power Rental - Book Now.jpg',
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
      title: '4" V-4 Submersible Pumps',
      categoryTag: '4" Borewell Flagship',
      specs: '0.5 HP – 7.5 HP • Head up to 350m',
      desc: 'High-velocity flow engineered for farm borewells, sprinkler & drip networks with 160V low-voltage winding.',
      tagStyle: 'text-emerald-700 bg-emerald-50 border border-emerald-200/80',
      image: '/images/2.jpg',
      link: '/products?category=V-4',
      modelCount: '120+ Configurations'
    },
    {
      id: 'V-6',
      title: '6" V-6 Heavy Duty Pumps',
      categoryTag: '6" High Discharge',
      specs: '3.0 HP – 25.0 HP • Flow up to 1,625 LPM',
      desc: 'Heavy-duty radial & mix flow impellers for deep irrigation, high-volume community water and industrial supply.',
      tagStyle: 'text-red-700 bg-red-50 border border-red-200/80',
      image: '/images/1.jpg',
      link: '/products?category=V-6',
      modelCount: '80+ Configurations'
    },
    {
      id: 'V-3',
      title: '3" V-3 Slim Borewell Series',
      categoryTag: '3" Slim Domestic',
      specs: '0.5 HP – 2.0 HP • High Head Staging',
      desc: 'Ultra-compact design engineered for 3" narrow borewells, multi-story apartments and silent overhead delivery.',
      tagStyle: 'text-sky-700 bg-sky-50 border border-sky-200/80',
      image: '/images/1.jpg',
      link: '/products?category=V-3',
      modelCount: '16+ Configurations'
    },
    {
      id: 'Openwell',
      title: 'Openwell Submersible Sets',
      categoryTag: 'Sump & Canal Series',
      specs: '0.5 HP – 10.0 HP • 100% Submerged',
      desc: 'No priming required, water-lubricated motor for agricultural open wells, canal extraction and underground tanks.',
      tagStyle: 'text-amber-700 bg-amber-50 border border-amber-200/80',
      image: '/images/3.jpg',
      link: '/products?category=Openwell',
      modelCount: '30+ Configurations'
    },
  ];

  // Curated featured pumps across multiple series for marquee ticker
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
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-24 overflow-x-hidden w-full max-w-full">
      
      {/* 1. Cinematic Hero Command Center */}
      <section className="relative overflow-hidden w-full min-h-[580px] sm:min-h-[640px] flex items-center justify-center text-white border-b-2 border-red-600 bg-[#080d16]">
        {/* Background Video Layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none filter brightness-65"
        >
          <source
            src="/videos/Seasonal_Layering_clean.mp4"
            type="video/mp4"
          />
        </video>

        {/* Clean Neutral Dark Backdrop Overlay */}
        <div className="absolute inset-0 bg-[#080d16]/75 z-10" />

        {/* Main Hero Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-16 sm:py-20 space-y-6">
          
          {/* Main Hero Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-sm font-sans">
            Engineered For Maximum Flow, <br className="hidden sm:inline" />
            <span className="text-red-500">
              Built For Extreme Duty
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            High-discharge submersible borewell pumps and openwell pump sets engineered with 100% EC pure copper, CNC dynamic balancing, and 160V low-voltage endurance.
          </p>


          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-sm rounded-2xl shadow-xl shadow-red-600/30 transition-all hover:scale-105 cursor-pointer"
            >
              <PackageCheck className="w-4 h-4" />
              <span>Explore 150+ Model Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <WhatsAppButton 
              text="Instant Factory Quote" 
              className="py-3.5 px-6 text-sm rounded-2xl" 
            />
          </div>
        </div>
      </section>

      {/* 2. 4-Stat Metric Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-30">
        <RevealOnScroll animation="fade-up">
          <div className="bg-white rounded-3xl border-2 border-slate-300 shadow-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="flex items-center gap-4 pt-2 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border-2 border-red-200 flex items-center justify-center shrink-0">
                <PackageCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 block font-mono">150+</span>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">Pump Models</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border-2 border-sky-200 flex items-center justify-center shrink-0">
                <Droplet className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 block font-mono">1,625 LPM</span>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">Peak Water Flow</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border-2 border-emerald-200 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 block font-mono">100% Tested</span>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">Hydro Submerged</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border-2 border-amber-200 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 block font-mono">25+ Years</span>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">Rajkot Foundry Hub</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3. Interactive Technical Pump Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-up">
          <PumpSelector
            title="Technical Pump Selector & Model Finder"
            subtitle="Filter by borewell diameter, required head depth, and flow discharge to find the optimal pump configuration."
          />
        </RevealOnScroll>
      </section>

      {/* 4. Product Divisions & Borewell Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-slate-200 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-1">
                Product Spectrum
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Product Divisions & Categories
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                Precision-engineered submersible pumps categorized by casing diameter, depth capability, and flow volume.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>Explore Complete Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* 2x2 Spacious Industrial Bento Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {Object.values(divisionData).map((div, idx) => (
            <RevealOnScroll key={div.id} animation="fade-up" delay={idx * 100}>
              <div className="bg-white rounded-3xl border-2 border-slate-300 hover:border-red-600 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col justify-between h-full">
                
                <div className="grid grid-cols-1 sm:grid-cols-12 items-stretch h-full">
                  {/* Left Column: Clean Product Pedestal Frame */}
                  <div className="sm:col-span-5 bg-slate-100 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-200 p-5 sm:p-6 flex flex-col justify-between items-center relative">
                    <div className="w-full flex items-center justify-between gap-2 z-10">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white px-2.5 py-1 rounded-lg">
                        {div.boreSize.split(' ')[0]} {div.boreSize.split(' ')[1] || ''}
                      </span>
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full font-mono">
                        {div.modelCount}
                      </span>
                    </div>

                    <div className="my-4 relative flex items-center justify-center min-h-[190px] w-full">
                      <img
                        src={div.image}
                        alt={div.title}
                        className="max-h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Bottom Fact Strip */}
                    <div className="w-full bg-white rounded-xl p-2.5 border border-slate-200 shadow-sm flex items-center justify-around text-center">
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 block">Max Head</span>
                        <span className="text-xs font-black text-slate-900 font-mono block">{div.headMax.split(' ')[2]}m</span>
                      </div>
                      <div className="h-5 w-[1px] bg-slate-200" />
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 block">Peak Flow</span>
                        <span className="text-xs font-black text-emerald-600 font-mono block">{div.flowMax.split(' ')[2]} LPM</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Specification & Action Deck */}
                  <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                          {div.badge}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">
                        {div.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {div.subtitle}
                      </p>

                      {/* 4 Micro-Metric Capsules */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-[9px] uppercase font-bold text-slate-400 block">Power Range</span>
                          <span className="text-xs font-black text-slate-900 font-mono block mt-0.5">
                            {div.powerRange.split(' ')[0]} – {div.powerRange.split(' ')[3]} HP
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          <span className="text-[9px] uppercase font-bold text-sky-600 block">Supply Phase</span>
                          <span className="text-xs font-black text-sky-700 font-mono block mt-0.5">
                            1-Ph / 3-Ph
                          </span>
                        </div>
                      </div>

                      {/* Series Chips */}
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Popular Configurations:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {div.seriesList.map((ser, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold text-[10px] border border-slate-200"
                            >
                              {ser}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <Link
                        to={div.link}
                        className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-red-600/20 text-center transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-1.5"
                      >
                        <PackageCheck className="w-4 h-4" />
                        <span>Explore Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <WhatsAppButton
                        text="Price Quote"
                        message={`Hello SuperFlow, I am interested in getting quotation and specifications for ${div.title}. Please send series catalog and price list.`}
                        className="py-3 px-4 text-xs sm:text-sm rounded-xl"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 6. Precision Quality & Engineering Benchmarks - 4-Pillar Industrial Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-slate-200 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-1">
                Engineering Integrity
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Manufacturing & Testing Standards
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                Engineered in Padvala, Rajkot with 100% in-house precision machining and submerged load testing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ISO 9001:2008
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> BIS IS:8034 / IS:14220
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* 4-Card Industrial Engineering Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <RevealOnScroll key={feat.id} animation="fade-up" delay={idx * 80} className="h-full">
                <div className="h-full bg-white rounded-3xl border-2 border-slate-300 hover:border-red-600 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group">
                  <div className="space-y-4">
                    {/* Header Row with Icon and Watermark Index */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${feat.accentBg} border-2 ${feat.accentBorder} flex items-center justify-center ${feat.accentColor} group-hover:bg-slate-900 group-hover:text-white transition-colors`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-slate-200 font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${feat.accentBg} ${feat.accentColor} border ${feat.accentBorder}`}>
                        {feat.tag}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight mt-2 group-hover:text-red-600 transition-colors">
                        {feat.tabLabel}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {feat.description}
                    </p>

                    {/* Bullet Checkmarks */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {feat.badges.slice(0, 3).map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Live Protocol Indicator */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Verified Standard
                    </span>
                    <Link to="/quality" className="text-red-600 hover:text-red-700 text-xs font-bold">
                      Inspect →
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom QA Strip */}
        <RevealOnScroll animation="fade-up">
          <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-2 border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-300">
                Every SuperFlow pump set is dynamically balanced and submerged load tested before dispatch from our Padvala facility.
              </p>
            </div>

            <Link
              to="/quality"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shrink-0"
            >
              <span>Explore Testing Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* 7. Sector Applications Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-slate-200 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-1">
                Applications
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Pumping Solutions by Industry & Sector
              </h2>
            </div>

            <Link
              to="/applications"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl transition-colors border border-red-200 shrink-0 self-start sm:self-auto"
            >
              <span>View All Applications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Desktop View: Accordion Gallery */}
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

        {/* Mobile & Tablet View: Standalone Sector Cards */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectorsData.map((sec, idx) => {
              const IconComponent = sec.icon;
              return (
                <RevealOnScroll key={sec.id} animation="fade-up" delay={idx * 80}>
                  <div className="bg-[#080d16] rounded-3xl overflow-hidden border-2 border-slate-800 shadow-xl relative min-h-[460px] flex flex-col justify-between p-6 text-white group">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="absolute inset-0 w-full h-full object-cover z-0 brightness-75 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#080d16]/85 z-10" />

                    <div className="relative z-20 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/20">
                        <IconComponent className="w-3.5 h-3.5 text-red-400" />
                        <span className="text-[10px] font-black uppercase tracking-wider text-white">
                          {sec.tag}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                        Sector 0{idx + 1}
                      </span>
                    </div>

                    <div className="relative z-20 space-y-4 pt-10">
                      <div className="space-y-1">
                        <h3 className="text-xl font-black text-white tracking-tight leading-snug">
                          {sec.title}
                        </h3>
                        <p className="text-xs text-slate-300 font-medium">
                          {sec.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {sec.desc}
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {sec.stats.map((st, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-slate-950/80 rounded-xl p-2.5 border border-white/10 text-center"
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

                      <div className="pt-2 flex items-center justify-between border-t border-white/10">
                        <Link
                          to={sec.link}
                          className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 shadow-md transition-colors w-full"
                        >
                          <span>Explore Sector Pumps</span>
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
      </section>

      {/* 8. Dealership & Factory Direct Acquisition Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <RevealOnScroll animation="scale-up">
          <div className="bg-[#080d16] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden border-2 border-red-600 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-5 max-w-2xl relative z-10">
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Partner with Royal Manufacture: India's Rapidly Growing Pump Network
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Direct factory pricing from Padvala, Rajkot with 100% in-house CNC turning, pure copper windings, and certified BIS ISI benchmarks.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>25+ Years Experience</span>
                </span>

                <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold flex items-center gap-2">
                  <Factory className="w-3.5 h-3.5 text-red-400" />
                  <span>Direct Factory Margins</span>
                </span>

                <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  <span>48-Hour Quick Dispatch</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-4 shrink-0 relative z-10 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-black rounded-2xl transition-all hover:scale-105 shadow-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Dealership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton 
                  text="Direct WhatsApp Desk" 
                  className="w-full sm:w-auto py-3.5 px-6 text-xs sm:text-sm rounded-2xl shadow-lg" 
                />
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold pt-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Plant Sales Desk: <strong className="text-white font-mono">{COMPANY_INFO.phone}</strong></span>
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

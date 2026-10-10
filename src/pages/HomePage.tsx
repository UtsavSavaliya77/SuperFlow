import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ALL_PUMPS, 
  COMPANY_INFO 
} from '../data/pumpsData';
import { PumpModel } from '../types/pump';
import { PumpDetailModal } from '../components/PumpDetailModal';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PumpSelector } from '../components/PumpSelector';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ShieldCheck, 
  Medal as Award, 
  Cpu, 
  Lightning as Zap, 
  ArrowRight, 
  CheckCircle as CheckCircle2, 
  Factory,
  Package as PackageCheck,
  Plant as Leaf,
  Drop as Droplet,
  CaretRight as ChevronRight,
  Phone
} from '@phosphor-icons/react';

export const HomePage: React.FC = () => {
  const [selectedPump, setSelectedPump] = useState<PumpModel | null>(null);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);

  // Scroll listener for smooth Hero fade out / fade in
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(1, Math.max(0, scrollY / 420));
      setHeroScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const sectorsData = [
    {
      id: 'agri',
      title: 'Agriculture & Farm Irrigation',
      shortLabel: 'Agriculture & Farms',
      tagline: 'Deep borewell irrigation for drip, sprinkler & high acreage crops',
      icon: Leaf,
      image: '/images/Unleashing the Power of Water Pumps_ How They Work and Their Applications.jpg',
      tag: '160V Low Voltage Duty',
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
      tagline: 'High head pressure delivery for apartments, societies and sumps',
      icon: Droplet,
      image: '/images/Booster Pump Stations in High-Rise Buildings_ Why Proper Design Matters.jpg',
      tag: 'High Head Pressure',
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
      title: 'Continuous High-Discharge Pumping at 160V Low Voltage',
      description: 'Engineered with 99.9% pure electrolytic dual-coated copper wire and specialized CRGO low-loss electrical steel laminations. Eliminates motor burnout during heavy agricultural voltage dips.',
      badges: ['99.9% Pure EC Copper', '160V – 240V Operating Band', 'Class "F" / "H" Insulation', 'Zero Overheating']
    },
    {
      id: 'cnc',
      icon: Cpu,
      tabLabel: 'CNC Precision',
      tag: 'Micron Precision',
      title: 'Precision-Turned Stainless Steel Shafts & Balanced Rotors',
      description: 'Every rotor and SS-410 shaft undergoes multi-axis CNC lathe turning and computerized dynamic balancing, eliminating radial vibration for whisper-silent 50,000+ hour operational lifespan.',
      badges: ['< 0.02mm Runout Tolerance', '50,000+ Hrs Operational Life', 'SS 410 / 304 Grade', 'Vibration-Free Running']
    },
    {
      id: 'ced',
      icon: ShieldCheck,
      tabLabel: 'Anti-Rust CED Shield',
      tag: 'Corrosion Defense',
      title: 'Cathodic Electrodeposition & Sand-Resistant Bushings',
      description: 'Uniform electrodeposition coating coats all cast iron surfaces inside and outside, shielding against abrasive sand wear, aggressive borewell salinity, and heavy scale formation.',
      badges: ['Multi-Layer CED Coating', 'Sand-Resistant NBR Bushings', 'Saline & Acid Resistant', 'Anti-Scale Surface']
    },
    {
      id: 'testing',
      icon: Factory,
      tabLabel: '100% Hydro Testing',
      tag: 'Zero-Defect Quality',
      title: 'Every Single Pump Set 100% Submerged & Computer Tested',
      description: 'Before dispatch from our Padvala, Rajkot plant, every single pump set is submerged in automated testing tanks to verify real-time LPM discharge, total head height, and dielectric insulation.',
      badges: ['IS 8034 / IS 14220 BIS ISI', 'ISO 9001:2008 Certified', 'Computerized Flow & Head Bench', 'Zero Dispatch Defects']
    }
  ];

  const currentSector = sectorsData[activeSectorIndex];

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-24 overflow-x-hidden w-full max-w-full">
      
      {/* 1. Fullscreen Cinematic Hero Section */}
      <section className="relative overflow-hidden w-full min-h-[100dvh] flex flex-col justify-center text-white border-b border-red-600 bg-[#080d16]">
        {/* Background Video Layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none filter brightness-70 scale-105"
        >
          <source
            src="/videos/Seasonal_Layering_clean.mp4"
            type="video/mp4"
          />
        </video>

        {/* Clean Neutral Dark Backdrop & Left Vignette Overlay */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#080d16]/75 to-[#080d16]/90 md:bg-gradient-to-r md:from-[#080d16]/65 md:via-[#080d16]/50 md:to-transparent z-10" />

        {/* Main Hero Content - Left Aligned with Guaranteed Safe Header Padding & Scroll Fade */}
        <div 
          style={{
            opacity: Math.max(0, 1 - heroScrollProgress * 1.25),
            transform: `translate3d(0, -${heroScrollProgress * 30}px, 0)`,
            willChange: 'opacity, transform'
          }}
          className="mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48 pb-20 sm:pb-24 lg:pb-28 text-left flex flex-col justify-center transition-all duration-75"
        >
          <div className="max-w-3xl space-y-5 sm:space-y-6">

            {/* Main Hero Heading with Staggered Text Reveal */}
            <h1 className="animate-text-reveal animation-delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.08] text-white font-sans text-left">
              Engineered For Maximum Flow, <br className="hidden sm:inline" />
              <span className="text-red-500 block sm:inline">
                Built For Extreme Duty
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="animate-text-reveal animation-delay-200 text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed text-left">
              High-discharge submersible borewell pumps and openwell pump sets engineered in Rajkot with 100% EC grade pure copper, precision CNC dynamic balancing, and 160V low-voltage endurance.
            </p>

            {/* Action CTAs */}
            <div className="animate-text-reveal animation-delay-350 pt-2 flex flex-col sm:flex-row sm:items-center justify-start gap-3 sm:gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-[3px] transition-colors cursor-pointer text-center"
              >
                <PackageCheck className="w-4 h-4 shrink-0" />
                <span>Explore 150+ Model Catalog</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>

              <WhatsAppButton 
                text="Instant Factory Quote" 
                className="py-3.5 px-6 text-xs sm:text-sm rounded-[3px] justify-center" 
              />
            </div>

            {/* Bottom Quick Feature Strip */}
            <div className="animate-text-reveal animation-delay-500 pt-2 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-[3px] border border-white/15">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>160V Wide Voltage Tolerance</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-[3px] border border-white/15">
                <Droplet className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>1,625 Peak LPM Flow</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-[3px] border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Hydro Submerged Tested</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 4-Stat Metric Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 01 */}
          <RevealOnScroll animation="fade-up" delay={0} once={false} duration={700} className="h-full">
            <div className="h-full bg-white rounded-[3px] p-6 border border-slate-300 hover:border-slate-400 transition-colors flex flex-col justify-between space-y-6 group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400">
                  /01
                </span>
                <div className="w-10 h-10 rounded-[3px] bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shrink-0">
                  <PackageCheck className="w-5 h-5 text-red-600" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight font-sans">
                    150
                  </span>
                  <span className="text-red-600 text-2xl sm:text-3xl font-bold font-mono">
                    +
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">
                  Pump models in catalog
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 02 */}
          <RevealOnScroll animation="fade-up" delay={80} once={false} duration={700} className="h-full">
            <div className="h-full bg-white rounded-[3px] p-6 border border-slate-300 hover:border-slate-400 transition-colors flex flex-col justify-between space-y-6 group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400">
                  /02
                </span>
                <div className="w-10 h-10 rounded-[3px] bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shrink-0">
                  <Droplet className="w-5 h-5 text-sky-600" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight font-sans">
                    1,625
                  </span>
                  <span className="text-sky-600 text-xs sm:text-sm font-mono font-bold uppercase">
                    LPM
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">
                  Peak discharge water flow
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 03 */}
          <RevealOnScroll animation="fade-up" delay={160} once={false} duration={700} className="h-full">
            <div className="h-full bg-white rounded-[3px] p-6 border border-slate-300 hover:border-slate-400 transition-colors flex flex-col justify-between space-y-6 group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400">
                  /03
                </span>
                <div className="w-10 h-10 rounded-[3px] bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight font-sans">
                    100
                  </span>
                  <span className="text-emerald-600 text-xs sm:text-sm font-mono font-bold uppercase">
                    %
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">
                  Hydro submerged bench tested
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 04 */}
          <RevealOnScroll animation="fade-up" delay={240} once={false} duration={700} className="h-full">
            <div className="h-full bg-white rounded-[3px] p-6 border border-slate-300 hover:border-slate-400 transition-colors flex flex-col justify-between space-y-6 group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400">
                  /04
                </span>
                <div className="w-10 h-10 rounded-[3px] bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shrink-0">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight font-sans">
                    25
                  </span>
                  <span className="text-amber-600 text-xs sm:text-sm font-mono font-bold uppercase">
                    YRS
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">
                  Engineering & foundry heritage
                </p>
              </div>
            </div>
          </RevealOnScroll>

        </div>
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Product Spectrum
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
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

        {/* 2x2 Industrial Bento Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.values(divisionData).map((div, idx) => (
            <RevealOnScroll key={div.id} animation="fade-up" delay={idx * 80}>
              <div className="bg-white rounded-[3px] border border-slate-300 hover:border-slate-400 transition-colors overflow-hidden group flex flex-col justify-between h-full">
                
                <div className="grid grid-cols-1 sm:grid-cols-12 items-stretch h-full">
                  {/* Left Column: Product Pedestal Frame */}
                  <div className="sm:col-span-5 bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200 p-5 flex flex-col justify-between items-center relative">
                    <div className="w-full flex items-center justify-between gap-2 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 rounded-[3px]">
                        {div.boreSize.split(' ')[0]} {div.boreSize.split(' ')[1] || ''}
                      </span>
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-[3px] font-mono">
                        {div.modelCount}
                      </span>
                    </div>

                    <div className="my-4 relative flex items-center justify-center min-h-[160px] w-full">
                      <img
                        src={div.image}
                        alt={div.title}
                        className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Bottom Fact Strip */}
                    <div className="w-full bg-white rounded-[3px] p-2 border border-slate-200 flex items-center justify-around text-center">
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 block">Max Head</span>
                        <span className="text-xs font-bold text-slate-900 font-mono block">{div.headMax.split(' ')[2]}m</span>
                      </div>
                      <div className="h-4 w-px bg-slate-200" />
                      <div>
                        <span className="text-[9px] uppercase font-bold text-slate-400 block">Peak Flow</span>
                        <span className="text-xs font-bold text-emerald-600 font-mono block">{div.flowMax.split(' ')[2]} LPM</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Specification & Action Deck */}
                  <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-[3px]">
                          {div.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">
                        {div.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {div.subtitle}
                      </p>

                      {/* Micro-Metric Box */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="p-2.5 rounded-[3px] bg-slate-50 border border-slate-200">
                          <span className="text-[9px] uppercase font-bold text-slate-400 block">Power Range</span>
                          <span className="text-xs font-bold text-slate-900 font-mono block mt-0.5">
                            {div.powerRange.split(' ')[0]} – {div.powerRange.split(' ')[3]} HP
                          </span>
                        </div>
                        <div className="p-2.5 rounded-[3px] bg-slate-50 border border-slate-200">
                          <span className="text-[9px] uppercase font-bold text-sky-600 block">Supply Phase</span>
                          <span className="text-xs font-bold text-sky-700 font-mono block mt-0.5">
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
                              className="px-2 py-0.5 rounded-[3px] bg-slate-100 text-slate-700 font-semibold text-[10px] border border-slate-200"
                            >
                              {ser}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                      <Link
                        to={div.link}
                        className="py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-[3px] text-center transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Explore Series</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <WhatsAppButton
                        text="Price Quote"
                        message={`Hello SuperFlow, I am interested in getting quotation and specifications for ${div.title}. Please send series catalog and price list.`}
                        className="py-2.5 px-3 text-xs rounded-[3px] justify-center"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. Precision Quality & Engineering Benchmarks - 4-Pillar Industrial Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Engineering Integrity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Manufacturing & Testing Standards
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                Engineered in Padvala, Rajkot with 100% in-house precision machining and submerged load testing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 rounded-[3px]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ISO 9001:2008
              </span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 rounded-[3px]">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> BIS IS:8034 / IS:14220
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* 4-Card Industrial Engineering Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {techFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <RevealOnScroll key={feat.id} animation="fade-up" delay={idx * 80} className="h-full">
                <div className="h-full bg-white rounded-[3px] border border-slate-300 hover:border-slate-400 p-5 transition-colors flex flex-col justify-between space-y-4 group">
                  <div className="space-y-3">
                    {/* Header Row with Icon and Watermark Index */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-[3px] bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-200">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="text-2xl font-bold text-slate-300 font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-[3px] border border-red-200">
                        {feat.tag}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight mt-2">
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
                        <div key={bIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
          <div className="bg-[#080d16] rounded-[3px] p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[3px] bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-300">
                Every SuperFlow pump set is dynamically balanced and submerged load tested before dispatch from our Padvala facility.
              </p>
            </div>

            <Link
              to="/quality"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[3px] bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shrink-0"
            >
              <span>Explore Testing Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* 6. Sector Applications Interactive Showcase (Replaced sloppy accordion with clean industrial tabs matrix) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Applications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Pumping Solutions by Industry & Sector
              </h2>
            </div>

            <Link
              to="/applications"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors shrink-0"
            >
              <span>View All Applications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Sector Tabs Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {sectorsData.map((sec, idx) => {
            const Icon = sec.icon;
            const isActive = idx === activeSectorIndex;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveSectorIndex(idx)}
                className={`p-3.5 rounded-[3px] border text-left transition-colors flex items-center gap-3 cursor-pointer ${
                  isActive 
                    ? 'bg-[#0c192c] text-white border-[#0c192c]' 
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-[3px] flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`text-[10px] font-mono block ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold truncate block">
                    {sec.shortLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase Card */}
        <div className="bg-white rounded-[3px] border border-slate-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Image & Overlay Specs */}
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[420px] bg-slate-950 overflow-hidden group">
              <img
                src={currentSector.image}
                alt={currentSector.title}
                className="w-full h-full object-cover brightness-90 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-[3px] bg-[#0c192c]/90 text-white font-bold text-xs uppercase tracking-wider border border-white/10">
                  {currentSector.tag}
                </span>
              </div>

              {/* Bottom Metrics on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-[3px] p-3 border border-white/10 text-white">
                <div className="grid grid-cols-3 divide-x divide-white/15 text-center">
                  {currentSector.stats.map((st, sIdx) => (
                    <div key={sIdx} className="px-2">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider truncate">
                        {st.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block truncate">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Information Deck */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 block">
                    Sector Specification 0{activeSectorIndex + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {currentSector.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">
                    {currentSector.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {currentSector.desc}
                </p>

                {/* Recommended Series */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Recommended Series For This Sector:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSector.recommendedSeries.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-[3px] bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to={currentSector.link}
                  className="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-[3px] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Matching Pumps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <WhatsAppButton
                  text="Inquire for Sector"
                  message={`Hello SuperFlow, I would like to inquire about submersible pump solutions for ${currentSector.title}.`}
                  className="w-full sm:w-auto !py-2.5 !px-5 text-xs rounded-[3px] justify-center"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. Dealership & Factory Direct Acquisition Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <RevealOnScroll animation="fade-up">
          <div className="bg-[#080d16] rounded-[3px] p-6 sm:p-10 lg:p-12 text-white border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Partner with Royal Manufacture: India's Rapidly Growing Pump Network
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Direct factory pricing from Padvala, Rajkot with 100% in-house CNC turning, pure copper windings, and certified BIS ISI benchmarks.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-[3px] bg-slate-900 border border-slate-700 text-white text-xs font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>25+ Years Experience</span>
                </span>

                <span className="px-3 py-1 rounded-[3px] bg-slate-900 border border-slate-700 text-white text-xs font-semibold flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-red-400" />
                  <span>Direct Factory Margins</span>
                </span>

                <span className="px-3 py-1 rounded-[3px] bg-slate-900 border border-slate-700 text-white text-xs font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  <span>48-Hour Quick Dispatch</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-3 shrink-0 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-[3px] transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Dealership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton 
                  text="Direct WhatsApp Desk" 
                  className="w-full sm:w-auto !py-3 !px-5 text-xs sm:text-sm rounded-[3px]" 
                />
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium pt-1">
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

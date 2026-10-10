import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ArrowRight, 
  ChevronRight, 
  Wheat, 
  Building2, 
  SunMedium, 
  Factory, 
  Droplet, 
  CheckCircle2, 
  Phone, 
  Gauge, 
  Activity, 
  ShieldCheck, 
  Zap, 
  ArrowUpRight,
  SlidersHorizontal
} from 'lucide-react';

interface SectorItem {
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

const SECTORS_LIST: SectorItem[] = [
  {
    id: 'agriculture',
    num: '01',
    title: 'Agriculture & Farm Irrigation',
    subtitle: 'Deep Borewells, Micro-Drip Networks & High Acreage Lifting',
    badge: '160V Low Voltage Certified',
    icon: Wheat,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    image: '/images/Unleashing the Power of Water Pumps_ How They Work and Their Applications.jpg',
    desc: 'Engineered specifically for Indian agricultural field conditions. Delivers continuous water discharge even during severe rural voltage drops (down to 160V) with sand-resistant impellers that prevent clogging in deep farm borewells across Gujarat, Rajasthan, and central India.',
    headRange: '30m – 434m (100 – 1400+ Ft)',
    dischargeRange: '60 – 1,625 LPM',
    boreSize: '4" (100mm) & 6" (150mm) Bore',
    voltage: '160V – 240V AC Single & Three Phase',
    keyAdvantages: [
      { title: '160V Low Voltage Resilience', desc: 'Heavy copper stator winding prevents overheating during rural power dips.' },
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
    subtitle: 'High-Rise Apartments, Residential Societies & Overhead Tanks',
    badge: 'Whisper-Quiet Water Lubrication',
    icon: Building2,
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-50',
    image: '/images/Booster Pump Stations in High-Rise Buildings_ Why Proper Design Matters.jpg',
    desc: 'High-pressure silent hydraulic solutions designed to push drinking water effortlessly to multi-story rooftop tanks with pure food-grade CED internal protection and zero mechanical vibration.',
    headRange: '10m – 120m (30 – 400 Ft)',
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
    sectorLink: '/products?category=V-3'
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
    image: '/images/SOLAR WATER PUMP.jpg',
    desc: 'High electrical efficiency motors paired with low starting torque dynamics, ensuring early morning startup and sustained high-output water extraction from sunrise to sunset on solar photovoltaic arrays.',
    headRange: '20m – 250m (65 – 820 Ft)',
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
    sectorLink: '/products?category=V-4'
  },
  {
    id: 'industrial',
    num: '04',
    title: 'Industrial & Mine Dewatering',
    subtitle: 'Factory Cooling Plants, Construction Sumps & Quarry Slurry',
    badge: 'SS-304 Investment Castings',
    icon: Factory,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    image: '/images/Mining dewatering pumps _ Power Rental - Book Now.jpg',
    desc: 'Built with SS304 investment castings, CED coated cast iron bowls, and silicon carbide bearings to handle sand, abrasive solids, factory cooling circulation, and construction site sumps.',
    headRange: '15m – 350m (50 – 1150 Ft)',
    dischargeRange: '100 – 1,625 LPM',
    boreSize: '6" (150mm) & Openwell',
    voltage: '380V – 440V AC Three Phase',
    keyAdvantages: [
      { title: 'Corrosion-Resistant Castings', desc: 'SS304 and high-grade cast iron bowls withstand acidic and chemical liquids.' },
      { title: 'Continuous 24/7 Duty', desc: 'S1 continuous rating designed for demanding industrial utility cooling plants.' },
      { title: 'Abrasive Solid Passage', desc: 'Semi-open and mix-flow impellers allow sand passage without seizing.' }
    ],
    recommendedSeries: [
      { name: 'V-6 Primium SS', type: '6" SS Grade', link: '/products?category=V-6&series=Primium%2050%20Feet%20SS' },
      { name: 'V-6 Dilux Mix Flow', type: '6" High Volume', link: '/products?category=V-6&series=Dilux%20Mix%20Flow' },
      { name: 'V-9 Heavy Openwell', type: 'Industrial Openwell', link: '/products?category=Openwell&series=V-9%20Heavy%20Openwell' }
    ],
    sectorLink: '/products?category=V-6'
  }
];

export const ApplicationsPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-24">
      
      {/* 1. Full-Bleed Cinematic Hero Header */}
      <section className="relative bg-[#080d16] text-white border-b-2 border-red-600 overflow-hidden w-full">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=80"
          alt="SuperFlow Applications"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#080d16]/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 space-y-4 max-w-4xl">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">Applications</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans">
            Water Solutions Across Key Sectors
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            From deep rural farm borewells operating under low voltages to high-rise multi-story sumps, solar VFD drives, and heavy industrial cooling plants.
          </p>
        </div>
      </section>

      {/* 2. Sectoral Breakdown Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SECTORS_LIST.map((sector, idx) => {
          const Icon = sector.icon;
          const isEven = idx % 2 === 0;

          return (
            <RevealOnScroll key={sector.id} animation="fade-up">
              <div className="bg-white rounded-3xl border-2 border-slate-300 hover:border-red-600 transition-all duration-300 shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Visual Side */}
                  <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-950 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover brightness-85"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-white font-black text-xs uppercase tracking-wider border border-slate-700">
                        Sector {sector.num}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white">
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="border-r border-white/10 pr-2">
                          <span className="text-[10px] uppercase font-bold text-sky-400 block">Head Range</span>
                          <span className="text-xs font-black font-mono mt-0.5 block truncate">{sector.headRange}</span>
                        </div>
                        <div className="pl-2">
                          <span className="text-[10px] uppercase font-bold text-emerald-400 block">Max Flow</span>
                          <span className="text-xs font-black font-mono mt-0.5 block truncate">{sector.dischargeRange}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {sector.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-red-600">
                        {sector.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {sector.desc}
                    </p>

                    {/* Key Engineering Advantages */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                        Key Engineering Advantages:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {sector.keyAdvantages.map((adv, aIdx) => (
                          <div key={aIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                            <span className="text-xs font-bold text-slate-900 block">{adv.title}</span>
                            <span className="text-[11px] text-slate-500 block leading-tight">{adv.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Pump Models & Action */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {sector.recommendedSeries.map((ser, sIdx) => (
                          <Link
                            key={sIdx}
                            to={ser.link}
                            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
                          >
                            {ser.name}
                          </Link>
                        ))}
                      </div>

                      <Link
                        to={sector.sectorLink}
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-xs font-black transition-colors shrink-0"
                      >
                        <span>View Matching Models</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </section>

      {/* 3. Bottom Consultation Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="scale-up">
          <div className="bg-[#080d16] rounded-3xl p-8 sm:p-12 text-white border-2 border-red-600 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-red-400 block">
                Technical Pump Sizing
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Need Help Sizing a Pump for Your Specific Project?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Send us your borewell depth, casing diameter, and required water discharge for instant hydraulic calculation and model recommendation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm rounded-xl transition-all text-center"
              >
                Request Sizing Chart
              </Link>
              <WhatsAppButton
                text="WhatsApp Sizing Desk"
                className="w-full sm:w-auto py-3.5 px-6 text-xs sm:text-sm rounded-xl"
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
};

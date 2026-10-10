import React from 'react';
import { COMPANY_INFO, CERTIFICATIONS } from '../data/pumpsData';
import {
  Target, 
  ShieldCheck, 
  Cpu,
  CheckCircle2,
  Droplet,
  ChevronRight,
  Factory,
  Zap,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import RevealOnScroll from '../components/RevealOnScroll';

export const AboutPage: React.FC = () => {
  const manufacturingStages = [
    {
      num: '01',
      title: 'CNC Precision Shaft Turning',
      tag: 'Micron Accuracy',
      icon: Cpu,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      desc: 'All rotor shafts are turned from SS-410 / SS-304 bars on multi-axis CNC lathe centers, ensuring runout within 0.02mm for vibration-free 50,000+ hour operational lifespan.'
    },
    {
      num: '02',
      title: '99.9% Pure EC Copper Winding',
      tag: '160V Voltage Defense',
      icon: Zap,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      desc: 'Dual-coated electrolytic grade copper wire with Class F & H synthetic insulation ensures uninterrupted pumping through harsh agricultural voltage dips down to 160V.'
    },
    {
      num: '03',
      title: 'Dynamic Rotor Balancing Bench',
      tag: 'Zero Vibration',
      icon: Activity,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      desc: 'Every squirrel-cage rotor is computerized dynamic balanced under simulated loads to minimize radial play, protect water-lubricated bearings, and reduce noise below 45 dB.'
    },
    {
      num: '04',
      title: '100% Submerged Hydro Testing',
      tag: 'Zero-Defect Audit',
      icon: Droplet,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      desc: 'Before dispatch, every single pump set is submerged in our calibrated flow tanks to verify actual LPM discharge, total head height, and dielectric insulation resistance.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-24">
      
      {/* 1. Cinematic Hero Header Section */}
      <section className="relative bg-[#080d16] text-white border-b-2 border-red-600 overflow-hidden w-full">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
          alt="Royal Manufacture Submersible Pumps Factory"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#080d16]/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 space-y-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">About Us</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans">
            Engineering Water Flow Excellence Since 2000
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            25+ Years of Precision Submersible Pump Manufacturing in Padvala, Rajkot (Gujarat). Delivering reliable water solutions across agricultural, domestic, and industrial sectors.
          </p>
        </div>
      </section>

      {/* 2. Company Story & Facility Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-up">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-300 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Pioneering Water Solutions with World-Class Manufacturing Standards
                </h2>

                <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    <strong className="text-slate-900 font-bold">Royal Manufacture</strong> is an established engineering enterprise engaged in the specialized design, manufacturing, and distribution of submersible deep borewell pumps, irrigation pump sets, and stainless steel motors.
                  </p>
                  <p>
                    Our product portfolio includes the celebrated <strong className="text-slate-900 font-bold">V-3, V-4, V-5, V-6, V-7, V-8, and V-9</strong> Openwell and Borewell submersible pump series. Since our inception in 2000 in Padvala, Rajkot, we have earned a reputation built on strict adherence to BIS ISI standards, transparent business ethics, and factory-direct support.
                  </p>
                  <p>
                    Today, SuperFlow holds a trusted presence across rural and industrial water sectors, powered by passionate engineering professionals driven by hydraulic innovation.
                  </p>
                </div>

                {/* Capability Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% EC Pure Copper Windings</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Precision CNC Turned SS Shafts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sand-Resistant Hydraulic Impellers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>160V Wide Voltage Rural Tolerance</span>
                  </div>
                </div>
              </div>

              {/* Right Metric Stat Tiles */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
                  <span className="text-2xl sm:text-4xl font-black text-red-600 font-mono tracking-tight block">2000</span>
                  <h4 className="text-xs font-bold text-slate-900">Inception Year</h4>
                  <p className="text-[11px] text-slate-500 font-medium">25+ years continuous leadership in Rajkot.</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
                  <span className="text-2xl sm:text-4xl font-black text-sky-600 font-mono tracking-tight block">150+</span>
                  <h4 className="text-xs font-bold text-slate-900">Pump Models</h4>
                  <p className="text-[11px] text-slate-500 font-medium">V-3 to V-9 & Openwell pump sets.</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
                  <span className="text-2xl sm:text-4xl font-black text-emerald-600 font-mono tracking-tight block">100%</span>
                  <h4 className="text-xs font-bold text-slate-900">Hydro Tested</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Submerged load bench test before dispatch.</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
                  <span className="text-2xl sm:text-4xl font-black text-amber-600 font-mono tracking-tight block">IS:8034</span>
                  <h4 className="text-xs font-bold text-slate-900">BIS ISI Certified</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Bureau of Indian Standards certified.</p>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3. Core Principles (Vision, Priority, In-House Precision) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-red-600 block">
              Our Core Principles
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Operational Discipline & Engineering Ethics
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              The foundational values that have driven Royal Manufacture for over a quarter century.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Principle 1 */}
          <RevealOnScroll animation="fade-up" delay={0} className="h-full">
            <div className="h-full bg-white rounded-3xl border-2 border-slate-300 hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-xl p-8 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border-2 border-red-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 font-mono">01</span>
                </div>

                <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
                  Our Vision
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  To fulfill all water extraction needs of agricultural, industrial, and domestic customers through continuous hydraulic design innovation, positioning SuperFlow among India's most dependable pump manufacturers.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600">
                <span>Pan-India Expansion</span>
                <span>→</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Principle 2 */}
          <RevealOnScroll animation="fade-up" delay={100} className="h-full">
            <div className="h-full bg-white rounded-3xl border-2 border-slate-300 hover:border-emerald-600 transition-all duration-300 shadow-sm hover:shadow-xl p-8 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 font-mono">02</span>
                </div>

                <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                  Our Priority
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Customer satisfaction through zero-compromise quality assurance, transparent factory pricing, direct technical support, and durable pump machinery built to withstand demanding Indian field conditions.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>100% Quality First</span>
                <span>→</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Principle 3 */}
          <RevealOnScroll animation="fade-up" delay={200} className="h-full">
            <div className="h-full bg-white rounded-3xl border-2 border-slate-300 hover:border-sky-600 transition-all duration-300 shadow-sm hover:shadow-xl p-8 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border-2 border-sky-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Factory className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 font-mono">03</span>
                </div>

                <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                  In-House Precision
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  From multi-axis CNC shaft turning and automatic copper coil winding to computer-controlled dynamic balancing and hydrostatic test tanks, we control 100% of the manufacturing cycle in Padvala.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Rajkot Manufacturing</span>
                <span>→</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. In-House Manufacturing Prowess Tour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-slate-200 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-1">
                Plant Tour
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our 4-Stage In-House Manufacturing Process
              </h2>
            </div>
            <Link
              to="/quality"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>Explore Quality Testing Lab</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {manufacturingStages.map((stg, idx) => {
            const Icon = stg.icon;
            return (
              <RevealOnScroll key={stg.num} animation="fade-up" delay={idx * 80} className="h-full">
                <div className="h-full bg-white rounded-3xl border-2 border-slate-300 hover:border-red-600 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-2xl ${stg.bg} border-2 ${stg.border} flex items-center justify-center ${stg.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 font-mono">{stg.num}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-200">
                        {stg.tag}
                      </span>
                      <h4 className="text-base font-black text-slate-900 mt-2 tracking-tight group-hover:text-red-600 transition-colors">
                        {stg.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {stg.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* 5. Dealership & Factory Inquiry Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="scale-up">
          <div className="bg-[#080d16] rounded-3xl p-8 sm:p-12 text-white border-2 border-red-600 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-red-400 block">
                Direct Plant Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Looking for Authorized Dealership or Bulk Supply?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect directly with our Padvala, Rajkot manufacturing sales desk for catalog, price lists, and technical support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm rounded-xl transition-all text-center"
              >
                Contact Sales Desk
              </Link>
              <WhatsAppButton
                text="Chat on WhatsApp"
                className="w-full sm:w-auto py-3.5 px-6 text-xs sm:text-sm rounded-xl"
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
};

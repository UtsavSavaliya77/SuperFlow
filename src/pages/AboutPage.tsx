import React from 'react';
import { COMPANY_INFO, CERTIFICATIONS } from '../data/pumpsData';
import { 
  Building2, 
  Award, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  CheckCircle2,
  Layers,
  Leaf,
  Droplet,
  ChevronRight,
  Sparkles,
  Phone,
  Download,
  Factory,
  Check,
  Flame,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import RevealOnScroll from '../components/RevealOnScroll';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-20 lg:pb-24">
      
      {/* Full-Bleed Cinematic Hero Header Section */}
      <section className="relative bg-[#080d16] text-white border-b border-slate-800 overflow-hidden w-full">
        {/* Background Image with Solid Dark Overlay */}
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
          alt="Royal Manufacture Submersible Pumps Factory"
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
            <span className="text-white font-bold">About Us</span>
          </nav>

          <span className="text-red-400 font-black text-xs uppercase tracking-widest block">
            Royal Manufacture • SuperFlow Submersible Pumps
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            About Us
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            25+ Years of Precision Submersible Pump Engineering Excellence in Padvala, Rajkot (Gujarat) Since 2000.
          </p>
        </div>
      </section>

      {/* Company Story & Profile Redesigned */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header & Story Block */}
        <RevealOnScroll animation="fade-up">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.03)] relative overflow-hidden">
            
            {/* Top line accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200/70 text-[11px] font-black uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Company Profile & Legacy</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Pioneering Water Solutions with World-Class Manufacturing Standards
                </h2>

                <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    <strong className="text-slate-900 font-bold">Royal Manufacture</strong> is an established and reputed engineering enterprise engaged in the specialized design, manufacturing, and export of submersible deep borewell pumps, irrigation pump sets, and stainless steel motors.
                  </p>
                  <p>
                    Our fast-moving product portfolio includes the celebrated <strong className="text-slate-900 font-bold">V-3, V-4, V-5, V-6, V-7, V-8, and V-9</strong> Openwell and Borewell submersible pump series. Since our inception in 2000 in Padvala, Rajkot, we have earned an enduring reputation built on strict adherence to BIS ISI standards, ethical transparency, and direct factory after-sales support.
                  </p>
                  <p>
                    Today, SuperFlow holds a domineering presence across rural and industrial water sectors, powered by passionate engineering professionals driven by hydraulic innovation.
                  </p>
                </div>

                {/* Capability Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% EC Pure Copper Windings</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Precision CNC Turned SS Shafts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sand-Resistant Hydraulic Impellers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>160V Wide Voltage Rural Tolerance</span>
                  </div>
                </div>
              </div>

              {/* Right Metric Stat Tiles (5 cols) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1 shadow-2xs">
                  <span className="text-3xl sm:text-4xl font-black text-red-600 tracking-tight">2000</span>
                  <h4 className="text-xs font-bold text-slate-900">Inception Year</h4>
                  <p className="text-[11px] text-slate-500 font-medium">25+ years continuous leadership in Rajkot.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1 shadow-2xs">
                  <span className="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight">120+</span>
                  <h4 className="text-xs font-bold text-slate-900">Configurations</h4>
                  <p className="text-[11px] text-slate-500 font-medium">V-3 to V-9 & Openwell pump models.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1 shadow-2xs">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">100%</span>
                  <h4 className="text-xs font-bold text-slate-900">Hydro Tested</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Submerged load bench test before dispatch.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1 shadow-2xs">
                  <span className="text-3xl sm:text-4xl font-black text-amber-600 tracking-tight">Top 3</span>
                  <h4 className="text-xs font-bold text-slate-900">National Vision</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Pan-India distribution & dealer network.</p>
                </div>

              </div>

            </div>

          </div>
        </RevealOnScroll>

        {/* 3 Core Principles Cards Grid */}
        <div className="space-y-8">
          <RevealOnScroll animation="fade-up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
             
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Core Principles
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                The operational discipline, engineering standards, and manufacturing ethics that have defined Royal Manufacture for over a quarter of a century.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Principle 1: Vision */}
            <RevealOnScroll animation="fade-up" delay={0} className="h-full">
              <div className="h-full bg-white rounded-[28px] border-2 border-slate-300 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between">
                <div className="flex flex-col justify-between h-full p-7 sm:p-8 space-y-6 relative overflow-hidden group">
                  {/* Top Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />
                  
                  {/* Watermark Number */}
                  <span className="absolute top-4 right-6 text-5xl sm:text-6xl font-black text-slate-100 select-none pointer-events-none group-hover:text-red-50 transition-colors">
                    01
                  </span>

                  <div className="space-y-5 relative z-10">
                    {/* Icon & Sub-Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shadow-xs group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <Target className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200/60 px-2.5 py-1 rounded-full">
                        Strategic Vision
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
                        Our Vision
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        To fulfill all water extraction needs of agricultural, industrial, and residential customers through continuous R&D, advanced hydraulic design, and positioning SuperFlow among the top 3 pump brands in India.
                      </p>
                    </div>

                    {/* Strategic Milestones */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                        <span>Pan-India top 3 brand expansion</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                        <span>High-efficiency hydraulic motor design</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                        <span>Continuous R&D in deep borewell tech</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold relative z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 border border-red-200 text-red-700">
                      Top 3 National Goal
                    </span>
                    <span className="text-slate-400 font-medium text-xs">Since 2000</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Principle 2: Priority */}
            <RevealOnScroll animation="fade-up" delay={100} className="h-full">
              <div className="h-full bg-white rounded-[28px] border-2 border-slate-300 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between">
                <div className="flex flex-col justify-between h-full p-7 sm:p-8 space-y-6 relative overflow-hidden group">
                  {/* Top Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600" />

                  {/* Watermark Number */}
                  <span className="absolute top-4 right-6 text-5xl sm:text-6xl font-black text-slate-100 select-none pointer-events-none group-hover:text-emerald-50 transition-colors">
                    02
                  </span>

                  <div className="space-y-5 relative z-10">
                    {/* Icon & Sub-Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                        Quality & Trust
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                        Our Priority
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Customer satisfaction through zero-compromise quality assurance, transparent business ethics, competitive factory pricing, and durable pump machinery built to perform under extreme Indian field conditions.
                      </p>
                    </div>

                    {/* Quality Benchmarks */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>100% Submerged hydro load bench audit</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Transparent factory-direct pricing</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Immediate spare availability & support</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold relative z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 border border-emerald-200 text-emerald-700">
                      Zero Compromise
                    </span>
                    <span className="text-slate-400 font-medium text-xs">ISO & BIS Standards</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Principle 3: In-House Manufacturing */}
            <RevealOnScroll animation="fade-up" delay={200} className="h-full">
              <div className="h-full bg-white rounded-[28px] border-2 border-slate-300 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col justify-between">
                <div className="flex flex-col justify-between h-full p-7 sm:p-8 space-y-6 relative overflow-hidden group">
                  {/* Top Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-sky-600" />

                  {/* Watermark Number */}
                  <span className="absolute top-4 right-6 text-5xl sm:text-6xl font-black text-slate-100 select-none pointer-events-none group-hover:text-sky-50 transition-colors">
                    03
                  </span>

                  <div className="space-y-5 relative z-10">
                    {/* Icon & Sub-Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-xs group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                        <Factory className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/60 px-2.5 py-1 rounded-full">
                        In-House Prowess
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                        100% In-House Production
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        From precision CNC turning to computerized rotor dynamic balancing, high-dielectric copper winding, and submerged hydrodynamic testing — every stage is executed within our own Padvala, Rajkot facility.
                      </p>
                    </div>

                    {/* Production Capabilities */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>Multi-axis CNC turning & SS shafts</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>Computerized dynamic rotor balancing</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>99.9% EC dual-coated copper windings</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold relative z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-50 border border-sky-200 text-sky-700">
                      Complete In-House
                    </span>
                    <span className="text-slate-400 font-medium text-xs">Rajkot, Gujarat</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>

      </section>

      {/* Manufacturing & Infrastructure Highlights: Asymmetrical Split Master Showcase (Non-White Dark Slate Theme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Plant Overview & Capabilities Command Hub (5 cols) */}
          <div className="lg:col-span-5 h-full">
            <RevealOnScroll animation="fade-right" className="h-full">
              <div className="bg-[#080d16] text-white rounded-[32px] p-7 sm:p-9 border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden h-full">
                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 text-red-300 border border-red-500/30 text-[11px] font-black uppercase tracking-wider backdrop-blur-sm">
                    <Factory className="w-3.5 h-3.5 text-red-400" />
                    <span>Rajkot Manufacturing Hub</span>
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                      State-of-the-Art Submersible Production Plant
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                      Located in the Padvala industrial belt of Rajkot (Gujarat), our manufacturing facility combines advanced CNC turning, automated CED coating, and computerized hydro test benches under one roof.
                    </p>
                  </div>

                  {/* 3 Quick Capability Badges */}
                  <div className="space-y-2.5 pt-2">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">CNC Machining Accuracy</span>
                      <span className="text-xs font-black text-sky-400">±5 Micron Tolerance</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Annual Plant Capacity</span>
                      <span className="text-xs font-black text-emerald-400">50,000+ Pump Sets</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Hydro Testing Protocol</span>
                      <span className="text-xs font-black text-red-400">100% Submerged Test</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Plant Trust Note */}
                <div className="relative z-10 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-white font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Padvala, Rajkot (Gujarat) 🇮🇳</span>
                    </span>
                    <span className="font-mono text-slate-400">IS:8034 / 14220</span>
                  </div>
                  <WhatsAppButton 
                    text="Inquire for Factory Visit / Supply" 
                    className="w-full py-3 rounded-2xl text-xs font-black justify-center shadow-lg shadow-emerald-950/40" 
                  />
                </div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: 3 Connected Process Timeline Cards (White Cards) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Step 1 */}
            <RevealOnScroll animation="fade-left" delay={0}>
              <div className="bg-white text-slate-900 rounded-[28px] p-6 sm:p-7 border border-slate-200/90 hover:border-sky-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h4 className="text-base font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                      1. Computerized CNC Turning & Dynamic Rotor Balancing
                    </h4>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      Micron Tolerance
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    High-speed computerized CNC lathes machine AISI 410 stainless steel shafts, balanced rotors, and pump impellers with micron precision to eradicate harmonic vibrations and maximize bearing life.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 2 */}
            <RevealOnScroll animation="fade-left" delay={100}>
              <div className="bg-white text-slate-900 rounded-[28px] p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h4 className="text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                      2. Cathodic Electrodeposition (CED) & Epoxy Anti-Rust Barrier
                    </h4>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      100% Anti-Rust
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Dual-tier CED coating immersion on all cast iron casings, complemented by specialized epoxy spray booths ensuring lifetime rust immunity even in harsh agricultural and saline borewell conditions.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 3 */}
            <RevealOnScroll animation="fade-left" delay={200}>
              <div className="bg-white text-slate-900 rounded-[28px] p-6 sm:p-7 border border-slate-200/90 hover:border-red-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h4 className="text-base font-black text-slate-900 group-hover:text-red-600 transition-colors">
                      3. Hydrodynamic Deep-Bore Submersion Testing Lab
                    </h4>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                      IS:8034 / IS:14220
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Every single pump set is tested in computerized submerged tanks measuring actual water discharge (LPM), high head backpressure (Meters), power factor, and 160V low voltage starting stability before packaging.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>
      </section>

      {/* Certifications Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Certified Standards & Approvals
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Rigorous national and international benchmark compliances guaranteeing electrical safety, hydraulic efficiency, and long lifespan.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: ISO 9001 */}
          <RevealOnScroll animation="zoom-in" delay={0}>
            <div className="bg-[#080d16] text-white rounded-[28px] p-6 sm:p-7 border border-slate-800/90 hover:border-red-500/60 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-red-950/40 border border-red-900/50 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-red-950/50 text-red-300 border border-red-900/60">
                    Certified Quality
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-black text-white group-hover:text-red-400 transition-colors">
                    ISO 9001:2008
                  </h3>
                  <p className="text-xs font-bold text-slate-300">
                    Quality Management Certification
                  </p>
                  <p className="text-[11px] font-medium text-slate-400">
                    International Organization for Standardization
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Standard Audited & Verified</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 2: IS: 8034 (Borewell) */}
          <RevealOnScroll animation="zoom-in" delay={80}>
            <div className="bg-[#080d16] text-white rounded-[28px] p-6 sm:p-7 border border-slate-800/90 hover:border-sky-500/60 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-sky-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-sky-950/40 border border-sky-900/50 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-sky-950/50 text-sky-300 border border-sky-900/60">
                    ISI Mark
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-black text-white group-hover:text-sky-400 transition-colors">
                      IS: 8034
                    </h3>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-sky-300 border border-white/15">
                      CM/L 7637668
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-300">
                    Borewell Submersible Pump Sets
                  </p>
                  <p className="text-[11px] font-medium text-slate-400">
                    Bureau of Indian Standards (BIS)
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Govt. of India BIS Licensed</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 3: IS: 14220 (Openwell) */}
          <RevealOnScroll animation="zoom-in" delay={160}>
            <div className="bg-[#080d16] text-white rounded-[28px] p-6 sm:p-7 border border-slate-800/90 hover:border-emerald-500/60 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-900/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-950/50 text-emerald-300 border border-emerald-900/60">
                    ISI Mark
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors">
                      IS: 14220
                    </h3>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-emerald-300 border border-white/15">
                      CM/L 7600101706
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-300">
                    Openwell Submersible Pump Sets
                  </p>
                  <p className="text-[11px] font-medium text-slate-400">
                    Bureau of Indian Standards (BIS)
                  </p>
                </div>

              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Govt. of India BIS Licensed</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 4: CE Compliance */}
          <RevealOnScroll animation="zoom-in" delay={240}>
            <div className="bg-[#080d16] text-white rounded-[28px] p-6 sm:p-7 border border-slate-800/90 hover:border-amber-500/60 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-900/50 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-950/50 text-amber-300 border border-amber-900/60">
                    CE Certified
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                    CE Compliance
                  </h3>
                  <p className="text-xs font-bold text-slate-300">
                    European Conformity Standards
                  </p>
                  <p className="text-[11px] font-medium text-slate-400">
                    CE European Directives
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>International Safety Compliant</span>
              </div>
            </div>
          </RevealOnScroll>

        </div>

        {/* Accreditation Trust Summary Strip */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Quality Assurance Tested on Computerized Load Test Benches in Rajkot, Gujarat</span>
          </div>
          <span className="text-[11px] font-black text-red-600 bg-red-50 border border-red-200/80 px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
            Royal Manufacture Certified
          </span>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import BorderGlow from '../components/BorderGlow';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ShieldCheck, 
  Award,
  CheckCircle2,
  Droplet,
  ChevronRight,
  Zap,
  Activity,
  Layers,
  Sparkles,
  Phone,
  Cpu,
  BadgeCheck,
  FileCheck,
  FileText,
  ArrowRight,
  Building2,
  Check,
  ArrowUpRight,
  Eye,
  Maximize2,
  X,
  ExternalLink,
  Shield
} from 'lucide-react';

interface QualityStandardItem {
  id: string;
  num: string;
  code: string;
  shortName: string;
  fullName: string;
  issuer: string;
  badge: string;
  licenseNo: string;
  validity: string;
  image: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  glowColor: string;
  colors: string[];
  desc: string;
  parameters: {
    label: string;
    value: string;
    check: string;
  }[];
  applicableSeries: {
    name: string;
    link: string;
  }[];
}

const QUALITY_STANDARDS_LIST: QualityStandardItem[] = [
  {
    id: 'is8034',
    num: '01',
    code: 'IS: 8034:2002',
    shortName: 'Borewell Submersible Pumps',
    fullName: 'Borewell Submersible Pump Sets Standards',
    issuer: 'Bureau of Indian Standards (BIS)',
    badge: 'BIS ISI Mark',
    licenseNo: 'CM/L: 7637668',
    validity: 'Government BIS Verified',
    image: '/images/certificates/cert_is8034.jpg',
    icon: ShieldCheck,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    glowColor: '150 85 45',
    colors: ['#10b981', '#059669', '#047857'],
    desc: 'Official Bureau of Indian Standards mark guaranteeing starting torque at low rural voltages (down to 160V), calibrated head vs LPM discharge curves, and high-voltage dielectric insulation breakdown protection.',
    parameters: [
      { label: 'Low Voltage Run', value: '160V – 240V AC', check: '100% full-load tested' },
      { label: 'Winding Class', value: 'Class F Insulation', check: 'High dielectric proof' },
      { label: 'Hydraulic Curve', value: 'Up to 1,625 LPM', check: 'Calibrated bench tested' },
      { label: 'Rotor Vibration', value: '< 0.5 mm/s Stability', check: 'Dynamic CNC balanced' }
    ],
    applicableSeries: [
      { name: 'V-4 Turbo (Low Volt)', link: '/products?category=V-4&series=Turbo%20(Low%20Volt)' },
      { name: 'V-6 Q-Type Mix Flow', link: '/products?category=V-6&series=Q-Type%20Mix%20Flow' },
      { name: 'V-6 Primium 50 Feet SS', link: '/products?category=V-6&series=Primium%2050%20Feet%20SS' }
    ]
  },
  {
    id: 'is14220',
    num: '02',
    code: 'IS: 14220:1994',
    shortName: 'Openwell Submersible Pumps',
    fullName: 'Openwell Submersible Pump Sets Standards',
    issuer: 'Bureau of Indian Standards (BIS)',
    badge: 'BIS ISI Mark',
    licenseNo: 'CM/L: 7600101706',
    validity: 'Government BIS Verified',
    image: '/images/certificates/cert_is14220.svg',
    icon: Droplet,
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-50',
    glowColor: '200 85 50',
    colors: ['#0ea5e9', '#0284c7', '#0369a1'],
    desc: 'Standardized build quality for agricultural and domestic openwell pump sets operating completely underwater, eliminating suction air locks, priming failures, and foot-valve maintenance.',
    parameters: [
      { label: 'Pressure Tightness', value: '100% Submerged Hydrostatic', check: 'Zero seal leakage audit' },
      { label: 'Volute Hydraulic', value: 'Anti-Air-Lock Casing', check: '100% self-priming setup' },
      { label: 'Coating Standard', value: 'CED Non-Toxic Coating', check: 'Food-grade rust protection' },
      { label: 'Continuous Duty', value: 'S1 Duty 24/7 Rating', check: 'Submerged cooling audited' }
    ],
    applicableSeries: [
      { name: 'V-7 Horizontal SS', link: '/products?category=Openwell&series=V-7%20Horizontal%20SS' },
      { name: 'V-9 Heavy Openwell', link: '/products?category=Openwell&series=V-9%20Heavy%20Openwell' },
      { name: 'Vertical Openwell Series', link: '/products?category=Openwell' }
    ]
  },
  {
    id: 'iso9001',
    num: '03',
    code: 'ISO 9001:2008',
    shortName: 'Quality Management System',
    fullName: 'International Quality Management Certification',
    issuer: 'International Organization for Standardization',
    badge: 'ISO Certified QMS',
    licenseNo: 'QMS-IND-2008-017',
    validity: 'ISO Audited & Validated',
    image: '/images/certificates/cert_iso9001.jpg',
    icon: Award,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    glowColor: '0 85 55',
    colors: ['#ef4444', '#dc2626', '#b91c1c'],
    desc: 'Ensures strict adherence to continuous manufacturing quality control, precision CNC turned rotor balancing, and multi-stage submerged load testing across our Padvala, Rajkot manufacturing plant.',
    parameters: [
      { label: 'Raw Material', value: '99.9% Pure EC Copper', check: 'Dielectric coil tested' },
      { label: 'Machining Spec', value: 'CNC Turned SS Shafts', check: 'Micron-level accuracy' },
      { label: 'Quality Protocol', value: 'Zero-Defect Quality Checks', check: '100% pre-dispatch tested' },
      { label: 'Traceability', value: 'Complete Batch Logging', check: 'Full serialized history' }
    ],
    applicableSeries: [
      { name: 'V-3 High Head', link: '/products?category=V-3' },
      { name: 'V-4 Borewell Series', link: '/products?category=V-4' },
      { name: 'V-5 Mix Flow', link: '/products?category=V-5' },
      { name: 'V-6 Heavy Duty', link: '/products?category=V-6' }
    ]
  },
  {
    id: 'ce',
    num: '04',
    code: 'CE Compliance',
    shortName: 'European Safety Directives',
    fullName: 'European Conformity Safety Standards',
    issuer: 'CE European Directives (EU)',
    badge: 'CE Certified',
    licenseNo: 'EU-DIRECTIVE-2006/42/EC',
    validity: 'Export Grade Compliance',
    image: '/images/certificates/cert_ce.svg',
    icon: Zap,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    glowColor: '40 85 50',
    colors: ['#f59e0b', '#d97706', '#b45309'],
    desc: 'Adheres to stringent European international directives for electrical insulation safety, harmonic frequency compatibility, and heavy industrial mechanical durability for global export markets.',
    parameters: [
      { label: 'Electrical Safety', value: 'Low Voltage Directive (LVD)', check: 'Insulation breakdown proof' },
      { label: 'EMC Directive', value: 'Solar VFD Inverter Match', check: 'Harmonic frequency tested' },
      { label: 'Mechanical Grade', value: 'Heavy Axial Downthrust', check: 'Silicon carbide bearings' },
      { label: 'Energy Rating', value: 'High Efficiency Motor Class', check: 'Low watt loss per LPM' }
    ],
    applicableSeries: [
      { name: 'V-6 Primium 50 Feet SS', link: '/products?category=V-6&series=Primium%2050%20Feet%20SS' },
      { name: 'V-6 Primium Jacket', link: '/products?category=V-6&series=Primium%20Jacket' },
      { name: 'V-3 Solar Series', link: '/products?category=V-3' }
    ]
  }
];

export const QualityPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<QualityStandardItem | null>(null);

  const testingSteps = [
    {
      step: '01',
      phase: 'Metallurgy & Dielectric',
      tag: 'Stage 01 • Metallurgy',
      title: 'Raw Material & Copper Dielectric Testing',
      icon: Layers,
      accentColor: 'text-red-600',
      accentBg: 'bg-red-50',
      accentBorder: 'border-red-200',
      accentStrip: 'bg-red-600',
      glowColor: '0 85 55',
      colors: ['#ef4444', '#dc2626', '#b91c1c'],
      metric: '99.9% EC Pure Copper',
      standard: 'IS: 8034 / IS: 14220 Spec',
      desc: 'Spectral inspection of 99.9% EC Grade Copper winding wire, high-permeability CRGO silicon steel, and AISI 304/410 stainless shafts before assembly.'
    },
    {
      step: '02',
      phase: 'Rotor Dynamics & CNC',
      tag: 'Stage 02 • Dynamic Balance',
      title: 'Dynamic Computerized Rotor Balancing',
      icon: Activity,
      accentColor: 'text-indigo-600',
      accentBg: 'bg-indigo-50',
      accentBorder: 'border-indigo-200',
      accentStrip: 'bg-indigo-600',
      glowColor: '240 85 55',
      colors: ['#6366f1', '#4f46e5', '#4338ca'],
      metric: '< 0.05 mm/s Harmonic Tolerance',
      standard: 'ISO 1940-1 Grade G2.5',
      desc: 'Every rotating assembly is dynamically balanced on digital balancing rigs to eliminate harmonic vibrations and maximize bearing operational life.'
    },
    {
      step: '03',
      phase: 'Hydrostatic Immersion',
      tag: 'Stage 03 • Sealed Pressure',
      title: 'Full Submersion Hydrostatic Pressure Test',
      icon: Droplet,
      accentColor: 'text-sky-600',
      accentBg: 'bg-sky-50',
      accentBorder: 'border-sky-200',
      accentStrip: 'bg-sky-600',
      glowColor: '200 85 50',
      colors: ['#0ea5e9', '#0284c7', '#0369a1'],
      metric: '15 to 25 Bar Sealed Testing',
      standard: '100% Underwater Hydro Tank',
      desc: 'Pump bodies and motor casings are submerged in deep hydrostatic water tanks to verify zero seal leakage at peak operational pressures.'
    },
    {
      step: '04',
      phase: 'Load & Low Voltage',
      tag: 'Stage 04 • Dyno Bench Run',
      title: 'Full Electrical Load & Low Voltage Run Check',
      icon: Zap,
      accentColor: 'text-emerald-600',
      accentBg: 'bg-emerald-50',
      accentBorder: 'border-emerald-200',
      accentStrip: 'bg-emerald-600',
      glowColor: '150 85 45',
      colors: ['#10b981', '#059669', '#047857'],
      metric: '160V – 440V Wide Voltage Operability',
      standard: 'Full Dynamometer Load Bench',
      desc: 'Every unit is tested at nominal 415V and depressed voltages down to 160V to guarantee starting torque, current draw, and Class-F thermal stability.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      
      {/* Full-Bleed Cinematic Hero Header Section */}
      <section className="relative bg-[#080d16] text-white border-b border-slate-800 overflow-hidden w-full">
        {/* Background Image with Cinematic Dark Gradient Overlay */}
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80"
          alt="SuperFlow Quality Testing and ISO Certification Facility"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d16] via-[#080d16]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent pointer-events-none" />

        {/* Glowing Top Accent Line flush with fixed header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10 space-y-4 max-w-3xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">Quality & ISO</span>
          </nav>

          <span className="text-red-400 font-black text-xs uppercase tracking-widest block">
            Royal Manufacture • Zero Compromise Quality Policy
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Quality & Accreditations
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            At Royal Manufacture, every pump bearing the SuperFlow trademark adheres to rigorous Indian (BIS ISI) and International (ISO / CE) standards. 100% hydro & electrical load tested before dispatch.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ========================================================================= */}
        {/* DIRECT DISPLAY: RECOGNIZED QUALITY STANDARDS WITH OFFICIAL CERTIFICATES   */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          {/* Section Heading */}
          <RevealOnScroll animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-[11px] font-black uppercase tracking-wider">
                  <BadgeCheck className="w-3.5 h-3.5 text-red-600" />
                  <span>Verified Accreditations & BIS Certifications</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Recognized Quality Standards
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl">
                  Official certificates for Bureau of Indian Standards (BIS) ISI mark, ISO 9001:2008 QMS, and European CE conformity held by Royal Manufacture.
                </p>
              </div>

              <div className="text-left md:text-right shrink-0">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 block">
                  Manufacturing Location
                </span>
                <span className="text-xs sm:text-sm font-black text-slate-900">
                  Padvala, Rajkot (Gujarat)
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* 4 Cards Grid: Focused on Certificate Image & Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_STANDARDS_LIST.map((item, idx) => {
              const IconComponent = item.icon;

              return (
                <RevealOnScroll key={item.id} animation="zoom-in" delay={idx * 80} className="h-full">
                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor={item.glowColor}
                    backgroundColor="#ffffff"
                    borderRadius={24}
                    glowRadius={32}
                    glowIntensity={1.2}
                    coneSpread={28}
                    colors={item.colors}
                    className="h-full"
                  >
                    <div 
                      onClick={() => setSelectedCert(item)}
                      className="flex flex-col justify-between h-full p-5 space-y-4 relative overflow-hidden group cursor-pointer"
                    >
                      {/* Top Accent Strip */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600 group-hover:h-2 transition-all duration-300" />

                      {/* Certificate Image Frame */}
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-xs group-hover:shadow-md transition-all duration-300 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={`${item.fullName} Certificate Document`}
                          className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500" 
                        />
                        
                        {/* Hover Overlay with Eye Icon */}
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-xl flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5 text-red-600" />
                            <span>View Full</span>
                            <Maximize2 className="w-3 h-3 text-slate-400" />
                          </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-900 border border-slate-200 shadow-xs">
                          {item.badge}
                        </div>
                      </div>

                      {/* Certificate Name & Code */}
                      <div className="space-y-1.5 pt-1 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-[#080d16] text-white text-[10px] font-black uppercase tracking-wider">
                              {item.num}
                            </span>
                            <span className="text-xs font-black text-red-600 font-mono">
                              {item.code}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-red-600 transition-colors">
                            {item.fullName}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-500 font-medium truncate pt-1">
                          {item.issuer}
                        </p>
                      </div>

                      {/* Footer View Action */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400 font-semibold truncate max-w-[130px]">
                          {item.licenseNo}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCert(item);
                          }}
                          className="px-3 py-1.5 bg-slate-100 group-hover:bg-red-600 text-slate-700 group-hover:text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="w-3 h-3" />
                          <span>View</span>
                        </button>
                      </div>

                    </div>
                  </BorderGlow>
                </RevealOnScroll>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* REDESIGNED: 4-STAGE SUBMERGED QUALITY AUDIT PIPELINE                      */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          {/* Section Heading Bar */}
          <RevealOnScroll animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-[11px] font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-red-600" />
                  <span>Zero Defect Manufacturing Protocol</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Our 4-Stage Submerged Quality Audit
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                  Every SuperFlow pump manufactured at our Padvala (Rajkot) facility undergoes rigorous end-to-end testing before dispatch. Zero compromises, 100% verified.
                </p>
              </div>

              {/* Quick Metrics Badges */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xs text-left">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">Submersion Test</span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    100% Hydro Checked
                  </span>
                </div>
                <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xs text-left">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">Voltage Window</span>
                  <span className="text-xs sm:text-sm font-black text-red-600 font-mono">
                    160V – 440V Dyno
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* 4 Connected Stage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {testingSteps.map((step, idx) => {
              const StepIcon = step.icon;

              return (
                <RevealOnScroll key={idx} animation="fade-up" delay={idx * 90} className="h-full">
                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor={step.glowColor}
                    backgroundColor="#ffffff"
                    borderRadius={28}
                    glowRadius={32}
                    glowIntensity={1.2}
                    coneSpread={28}
                    colors={step.colors}
                    className="h-full"
                  >
                    <div className="flex flex-col justify-between h-full p-6 sm:p-7 space-y-6 relative overflow-hidden group">
                      {/* Top Accent Strip */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${step.accentStrip}`} />

                      {/* Watermark Number in Background */}
                      <span className="absolute top-4 right-5 text-5xl font-black text-slate-100 select-none pointer-events-none group-hover:text-slate-200/80 transition-colors">
                        {step.step}
                      </span>

                      {/* Top Header Row with Icon & Stage Badge */}
                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 rounded-2xl ${step.accentBg} ${step.accentBorder} border flex items-center justify-center font-bold shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                            <StepIcon className={`w-6 h-6 ${step.accentColor}`} />
                          </div>

                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${step.accentBg} ${step.accentColor} border ${step.accentBorder}`}>
                            {step.tag}
                          </span>
                        </div>

                        {/* Step Title & Description */}
                        <div className="space-y-2">
                          <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-red-600 transition-colors">
                            {step.title}
                          </h3>

                          <p className="text-xs text-slate-600 font-normal leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Benchmark & Verification Pill */}
                      <div className="space-y-2.5 pt-4 border-t border-slate-100 relative z-10">
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 space-y-0.5">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                            Bench Benchmark:
                          </span>
                          <span className="text-xs font-black text-slate-900 block font-mono">
                            {step.metric}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                          <span className="flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{step.standard}</span>
                          </span>
                          <span className="text-[10px] font-black text-emerald-600 uppercase shrink-0">
                            Pass
                          </span>
                        </div>
                      </div>

                    </div>
                  </BorderGlow>
                </RevealOnScroll>
              );
            })}
          </div>

        </div>

        {/* Bottom Consultation CTA */}
        <RevealOnScroll animation="scale-up">
          <div className="bg-[#080d16] rounded-[32px] p-8 sm:p-12 border border-slate-800 text-white relative overflow-hidden shadow-2xl mt-8">
            {/* Animated Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
              <div className="animate-beam-slide bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Narrative & 4 Technical Feature Pills (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/25 text-[11px] font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  <span>Free Factory Hydraulic Consultation</span>
                </div>

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

      {/* Interactive Certificate Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="bg-[#080d16] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${selectedCert.iconBg} ${selectedCert.iconColor} flex items-center justify-center font-bold`}>
                  {React.createElement(selectedCert.icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase text-red-400">
                      {selectedCert.code}
                    </span>
                    <span className="text-[10px] bg-red-950/80 border border-red-800 text-red-300 px-2 py-0.5 rounded-full font-bold">
                      {selectedCert.badge}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
                    {selectedCert.fullName}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-slate-50">
              
              {/* High-Resolution Certificate Document Display */}
              <div className="bg-slate-950 rounded-2xl p-2 sm:p-4 shadow-xl border border-slate-300 max-w-3xl mx-auto flex items-center justify-center">
                <img 
                  src={selectedCert.image} 
                  alt={`${selectedCert.fullName} Official Certificate Document`}
                  className="w-full h-auto max-h-[58vh] object-contain rounded-lg"
                />
              </div>

              {/* Verification & License Details Table */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400">
                  <BadgeCheck className="w-4 h-4 text-emerald-600" />
                  <span>Accreditation Verification & Metadata</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Licence / Reg No.</span>
                    <span className="font-mono font-bold text-slate-900 text-xs block">{selectedCert.licenseNo}</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Issuing Authority</span>
                    <span className="font-bold text-slate-900 text-xs block truncate">{selectedCert.issuer}</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Standard Status</span>
                    <span className="font-bold text-emerald-600 text-xs block flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {selectedCert.validity}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Audited Plant</span>
                    <span className="font-bold text-slate-900 text-xs block">Padvala, Rajkot</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer Controls */}
            <div className="bg-white px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <a 
                href={selectedCert.image} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-600 hover:text-red-600 flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Original Document in New Tab</span>
              </a>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  Close
                </button>

                <WhatsAppButton
                  text="Inquire for Tender Copy"
                  message={`Hello SuperFlow Quality Team, I am viewing the certificate for ${selectedCert.code} (${selectedCert.licenseNo}) and require an official stamped copy for project tender compliance.`}
                  className="text-xs py-2.5 px-4 shadow-sm w-full sm:w-auto justify-center"
                />
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

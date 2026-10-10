import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ShieldCheck, 
  Medal as Award,
  CheckCircle as CheckCircle2,
  Drop as Droplet,
  CaretRight as ChevronRight,
  CornersOut as Maximize2,
  X,
} from '@phosphor-icons/react';

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
    desc: 'Ensures strict adherence to continuous manufacturing quality control, precision CNC turned rotor balancing, and multi-stage submerged load testing across our Padvala, Rajkot manufacturing plant.',
    parameters: [
      { label: 'Raw Material', value: '99.9% Pure EC Copper', check: 'Dielectric coil tested' },
      { label: 'Machining Spec', value: 'CNC Turned SS Shafts', check: 'Micron-level accuracy' },
      { label: 'Quality Protocol', value: 'Zero-Defect Quality Checks', check: '100% pre-dispatch tested' },
      { label: 'Traceability', value: 'Complete Batch Logging', check: 'Full serialized history' }
    ],
    applicableSeries: [
      { name: 'All V-3, V-4, V-5 Series', link: '/products' },
      { name: 'All V-6, V-7, V-9 Series', link: '/products' },
      { name: 'Openwell Pump Line', link: '/products?category=Openwell' }
    ]
  }
];

const TESTING_PROTOCOLS = [
  {
    num: '1',
    title: 'Raw Material Spectrometry & Copper Assay',
    tag: '99.9% EC Grade',
    desc: 'Every batch of electrolytic grade copper wire, electrical stampings, and stainless steel rounds undergoes metallurgical testing for exact chemical composition and conductivity.'
  },
  {
    num: '2',
    title: 'High-Voltage Megger & Dielectric Proof',
    tag: '2,500V Insulation',
    desc: 'Coil windings undergo 2.5 kV high-potential insulation resistance megger testing to prevent insulation puncture or short circuits even under heavy lightning surges and phase imbalances.'
  },
  {
    num: '3',
    title: 'Computerized Dynamic Rotor Balancing',
    tag: '< 0.02mm Runout',
    desc: 'Multi-axis dynamic balancing instruments measure and eliminate radial vibration on rotors and shafts, ensuring silent operation and extended bearing life.'
  },
  {
    num: '4',
    title: '50-Bar Hydrostatic Casing Pressure',
    tag: 'Zero Seal Leakage',
    desc: 'Motor casings and pump discharge heads are hydraulically pressurized to 50 bar to confirm mechanical seal integrity, casting density, and zero porosity.'
  },
  {
    num: '5',
    title: 'Calibrated Hydrodynamic LPM Flow Bench',
    tag: 'Head vs Flow Curves',
    desc: 'Every finished pump is coupled to computerized flow meters and pressure transmitters in submerged tanks to calibrate real-time flow discharge across varying head heights.'
  },
  {
    num: '6',
    title: '160V Low-Voltage Thermal Endurance',
    tag: 'Continuous S1 Run',
    desc: 'Pumps are operated continuously under simulated voltage drops down to 160V AC to verify that stator windings remain well within Class F thermal limits with zero overheating.'
  }
];

export const QualityPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<QualityStandardItem | null>(null);

  // Lock body scroll when certificate modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-24">
      
      {/* 1. Full-Bleed Cinematic Hero Header */}
      <section className="relative bg-[#080d16] text-white border-b border-red-600 overflow-hidden w-full">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
          alt="SuperFlow Quality Testing Lab"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#080d16]/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 space-y-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">Quality & Certifications</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
            Zero-Defect Quality Assurance & Certifications
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-3xl">
            Every SuperFlow pump set manufactured at our Padvala, Rajkot plant is subjected to strict multi-stage mechanical, electrical, and submerged hydrodynamic testing before dispatch.
          </p>
        </div>
      </section>

      {/* 2. Official Certifications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-1">
                Official Certifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Accredited Standards & Government Licenses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                Direct authorized Bureau of Indian Standards (BIS) and ISO 9001 quality certificates issued to SuperFlow.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUALITY_STANDARDS_LIST.map((cert, idx) => {
            return (
              <RevealOnScroll key={cert.id} animation="fade-up" delay={idx * 100} className="h-full">
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="h-full bg-white rounded-[3px] border border-slate-300 hover:border-slate-400 p-5 sm:p-6 transition-colors cursor-pointer flex flex-col justify-between group"
                >
                  {/* Card Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[3px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {cert.badge}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-[3px] font-mono border border-slate-200">
                        {cert.licenseNo}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors font-mono">
                        {cert.code}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5">{cert.fullName}</p>
                    </div>
                  </div>

                  {/* Certificate Image Frame */}
                  <div className="my-4 relative bg-slate-50 rounded-[3px] p-3 border border-slate-200 flex items-center justify-center min-h-[280px] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.fullName}
                      className="max-h-[260px] w-full object-contain transition-transform duration-500 group-hover:scale-102"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-3.5 py-1.5 bg-slate-900/90 text-white rounded-[3px] text-xs font-bold flex items-center gap-1.5 border border-white/20">
                        <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{cert.validity}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span>Inspect</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* 3. 6-Stage Quality Testing Bench */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Quality Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                6-Stage Zero-Defect Testing Bench
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              100% Submerged Inspection in Padvala, Rajkot
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TESTING_PROTOCOLS.map((proto, idx) => (
            <RevealOnScroll key={proto.num} animation="fade-up" delay={idx * 60} className="h-full">
              <div className="h-full bg-white rounded-[3px] border border-slate-300 hover:border-slate-400 p-5 transition-colors flex flex-col justify-between space-y-3 group">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-300 font-mono">0{proto.num}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-[3px]">
                      {proto.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 tracking-tight">
                    {proto.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {proto.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pass Standard Guaranteed</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 4. Consultation & Factory Audit Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-up">
          <div className="bg-[#080d16] rounded-[3px] p-6 sm:p-10 text-white border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 block">
                Factory Audit & Verification
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Request Official BIS ISI / ISO Compliance Dossier
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Institutional buyers, government tenders, and authorized distributors can request official certified test reports and quality documents directly from our QA desk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-[3px] transition-colors text-center"
              >
                Contact QA Desk
              </Link>
              <WhatsAppButton
                text="Request Test Reports"
                className="w-full sm:w-auto !py-3 !px-6 text-xs sm:text-sm rounded-[3px]"
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white rounded-[3px] border border-slate-300 max-w-4xl w-full max-h-[95vh] overflow-y-auto relative p-5 sm:p-7 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase text-emerald-600 tracking-wider">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedCert.code} — {selectedCert.shortName}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-[3px] bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Preview Image */}
            <div className="relative rounded-[3px] overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.fullName}
                className="max-h-96 w-auto object-contain"
              />
            </div>

            {/* Metadata Parameters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-slate-50 p-3.5 rounded-[3px] border border-slate-200">
              {selectedCert.parameters.map((p, pIdx) => (
                <div key={pIdx} className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{p.label}</span>
                  <span className="text-xs font-bold text-slate-900 block font-mono">{p.value}</span>
                  <span className="text-[10px] text-emerald-600 font-semibold block">✓ {p.check}</span>
                </div>
              ))}
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              <span className="text-xs font-mono font-semibold text-slate-500">
                License: {selectedCert.licenseNo}
              </span>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-red-600 text-white font-bold text-xs rounded-[3px] transition-colors cursor-pointer"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

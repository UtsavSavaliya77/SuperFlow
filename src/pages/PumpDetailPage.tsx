import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_PUMPS, COMPANY_INFO, CATEGORIES, getPumpImage } from '../data/pumpsData';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PumpCard } from '../components/PumpCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowUpCircle, 
  Gauge, 
  Activity, 
  Wrench, 
  Droplet, 
  CheckCircle2, 
  Phone, 
  ChevronRight, 
  Sparkles,
  Award,
  Factory,
  SlidersHorizontal,
  PackageCheck
} from 'lucide-react';

export const PumpDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find pump by ID or matching model slug with flexible matching
  const decodedId = id ? decodeURIComponent(id).trim().toLowerCase() : '';
  const pump = ALL_PUMPS.find((p) => {
    const pId = p.id.toLowerCase();
    const pModel = p.model.toLowerCase();
    const cleanId = pId.replace(/[^a-z0-9]/g, '');
    const cleanModel = pModel.replace(/[^a-z0-9]/g, '');
    const cleanSearch = decodedId.replace(/[^a-z0-9]/g, '');

    return (
      pId === decodedId ||
      pModel === decodedId ||
      cleanId === cleanSearch ||
      cleanModel === cleanSearch
    );
  });

  if (!pump) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
          <PackageCheck className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-black text-slate-900">Pump Model Not Found</h2>
        <p className="text-slate-500 max-w-md mx-auto">
          The pump set specification you are looking for might have been updated or moved.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Product Models</span>
        </Link>
      </div>
    );
  }

  const displayPrice = pump.price1Phase || pump.price3Phase || pump.price2Phase;
  const pumpImage = getPumpImage(pump);

  // Find category details
  const categoryInfo = CATEGORIES.find((c) => c.id === pump.category);

  // Related models in the same series
  const relatedPumps = ALL_PUMPS.filter(
    (p) => p.series === pump.series && p.id !== pump.id
  ).slice(0, 3);

  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb Navigation & Back Button */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/products" className="hover:text-red-600 transition-colors">Products Catalog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to={`/products?category=${pump.category}`} className="hover:text-red-600 transition-colors">
            {pump.category} Series
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{pump.model}</span>
        </nav>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Hero Showcase Banner */}
      <RevealOnScroll animation="fade-up">
        <div className="bg-[#080d16] rounded-[36px] p-6 sm:p-10 lg:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Glowing Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Model Titles, Visual, Badges, Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden bg-slate-900 border-2 border-white/20 shrink-0 shadow-2xl relative group">
                  <img
                    src={pumpImage}
                    alt={pump.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/40">
                      {pump.series}
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40 uppercase flex items-center gap-1">
                      <Droplet className="w-3.5 h-3.5 fill-current" /> {pump.category} Borewell Set
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> BIS ISI Certified
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                    {pump.model}
                  </h1>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Heavy-duty submersible pump set designed for {pump.phase} power supply with nominal {pump.outlet} discharge outlet. Built with 100% pure copper winding and CNC-turned stainless steel rotor shaft.
              </p>

              {/* Quick Spec Matrix Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Rated Power</span>
                  <span className="text-base sm:text-lg font-black text-white mt-0.5 block">{pump.hp} HP ({pump.kw} kW)</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Stages</span>
                  <span className="text-base sm:text-lg font-black text-white mt-0.5 block">{pump.stages} STG</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Operating Head</span>
                  <span className="text-base sm:text-lg font-black text-red-400 mt-0.5 block">{pump.headRange || 'Standard'}</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Discharge Flow</span>
                  <span className="text-base sm:text-lg font-black text-emerald-400 mt-0.5 block">{pump.dischargeRange || 'High Flow'}</span>
                </div>
              </div>
            </div>

            {/* Right: Pricing Box & Action Card */}
            <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase text-red-400 tracking-wider block">
                  Catalog MRP Pricing (INR)
                </span>
                
                <div className="space-y-1.5 pt-1">
                  {pump.price1Phase && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs font-bold text-slate-300">Single Phase (1-Ph):</span>
                      <span className="text-lg font-black text-white">₹{pump.price1Phase.toLocaleString('en-IN')}/-</span>
                    </div>
                  )}
                  {pump.price2Phase && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs font-bold text-slate-300">Two Phase (2-Ph):</span>
                      <span className="text-lg font-black text-white">₹{pump.price2Phase.toLocaleString('en-IN')}/-</span>
                    </div>
                  )}
                  {pump.price3Phase && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs font-bold text-slate-300">Three Phase (3-Ph):</span>
                      <span className="text-lg font-black text-white">₹{pump.price3Phase.toLocaleString('en-IN')}/-</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Direct WhatsApp Quote Action */}
              <div className="space-y-3 pt-2">
                <WhatsAppButton 
                  modelName={pump.model} 
                  text="Request Official WhatsApp Quote" 
                  className="w-full py-4 text-xs sm:text-sm rounded-full shadow-lg justify-center" 
                />
                
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all text-xs flex items-center justify-center gap-2 border border-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Factory Sales Desk: {COMPANY_INFO.phone}</span>
                </Link>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Factory Direct Supply
                </span>
                <span>Padvala, Rajkot</span>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>

      {/* Performance Matrix Table (LPM vs Head) */}
      {pump.flowData && Object.keys(pump.flowData).length > 0 && (
        <RevealOnScroll animation="fade-up">
          <section className="bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-black uppercase tracking-wider mb-1">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Hydraulic Test Bench</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Discharge (LPM) vs Total Head (Meters) Matrix
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-500">
                Calibrated to IS:8034 / IS:14220 Standards
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-100 text-slate-800 font-black border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4 bg-slate-200/80">Water Discharge (LPM)</th>
                    {Object.keys(pump.flowData).map((lpm) => (
                      <th key={lpm} className="py-3.5 px-3 text-center bg-sky-50 text-sky-950 font-black">
                        {lpm} LPM
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-4 px-4 font-black text-slate-900 bg-slate-50 border-r border-slate-100">
                      Total Head (Meters)
                    </td>
                    {Object.values(pump.flowData).map((head, idx) => (
                      <td key={idx} className="py-4 px-3 text-center font-black text-red-600 text-sm sm:text-base border-r border-slate-100 last:border-r-0">
                        {head} m
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </RevealOnScroll>
      )}

      {/* Material of Construction (MOC) Grid */}
      <RevealOnScroll animation="fade-up">
        <section className="bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block">Engineering Specifications</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Standard Material of Construction (MOC)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-bold uppercase">Motor Shaft</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Stainless Steel AISI 410</h4>
                <p className="text-xs text-slate-500 mt-0.5">High tensile ground and balanced shaft.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-bold uppercase">Motor Outer Shell</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Stainless Steel AISI 202 / 304</h4>
                <p className="text-xs text-slate-500 mt-0.5">Corrosion resistant water jacket.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-bold uppercase">Impeller & Bowls</span>
                <h4 className="font-extrabold text-slate-900 text-sm">GF30 Polymer / SS 410</h4>
                <p className="text-xs text-slate-500 mt-0.5">Engineered for smooth sand-resistant hydraulic flow.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-bold uppercase">Thrust Bearing System</span>
                <h4 className="font-extrabold text-slate-900 text-sm">Carbon v/s SS / Silicon Carbide</h4>
                <p className="text-xs text-slate-500 mt-0.5">Heavy duty submerged thrust pads.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-bold uppercase">Stator Winding Wire</span>
                <h4 className="font-extrabold text-slate-900 text-sm">99.9% Pure EC Copper</h4>
                <p className="text-xs text-slate-500 mt-0.5">Dual coated high dielectric insulation wire.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-bold uppercase">Cast Iron Components</span>
                <h4 className="font-extrabold text-slate-900 text-sm">CI FG:200 CED Coated</h4>
                <p className="text-xs text-slate-500 mt-0.5">Cathodic Electrodeposition rust shield.</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Operating Limits & Highlights */}
      <RevealOnScroll animation="fade-up">
        <section className="bg-[#080d16] rounded-[32px] p-6 sm:p-10 text-white border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block">Installation Benchmarks</span>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Operating Parameters & Field Reliability
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-slate-400 font-bold block mb-1">Voltage Tolerance</span>
              <span className="text-base font-black text-white">160V – 240V</span>
              <span className="text-[11px] text-slate-400 block mt-1">Non-stop rural duty</span>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-slate-400 font-bold block mb-1">Max Liquid Temp</span>
              <span className="text-base font-black text-white">Up to 45°C</span>
              <span className="text-[11px] text-slate-400 block mt-1">Water lubricated motor</span>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-slate-400 font-bold block mb-1">Max Sand Content</span>
              <span className="text-base font-black text-white">50 g / m³</span>
              <span className="text-[11px] text-slate-400 block mt-1">Sand-guard bushing</span>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <span className="text-slate-400 font-bold block mb-1">Ingress Protection</span>
              <span className="text-base font-black text-white">IP 68 Submersible</span>
              <span className="text-[11px] text-slate-400 block mt-1">Continuous underwater</span>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Key Engineering Features & Applications (if present) */}
      {((pump.features && pump.features.length > 0) || (pump.applications && pump.applications.length > 0)) && (
        <RevealOnScroll animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pump.features && pump.features.length > 0 && (
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-red-600 font-black text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Special Engineering Highlights</span>
                </div>
                <ul className="space-y-2.5">
                  {pump.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {pump.applications && pump.applications.length > 0 && (
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-sky-600 font-black text-sm">
                  <Droplet className="w-4 h-4" />
                  <span>Recommended Usage & Applications</span>
                </div>
                <ul className="space-y-2.5">
                  {pump.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </RevealOnScroll>
      )}

      {/* Related Models in the Same Series */}
      {relatedPumps.length > 0 && (
        <RevealOnScroll animation="fade-up">
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-black uppercase text-red-600 tracking-wider block">More in this Series</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Related {pump.series} Pump Sets
                </h2>
              </div>
              <Link
                to={`/products?series=${encodeURIComponent(pump.series)}`}
                className="text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
              >
                <span>View All {pump.series}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPumps.map((relPump) => (
                <PumpCard key={relPump.id} pump={relPump} onSelect={() => {}} />
              ))}
            </div>
          </section>
        </RevealOnScroll>
      )}

    </div>
  );
};

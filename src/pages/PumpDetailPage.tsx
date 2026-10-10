import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_PUMPS, COMPANY_INFO, CATEGORIES, getPumpImage } from '../data/pumpsData';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PumpCard } from '../components/PumpCard';
import RevealOnScroll from '../components/RevealOnScroll';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Lightning as Zap, 
  Stack as Layers, 
  Gauge, 
  Pulse as Activity, 
  Wrench, 
  Drop as Droplet, 
  CheckCircle as CheckCircle2, 
  Phone, 
  CaretRight as ChevronRight, 
  Medal as Award,
  Factory,
  Package as PackageCheck,
  FileText,
  DownloadSimple as Download
} from '@phosphor-icons/react';

export const PumpDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find pump by ID or matching model slug
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Product Models</span>
        </Link>
      </div>
    );
  }

  const displayPrice = pump.price1Phase || pump.price3Phase || pump.price2Phase;
  const pumpImage = getPumpImage(pump);

  // Related models in the same series
  const relatedPumps = ALL_PUMPS.filter(
    (p) => p.series === pump.series && p.id !== pump.id
  ).slice(0, 3);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 sm:pb-24 pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
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
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border-2 border-slate-200 shadow-2xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalog</span>
        </button>
      </div>

      {/* Main Hero Showcase Banner */}
      <RevealOnScroll animation="fade-up">
        <div className="bg-[#080d16] rounded-3xl p-6 sm:p-10 lg:p-12 text-white border-2 border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Model Titles, Visual, Badges, Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/20 shrink-0 shadow-xl relative group">
                  <img
                    src={pumpImage}
                    alt={pump.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600/20 text-red-300 border border-red-500/40">
                      {pump.series}
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-sky-600/20 text-sky-300 border border-sky-500/40 uppercase flex items-center gap-1">
                      <Droplet className="w-3.5 h-3.5 fill-current" /> {pump.category} Borewell Set
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> BIS IS:8034 Verified
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-mono">
                    {pump.model}
                  </h1>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Heavy-duty submersible pump set designed for {pump.phase} power supply with nominal {pump.outlet} discharge outlet. Built with 100% EC grade pure copper winding and CNC-turned stainless steel rotor shaft.
              </p>

              {/* Quick Spec Matrix Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900 rounded-2xl p-3.5 border border-slate-700 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Rated Power</span>
                  <span className="text-base sm:text-lg font-black text-amber-400 mt-0.5 block font-mono">{pump.hp} HP ({pump.kw} kW)</span>
                </div>

                <div className="bg-slate-900 rounded-2xl p-3.5 border border-slate-700 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Stages</span>
                  <span className="text-base sm:text-lg font-black text-white mt-0.5 block font-mono">{pump.stages} STG</span>
                </div>

                <div className="bg-slate-900 rounded-2xl p-3.5 border border-slate-700 text-center">
                  <span className="text-[10px] uppercase font-bold text-sky-300 block tracking-wider">Operating Head</span>
                  <span className="text-base sm:text-lg font-black text-sky-400 mt-0.5 block font-mono">{pump.headRange || 'Standard'}</span>
                </div>

                <div className="bg-slate-900 rounded-2xl p-3.5 border border-slate-700 text-center">
                  <span className="text-[10px] uppercase font-bold text-emerald-300 block tracking-wider">Discharge Flow</span>
                  <span className="text-base sm:text-lg font-black text-emerald-400 mt-0.5 block font-mono">{pump.dischargeRange || 'High Flow'}</span>
                </div>
              </div>
            </div>

            {/* Right: Pricing Box & Action Card */}
            <div className="lg:col-span-5 bg-slate-900 border-2 border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase text-red-400 tracking-wider block">
                  Ex-Factory MRP Pricing (INR)
                </span>
                
                <div className="space-y-2 pt-1">
                  {pump.price1Phase && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-xs font-bold text-slate-300">Single Phase (220V):</span>
                      <span className="text-lg font-black text-white font-mono">₹{pump.price1Phase.toLocaleString('en-IN')}/-</span>
                    </div>
                  )}
                  {pump.price2Phase && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-xs font-bold text-slate-300">Two Phase (2-Ph):</span>
                      <span className="text-lg font-black text-white font-mono">₹{pump.price2Phase.toLocaleString('en-IN')}/-</span>
                    </div>
                  )}
                  {pump.price3Phase && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-xs font-bold text-slate-300">Three Phase (415V):</span>
                      <span className="text-lg font-black text-white font-mono">₹{pump.price3Phase.toLocaleString('en-IN')}/-</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <WhatsAppButton 
                  modelName={pump.model} 
                  text="Request Official WhatsApp Quote" 
                  className="w-full py-3.5 text-xs sm:text-sm rounded-2xl shadow-lg justify-center font-bold" 
                />
                
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all text-xs flex items-center justify-center gap-2 border border-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Plant Sales Desk: {COMPANY_INFO.phone}</span>
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Padvala Plant Direct
                </span>
                <span>Fast 48-Hour Dispatch</span>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>

      {/* Performance Curve Data Table (Head vs LPM) */}
      {pump.flowData && Object.keys(pump.flowData).length > 0 && (
        <RevealOnScroll animation="fade-up">
          <section className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-300 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b-2 border-slate-100">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Total Head (Meters) vs Discharge Flow (LPM)
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-500">
                Calibrated to IS:8034 Standards
              </span>
            </div>

            <div className="overflow-x-auto border-2 border-slate-200 rounded-2xl">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-900 text-white font-black uppercase text-[11px]">
                  <tr>
                    <th className="p-3.5 pl-5">Total Head (Meters)</th>
                    {Object.keys(pump.flowData).map((headKey) => (
                      <th key={headKey} className="p-3.5 text-center font-mono">
                        {headKey}m
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-slate-50">
                  <tr>
                    <td className="p-3.5 pl-5 font-black text-slate-900">Flow Rate (LPM)</td>
                    {Object.values(pump.flowData).map((flowVal, fIdx) => (
                      <td key={fIdx} className="p-3.5 text-center font-mono font-black text-sky-700">
                        {flowVal} LPM
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </RevealOnScroll>
      )}

      {/* Materials of Construction (MOC) Specification Matrix */}
      <RevealOnScroll animation="fade-up">
        <section className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-300 shadow-lg space-y-6">
          <div className="border-b-2 border-slate-100 pb-4">
            <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-1">
              Engineering Specs
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Material of Construction (MOC) & Electrical Specs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Motor Stator Winding</span>
              <span className="text-sm font-black text-slate-900 block">100% EC Pure Copper (Dual Coated)</span>
              <span className="text-xs text-slate-500 block">Class F / H synthetic water-resistant insulation</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rotor Shaft</span>
              <span className="text-sm font-black text-slate-900 block">SS-410 / SS-304 Precision CNC Ground</span>
              <span className="text-xs text-slate-500 block">Dynamic balanced within 0.02mm runout</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Pump Bowls & Diffusers</span>
              <span className="text-sm font-black text-slate-900 block">Cast Iron FG-200 / SS-304</span>
              <span className="text-xs text-slate-500 block">Multi-layer CED anti-corrosion coating</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Impellers</span>
              <span className="text-sm font-black text-slate-900 block">Sand-Resistant Glass-Filled Noryl</span>
              <span className="text-xs text-slate-500 block">Radial / Mix flow hydrodynamic geometry</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Bearings & Bushings</span>
              <span className="text-sm font-black text-slate-900 block">Water Lubricated Carbon / Bronze</span>
              <span className="text-xs text-slate-500 block">Zero maintenance underwater life</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Operating Voltage</span>
              <span className="text-sm font-black text-slate-900 block">160V – 240V (1-Ph) / 350V – 440V (3-Ph)</span>
              <span className="text-xs text-slate-500 block">50 Hz AC Standard Supply</span>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Related Models in Series */}
      {relatedPumps.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Related Models in {pump.series} Series
            </h3>
            <Link to={`/products?series=${encodeURIComponent(pump.series)}`} className="text-xs font-bold text-red-600 hover:text-red-700">
              View All Series Models →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPumps.map((relPump) => (
              <PumpCard key={relPump.id} pump={relPump} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

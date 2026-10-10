import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Envelope as Mail, 
  Globe, 
  ShieldCheck, 
  Medal as Award, 
  CaretRight as ChevronRight,
  Drop as Droplet,
  Plant as Leaf,
  Clock,
  PaperPlaneTilt as Send,
  Lightning as Zap,
  CheckCircle as CheckCircle2,
  ArrowUpRight
} from '@phosphor-icons/react';
import { COMPANY_INFO, CATEGORIES } from '../data/pumpsData';
import { WhatsAppButton } from './WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 relative overflow-hidden border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Factory Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <Link to="/" className="inline-block -ml-2">
                <img 
                  src="/images/superflow-logo.png" 
                  alt="SuperFlow Submersible Pump Logo" 
                  className="h-16 w-auto object-contain "
                />
              </Link>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                <strong className="text-slate-900 font-black">Royal Manufacture</strong> has been a trusted leader in precision agricultural, industrial, and domestic submersible pump engineering in Padvala, Rajkot since 2000.
              </p>
            </div>

            {/* Certifications Badge Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[11px] font-black text-red-600 flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" /> IS: 8034
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[11px] font-black text-sky-700 flex items-center gap-1.5 shadow-2xs">
                <Droplet className="w-3.5 h-3.5 text-sky-600 fill-sky-600/30" /> IS: 14220
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-black text-emerald-700 flex items-center gap-1.5 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-emerald-600" /> ISO 9001:2008
              </span>
            </div>

            {/* Factory Address Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-slate-700">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 pt-1 border-t border-slate-100">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-red-600 font-bold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Submersible Pump Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span>Pump Ranges</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="group flex items-center justify-between text-slate-600 hover:text-red-600 transition-colors py-1"
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all" />
                      <span>{cat.name}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-600 uppercase font-mono font-bold">
                      {cat.boreSize.split(' ')[0]}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products?series=Turbo+(Low+Volt)"
                  className="group flex items-center justify-between text-slate-600 hover:text-red-600 transition-colors py-1"
                >
                  <span className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all" />
                    <span>Turbo Low-Volt (160V)</span>
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-black uppercase">
                    Rural Tech
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Quality (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-2 py-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-2 py-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Catalog Matrix</span>
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-2 py-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Applications</span>
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-2 py-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Quality Bench</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-2 py-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Dealer Desk</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Operations & Factory Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>Plant Working Hours</span>
            </h4>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3 text-xs">
              <div className="flex items-center gap-2 text-slate-900 font-black">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Mon – Sat: 8:30 AM – 7:30 PM</span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                Direct factory dispatches & technical consultation desk active during standard operating hours.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-600 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700">Fast 48-Hour Pan-India Dispatch</span>
              </div>
            </div>

            <div className="pt-1">
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mb-0.5">Direct Factory Web</span>
              <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                {COMPANY_INFO.website}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Signature Bar */}
        <div className="pt-8 mt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap text-center md:text-left">
            <span>© {new Date().getFullYear()} <strong className="text-slate-800 font-bold">Royal Manufacture</strong> (SuperFlow Submersible Pumps).</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-600 font-semibold">Manufactured with Pride in Padvala, Rajkot (Gujarat) 🇮🇳</span>
          </div>

          <div className=" text-slate-600 font-bold">
            Designed & Developed by <a href='https://digi-trend.com/' target='_blank' className='underline'>digi-trend.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
};


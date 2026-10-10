import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Envelope as Mail, 
  Globe, 
  ShieldCheck, 
  Medal as Award, 
  CaretRight as ChevronRight, 
  Drop as Droplet, 
  Clock 
} from '@phosphor-icons/react';
import { COMPANY_INFO, CATEGORIES } from '../data/pumpsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 relative overflow-hidden border-t border-slate-200">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Col 1: Brand & Factory Details (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-3">
              <Link to="/" className="inline-block -ml-2">
                <img 
                  src="/images/superflow-logo.png" 
                  alt="SuperFlow Submersible Pump Logo" 
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <strong className="text-slate-900 font-bold">Royal Manufacture</strong> has been a trusted leader in precision agricultural, industrial, and domestic submersible pump engineering in Padvala, Rajkot since 2000.
              </p>
            </div>

            {/* Certifications Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-0.5 rounded-[3px] bg-red-50 border border-red-200 text-[11px] font-bold text-red-600 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" /> IS: 8034
              </span>
              <span className="px-2.5 py-0.5 rounded-[3px] bg-sky-50 border border-sky-200 text-[11px] font-bold text-sky-700 flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-sky-600" /> IS: 14220
              </span>
              <span className="px-2.5 py-0.5 rounded-[3px] bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-600" /> ISO 9001:2008
              </span>
            </div>

            {/* Factory Address Card */}
            <div className="p-3.5 rounded-[3px] bg-white border border-slate-200 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 pt-1 border-t border-slate-100">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-red-600 font-semibold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Submersible Pump Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-[3px] bg-red-600" />
              <span>Pump Ranges</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm font-semibold">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="group flex items-center justify-between text-slate-600 hover:text-red-600 transition-colors py-0.5"
                  >
                    <span className="flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 transition-colors" />
                      <span>{cat.name}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">
                      {cat.boreSize.split(' ')[0]}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products?series=Turbo+(Low+Volt)"
                  className="group flex items-center justify-between text-slate-600 hover:text-red-600 transition-colors py-0.5"
                >
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 transition-colors" />
                    <span>Turbo Low-Volt (160V)</span>
                  </span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-[3px] bg-red-100 text-red-700 font-bold uppercase">
                    160V
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Quality (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-[3px] bg-sky-600" />
              <span>Company</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm font-semibold">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Catalog Matrix</span>
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Applications</span>
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Quality Bench</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-sky-700 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Dealer Desk</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Operations & Factory Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-[3px] bg-emerald-600" />
              <span>Plant Operations</span>
            </h4>

            <div className="p-3.5 rounded-[3px] bg-white border border-slate-200 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Mon – Sat: 8:30 AM – 7:30 PM</span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed font-normal">
                Direct factory dispatches & technical consultation desk active during standard operating hours.
              </p>
              <div className="pt-1.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                <span className="w-1.5 h-1.5 rounded-[3px] bg-emerald-500" />
                <span>Fast 48-Hour Pan-India Dispatch</span>
              </div>
            </div>

            <div className="pt-1">
              <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mb-0.5">Direct Factory Web</span>
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                {COMPANY_INFO.website}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Signature Bar */}
        <div className="pt-6 mt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap text-center md:text-left">
            <span>© {new Date().getFullYear()} <strong className="text-slate-800 font-semibold">Royal Manufacture</strong> (SuperFlow Submersible Pumps).</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-600 font-medium">Padvala, Rajkot (Gujarat) 🇮🇳</span>
          </div>

          <div className="text-slate-600 font-medium">
            Designed & Developed by <a href="https://digi-trend.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-slate-900">digi-trend.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

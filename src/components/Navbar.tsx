import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight,
  PackageCheck,
  Send,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/pumpsData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', label: 'Overview' },
    { name: 'About Us', path: '/about', label: 'Company & Facility' },
    { name: 'Products Catalog', path: '/products', label: '150+ Pump Sets' },
    { name: 'Applications', path: '/applications', label: 'Farm, Home & Industry' },
    { name: 'Quality & ISO', path: '/quality', label: 'BIS ISI & Certifications' },
    { name: 'Contact Us', path: '/contact', label: 'Factory & Sales Desk' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all w-full">
        {/* Top Industry Utility Bar (Inspired by Silver Pumps & Texmo) */}
        <div className="hidden md:flex items-center justify-between py-1.5 px-4 sm:px-6 lg:px-8 bg-[#080d16] text-white text-[11px] font-bold border-b border-slate-800">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Plant: Padvala, Rajkot (Gujarat)</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>BIS ISI & ISO 9001:2008 Certified Plant</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-red-400" />
              <span>Factory Sales: <strong className="text-white font-mono">{COMPANY_INFO.phone}</strong></span>
            </a>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider text-[10px] font-black">
              Become a Dealer →
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="py-1 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img 
                  src="/images/superflow-logo.png" 
                  alt="SuperFlow Submersible Pump Logo" 
                  className="h-10 sm:h-14 w-auto object-contain drop-shadow-xs"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-bold rounded-xl transition-all ${
                    isActive(link.path)
                      ? 'text-red-600 bg-red-50/80 shadow-xs'
                      : 'text-slate-700 hover:text-red-600 hover:bg-slate-100/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Action Button */}
            <div className="hidden lg:flex items-center gap-3">
             
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md shadow-red-600/20 transition-all hover:scale-105"
              >
                <Send className="w-3.5 h-3.5" />
                Dealer Inquiry
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2.5 rounded-2xl text-slate-800 hover:text-red-600 hover:bg-red-50 focus:outline-none transition-colors border border-slate-200 shadow-2xs cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay - Non-scrollable viewport fitting */}
      <div
        className={`fixed inset-0 z-50 lg:hidden bg-slate-950/40 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-0 h-[100dvh] max-h-[100dvh] bg-white flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar inside Fullscreen Menu */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100 bg-white sticky top-0 shrink-0 z-20">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <img 
                src="/images/superflow-logo.png" 
                alt="SuperFlow Submersible Pump Logo" 
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 transition-colors cursor-pointer border border-slate-200/80 shadow-2xs"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Links List - Compact & Non-Scrollable */}
          <div className="px-4 py-2 flex-1 flex flex-col space-y-1 overflow-hidden">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 pb-0.5">
              Navigation Menu
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${
                    active
                      ? 'bg-red-50 text-red-600 border border-red-200/80 shadow-2xs'
                      : 'text-slate-800 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        active ? 'bg-red-600 animate-pulse' : 'bg-slate-300'
                      }`}
                    />
                    <div>
                      <span className={`text-[13px] font-bold block leading-snug ${active ? 'text-red-600' : 'text-slate-900'}`}>
                        {link.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium block leading-tight">
                        {link.label}
                      </span>
                    </div>
                  </div>

                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                    active ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Action Area & Factory Info */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/90 space-y-2 shrink-0">
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-sky-50 text-sky-800 font-bold text-xs border border-sky-200/80 shadow-2xs active:scale-[0.98] transition-transform text-center"
              >
                <PackageCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="truncate">Products</span>
              </Link>
              
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-md shadow-red-600/20 active:scale-[0.98] transition-transform text-center"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Get Quote</span>
              </Link>
            </div>

            {/* Factory Hotline Pill */}
            <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>ISO & BIS ISI</span>
              </span>
              <span className="flex items-center gap-1 text-slate-700 font-bold">
                <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

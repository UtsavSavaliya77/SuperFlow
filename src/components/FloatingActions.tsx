import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pumpsData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello SuperFlow (Royal Manufacture), I would like to inquire about your submersible pump sets & dealership.'
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${whatsappMessage}`;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3 pointer-events-none"
    >
      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
        className={`group relative w-12 h-12 rounded-full bg-[#080d16] text-white hover:bg-red-600 border border-slate-700/80 shadow-xl flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 active:scale-95 ${
          showBackToTop
            ? 'opacity-100 translate-y-0 scale-100 shadow-slate-900/30'
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        
        {/* Tooltip on desktop */}
        <span className="absolute right-full mr-3 px-2.5 py-1 bg-[#080d16] text-white text-[11px] font-bold rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-slate-700 hidden sm:block">
          Back to Top
        </span>
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SuperFlow on WhatsApp"
        className="group relative w-13 h-13 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa51] text-white shadow-xl shadow-emerald-900/25 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        {/* Animated Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping -z-10 group-hover:animate-none" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-6 h-6 text-white" />

        {/* Floating Tooltip Pill on desktop */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#080d16] text-white text-xs font-bold rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-slate-700 items-center gap-1.5 hidden sm:flex">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};

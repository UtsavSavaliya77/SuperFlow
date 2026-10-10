import React, { useState, useEffect } from 'react';
import { ArrowUp } from '@phosphor-icons/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pumpsData';
import { getLenis } from '../App';

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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Hello SuperFlow (Royal Manufacture), I would like to inquire about your submersible pump sets & dealership.'
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${whatsappMessage}`;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2 pointer-events-none"
    >
      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
        className={`group relative w-10 h-10 rounded-[3px] bg-[#080d16] text-white hover:bg-red-600 border border-slate-700 flex items-center justify-center transition-colors pointer-events-auto cursor-pointer ${
          showBackToTop
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4" />
        
        {/* Tooltip on desktop */}
        <span className="absolute right-full mr-2 px-2 py-1 bg-[#080d16] text-white text-[11px] font-semibold rounded-[3px] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 hidden sm:block">
          Back to Top
        </span>
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SuperFlow on WhatsApp"
        className="group relative w-11 h-11 sm:w-10 sm:h-10 rounded-[3px] bg-[#00a859] hover:bg-[#008f4c] text-white flex items-center justify-center transition-colors pointer-events-auto cursor-pointer"
      >
        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-5 h-5 text-white" />

        {/* Floating Tooltip on desktop */}
        <span className="absolute right-full mr-2 px-2.5 py-1 bg-[#080d16] text-white text-xs font-semibold rounded-[3px] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};

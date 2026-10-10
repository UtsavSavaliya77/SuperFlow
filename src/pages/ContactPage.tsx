import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/pumpsData';
import { 
  MapPin, 
  Phone, 
  Envelope as Mail, 
  PaperPlaneTilt as Send, 
  Buildings as Building2,
  CaretRight as ChevronRight,
  ShieldCheck,
  Medal as Award,
  Factory,
  Clock
} from '@phosphor-icons/react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import RevealOnScroll from '../components/RevealOnScroll';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    inquiryType: 'dealership',
    category: 'V-4',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message with user-filled details
    const text = `*New SuperFlow Factory Inquiry*\n` +
      `--------------------------\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Location:* ${formData.city}, ${formData.state}\n` +
      `*Inquiry Type:* ${formData.inquiryType}\n` +
      `*Interested Category:* ${formData.category}\n` +
      `*Message:* ${formData.message || 'Please share catalog & dealership terms.'}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-24">
      
      {/* 1. Cinematic Hero Header Section */}
      <section className="relative bg-[#080d16] text-white border-b border-red-600 overflow-hidden w-full">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Royal Manufacture Corporate Headquarters"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#080d16]/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 space-y-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">Contact Us</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
            Connect with SuperFlow Factory
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-3xl">
            Connect directly with Royal Manufacture sales and technical engineering representatives for authorized dealerships, wholesale pricing, price quotations, and government tender inquiries.
          </p>
        </div>
      </section>

      {/* 2. Main Dual-Column Contact & Inquiry Portal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Factory Information */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll animation="fade-right">
              <div className="bg-white rounded-[3px] p-6 sm:p-7 border border-slate-300 space-y-5">
                
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-0.5">
                    Direct Contact
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Plant & Corporate Office
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Manufacturer Info */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-[3px] bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Manufacturer</span>
                      <span className="font-bold text-slate-900 text-sm">{COMPANY_INFO.parentCompany}</span>
                      <p className="text-slate-600 text-xs mt-0.5 font-medium">Brand: {COMPANY_INFO.name} Submersible Pumps</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-[3px] bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Plant Location</span>
                      <p className="font-semibold text-slate-800 text-xs sm:text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-[3px] bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Sales Desk Hotline</span>
                      <a
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="font-bold text-slate-900 hover:text-red-600 transition-colors text-sm font-mono block"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-[3px] bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Official Email</span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-semibold text-slate-900 hover:text-red-600 transition-colors text-xs font-mono block"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <WhatsAppButton 
                    text="Direct WhatsApp Line" 
                    className="w-full !py-2.5 !rounded-[3px] text-xs font-bold" 
                  />
                </div>

              </div>
            </RevealOnScroll>

            {/* Quick Assurance Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-[3px] bg-white border border-slate-200 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">ISO 9001:2008</span>
                  <span className="text-[10px] text-slate-500 block">Certified Quality</span>
                </div>
              </div>

              <div className="p-3.5 rounded-[3px] bg-white border border-slate-200 flex items-center gap-2.5">
                <Award className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">BIS IS:8034</span>
                  <span className="text-[10px] text-slate-500 block">ISI Government Lic.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Factory Inquiry Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll animation="fade-left">
              <div className="bg-white rounded-[3px] p-6 sm:p-8 border border-slate-300 space-y-5">
                
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-0.5">
                    Online Inquiry
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Send Direct Factory Message
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out the technical requirements below for direct pricing & dealership criteria.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-slate-50 border border-slate-300 rounded-[3px] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Contact Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-300 rounded-[3px] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded-[3px] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        City / District *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Rajkot, Jaipur"
                        className="w-full bg-slate-50 border border-slate-300 rounded-[3px] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. Gujarat"
                        className="w-full bg-slate-50 border border-slate-300 rounded-[3px] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-[3px] px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-red-600"
                      >
                        <option value="dealership">Authorized Dealership / Distributorship</option>
                        <option value="bulk">Bulk Supply / Wholesale Orders</option>
                        <option value="retail">Customer Single Pump Purchase</option>
                        <option value="government">Government Tender / EPC Project</option>
                        <option value="service">Technical Service & Spare Parts</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Interested Pump Series
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-[3px] px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-red-600"
                      >
                        <option value="V-4">4" V-4 Borewell Submersible</option>
                        <option value="V-6">6" V-6 Heavy Duty Borewell</option>
                        <option value="V-3">3" V-3 Slim Borewell</option>
                        <option value="Openwell">Openwell Submersible Sets</option>
                        <option value="V-5">5" V-5 Mix Flow Series</option>
                        <option value="all">Complete Product Catalog</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Specific Requirements / Borewell Depth
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required head in feet/meters, discharge flow LPM, motor HP, or quantity..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-[3px] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-[3px] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Factory Sales Desk</span>
                    </button>
                  </div>

                </form>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>

    </div>
  );
};

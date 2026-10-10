import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, CATEGORIES } from '../data/pumpsData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Building2,
  ChevronRight,
  ShieldCheck,
  Award,
  Factory,
  Check,
  Clock,
  ExternalLink
} from 'lucide-react';
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
      <section className="relative bg-[#080d16] text-white border-b-2 border-red-600 overflow-hidden w-full">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Royal Manufacture Corporate Headquarters"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#080d16]/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 space-y-4 max-w-4xl">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">Contact Us</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans">
            Connect with SuperFlow Factory
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Connect directly with Royal Manufacture sales and technical engineering representatives for authorized dealerships, wholesale pricing, price quotations, and government tender inquiries.
          </p>
        </div>
      </section>

      {/* 2. Main Dual-Column Contact & Inquiry Portal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Factory Information & Direct Touchpoints */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll animation="fade-right">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-300 shadow-lg space-y-6">
                
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Plant & Corporate Office
                  </h3>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Manufacturer Info */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 border-2 border-red-200 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Manufacturer</span>
                      <span className="font-extrabold text-slate-900 text-base">{COMPANY_INFO.parentCompany}</span>
                      <p className="text-slate-600 text-xs mt-0.5 font-medium">Brand: {COMPANY_INFO.name} Submersible Pumps</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 border-2 border-red-200 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Plant Location</span>
                      <p className="font-bold text-slate-800 text-xs sm:text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 border-2 border-emerald-200 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Sales Desk Hotline</span>
                      <a
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="font-black text-slate-900 hover:text-red-600 transition-colors text-base font-mono block"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 border-2 border-sky-200 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Official Email</span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-bold text-slate-800 hover:text-red-600 text-xs sm:text-sm break-all transition-colors block"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Quick Button */}
                <div className="pt-4 border-t border-slate-100">
                  <WhatsAppButton
                    text="Chat on WhatsApp"
                    className="w-full py-3 rounded-2xl text-xs sm:text-sm shadow-md"
                  />
                </div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: High-Converting Dealership & RFQ Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll animation="fade-left">
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-slate-300 shadow-xl space-y-6">
                
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-1">
                    Send Inquiry
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Dealership & Quotation Request
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below for immediate response from our Padvala sales engineering team.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 bg-emerald-50 rounded-2xl border-2 border-emerald-200 p-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black text-emerald-900">Inquiry Initiated!</h4>
                    <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                      Your inquiry details have been formatted for our WhatsApp sales desk. If WhatsApp did not open automatically, click the button below:
                    </p>
                    <WhatsAppButton
                      text="Open WhatsApp Desk"
                      className="py-3 px-6 rounded-xl"
                    />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Inquiry Type Radio / Pill Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                        Nature of Inquiry
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          { id: 'dealership', label: 'Dealership Application' },
                          { id: 'wholesale', label: 'Wholesale / Bulk Order' },
                          { id: 'technical', label: 'Technical Spec / Sizing' },
                        ].map((t) => (
                          <button
                            type="button"
                            key={t.id}
                            onClick={() => setFormData({ ...formData, inquiryType: t.id })}
                            className={`p-2.5 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer text-center ${
                              formData.inquiryType === t.id
                                ? 'bg-slate-900 text-white border-red-600 shadow-md'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name / Business Name"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                        />
                      </div>
                    </div>

                    {/* Email & Interested Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                          Interested Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-red-600"
                        >
                          <option value="V-4">4" V-4 Submersible Pumps</option>
                          <option value="V-6">6" V-6 Heavy Duty Pumps</option>
                          <option value="V-3">3" V-3 Slim Borewell Series</option>
                          <option value="Openwell">Openwell Submersible Series</option>
                          <option value="All">All Categories / Complete Spectrum</option>
                        </select>
                      </div>
                    </div>

                    {/* City & State Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                          City / District *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Rajkot, Jaipur, Pune"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                          State *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          placeholder="e.g. Gujarat, Rajasthan, MP"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                        />
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                        Inquiry Details / Borewell Depth
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify borewell depth, required HP, flow discharge, or dealership location..."
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-xl shadow-red-600/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                  </form>
                )}

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>

    </div>
  );
};

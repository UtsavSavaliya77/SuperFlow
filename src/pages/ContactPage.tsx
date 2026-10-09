import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/pumpsData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  Building2,
  Leaf,
  Droplet,
  ChevronRight
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
    pumpModel: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      
      {/* Full-Bleed Cinematic Hero Header Section */}
      <section className="relative bg-[#080d16] text-white border-b border-slate-800 overflow-hidden w-full">
        {/* Background Image with Cinematic Dark Gradient Overlay */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Royal Manufacture SuperFlow Corporate Headquarters & Plant"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d16] via-[#080d16]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d16] via-transparent to-transparent pointer-events-none" />

        {/* Glowing Top Accent Line flush with fixed header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10 space-y-4 max-w-3xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">Contact Us</span>
          </nav>

          <span className="text-red-400 font-black text-xs uppercase tracking-widest block">
            Royal Manufacture • Submersible Pumps Factory Rajkot
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Contact & Inquiry
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Connect directly with the Royal Manufacture sales and technical engineering team for bulk orders, price quotations, and authorized dealership inquiries across India.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Info & Factory Location */}
          <div className="lg:col-span-5 h-full">
            <RevealOnScroll animation="fade-right" className="h-full">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-6">
                    Factory & Headquarters
                  </h3>

                  <div className="space-y-5 text-sm">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase text-slate-400 block">Manufacturer</span>
                        <span className="font-extrabold text-slate-900">{COMPANY_INFO.parentCompany}</span>
                        <p className="text-slate-600 text-xs mt-0.5 font-medium">Brand: {COMPANY_INFO.name}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase text-slate-400 block">Plant Location</span>
                        <p className="font-bold text-slate-800 text-xs sm:text-sm">{COMPANY_INFO.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase text-slate-400 block">Customer Care Desk</span>
                        <a
                          href={`tel:${COMPANY_INFO.phoneClean}`}
                          className="font-black text-slate-900 hover:text-red-600 transition-colors text-base"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                        <p className="text-[11px] text-slate-500 font-medium">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase text-slate-400 block">Official Sales Email</span>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="font-bold text-slate-800 hover:text-red-600 text-xs sm:text-sm break-all"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase text-slate-400 block">Official Portal</span>
                        <span className="font-bold text-slate-800 text-xs sm:text-sm">{COMPANY_INFO.website}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <WhatsAppButton text="Chat on WhatsApp Now" className="w-full py-3" />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 h-full">
            <RevealOnScroll animation="fade-left" className="h-full">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 h-full">
                <div>
                  <span className="text-red-600 font-black text-xs uppercase tracking-widest block mb-1">
                    Direct Submission
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    Send Inquiry or Apply for Dealership
                  </h3>
                </div>

                {submitted ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-slate-900">Inquiry Received Successfully!</h4>
                    <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                      Thank you for contacting Royal Manufacture (SuperFlow). Our Rajkot sales desk will reach out to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Patel"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Contact Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">City & State *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Rajkot, Gujarat"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Inquiry Purpose *</label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option value="dealership">New Dealership / Distributorship</option>
                          <option value="bulk-quotation">Bulk Commercial Quotation</option>
                          <option value="retail-purchase">Individual Retail Purchase</option>
                          <option value="technical-support">Technical & Spare Parts Support</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Pump Series of Interest</label>
                        <input
                          type="text"
                          value={formData.pumpModel}
                          onChange={(e) => setFormData({ ...formData, pumpModel: e.target.value })}
                          placeholder="e.g. V-4 Turbo, V-6 Mix Flow, Openwell"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Message / Requirements</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details about your borehole depth, required flow LPM, or current business dealership details..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Royal Manufacture</span>
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

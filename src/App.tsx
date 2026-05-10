/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  Facebook, 
  Play,
  Quote,
  MessageCircle,
  Heart,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 px-4 md:px-8' : 'py-4 px-4 md:px-8'}`}>
      <div className={`max-w-7xl mx-auto rounded-3xl glass-nav transition-all duration-300 ${isScrolled ? 'px-6 py-3' : 'px-8 py-4'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-blue text-white w-9 h-9 rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
              <span className="font-black text-xl tracking-tighter italic">M</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block whitespace-nowrap">S Moat <span className="font-light opacity-60 text-sm uppercase tracking-widest ml-1">Fabrications</span></span>
          </div>

          <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="md:text-xs lg:text-sm font-semibold text-slate-500 hover:text-brand-dark transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden lg:flex items-center justify-center bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-blue/20"
            >
              Contact Us
            </a>
            <button 
              className="md:hidden p-2 text-navy-900" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl p-6 border border-slate-100 overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="text-lg font-semibold text-slate-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  
                  <div className="pt-4 mt-2 border-t border-slate-100 px-1">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 ml-1">Quick Contact</p>
                    <div className="flex flex-row items-center justify-between gap-1 py-2 px-1 bg-slate-50 rounded-2xl">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                          <Phone size={12} className="text-brand-blue" />
                        </div>
                        <span className="text-[9px] font-black text-slate-700 whitespace-nowrap">01945 700061</span>
                      </div>
                      <div className="w-[1px] h-4 bg-slate-200" />
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                          <Mail size={12} className="text-brand-blue" />
                        </div>
                        <span className="text-[9px] font-black text-slate-700 truncate">smoatfab...</span>
                      </div>
                      <div className="w-[1px] h-4 bg-slate-200" />
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                          <Star size={12} className="text-brand-blue" />
                        </div>
                        <span className="text-[9px] font-black text-slate-700 whitespace-nowrap">08-17</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="#contact" 
                    className="w-full bg-brand-dark text-white py-4 rounded-xl text-center font-bold mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request Quote
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden bg-brand-dark">
      {/* Background Simulation Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=2070&auto=format&fit=crop" 
          alt="Metal Fabrication Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700/40 via-brand-dark to-black opacity-60"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff05 0px, #ffffff05 1px, transparent 1px, transparent 10px)' }}></div>
      </div>

      <div className="relative z-10 flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center">
        <div className="grid md:grid-cols-12 gap-12 items-center w-full py-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 text-white"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
              Metalwork <br />
              Built <span className="text-brand-accent">Properly.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-md leading-relaxed font-light">
              Family-run welding and fabrication for gates, railings, and bespoke metalwork across Wisbech and Cambridgeshire.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-blue text-white flex items-center justify-center text-[10px] font-bold">AJ</div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-slate-600 text-white flex items-center justify-center text-[10px] font-bold">BS</div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-navy-800 text-white flex items-center justify-center text-[10px] font-bold">MK</div>
              </div>
              <div>
                <div className="flex text-yellow-400 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs font-medium text-slate-400">
                  100% recommend from over 20 verified reviews
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 md:justify-self-end w-full max-w-sm"
          >
            <div className="bg-white rounded-[28px] shadow-2xl p-6 lg:p-8 border-t-4 border-brand-blue relative">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">Get a Free Quote</h3>
              <p className="text-xs lg:text-sm font-medium text-slate-500 mb-6 lg:mb-8">Tell us about your fabrication needs.</p>
              
              <form className="space-y-4 lg:space-y-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-4 py-2.5 lg:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 ml-1">Project Type</label>
                  <select className="w-full px-4 py-2.5 lg:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-sm font-medium appearance-none">
                    <option>Bespoke Gates</option>
                    <option>Railings & Balustrades</option>
                    <option>Welding Repairs</option>
                    <option>Commercial Projects</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 ml-1">Message / Location</label>
                  <textarea 
                    placeholder="Wisbech, Murrow, etc..." 
                    rows={2}
                    className="w-full px-4 py-2.5 lg:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all text-sm font-medium resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-dark text-white rounded-xl py-3.5 lg:py-4 font-bold text-xs lg:text-sm hover:bg-slate-800 transition-all shadow-xl shadow-brand-dark/20 flex items-center justify-center gap-2">
                  Request Quotation
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Availability Bar Inspired by Theme */}
      <div className="relative z-10 w-full bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600 font-medium text-sm">Available Mon-Sat for Fabrication Enquiries</span>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Call Us Direct</p>
              <p className="text-xl font-black text-brand-dark">01945 700061</p>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Workshop Hours</p>
              <p className="text-sm font-semibold text-slate-600">08:00 - 17:00 Weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/input_file_0.png" 
                alt="S Moat Fabrication Family History" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1527847263472-aa5338d178b8?q=80&w=1200&auto=format&fit=crop";
                }}
              />
            </div>
            
            {/* Quick Benefits Icons Under Photo */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-2">
                  <Heart size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 leading-tight">Family Run</span>
                <span className="text-[8px] font-bold text-slate-500 mt-1">2nd Generation Pride</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-2">
                  <MapPin size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 leading-tight">Wisbech Local</span>
                <span className="text-[8px] font-bold text-slate-500 mt-1">Based in Murrow</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-2">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 leading-tight">Direct Trust</span>
                <span className="text-[8px] font-bold text-slate-500 mt-1">No Middlemen</span>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-blue/5 rounded-3xl -z-0" />
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute top-12 left-6 md:left-[-1.5rem] lg:left-[-3rem] z-20 bg-white p-6 rounded-3xl shadow-2xl max-w-[280px] md:max-w-xs border-l-4 border-brand-blue"
            >
              <Quote className="text-navy-900 mb-3 opacity-20" size={32} />
              <p className="text-sm font-medium text-slate-700 italic leading-relaxed">
                "Needed custom railings for a steep driveway. S Moat came out, measured, and fitted them perfectly within two weeks."
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-navy-900 tracking-wider">Local Customer</span>
                <div className="flex gap-0.5 text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
              Establish Since 2012
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              About <span className="text-brand-blue">Us</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed font-bold">
              S Moat Fabrications is a family-run business based in Murrow, providing high-quality, local fabrication services across Wisbech and the surrounding areas.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed font-medium">
              We take pride in our direct, no-nonsense approach. When you call us, you're talking directly to the people who will be measuring, building, and fitting your project. Our roots in the agricultural and local community mean we build things to last.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-100/50 transition-colors border border-transparent hover:border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Direct Family Service</h4>
                  <p className="text-slate-500 mt-1 text-sm">Personal attention from start to finish on every project.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-100/50 transition-colors border border-transparent hover:border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Murrow Based Workshop</h4>
                  <p className="text-slate-500 mt-1 text-sm">Supporting Wisbech, Cambridgeshire and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactStrip = () => {
  return null; // Integrated into Hero component now
};

const ServicesSection = () => {
  const services = [
    {
      title: "Gates & Access",
      image: "https://images.unsplash.com/photo-1614705590304-41d3408805f3?q=80&w=800&auto=format&fit=crop",
      description: "Custom driveway and garden gates built to your exact widths and style preferences."
    },
    {
      title: "Railings & Balustrades",
      image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop",
      description: "Decorative and security railings for homes, commercial properties and public spaces."
    },
    {
      title: "Welding & Repairs",
      image: "https://images.unsplash.com/photo-1504328345606-17b27c9b01c1?q=80&w=800&auto=format&fit=crop",
      description: "On-site and workshop-based welding for agricultural machinery, vehicle chassis and structural steel."
    },
    {
      title: "Commercial Fabrication",
      image: "https://images.unsplash.com/photo-1516937618919-df42ef2be3bb?q=80&w=800&auto=format&fit=crop",
      description: "Batch fabrication for local contractors, industrial frame work and retail display steel."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Our Services</h2>
          <p className="text-lg text-slate-500 font-medium">
            Clear fabrication services for homes, farms, contractors and local businesses across the Wisbech area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl shadow-slate-200"
            >
              <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest group-hover:text-brand-accent transition-colors">
                  View Details <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoPreview = () => {
  return (
    <section className="pb-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-17b27c9b01c1?q=80&w=1200&auto=format&fit=crop" 
            alt="Process Video Thumbnail" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 rounded-full bg-white text-brand-dark flex items-center justify-center shadow-2xl"
            >
              <Play size={40} fill="currentColor" className="ml-2" />
            </motion.button>
          </div>
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between">
            <div className="max-w-md">
              <h3 className="text-3xl font-bold text-white mb-2">Our Fabrication Process</h3>
              <p className="text-white/80 font-medium leading-relaxed italic">
                See how we transform raw steel into high-quality bespoke pieces in our Murrow workshop.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-widest bg-brand-dark/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              Watch Workshop Tour
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "Do you make gates to measure?",
      a: "Yes, every single gate we produce is custom-measured. We visit your site, assess the levels, take precise measurements, and build the frame to ensure a perfect fit with appropriate gaps for hinges and latching."
    },
    {
      q: "Can you repair existing metalwork?",
      a: "Absolutely. We often repair rusted gate hinges, broken agricultural equipment, or damaged railings. If it's metal and can be saved, we can weld it or replace the failed sections."
    },
    {
      q: "Do you work with commercial and agricultural clients?",
      a: "Yes, a significant portion of our work is for local farms and commercial contractors. We handle everything from structural frame repairs to batch fabrication of brackets and fittings."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#F3F4F6]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Fabrication FAQ</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Getting Your Project Started</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl border transition-all duration-300 ${activeIndex === idx ? 'border-brand-blue shadow-xl' : 'border-slate-200'}`}
            >
              <button 
                className="w-full px-8 py-6 flex items-center justify-between text-left"
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`text-brand-blue transition-transform ${activeIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-slate-500 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=800&auto=format&fit=crop", height: "h-[300px]" },
    { src: "https://images.unsplash.com/photo-1621259182978-fbf9312267b8?q=80&w=800&auto=format&fit=crop", height: "h-[450px]" },
    { src: "https://images.unsplash.com/photo-1516937618919-df42ef2be3bb?q=80&w=800&auto=format&fit=crop", height: "h-[350px]" },
    { src: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop", height: "h-[400px]" },
    { src: "https://images.unsplash.com/photo-1504328345606-17b27c9b01c1?q=80&w=800&auto=format&fit=crop", height: "h-[350px]" },
    { src: "https://images.unsplash.com/photo-1614705590304-41d3408805f3?q=80&w=800&auto=format&fit=crop", height: "h-[450px]" },
  ];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Recent Work</h2>
          <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto">
            A visual proof section showing the kind of gates, railings and fabrication projects customers trust us with.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`${img.height} rounded-3xl overflow-hidden shadow-lg shadow-slate-200 hover:shadow-2xl transition-all duration-500`}
            >
              <img src={img.src} alt={`Project ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amanda H.",
      review: "Our gates look lovely but they also took on board our requirements for a little privacy while allowing our pet to see through the bottom. Fantastic craftsmanship.",
      rating: 5,
      source: "yell"
    },
    {
      name: "Julian Kirk",
      review: "Fantastic company producing quality fabrication. I have had two sets of large gates manufactured and fitted by Moat Fabrications and they are manufacturing a third set for me. I highly recommend them.",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Jess Simpson",
      review: "Had our electric gates designed & fitted by these guys! Spot on from start to finish, always only a message away if needed! Would definitely recommend to friends and family!",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Shannon P.",
      review: "Very impressed with the work and designs this company have achieved, they are very polite and down to earth people. Very reliable, would definitely recommend.",
      rating: 5,
      source: "yell"
    },
    {
      name: "Mark Ruthven",
      review: "I've had a sliding gate supplied and fitted by Moat Fabrications and the finish is excellent. Shane is a very talented engineer and I wouldn't hesitate to recommend him.",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Luke Conroy",
      review: "I was after some bespoke outdoor furniture and Shane was able to build exactly what I wanted. The welding is incredibly clean and the build quality is top tier.",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Mick Riley",
      review: "The work carried out is second to none by experienced engineers who do their work with no fuss and get the job done to a very high standard. Best in the area in my opinion.",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Kath Hedger",
      review: "Excellent job, really pleased with gates. The guys were spot on, punctual, tidy. Highly recommend.",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Lee Ridgett",
      review: "Highly recommend Shane! Told him roughly what I had imagined for my new trailer sides and he done more than I had imagined! Perfect thanks Shane top job!",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Paige C.",
      review: "A* service. Highly recommend these guys! Super helpful in creating the gates that I wanted and answered all questions I had with the process.",
      rating: 5,
      source: "yell"
    },
    {
      name: "Pat Cain",
      review: "We weren't quite sure what we wanted. Bethany & Shane made some designs for us and we are really happy with the outcome. Professional and friendly.",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Ami Featherstone",
      review: "Very efficient and responsive to messages. The gates were built and fitted within the timeframe promised and they look fantastic.",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Scarlett Georgia Vere",
      review: "Great company, would definitely recommend to anyone looking for high-quality metalwork. They were very helpful during the design phase.",
      rating: 5,
      source: "facebook"
    },
    {
      name: "Jackie Punter",
      review: "Very good communication, work completed to high standard and on time. Would definitely use in the future.",
      rating: 5,
      source: "facebook"
    }
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="reviews" className="py-24 bg-[#F3F4F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Loved By Customers</h2>
          </div>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                duration: 60,
                ease: "linear"
              }
            }}
            className="flex gap-6 w-max"
          >
            {[...testimonials, ...testimonials].map((test, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-[calc(100vw-32px)] md:w-[400px] bg-white rounded-[40px] p-8 md:p-10 shadow-2xl shadow-slate-200 border-t-8 border-brand-blue relative"
              >
                <div className="absolute top-4 right-6 opacity-30">
                  {test.source === "facebook" ? (
                    <Facebook className="text-[#1877F2]" size={20} />
                  ) : (
                    <div className="flex items-center gap-1 font-black text-yellow-500 text-[10px] italic">
                      <Star size={12} fill="currentColor" /> Yell
                    </div>
                  )}
                </div>
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(test.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed mb-10 italic">
                  "{test.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center shadow-inner">
                    <span className="font-bold text-brand-blue text-lg">{test.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">{test.name}</h5>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-brand-blue" /> Verified Review
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      title: "How to prepare for a gate quote",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1614705590304-41d3408805f3?q=80&w=800&auto=format&fit=crop",
      date: "May 2026"
    },
    {
      description: "What to include when requesting welding repairs",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1504328345606-17b27c9b01c1?q=80&w=800&auto=format&fit=crop",
      date: "April 2026"
    },
    {
      title: "Why photos and measurements speed up quotes",
      category: "Efficiency",
      image: "https://images.unsplash.com/photo-1516937618919-df42ef2be3bb?q=80&w=800&auto=format&fit=crop",
      date: "March 2026"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Helpful Fabrication Guides</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Education & Planning</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-xl shadow-slate-100 transition-all duration-500 group-hover:shadow-2xl">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-blue/5 text-brand-blue px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">{blog.date}</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-[1.2]">
                {blog.title || blog.description}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="bg-brand-dark py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff03 0px, #ffffff03 1px, transparent 1px, transparent 15px)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
              Ready to start <br />
              <span className="text-brand-accent italic font-light opacity-80">your project?</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              Join dozens of satisfied customers across Wisbech today.
            </p>
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-14 py-7 bg-white text-brand-dark rounded-full font-black text-lg shadow-2xl shadow-white/10 flex items-center gap-3 group transition-all"
          >
            Request Quotation 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Talk to the Team</h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
              S Moat Fabrications is a family-run business based in Murrow. We take pride in responding quickly to local fabrication requests.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Direct Call</p>
                  <p className="text-xl font-bold text-slate-900">01945 700061</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</p>
                  <p className="text-xl font-bold text-slate-900">smoatfab@outlook.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Workshop Location</p>
                  <p className="text-xl font-bold text-slate-900">15 Front Rd, Murrow, Wisbech</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:border-brand-blue transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:border-brand-blue transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">Project Description</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:border-brand-blue transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold shadow-xl shadow-brand-blue/20 hover:bg-brand-dark transition-all">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 text-brand-dark">
              <div className="bg-brand-blue text-white w-9 h-9 rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
                <span className="font-black text-xl tracking-tighter italic">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight whitespace-nowrap">S Moat <span className="font-light opacity-60 text-sm uppercase tracking-widest ml-1">Fabrications</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium italic opacity-80">
              Premium family-run welding and fabrication services based in Murrow, Wisbech. Specialists in bespoke gates, railings, and industrial metalwork.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-dark hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-dark hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-10">Company</h5>
            <ul className="space-y-5">
              {['Home', 'About', 'Contact', 'Work'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-brand-blue transition-colors font-semibold text-sm tracking-wide">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-10">Resources</h5>
            <ul className="space-y-5">
              {['Services', 'Reviews', 'FAQ', 'Privacy Policy'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-brand-blue transition-colors font-semibold text-sm tracking-wide">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-10">Contact Info</h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-blue" size={16} />
                </div>
                <span className="text-slate-500 text-sm leading-relaxed font-semibold">15 Front Rd, Murrow, Wisbech PE13 4JQ</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-blue" size={16} />
                </div>
                <span className="text-slate-500 text-sm font-semibold">01945 700061</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Mail className="text-brand-blue" size={16} />
                </div>
                <span className="text-slate-500 text-sm font-semibold">Smoatfabricationsltd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © 2026 S Moat Fabrications Limited
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Family-Owned Since 2012
          </div>
        </div>
      </div>
    </footer>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean; id?: string }[]>([
    { text: "Hi there! How can I help you with your metalwork project today?", isBot: true, id: 'start' }
  ]);
  const [askedQuestions, setAskedQuestions] = useState<string[]>([]);
  const messagesEndRef = useState<HTMLDivElement | null>(null)[0]; // Actually use useRef
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const knowledgeBase = [
    {
      id: "services",
      q: "What services do you offer?",
      a: "We specialize in custom driveway and garden gates, railings, balustrades, industrial fabrication, and agricultural welding repairs."
    },
    {
      id: "location",
      q: "Where are you based?",
      a: "S Moat Fabrications is based in Murrow, Wisbech. We primarily serve the Cambridgeshire area but handle projects across the region."
    },
    {
      id: "quote",
      q: "How do I get a quote?",
      a: "You can use the 'Get a Free Quote' form at the top of this page, or email us directly for bespoke requirements. Quotes are completely free."
    },
    {
      id: "family",
      q: "Are you family-run?",
      a: "Yes! S Moat Fabrications is a proud family-run business led by Shane and Bethany Moat, providing a personal, high-quality service."
    }
  ];

  const handleQuestion = (id: string, question: string, answer: string) => {
    // If already asked, scroll to it
    if (askedQuestions.includes(id)) {
      const element = document.getElementById(`msg-${id}`);
      if (element && scrollRef.current) {
        scrollRef.current.scrollTo({
          top: element.offsetTop - 10,
          behavior: 'smooth'
        });
      }
      return;
    }
    
    setAskedQuestions(prev => [...prev, id]);
    
    // Add user question message first
    setMessages(prev => [...prev, { id: id + '-q', text: question, isBot: false }]);
    
    // Slight delay for "thinking" feel then add bot answer
    setTimeout(() => {
      setMessages(prev => [...prev, { id: id, text: answer, isBot: true }]);
      
      // After bot message is added and rendered, scroll to it
      setTimeout(() => {
        const botMsg = document.getElementById(`msg-${id}`);
        if (botMsg && scrollRef.current) {
          scrollRef.current.scrollTo({
            top: botMsg.offsetTop - 10,
            behavior: 'smooth'
          });
        } else if (scrollRef.current) {
          scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 50);
    }, 400);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden flex flex-col"
          >
            <div className="bg-brand-dark p-6 text-white shrink-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-xs font-bold italic">M</div>
                  <div>
                    <h4 className="font-bold text-sm">Shane @ S Moat</h4>
                    <p className="text-[10px] opacity-60">Expert Fabricator</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100 transition-opacity">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[300px] scrollbar-hide scroll-smooth"
            >
              {messages.map((msg, i) => (
                <motion.div 
                  id={msg.id ? `msg-${msg.id}` : undefined}
                  initial={{ opacity: 0, x: msg.isBot ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.isBot ? 'bg-slate-100 text-slate-800 rounded-bl-none' : 'bg-brand-blue text-white rounded-br-none'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Suggested Questions</p>
              <div className="grid grid-cols-1 gap-2">
                {knowledgeBase.map((item, i) => {
                  const isAsked = askedQuestions.includes(item.id);
                  return (
                    <button
                      key={i}
                      onClick={() => handleQuestion(item.id, item.q, item.a)}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all font-medium flex items-center justify-between ${
                        isAsked 
                          ? 'bg-slate-50 border-slate-100 text-slate-400' 
                          : 'bg-white border-slate-200 text-slate-700 hover:border-brand-blue hover:text-brand-blue shadow-sm'
                      }`}
                    >
                      <span>{item.q}</span>
                      {isAsked && <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-blue rounded-2xl shadow-2xl flex items-center justify-center text-white"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ContactStrip />
      <ServicesSection />
      <VideoPreview />
      <FAQSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}

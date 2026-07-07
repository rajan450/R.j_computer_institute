import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { useForm } from 'react-hook-form';
import { contactInfo } from '../data/contactInfo';
import { faqs } from '../data/faq';
import { HeroImagePanel } from '../components/ui/HeroImagePanel';

const ContactHero = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="h-full w-full relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}>
           <img src="https://rajan450.github.io/RJ-COM-about/about_image.png" alt="Contact R.J Computer Institute" className="object-cover w-full h-full opacity-60 mix-blend-overlay" />
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Icons.ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact Us</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            We're Here to<br />Help You
          </h1>
          
          <p className="text-lg lg:text-xl text-blue-100 mb-12 leading-relaxed max-w-xl">
            Have a question, need guidance, or ready to start your learning journey? Reach out to us. Our team is always ready to assist you.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'Headphones', label: 'Quick\nResponse' },
              { icon: 'UserCheck', label: 'Expert\nSupport' },
              { icon: 'Clock', label: 'Mon - Sat\n7AM - 7PM' },
              { icon: 'ShieldCheck', label: 'Trusted by\nThousands' },
            ].map((item, i) => {
              const Icon = (Icons as any)[item.icon];
              return (
                <div key={i} className="flex flex-col items-start gap-3">
                  <Icon className="w-8 h-8 text-blue-300" strokeWidth={1.5} />
                  <span className="text-sm font-medium leading-tight whitespace-pre-line text-white/90">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-10 h-full flex flex-col">
      <h2 className="text-[28px] font-bold text-[#0F172A] mb-2">Send Us a Message</h2>
      <p className="text-[#64748B] text-[15px] mb-8">Fill out the form and our team will get back to you as soon as possible.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 flex-grow flex flex-col">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icons.User className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                {...register("name", { required: true })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#0F172A] placeholder-gray-400 text-[15px]"
                placeholder="Your Name"
              />
            </div>
            {errors.name && <span className="text-red-500 text-xs mt-1 block">Name is required</span>}
          </div>
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icons.Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#0F172A] placeholder-gray-400 text-[15px]"
                placeholder="Your Email"
              />
            </div>
            {errors.email && <span className="text-red-500 text-xs mt-1 block">Valid email is required</span>}
          </div>
        </div>

        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icons.Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              {...register("phone", { required: true })}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#0F172A] placeholder-gray-400 text-[15px]"
              placeholder="Your Phone Number"
            />
          </div>
          {errors.phone && <span className="text-red-500 text-xs mt-1 block">Phone number is required</span>}
        </div>

        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icons.BookOpen className="h-5 w-5 text-gray-400" />
            </div>
            <select 
              {...register("course")}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#0F172A] text-[15px] appearance-none"
            >
              <option value="">Select Course of Interest</option>
              <option value="adca">ADCA</option>
              <option value="dca">DCA</option>
              <option value="tally">Tally (GST)</option>
              <option value="web">Web Development</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Icons.ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="relative h-full">
            <div className="absolute top-4 left-0 pl-4 pointer-events-none">
              <Icons.MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea 
              {...register("message", { required: true })}
              className="w-full h-full min-h-[120px] pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#0F172A] placeholder-gray-400 text-[15px] resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          {errors.message && <span className="text-red-500 text-xs mt-1 block">Message is required</span>}
        </div>

        <button type="submit" className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-auto">
          Send Message <Icons.ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

const ContactInformation = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-10 h-full">
      <h2 className="text-[28px] font-bold text-[#0F172A] mb-8">Contact Information</h2>
      
      <div className="space-y-8">
        {contactInfo.map((info, i) => {
          const Icon = (Icons as any)[info.icon];
          return (
            <div key={i} className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0F172A] mb-1">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-[#64748B] text-[15px] leading-relaxed">{detail}</p>
                ))}
              </div>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors shrink-0">
                <Icons.ArrowRight className="w-5 h-5" />
              </button>
            </div>
          );
        })}

        <div className="pt-2">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <Icons.Users className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-[#0F172A] mb-2">Follow Us</h3>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Icons.Facebook className="w-4 h-4 fill-current" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Icons.Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Icons.Youtube className="w-4 h-4 fill-current" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Icons.MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoogleMap = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="relative w-full h-[480px] lg:h-[550px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.177265507111!2d82.95669925232938!3d25.319525492476574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dcf2322676b%3A0xc34ccae0f40d7031!2sTarna%2C%20Varanasi%2C%20Uttar%20Pradesh%20221003!5e0!3m2!1sen!2sin!4v1714498522000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, pointerEvents: 'none' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Institute Location"
        ></iframe>
        
        {/* Map Overlay to catch clicks and prevent map interaction */}
        <div 
          className="absolute inset-0 z-10" 
          onClick={() => setIsCardOpen(false)}
        ></div>
        
        {/* Custom Marker & Floating Info Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <AnimatePresence>
            {isCardOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-full mb-4 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs w-64"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#0F172A] text-base">R.J Computer Institute</h3>
                  <button onClick={() => setIsCardOpen(false)} className="text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-1 transition-colors">
                    <Icons.X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-start gap-2 mb-2 text-sm text-[#64748B]">
                  <Icons.MapPin className="w-4 h-4 shrink-0 text-[#2563EB] mt-0.5" />
                  <p className="leading-tight">Tarna Bazar, Shivpur,<br />Varanasi, UP - 221003</p>
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm text-[#64748B]">
                  <Icons.Phone className="w-4 h-4 shrink-0 text-[#2563EB]" />
                  <p>+91 9450379469</p>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="w-full bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                  Get Directions <Icons.ExternalLink className="w-4 h-4" />
                </a>
                
                {/* Tooltip Triangle */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsCardOpen(!isCardOpen);
            }}
            className="relative flex items-center justify-center group"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-[#2563EB] relative z-10"
            >
              <Icons.MapPin className="w-12 h-12 drop-shadow-lg fill-white transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-3 h-3 bg-[#2563EB] rounded-full"></div>
            </motion.div>
            <div className="absolute -bottom-1 w-6 h-1.5 bg-black/20 blur-[2px] rounded-[50%]"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

const ContactFeatures = () => {
  return (
    <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold text-[#0F172A]">Why Contact Us?</h2>
        <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: 'GraduationCap', title: 'Course Guidance', desc: 'Get expert advice on the right course for your career.' },
          { icon: 'CalendarCheck', title: 'Admission Support', desc: 'We help you with a smooth admission process.' },
          { icon: 'MessageSquare', title: 'Quick Response', desc: 'We value your time and reply as soon as possible.' },
          { icon: 'Headset', title: 'After Course Support', desc: 'We support you even after you complete your course.' }
        ].map((feature, i) => {
          const Icon = (Icons as any)[feature.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-[#2563EB]">
                <Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-3">{feature.title}</h3>
              <p className="text-[#64748B] text-[15px] leading-relaxed">{feature.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pb-24 max-w-4xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold text-[#0F172A]">Frequently Asked Questions</h2>
        <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm h-fit">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between bg-white text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-[#0F172A] pr-4">{faq.question}</span>
              <Icons.ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-[#64748B] text-[15px] leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-[#1E3A8A] rounded-[32px] p-10 lg:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 lg:h-[180px] shadow-xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="flex items-center gap-6 max-w-xl text-center md:text-left z-10">
          <div className="hidden md:flex shrink-0 w-16 h-16 border-2 border-white/20 rounded-full items-center justify-center bg-[#2563EB]">
            <Icons.Headset className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-2xl lg:text-[32px] font-bold mb-3 leading-tight">Still Have Questions?</h2>
            <p className="text-blue-100 text-[15px] leading-relaxed">
              Our team is here to help you choose the right course and start your learning journey.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto z-10">
          <button className="bg-white text-[#2563EB] hover:bg-blue-50 px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 w-full sm:w-auto shadow-md">
            <Icons.Phone className="w-5 h-5" /> Call Now
          </button>
          <button className="bg-white text-[#25D366] hover:bg-green-50 px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 w-full sm:w-auto shadow-md">
            <Icons.MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <ContactHero />
      
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <ContactForm />
          <ContactInformation />
        </div>
      </section>

      <GoogleMap />
      <ContactFeatures />
      <FAQAccordion />
      <CTASection />
    </div>
  );
}

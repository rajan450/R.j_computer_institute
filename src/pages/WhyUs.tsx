import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { openAdmissionModal } from "../events";
import * as Icons from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { whyUsFeatures } from '../data/whyUsFeatures';
import { HeroImagePanel } from '../components/ui/HeroImagePanel';

const statsData = [
  { icon: 'Users', value: 500, suffix: '+', label: 'Students Trained' },
  { icon: 'BookOpen', value: 20, suffix: '+', label: 'Courses Offered' },
  { icon: 'UserCheck', value: 5, suffix: '+', label: 'Expert Teachers' },
  { icon: 'Star', value: 64, suffix: '+', label: 'Google Reviews' },
  { icon: 'Smile', value: 100, suffix: '%', label: 'Student Satisfaction' }
];

const HeroWhyUs = () => {
  return (
    <section className="bg-[#0a1b4d] text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="h-full w-full relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}>
           <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" alt="Computer Lab" className="object-cover w-full h-full opacity-60 mix-blend-overlay" />
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Icons.ChevronRight className="w-4 h-4" />
            <span className="text-white">Why Us</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Why Choose<br />R.J Computer Institute?
          </h1>
          
          <p className="text-lg lg:text-xl text-blue-100 mb-12 leading-relaxed max-w-xl">
            We are committed to providing quality education, practical training and career guidance to help students achieve their goals.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'Award', label: 'Quality\nEducation' },
              { icon: 'Monitor', label: 'Practical\nTraining' },
              { icon: 'Users', label: 'Experienced\nFaculty' },
              { icon: 'Briefcase', label: 'Career\nSupport' },
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

const FeatureGrid = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="text-center mb-16">
        <span className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-3 block">OUR STRENGTH</span>
        <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] leading-tight">What Makes Us Different</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyUsFeatures.map((feature, i) => {
          const Icon = (Icons as any)[feature.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-[#2563EB]">
                <Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[#0F172A] text-[17px] mb-3">{feature.title}</h3>
              <p className="text-[#64748B] text-[15px] leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const TrustSection = () => {
  const trustMetrics = [
    { icon: 'Users', value: '500+', label: 'Students Trained' },
    { icon: 'BookOpen', value: '20+', label: 'Courses Offered' },
    { icon: 'UserCheck', value: '5+', label: 'Expert Teachers' },
    { icon: 'Star', value: '4.5/5', label: 'Google Rating' },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-[45%]">
          <span className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-3 block">OUR PROMISE</span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] leading-tight mb-6">
            Why Thousands of<br />Students Trust Us
          </h2>
          
          <p className="text-[#475569] text-[15px] leading-relaxed mb-8">
            R.J Computer Institute has been a trusted name in computer education for years. Our commitment to quality, practical training and student success has made us the preferred choice for students across Varanasi.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              'Proven track record of student success',
              'Industry-relevant curriculum',
              'Focus on practical skills and real-world learning',
              'Continuous support even after course completion'
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icons.CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="text-[#0F172A] font-medium">{point}</span>
              </li>
            ))}
          </ul>

          <button className="bg-[#2563EB] text-white hover:bg-blue-700 px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-colors duration-300 shadow-md hover:shadow-lg">
            Join Our Institute <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:w-[55%] relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[1.2/1] relative">
            <img 
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200" 
              alt="Institute Building" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient for Metrics */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            
            {/* Sign Board */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-xl backdrop-blur-md bg-opacity-90 border border-white/10">
               <Icons.Monitor className="w-6 h-6" />
               <span className="font-bold text-lg tracking-wide">R.J COMPUTER INSTITUTE</span>
            </div>

            {/* Floating Metrics Cards */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
               {trustMetrics.map((metric, i) => {
                 const Icon = (Icons as any)[metric.icon];
                 return (
                   <div key={i} className="bg-white rounded-xl p-4 shadow-lg text-center flex flex-col items-center">
                     <Icon className="w-6 h-6 text-[#2563EB] mb-2" strokeWidth={2} />
                     <div className="font-bold text-[#0F172A] text-xl mb-0.5">{metric.value}</div>
                     <div className="text-[11px] font-medium text-[#64748B] uppercase tracking-wider">{metric.label}</div>
                   </div>
                 );
               })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBanner = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-[#1E3A8A] rounded-[24px] p-10 lg:p-12 text-white">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 lg:gap-4">
          {statsData.map((stat, i) => {
            const Icon = (Icons as any)[stat.icon];
            return (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <Icon className="w-10 h-10 text-blue-300" strokeWidth={1.5} />
                <div>
                  <div className="text-3xl font-bold mb-1 flex items-center justify-center">
                    {inView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-blue-200">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-[#2563EB] rounded-[32px] p-10 lg:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 lg:h-[180px] shadow-xl shadow-blue-900/10">
        <div className="flex items-center gap-6 max-w-xl text-center md:text-left">
          <div className="hidden md:flex shrink-0 w-16 h-16 border-2 border-white/20 rounded-2xl items-center justify-center bg-white/10">
            <Icons.GraduationCap className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-2xl lg:text-[32px] font-bold mb-3 leading-tight">Ready to Build Your Future?</h2>
            <p className="text-blue-100 text-[15px] leading-relaxed">
              Join R.J Computer Institute and take the first step towards a successful career.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
          <button onClick={openAdmissionModal} className="bg-white text-[#2563EB] hover:bg-blue-50 px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
            Enroll Now <Icons.ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 backdrop-blur-sm w-full sm:w-auto">
            <Icons.MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default function WhyUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <HeroWhyUs />
      <FeatureGrid />
      <TrustSection />
      <StatsBanner />
      <CTASection />
    </div>
  );
}

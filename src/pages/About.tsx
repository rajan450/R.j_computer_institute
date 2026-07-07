import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { openAdmissionModal } from "../events";
import * as Icons from 'lucide-react';
import { Section } from '../components/ui/Section';


const storyFeatures = [
  { icon: 'Box', title: 'Quality Education', desc: 'Industry-oriented curriculum' },
  { icon: 'MonitorPlay', title: 'Practical Learning', desc: 'More practice, more confidence' },
  { icon: 'UserCheck', title: 'Experienced Faculty', desc: 'Guided by skilled professionals' },
  { icon: 'User', title: 'Student First', desc: 'Personal attention and support' }
];

const whyChooseUs = [
  { icon: 'UserCheck', title: 'Experienced Faculty', desc: 'Learn from highly qualified and experienced teachers.' },
  { icon: 'Monitor', title: 'Modern Computer Lab', desc: 'Fully equipped labs with updated systems & software.' },
  { icon: 'Briefcase', title: 'Practical Training', desc: 'Hands-on training with real-world projects.' },
  { icon: 'IndianRupee', title: 'Affordable Fees', desc: 'Quality education at very reasonable fees.' },
  { icon: 'Headset', title: 'Student Support', desc: 'Always there to guide and support you.' },
  { icon: 'GraduationCap', title: 'Career Guidance', desc: 'Help you grow your skills and build a bright career.' }
];

const facilities = [
  { img: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=600', title: 'Modern Lab' },
  { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600', title: 'Smart Classrooms' },
  { img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=600', title: 'High-Speed Internet' },
  { img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600', title: 'Practical Training' },
  { img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600', title: 'Library / Self Study' },
  { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600', title: 'Comfortable Environment' }
];

const processSteps = [
  { icon: 'UserPlus', title: 'Step 1\nAdmission' },
  { icon: 'Presentation', title: 'Step 2\nOrientation' },
  { icon: 'Monitor', title: 'Step 3\nClassroom Learning' },
  { icon: 'MonitorPlay', title: 'Step 4\nPractical Lab Sessions' },
  { icon: 'ClipboardCheck', title: 'Step 5\nAssessments' },
  { icon: 'Award', title: 'Step 6\nCertification' },
  { icon: 'Target', title: 'Step 7\nCareer Guidance' }
];

const stats = [
  { icon: 'GraduationCap', value: '500+', label: 'Students Trained' },
  { icon: 'BookOpen', value: '20+', label: 'Courses Offered' },
  { icon: 'UserCheck', value: '5+', label: 'Expert Teachers' },
  { icon: 'MessageCircle', value: '64+', label: 'Google Reviews' },
  { icon: 'Star', value: '4.5/5', label: 'Average Rating' },
  { icon: 'ShieldCheck', value: '100%', label: 'Practical Learning' }
];

const faculty = [
  { name: 'Vikash Kumar', role: 'Director', qual: 'MCA', exp: '10+ Years Exp.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200' },
  { name: 'Pooja Singh', role: 'Faculty', qual: 'BCA, MCA', exp: '6+ Years Exp.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
  { name: 'Arvind Mishra', role: 'Faculty', qual: 'B.Tech (CS)', exp: '7+ Years Exp.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' },
  { name: 'Neha Gupta', role: 'Faculty', qual: 'M.Sc (IT)', exp: '5+ Years Exp.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200' }
];

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20 font-sans">
      {/* Hero Section */}
      <section className="bg-[#1E3A8A] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="h-full w-full relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}>
             <img src="https://rajan450.github.io/RJ-COM-anout/About_hero_image.png" alt="About R.J Computer Institute" className="object-cover w-full h-full opacity-60 mix-blend-overlay" />
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Icons.ChevronRight className="w-4 h-4" />
              <span className="text-white">About Us</span>
            </div>
            
            <h1 className="text-4xl lg:text-[56px] font-bold tracking-tight mb-6 leading-tight">About R.J <br/>Computer Institute</h1>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-10 leading-relaxed max-w-xl font-normal">
              Empowering students with practical computer education, modern technology and career-focused training in Varanasi.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB]"
          >
            <img 
              src="https://rajan450.github.io/RJ-COM-about/about_image.png" 
              alt="Institute Entrance" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-4 block">OUR STORY</span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] mb-6 leading-[1.2]">Empowering Students With Knowledge & Skills</h2>
            <p className="text-[#64748B] mb-10 text-base leading-relaxed">
              R.J Computer Institute was established with a clear goal - to provide quality, practical and affordable computer education to students from all backgrounds. Our focus is on building real skills that help students grow in their careers and achieve their goals.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {storyFeatures.map((feat, i) => {
                const Icon = (Icons as any)[feat.icon];
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="mb-3 text-[#2563EB]">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[#0F172A] text-sm mb-1">{feat.title}</h4>
                    <p className="text-[#64748B] text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="pb-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-md border border-[#E5E7EB] flex gap-6 items-start"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Icons.Eye className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2563EB] mb-3">Our Vision</h3>
              <p className="text-[#64748B] leading-relaxed">To become a leading computer education institute that inspires students to learn, innovate and achieve excellence in the digital world.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-2xl shadow-md border border-[#E5E7EB] flex gap-6 items-start"
          >
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center shrink-0">
              <Icons.Target className="w-8 h-8 text-green-600" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-3">Our Mission</h3>
              <p className="text-[#64748B] leading-relaxed">To deliver practical, industry-relevant and affordable computer training with modern facilities and dedicated support for every student's success.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <span className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-2 block">WHY CHOOSE US</span>
        <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] mb-12">Why Students Choose R.J Computer Institute?</h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {whyChooseUs.map((feat, i) => {
            const Icon = (Icons as any)[feat.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E7EB] flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#2563EB] mb-6">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-3">{feat.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{feat.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <span className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-2 block">OUR FACILITIES</span>
        <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] mb-12">We Provide The Best Learning Environment</h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facilities.map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 group"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm border border-[#E5E7EB]">
                <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-center font-bold text-[#0F172A] text-sm">{fac.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teaching Process */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/4">
            <span className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-2 block">OUR TEACHING PROCESS</span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] leading-tight">Simple Steps To Your Success</h2>
          </div>
          
          <div className="lg:w-3/4 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center relative gap-6 sm:gap-0">
              <div className="hidden sm:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
              {processSteps.map((step, i) => {
                const Icon = (Icons as any)[step.icon];
                return (
                  <div key={i} className="flex flex-col items-center text-center relative w-full sm:w-auto">
                    <div className="w-16 h-16 bg-white rounded-full border-2 border-blue-100 flex items-center justify-center text-[#2563EB] mb-4 shadow-sm relative z-10">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <div className="font-bold text-[#0F172A] text-sm whitespace-pre-line">{step.title}</div>
                    {i !== processSteps.length - 1 && (
                      <div className="hidden sm:block absolute top-8 -right-8 w-8 text-gray-300">
                        <Icons.ChevronRight className="w-5 h-5 mx-auto" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-[#1E3A8A] rounded-[32px] p-10 lg:p-14 text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">Our Institute in Numbers</h2>
            </div>
            
            <div className="lg:w-3/4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, i) => {
                const Icon = (Icons as any)[stat.icon];
                return (
                  <div key={i} className="flex flex-col items-center text-center gap-3">
                    <Icon className="w-8 h-8 text-blue-300" strokeWidth={1.5} />
                    <div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-2 block">MEET OUR FACULTY</span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#0F172A] leading-tight">Experienced Teachers,<br/>Better Learning</h2>
          </div>
          <button className="text-[#2563EB] font-bold hover:text-blue-700 flex items-center gap-2 border border-[#2563EB] px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
            View All Faculty <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-[#E5E7EB] overflow-hidden flex flex-col sm:flex-row items-center p-4 gap-6"
            >
              <div className="w-28 h-28 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-4 border-blue-50">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-[#0F172A] text-lg mb-1">{member.name}</h3>
                <p className="text-[#2563EB] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-[#64748B] text-xs mb-1">{member.qual}</p>
                <p className="text-[#64748B] text-xs mb-3">{member.exp}</p>
                <div className="flex justify-center sm:justify-start gap-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors"><Icons.Facebook className="w-4 h-4" /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors"><Icons.Linkedin className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-[#2563EB] rounded-[32px] p-10 lg:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl shadow-blue-900/10">
          <div className="flex items-start gap-6 max-w-xl">
            <div className="hidden md:flex shrink-0 w-16 h-16 bg-white/20 rounded-2xl items-center justify-center">
              <Icons.GraduationCap className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">Ready to Start Your <br className="hidden lg:block"/> Learning Journey?</h2>
              <p className="text-blue-100 text-lg">Join hundreds of students and build a successful career with R.J Computer Institute.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <button onClick={openAdmissionModal} className="bg-white text-[#2563EB] hover:bg-gray-50 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
              Enroll Now <Icons.ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
              <Icons.MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

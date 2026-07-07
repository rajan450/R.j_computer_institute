import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { ArrowRight, UserCheck, Monitor, BookOpen, User } from 'lucide-react';

export function AboutSection() {
  return (
    <Section bg="white" id="about" className="py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://rajan450.github.io/RJ-COM-about/about_image.png" 
                alt="Institute Entrance" 
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#0e4ee4] font-extrabold tracking-wide uppercase text-sm mb-4 block">
              ABOUT US
            </span>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#0a1b4d] mb-6 leading-[1.2]">
              Empowering Students With <br className="hidden lg:block"/> Knowledge & Skills
            </h2>
            
            <p className="text-gray-600 mb-12 text-base leading-relaxed max-w-xl font-medium">
              R.J Computer Institute is a premier computer training center in Tarna Bazar, 
              Shivpur, Varanasi. We provide practical training, modern classrooms and 
              personalized guidance to help every student succeed.
            </p>

            <div className="grid grid-cols-4 gap-4 mb-10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <UserCheck className="w-10 h-10 text-[#0e4ee4]" strokeWidth={1.5} />
                </div>
                <h4 className="font-extrabold text-[#0a1b4d] text-[13px] leading-tight">Experienced<br/>Faculty</h4>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Monitor className="w-10 h-10 text-[#0e4ee4]" strokeWidth={1.5} />
                </div>
                <h4 className="font-extrabold text-[#0a1b4d] text-[13px] leading-tight">Modern<br/>Classrooms</h4>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <BookOpen className="w-10 h-10 text-[#0e4ee4]" strokeWidth={1.5} />
                </div>
                <h4 className="font-extrabold text-[#0a1b4d] text-[13px] leading-tight">Practical<br/>Learning</h4>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <User className="w-10 h-10 text-[#0e4ee4]" strokeWidth={1.5} />
                </div>
                <h4 className="font-extrabold text-[#0a1b4d] text-[13px] leading-tight">Student<br/>Support</h4>
              </div>
            </div>

            <Link to="/about">
              <button className="flex items-center gap-2 bg-[#eaf2ff] text-[#0e4ee4] hover:bg-[#dce8ff] px-6 py-3 rounded-lg font-bold transition-colors text-sm">
                Know More About Us <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

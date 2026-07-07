import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Users, MapPin, GraduationCap, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-0 lg:h-[85vh] lg:min-h-[700px] bg-white z-10">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://rajan450.github.io/RJ-COM/hero_image.png" 
          alt="Hero Background" 
          className="object-cover w-full h-full object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-full relative z-10 flex items-center justify-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full pt-20 lg:pt-32 pb-24 relative z-10 flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center bg-[#0e4ee4] text-white px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-bold uppercase tracking-widest mb-8 shadow-lg">
            WELCOME TO R.J COMPUTER INSTITUTE
          </div>
          
          <h1 className="text-5xl lg:text-[72px] font-extrabold tracking-tight text-[#0a1b4d] mb-6 leading-[1.1]">
            Learn Today.<br />
            Lead <span className="text-[#0e4ee4]">Tomorrow.</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-[500px]">
            Practical computer training, expert guidance and real skills to build your career with confidence.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link to="/courses">
              <Button size="lg" className="shadow-lg shadow-blue-500/30 rounded-xl bg-[#0e4ee4] hover:bg-[#0c40bd] px-8 gap-3 font-bold text-base h-14">
                View Courses <GraduationCap className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="rounded-xl border-2 border-[#0e4ee4] text-[#0e4ee4] hover:bg-[#0e4ee4]/5 px-8 gap-3 font-bold text-base h-14 bg-white/50 backdrop-blur-sm">
                Contact Us <Phone className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Cards - single row card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-6 flex flex-wrap items-center justify-start gap-6 absolute -bottom-10 lg:-bottom-24 left-0 w-max max-w-full z-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[15px] text-[#0a1b4d]">4.5</div>
                <div className="text-xs font-medium text-gray-500">Rating</div>
              </div>
            </div>
            
            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
            
            <div className="flex items-center gap-3">
              <div className="text-[#0e4ee4]">
                <Users className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[15px] text-[#0a1b4d]">64+</div>
                <div className="text-xs font-medium text-gray-500">Reviews</div>
              </div>
            </div>

            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <div className="text-[#0e4ee4]">
                <Users className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[15px] text-[#0a1b4d]">500+</div>
                <div className="text-xs font-medium text-gray-500">Students</div>
              </div>
            </div>

            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <div className="text-[#0e4ee4]">
                <MapPin className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-[15px] text-[#0a1b4d]">Varanasi</div>
                <div className="text-xs font-medium text-gray-500">Local Institute</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L1.92 22.062l5.242-1.374a9.964 9.964 0 004.85 1.258h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.92-7.065A9.945 9.945 0 0012.012 2zm0 18.006h-.003a8.272 8.272 0 01-4.218-1.144l-.302-.18-3.136.822.84-3.056-.197-.314A8.254 8.254 0 013.684 11.984C3.685 7.42 7.4 3.704 11.968 3.704c2.213.001 4.29.863 5.854 2.427a8.242 8.242 0 012.428 5.854c-.001 4.564-3.715 8.281-8.282 8.281z" fillRule="evenodd" clipRule="evenodd" />
          <path d="M16.592 14.195c-.25-.125-1.486-.734-1.716-.818-.23-.083-.398-.125-.565.125-.167.25-.65.818-.797.985-.148.167-.297.188-.547.063-.25-.125-1.06-.39-2.02-1.246-.747-.665-1.252-1.487-1.4-1.737-.148-.25-.015-.386.11-.51.112-.112.25-.292.375-.438.125-.147.167-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.565-1.363-.775-1.867-.204-.492-.412-.425-.565-.433-.147-.008-.315-.008-.482-.008-.167 0-.44.063-.67.313-.23.25-.882.862-.882 2.1 0 1.238.903 2.436 1.028 2.604.125.167 1.775 2.71 4.3 3.797.6.258 1.068.412 1.433.527.604.192 1.154.165 1.587.1.483-.073 1.486-.607 1.696-1.194.21-.587.21-1.09.148-1.194-.063-.105-.23-.167-.482-.292z" fillRule="evenodd" clipRule="evenodd" />
        </svg>
      </a>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Instagram, Phone, Mail, MapPin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-white p-2 rounded-lg text-brand-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-none">R.J <span className="text-gray-200 text-lg">COMPUTER</span></h1>
              <p className="text-[10px] text-gray-300 uppercase font-semibold tracking-wider">Institute</p>
            </div>
          </Link>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Practical computer training, expert guidance and real skills to build your career with confidence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
            <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
            <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Top Courses</h3>
          <ul className="space-y-4">
            <li><Link to="/courses/adca" className="text-gray-300 hover:text-white transition-colors">ADCA</Link></li>
            <li><Link to="/courses/dca" className="text-gray-300 hover:text-white transition-colors">DCA</Link></li>
            <li><Link to="/courses/dfa" className="text-gray-300 hover:text-white transition-colors">DFA</Link></li>
            <li><Link to="/courses/web-designing" className="text-gray-300 hover:text-white transition-colors">Web Designing</Link></li>
            <li><Link to="/courses/tally-gst" className="text-gray-300 hover:text-white transition-colors">Tally (GST)</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-300">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-brand-primary" />
              <span>Tarna Bazar, Shivpur,<br />Varanasi, Uttar Pradesh 221003</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 shrink-0 text-brand-primary" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 shrink-0 text-brand-primary" />
              <span>info@rjcomputerinstitute.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} R.J Computer Institute. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

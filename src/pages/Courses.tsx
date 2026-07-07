import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { courses } from '../data/mockData';
import { openAdmissionModal } from "../events";
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'All Courses', icon: 'LayoutGrid' },
  { id: 'Computer Basics', icon: 'Monitor' },
  { id: 'Office Productivity', icon: 'FileText' },
  { id: 'Programming', icon: 'Code' },
  { id: 'Accounting', icon: 'Calculator' },
  { id: 'Designing', icon: 'PenTool' },
  { id: 'Short Term', icon: 'Clock' }
];

const faqs = [
  { q: "Which course is best for me after 10th?", a: "DCA and ADCA are excellent choices after 10th for building a strong foundation in computers. You can also opt for Short Term courses like Web Designing or Typing depending on your interests." },
  { q: "What is the duration of each course?", a: "Course duration varies from 1 month to 12 months. Short term courses are typically 1-3 months, while diploma courses like ADCA and PGDCA take 6-12 months." },
  { q: "Do you provide certificate after course completion?", a: "Yes, we provide a recognized certificate upon successful completion of the course and passing the final assessment." },
  { q: "Is practical training included in all courses?", a: "Absolutely. All our courses are heavily focused on practical, hands-on training with real-world examples." },
  { q: "Are classes available on weekends?", a: "Yes, we offer flexible batch timings including special weekend batches for working professionals." },
  { q: "Can I pay fees in installments?", a: "Yes, we offer easy installment payment options for all our long-term diploma courses." }
];

const CourseSkeleton = () => (
  <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full animate-pulse">
    <div className="flex gap-4 mb-6">
      <div className="shrink-0 w-16 h-16 bg-gray-200 rounded-xl"></div>
      <div className="pt-1 flex-1">
        <div className="h-5 bg-gray-200 rounded-md w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
      </div>
    </div>
    
    <div className="space-y-4 mb-8 flex-grow">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center">
          <div className="w-[18px] h-[18px] bg-gray-200 rounded-full mr-3"></div>
          <div className="w-24 h-4 bg-gray-200 rounded-md mr-3"></div>
          <div className="w-16 h-4 bg-gray-200 rounded-md"></div>
        </div>
      ))}
    </div>
  </div>
);

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'All Courses' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafbfc] pt-20">
      {/* Hero Section */}
      <section className="bg-[#0a1b4d] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="h-full w-full relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}>
             <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=1200" alt="Computer Lab" className="object-cover w-full h-full opacity-60 mix-blend-overlay" />
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Icons.ChevronRight className="w-4 h-4" />
              <span className="text-white">Courses</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">Our Courses</h1>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-12 leading-relaxed max-w-xl">
              Choose the right course to build practical skills and advance your career. All our courses include hands-on training and industry-relevant knowledge.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'Award', text: 'Industry\nRelevant' },
                { icon: 'Monitor', text: 'Practical\nTraining' },
                { icon: 'FileBadge', text: 'Certificate\nIncluded' },
                { icon: 'Briefcase', text: 'Career\nSupport' }
              ].map((item, i) => {
                const Icon = (Icons as any)[item.icon];
                return (
                  <div key={i} className="flex flex-col items-start gap-3">
                    <Icon className="w-8 h-8 text-blue-300" strokeWidth={1.5} />
                    <span className="text-sm font-medium leading-tight whitespace-pre-line text-white/90">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-extrabold text-center text-[#0a1b4d] mb-10">Explore Courses by Category</h2>
        
        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = (Icons as any)[cat.icon];
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[15px] font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#0e4ee4] text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0e4ee4] hover:text-[#0e4ee4]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0e4ee4]'}`} />
                {cat.id}
              </button>
            )
          })}
        </div>

        {/* Search & Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl font-extrabold text-[#0a1b4d]">
            {activeCategory}
          </h2>
          <div className="relative w-full md:w-[320px]">
            <input 
              type="text" 
              placeholder="Search course..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0e4ee4] focus:border-transparent bg-white text-sm font-medium"
            />
            <Icons.Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CourseSkeleton />
                </motion.div>
              ))
            ) : (
            filteredCourses.map((course, index) => {
              const Icon = (Icons as any)[course.icon] || Icons.Book;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={course.id}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-[0_8px_30px_-4px_rgba(14,78,228,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex gap-4 mb-6">
                    <div className="shrink-0 w-16 h-16 bg-[#f0f4ff] rounded-xl flex items-center justify-center text-[#0e4ee4]">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-extrabold text-[#0a1b4d] mb-1.5 leading-tight">{course.title}</h3>
                      <p className="text-sm text-gray-500 font-medium leading-snug line-clamp-2">{course.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-center text-sm">
                      <Icons.Clock className="w-[18px] h-[18px] text-[#0e4ee4] mr-3" strokeWidth={2} />
                      <span className="text-gray-500 w-24 font-medium">Duration</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="font-extrabold text-[#0a1b4d]">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icons.Users className="w-[18px] h-[18px] text-[#0e4ee4] mr-3" strokeWidth={2} />
                      <span className="text-gray-500 w-24 font-medium">Eligibility</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="font-extrabold text-[#0a1b4d]">{course.eligibility}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icons.Settings className="w-[18px] h-[18px] text-[#0e4ee4] mr-3" strokeWidth={2} />
                      <span className="text-gray-500 w-24 font-medium">Mode</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="font-extrabold text-[#0a1b4d]">{course.mode}</span>
                    </div>
                  </div>
                </motion.div>
              );
            }))}
          </AnimatePresence>
        </div>

        {!isLoading && filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-[#0a1b4d] mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
          </div>
        )}

        <div className="flex justify-center mb-24">
          <button className="border border-gray-200 bg-white hover:border-[#0e4ee4] hover:text-[#0e4ee4] text-gray-700 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all">
            View More Courses <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Why Choose Our Courses */}
        <div className="bg-white rounded-[32px] p-10 lg:p-16 mb-24 relative overflow-hidden shadow-sm border border-gray-100">
          <h2 className="text-3xl font-extrabold text-center text-[#0a1b4d] mb-12">Why Choose Our Courses?</h2>
          <div className="grid md:grid-cols-3 gap-y-12 gap-x-8">
            {[
              { title: "Practical\nTraining", desc: "Hands-on learning with real-world examples.", icon: "Monitor" },
              { title: "Expert\nFaculty", desc: "Learn from experienced and certified teachers.", icon: "Users" },
              { title: "Affordable\nFees", desc: "Quality education at reasonable fees.", icon: "TrendingDown" },
              { title: "Certificate\nIncluded", desc: "Get recognized certificate after course completion.", icon: "FileBadge" },
              { title: "Career\nSupport", desc: "Guidance for jobs, freelancing & more.", icon: "Briefcase" },
              { title: "Lifetime\nAccess", desc: "Study materials & support whenever you need.", icon: "Clock" }
            ].map((item, i) => {
              const Icon = (Icons as any)[item.icon];
              return (
                <div key={i} className="flex flex-col items-center text-center gap-4">
                  <div className="text-[#0e4ee4] shrink-0">
                    <Icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0a1b4d] mb-2 whitespace-pre-line">{item.title}</h3>
                    <p className="text-sm font-medium text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0a1b4d] rounded-3xl p-10 lg:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 mb-24 shadow-xl shadow-blue-900/10">
          <div className="flex items-start gap-6 max-w-xl">
            <div className="hidden md:flex shrink-0 w-16 h-16 bg-white/10 rounded-2xl items-center justify-center">
              <Icons.GraduationCap className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">Ready to Build Your Future?</h2>
              <p className="text-blue-100 text-lg font-medium">Join R.J Computer Institute and take the first step towards a successful career.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <button onClick={openAdmissionModal} className="bg-white text-[#0e4ee4] hover:bg-gray-50 px-8 py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 transition-colors">
              Enroll Now <Icons.ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 transition-colors">
              <Icons.MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-center text-[#0a1b4d] mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#0e4ee4] transition-colors">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white"
                >
                  <span className="font-extrabold text-[#0a1b4d] pr-4">{faq.q}</span>
                  <Icons.ChevronDown className={`w-5 h-5 text-[#0e4ee4] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-gray-600 font-medium text-sm leading-relaxed border-t border-gray-100">
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
    </div>
  );
}

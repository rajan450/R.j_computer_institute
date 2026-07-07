import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { openAdmissionModal } from "../events";
import * as Icons from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Data
const reviewsList = [
  { id: 1, name: 'Vikash Kumar', course: 'DCA Student', rating: 5, review: 'The practical classes helped me understand everything clearly. The faculty is very supportive and experienced.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200' },
  { id: 2, name: 'Pooja Singh', course: 'ADCA Student', rating: 5, review: 'I joined ADCA and it was the best decision. I gained confidence and technical skills that helped me get a good job.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
  { id: 3, name: 'Arvind Mishra', course: 'Web Development Student', rating: 5, review: 'The teaching method is very practical and easy to understand. The computer lab is excellent with updated systems.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' },
  { id: 4, name: 'Neha Gupta', course: 'Typing Student', rating: 5, review: 'I improved my typing speed and accuracy a lot. The teachers motivate us to do our best in every way.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200' },
  { id: 5, name: 'Rohit Verma', course: 'Tally (GST) Student', rating: 5, review: 'The faculty explains every topic with real-life examples. The course content is very helpful for my career.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200' },
  { id: 6, name: 'Anjali Yadav', course: 'MS Office Student', rating: 5, review: 'The environment is very positive and professional. I learned so many new things in a short period of time.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' },
  { id: 7, name: 'Sandeep Patel', course: 'DFA Student', rating: 5, review: 'R.J Computer Institute provides the best practical training. It helped me build strong skills for my future.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
  { id: 8, name: 'Imran Khan', course: 'CCC Student', rating: 5, review: 'The support and guidance I received here is amazing. I highly recommend this institute to everyone.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' }
];

const statsData = [
  { icon: 'Users', value: 500, suffix: '+', label: 'Students Trained' },
  { icon: 'BookOpen', value: 20, suffix: '+', label: 'Courses Offered' },
  { icon: 'UserCheck', value: 5, suffix: '+', label: 'Expert Faculty' },
  { icon: 'Star', value: 64, suffix: '+', label: 'Google Reviews' },
  { icon: 'Smile', value: 100, suffix: '%', label: 'Satisfaction Rate' }
];

// Components
import { HeroImagePanel } from '../components/ui/HeroImagePanel';

const HeroReviews = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="h-full w-full relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}>
           <img src="https://rajan450.github.io/RJ-COM-Reviews/Reviews.png" alt="Student Reviews" className="object-cover w-full h-full opacity-60 mix-blend-overlay" />
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Icons.ChevronRight className="w-4 h-4" />
            <span className="text-white">Reviews</span>
          </div>
          
          <h1 className="text-4xl lg:text-[56px] font-bold tracking-tight mb-6 leading-tight">Student Reviews & <br className="hidden lg:block"/> Success Stories</h1>
          
          <p className="text-lg lg:text-xl text-blue-100 mb-10 leading-relaxed max-w-xl font-normal">
            We take pride in the trust and satisfaction of our students. Here's what they say about their learning experience at R.J Computer Institute.
          </p>
        </div>
      </div>
    </section>
  );
};

const RatingSummary = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-12">Overall Student Rating</h2>
      
      <div className="bg-white rounded-2xl shadow-md border border-[#E5E7EB] flex flex-col lg:flex-row items-center h-auto lg:h-[220px] divide-y lg:divide-y-0 lg:divide-x divide-gray-200 py-8 lg:py-0">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 w-full pb-8 lg:pb-0">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-[32px] font-bold text-[#4285F4]">G</span>
            <span className="text-[32px] font-bold text-[#EA4335]">o</span>
            <span className="text-[32px] font-bold text-[#FBBC05]">o</span>
            <span className="text-[32px] font-bold text-[#4285F4]">g</span>
            <span className="text-[32px] font-bold text-[#34A853]">l</span>
            <span className="text-[32px] font-bold text-[#EA4335]">e</span>
          </div>
          <div className="text-[56px] font-bold text-[#0F172A] leading-none mb-3">4.5</div>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Icons.Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-[#FBBC05] text-[#FBBC05]' : i === 4 ? 'fill-[#FBBC05] text-[#FBBC05] opacity-50' : 'text-gray-300'}`} />
            ))}
          </div>
          <p className="text-[#64748B] text-sm font-medium">Based on 64+ Google Reviews</p>
        </div>

        {/* Center Column */}
        <div className="flex-[1.5] flex flex-col gap-3 px-4 lg:px-10 w-full py-8 lg:py-0">
          {[
            { stars: 5, pct: '75%', count: 48 },
            { stars: 4, pct: '19%', count: 12 },
            { stars: 3, pct: '5%', count: 3 },
            { stars: 2, pct: '1%', count: 1 },
            { stars: 1, pct: '0%', count: 0 }
          ].map((bar, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#475569] w-6 flex items-center gap-1">
                {bar.stars} <Icons.Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
              </span>
              <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: bar.pct }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-[#2563EB] rounded-full"
                />
              </div>
              <span className="text-sm font-medium text-[#64748B] w-6 text-right">{bar.count}</span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 w-full pt-8 lg:pt-0">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-[#2563EB]">
            <Icons.ThumbsUp className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div className="text-3xl font-bold text-[#0F172A] mb-2">100%</div>
          <p className="text-[#64748B] text-sm font-medium text-center max-w-[200px]">Students Recommend R.J Computer Institute</p>
        </div>
      </div>
    </section>
  );
};

const ReviewSkeleton = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col h-full animate-pulse">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-full bg-gray-200 shrink-0"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-2"></div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3.5 h-3.5 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="space-y-2 mb-6 flex-grow">
      <div className="h-3 bg-gray-200 rounded-md w-full"></div>
      <div className="h-3 bg-gray-200 rounded-md w-full"></div>
      <div className="h-3 bg-gray-200 rounded-md w-3/4"></div>
    </div>
    
    <div className="mt-auto">
      <div className="w-24 h-6 bg-gray-200 rounded-md"></div>
    </div>
  </div>
);

const ReviewGrid = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 bg-[#F8FAFC]">
      <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-12">What Our Students Say</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ReviewSkeleton />
              </motion.div>
            ))
          ) : (
            reviewsList.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col h-full relative overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <Icons.Quote className="absolute right-4 top-24 w-20 h-20 text-gray-50 -z-0 rotate-180" />
                
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" />
                  <div>
                    <h3 className="font-bold text-[#0F172A]">{review.name}</h3>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, idx) => (
                        <Icons.Star key={idx} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-[#475569] text-sm leading-relaxed mb-6 flex-grow relative z-10">
                  "{review.review}"
                </p>
                
                <div className="mt-auto relative z-10">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-[#2563EB] text-xs font-semibold rounded-md">
                    {review.course}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors duration-300 hover:scale-105">
          View More Reviews <Icons.ArrowRight className="w-4 h-4" />
        </button>
        <button 
          onClick={onOpenModal}
          className="bg-[#2563EB] text-white hover:bg-[#1d4ed8] px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors duration-300 hover:scale-105 shadow-md shadow-blue-500/20"
        >
          <Icons.Edit3 className="w-4 h-4" /> Write a Review
        </button>
      </div>
    </section>
  );
};

const StatisticsBanner = () => {
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
            <h2 className="text-2xl lg:text-[32px] font-bold mb-3 leading-tight">Join Hundreds of Satisfied Students Today!</h2>
            <p className="text-blue-100 text-[15px] leading-relaxed">
              Start your learning journey with expert guidance and practical training that makes a difference.
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

const WriteReviewModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    setRating(0);
    setHoverRating(0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden my-8 pointer-events-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-[#0F172A]">Write a Review</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Icons.X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Icons.Star
                          className={`w-8 h-8 ${
                            (hoverRating || rating) >= star
                              ? 'fill-[#FBBC05] text-[#FBBC05]'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                    Course Taken
                  </label>
                  <select
                    id="course"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a course</option>
                    <option value="DCA">DCA</option>
                    <option value="ADCA">ADCA</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Tally">Tally (GST)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="review" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your experience..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={rating === 0}
                  className="w-full bg-[#2563EB] text-white py-3.5 rounded-xl font-bold hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Icons.Send className="w-5 h-5" /> Submit Review
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Reviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <HeroReviews />
      <RatingSummary />
      <ReviewGrid onOpenModal={() => setIsModalOpen(true)} />
      <StatisticsBanner />
      <CTASection />
      
      <WriteReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

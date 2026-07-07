import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { reviews } from '../../data/mockData';

const ReviewSkeleton = () => (
  <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
      ))}
    </div>
    <div className="space-y-3 mb-8 flex-grow">
      <div className="h-4 bg-gray-200 rounded-md w-full"></div>
      <div className="h-4 bg-gray-200 rounded-md w-full"></div>
      <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
    </div>
    <div className="mt-auto">
      <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded-md w-1/3"></div>
    </div>
  </div>
);

export function ReviewsSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section bg="light" id="reviews">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <SectionHeader 
          title="What Our Students Say" 
          subtitle="STUDENT REVIEWS" 
          centered={false} 
          className="mb-0"
        />
        <Link to="/reviews" className="hidden md:block">
          <Button variant="outline" className="gap-2 bg-white">
            View All Reviews <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
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
            reviews.slice(0, 3).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 relative flex flex-col"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-primary/10" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-brand-text mb-8 flex-grow">
                  "{review.content}"
                </p>

                <div>
                  <h4 className="font-bold text-brand-text">{review.name}</h4>
                  <p className="text-brand-muted text-sm">{review.role}</p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/reviews">
          <Button variant="outline" className="gap-2 bg-white w-full">
            View All Reviews <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

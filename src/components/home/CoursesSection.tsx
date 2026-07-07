import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { courses } from '../../data/mockData';
import * as Icons from 'lucide-react';

const CourseSkeleton = () => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
    <div className="w-14 h-14 bg-gray-200 rounded-xl mb-6"></div>
    <div className="h-5 bg-gray-200 rounded-md w-3/4 mb-3"></div>
    <div className="space-y-2 mb-4">
      <div className="h-3 bg-gray-200 rounded-md w-full"></div>
      <div className="h-3 bg-gray-200 rounded-md w-2/3"></div>
    </div>
    <div className="h-4 bg-gray-200 rounded-md w-1/3 mt-auto"></div>
  </div>
);

export function CoursesSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section bg="light" id="courses">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <SectionHeader 
          title="Popular Courses We Offer at R.J Computer Institute" 
          subtitle="OUR COURSES" 
          centered={false} 
          className="mb-0"
        />
        <Link to="/courses" className="hidden md:block">
          <Button variant="outline" className="gap-2 bg-white">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
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
            courses.map((course, index) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const Icon = (Icons as any)[course.icon] || Icons.Book;
              
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-primary/30 hover:-translate-y-1 transition-all group"
                >
                  <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">{course.title}</h3>
                  <p className="text-brand-muted text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="font-semibold text-brand-text text-sm">
                    {course.duration}
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Link to="/courses">
          <Button variant="outline" className="gap-2 bg-white w-full">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
